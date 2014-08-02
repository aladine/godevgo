window.AddJobView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },
    events:{        
        "submit form": "showPopup",
        'focusout input[name="company_tagline"]': "updateList"        	
    },
    render: function () {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function (event) {
        event.preventDefault();
        Backbone.history.navigate('jobs/view/2',{trigger:true});
        return false;
    },
    updateList:function  (e) {
        
        console.log(e.target);
        var v = $(e.target).val();
        console.log(v);
        $('#question_list', this.el).append(new QuestionItemView().render().el);

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




