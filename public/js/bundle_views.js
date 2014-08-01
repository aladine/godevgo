window.AddCompanyView = Backbone.View.extend({
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

window.DetailsView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        change: "change",
        "click .save": "beforeSave",
        "click .deleteConfirm": "deleteAccountConfirmation",
        "click .delete": "deleteAccount",
        "change .btn-file": "uploadImage"
    },
    change: function(event) {
        utils.hideAlert();
        var target = event.target;
        var change = {};
        if (target.name != "fileInput") {
            change[target.name] = target.value;
            this.model.set(change);
        }
        var check = this.model.validateItem(target.id);
        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id, this.model);
        }
    },
    beforeSave: function() {
        $("#loadingimage").show();
        var self = this;
        var check = this.model.validateAll();
        if (check.isValid === false) {
            utils.displayValidationErrors(check.messages);
            $("#loadingimage").hide();
            return false;
        }
        if (this.checkFileAndExtension()) {
            this.model.set("picture", utils.createFileName(this.model.id));
            this.saveFile();
        }
        this.saveAccount();
        $("#loadingimage").hide();
    },
    saveAccount: function() {
        var self = this;
        this.model.save(null, {
            success: function(model) {
                self.render();
                $("#loadingModal").modal("hide");
                $("#lastUpdate").text(convertDate(model.get("modifyDate")));
                app.navigate("accounts/" + model.id, false);
                utils.showAlert("Success!", "Account saved successfully", "alert-success");
            },
            error: function() {
                utils.showAlert("Error", "An error occurred while trying to save this account", "alert-danger");
            }
        });
    },
    deleteAccountConfirmation: function() {
        $("#deleteConfirmation").modal("show");
    },
    deleteAccount: function() {
        $("#deleteConfirmation").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
        this.model.destroy({
            success: function() {
                window.history.back();
            }
        });
    },
    uploadImage: function(event) {
        $("#loadingModal").modal("show");
        var fileInput = event.target;
        numFiles = fileInput.files ? fileInput.files.length : 1;
        if (numFiles > 0) {
            label = fileInput.value.replace(/\\/g, "/").replace(/.*\//, "");
            $("#filename").text(label);
            if (this.checkFileAndExtension()) {
                var reader = new FileReader();
                reader.onloadend = function() {
                    $("#pictureFile").attr("src", reader.result);
                };
                reader.readAsDataURL(utils.getFile());
            } else {
                $("#pictureFile").attr("src", "img/user_account.png");
                return false;
            }
        }
        $("#loadingModal").modal("hide");
    },
    saveFile: function() {
        var data = new FormData($("#fileuploadForm"));
        data.append("file", utils.getFile());
        $.ajax({
            url: "rest/accounts/upload/" + this.model.get("picture"),
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: "POST",
            success: function(data) {
                $("#loadingModal").modal("hide");
            },
            error: function(data) {
                alert("no upload");
                $("#loadingModal").modal("hide");
            }
        });
    },
    checkFileAndExtension: function() {
        if (utils.checkFile()) {
            if (utils.checkFileExt()) {
                return true;
            } else {
                utils.showAlert("Error", "Only image files are allowed ( .jpg, .jpeg, .png )", "alert-danger");
                this.model.set("picture", "-1");
                $("#loadingModal").modal("hide");
                return false;
            }
        } else {
            return false;
        }
    }
});

window.FooterView = Backbone.View.extend({
    initialize: function() {},
    events: {
        "click #mypop": "showPopup"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    select: function(menuItem) {
        $(".nav li").removeClass("active");
        $("." + menuItem).addClass("active");
    },
    showPopup: function() {
        $("#mypop").popover("show");
    }
});

window.HeaderView = Backbone.View.extend({
    initialize: function() {},
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress",
        "click .search-query": "clean"
    },
    search: function() {
        $("#loadingimage").show();
        var key = $("#searchText").val();
        console.log("search " + key);
        this.searchResults.findByName(key);
        var size = this.searchResults.length;
        setTimeout(function() {
            $(".dropdown").addClass("open");
            $("#loadingimage").hide();
        }, 1500);
    },
    onkeypress: function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    },
    select: function(menuItem) {
        $(".nav li").removeClass("active");
        $("." + menuItem).addClass("active");
    },
    clean: function() {
        $("#searchText").val("");
    }
});

window.HomeView = Backbone.View.extend({
    initialize: function() {
        console.log("Initializing Home View");
    },
    events: {
        "click #showMeBtn": "showMeBtnClick"
    },
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    showMeBtnClick: function() {
        alert("Button sulla home");
    }
});

window.AddJobView = Backbone.View.extend({
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

window.DetailJobView = Backbone.View.extend({
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

window.AddProfileView = Backbone.View.extend({
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

window.JobsView = Backbone.View.extend({
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

window.ListJobsView = Backbone.View.extend({
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

window.LoginView = Backbone.View.extend({
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

window.RegisterView = Backbone.View.extend({
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

window.ProfileView = Backbone.View.extend({
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

window.ListCandidateView = Backbone.View.extend({
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

window.ListView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function() {
        var list = this.model.models;
        var len = list.length;
        var startPos = (this.options.page - 1) * 8;
        var endPos = Math.min(startPos + 8, len);
        $(this.el).html(this.template());
        for (var i = startPos; i < endPos; i++) {
            $(".accountslist", this.el).append(new ListItemView({
                model: list[i]
            }).render().el);
        }
        $(this.el).append(new Paginator({
            model: this.model,
            page: this.options.page
        }).render().el);
        return this;
    }
});

window.ListItemView = Backbone.View.extend({
    initialize: function() {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },
    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

window.SearchResultView = Backbone.View.extend({
    tagName: "ul",
    className: "dropdown-menu",
    initialize: function() {
        var self = this;
        this.model.bind("reset", this.render, this);
        this.model.bind("add", function(account) {
            $(self.el).append(new SearchResultItemView({
                model: account
            }).render().el);
        });
    },
    render: function() {
        $(this.el).empty();
        if (this.model.size() > 0) {
            _.each(this.model.models, function(account) {
                $(this.el).append(new SearchResultItemView({
                    model: account
                }).render().el);
            }, this);
        } else {
            $(this.el).append('<li class="elementSearchResult disabled"><a href="#"><div class="row"><div class="col-xs-4"><img src="../img/no_result.png" alt=""></div><div class="col-xs-8" style="padding-top:5px">No result</div></div></a></li>');
        }
        return this;
    }
});

window.SearchResultItemView = Backbone.View.extend({
    tagName: "li",
    className: "elementSearchResult",
    initialize: function() {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },
    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

window.Paginator = Backbone.View.extend({
    tagName: "ul",
    className: "pagination",
    initialize: function() {
        this.model.bind("reset", this.render, this);
        this.render();
    },
    render: function() {
        var items = this.model.models;
        var len = items.length;
        var pageCount = Math.ceil(len / 8);
        $(this.el).html("<ul />");
        for (var i = 0; i < pageCount; i++) {
            $(this.el).append("<li" + (i + 1 === this.options.page ? " class='active'" : "") + "><a href='#accounts/page/" + (i + 1) + "'>" + (i + 1) + "</a></li>");
        }
        return this;
    }
});