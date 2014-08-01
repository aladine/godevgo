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


window.DetailJobView = Backbone.View.extend({

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


window.JobsView = Backbone.View.extend({

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

window.LoginView = Backbone.View.extend({

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

window.RegisterView = Backbone.View.extend({

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




