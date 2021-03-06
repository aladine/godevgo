window.AddJobView = Backbone.View.extend({

    initialize: function () {
        this.render();
    }, 
    events:{        
        "submit form": "showPopup"        	
    },
    render: function () {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function (event) {
        event.preventDefault();
        Backbone.history.navigate('jobs/view/2',{trigger:true});
        return false;
    }

});




window.AddProfileView = Backbone.View.extend({

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


window.JobView = Backbone.View.extend({

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

window.ListJobsView = Backbone.View.extend({

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

window.ProfileView = Backbone.View.extend({
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

window.ListCandidateView = Backbone.View.extend({
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

window.ListLibraryView = Backbone.View.extend({
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




