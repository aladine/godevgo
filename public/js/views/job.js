window.AddJobView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    
    events:{        
        "click #mypop":"showPopup"        	
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function () {
        // body...
    }

});
