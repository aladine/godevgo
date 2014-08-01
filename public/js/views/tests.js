window.AddTestView = Backbone.View.extend({
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

