jQuery(document).ready(function($) {
	jQuery( "#job_deadline, #_application_deadline" ).datepicker( {
		minDate: 0,
		"dateFormat": 'yy-mm-dd'
	} );
});