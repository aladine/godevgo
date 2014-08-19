window.AddTestView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup",
        'focusout input[name="company_tagline"]': "updateList"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {

    },
    updateList:function  (e) {
        
        // console.log(e.target);
        var v = $(e.target).val();
        v = parseInt(v,10);
        console.log(v);
        $('#question_list', this.el).html(''); 
        for (var i = 1; i <=v; i++) {
            $('#question_list', this.el).append(new QuestionItemView({index:i}).render().el);    
        };
        
        

    }
});

window.ChooseTestView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {}
});

window.EditTestView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {}
});


window.AnswerView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {}
});

window.TestView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {}
});

window.GetLinkTestView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showPopup: function() {}
});

