window.AddCompanyView = Backbone.View.extend({

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

window.QuestionItemView = Backbone.View.extend({
    index : 0,
    initialize: function (options) {
        this.render();
        this.index = options.index;
        console.log('init'+this.index);
    },
    
    events:{        
        "click #mypop":"showPopup"          
    },

    render: function () {
        $(this.el).html(this.template({index:this.index}));
        return this;
    },
    showPopup: function () {
        // body...
    }

});
