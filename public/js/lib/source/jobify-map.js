function jobifyMap() {
	var m = {};
	var $ = jQuery;

	function initMap() {
		var center = [];

		if ( 'autofit' != m.getSetting( 'center' ) ) {
			center = [
				m.getSetting( 'center' )[0],
				m.getSetting( 'center' )[1]
			];
		}

		m.getMap().gmap3({
			map : {
				options : {
					'scrollwheel' : m.getSetting( 'scrollWheel' ),
					'mapTypeId' : google.maps.MapTypeId.ROADMAP,
					'zoom' : m.getSetting( 'zoom' ) == 'auto' ? 8 : parseFloat( m.getSetting( 'zoom' ) ),
					'streetViewControl' : false,
					'center' : center,
					'zoomControlOptions' : {
						position : google.maps.ControlPosition.LEFT_CENTER
					}
				}
			}
		});

		if ( 'show' === m.getSetting( 'showSearch' ) ) {
			m.getSearchBox().show();
		}
	}

	function bindSearch() {
		m.getForm().submit(function(event, params) {
			var $form = keywords, location, category = '';

			if ( params && 'update_results' == params.type ) {
				$form = $( params.target.children[0] );
			} else {
				$form = m.getForm();
			}

			var categories = $form.find( ':input[name^=search_categories], :input[name^=search_categories]' ).map( function () {
				return $( this ).val();
			} ).get();

			var keywords  = '';
			var location  = '';

			var $keywords = $form.find( ':input[name=search_keywords]' );
			var $location = $form.find( ':input[name=search_location]' );

			// Workaround placeholder scripts
			if ( $keywords.val() !== $keywords.attr( 'placeholder' ) ) {
				keywords = $keywords.val();
			}

			if ( $location.val() !== $location.attr( 'placeholder' ) ) {
				location = $location.val();
			}

			var data = {
				'search_keywords'   : keywords,
				'search_location'   : location,
				'search_categories' : categories,
				'action'            : 'jobify_update_map',
				'search_type'       : m.getSetting( 'type' ),
				'per_page'          : m.getSetting( 'perPage' )
			}

			xhr = $.ajax({
				type    : 'POST',
				url     : jobifySettings.ajaxurl,
				data    : data,
				dataType : 'json',
				success : function( response ) {
					m.getMap().gmap3({
						clear : {},
						marker : m.getMarkerDefaults(response)
					}, m.getCenter() );

					console.log(response);

					m.hasLoaded = true;
				}
			});

			return false;
		});
	}

	function canvasHeight() {
		if ( $(window).height() < 600 ) {
			$( '#map-canvas-wrap, #jobify-map-canvas' ).css( 'height', $(window).height() - parseInt( $( '.site-header' ).outerHeight() + 100 ) );

			if ( $( '#map-canvas-wrap' ).outerHeight() < 300 ) {
				$( '.live-map' ).hide();
			}
		}
	}

	m.init = function(settings) {
		m.settings = settings;
		m.hasLoaded = false;

		canvasHeight();
		initMap();
		bindSearch();

		m.getForm().trigger( 'submit' );

		$( '.job_listings, .resumes' ).on( 'update_results', function ( event, page, append ) {
			m.getForm().trigger( 'submit', [ event ] );
		});

		$(window).resize(function() {
			canvasHeight();
		});
	},

	m.getSetting = function( key ) {
		return m.settings[key];
	},

	m.getWidgetType = function() {
		return m.getSetting( 'widget' ).replace( '.', '' );
	}

	m.getMap = function() {
		return $( m.getSetting( 'canvas' ) );
	},

	m.getSearchBox = function() {
		return $( m.getSetting( 'widget' ) ).find( $( '.map-filter' ) );
	},

	m.getForm = function() {
		return m.getSearchBox().find( 'form' );
	},

	m.getCenter = function(data) {
		var center = m.getSetting( 'center' );

		if ( ! m.hasLoaded && Array.isArray( center ) ) {
			return '';
		}

		return 'autofit';
	}

	m.getMarkerDefaults = function(markers) {
		return {
			values  : markers,
			options : {
				draggable : false,
				animation : google.maps.Animation.DROP
			},
			events : {
				mouseover: function(marker, event, context){
					$(this).gmap3({ clear: 'overlay' }, {
						overlay : {
							latLng: marker.getPosition(),
							options : {
								content:  '<div class="map-tooltip">' + context.data.title + '</div>',
								offset: {
									x : parseInt( -50 ),
									y : 0
								}
							}
						}
					});
				},
				mouseout: function(){
					$(this).gmap3({
						clear : 'overlay'
					});
				},
				click : function(marker, event, context) {
					window.location.href = context.data.permalink;
				}
			},
			cluster:{
				radius : m.getSetting( 'clusterRadius' ),
				events: {
					click:function(cluster, event, context) {
						var map = $(this).gmap3( 'get' );

						if ( map.getZoom() > 10 ) {
							$.magnificPopup.open({
								items: {
									src: '<div class="modal"><h2 class="modal-title">' + m.getSetting( 'inString' ).replace( '%s', context.data.markers.length ) + '</h2>

											<div class="application-content"><ul class="cluster-list"><li>' +

												$.map(context.data.markers, function( marker ) {
													return '<a href="' + marker.data.permalink + '">' + marker.data.title + '</a>'
												}).join( '</li><li>' )

											+ '</li></ul></div>' +

										'</div>',
									type: 'inline'
								}
							});
						} else {
							map.panTo(context.data.latLng);
				       		map.setZoom( map.getZoom() + 1 );
						}
					}
				},
				0 : {
					content : "<div class='cluster cluster-" + m.getSetting( 'type' ) + "' style='background-color:" + m.getSetting( 'clusterColor' ) + "; border-color:" + m.getSetting( 'clusterColor' ) + "'>CLUSTER_COUNT</div>",
					width   : 40,
					height  : 40
				}
			}
		}
	}

	return m;
}