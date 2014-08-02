window.AddCompanyView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.QuestionItemView=Backbone.View.extend({index:0,initialize:function(a){this.render(),this.index=a.index,console.log("init"+this.index)},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template({index:this.index})),this},showPopup:function(){}}),window.DetailsView=Backbone.View.extend({initialize:function(){this.render()},render:function(){return $(this.el).html(this.template(this.model.toJSON())),this},events:{change:"change","click .save":"beforeSave","click .deleteConfirm":"deleteAccountConfirmation","click .delete":"deleteAccount","change .btn-file":"uploadImage"},change:function(a){utils.hideAlert();var b=a.target,c={};"fileInput"!=b.name&&(c[b.name]=b.value,this.model.set(c));var d=this.model.validateItem(b.id);d.isValid===!1?utils.addValidationError(b.id,d.message):utils.removeValidationError(b.id,this.model)},beforeSave:function(){$("#loadingimage").show();var a=this.model.validateAll();return a.isValid===!1?(utils.displayValidationErrors(a.messages),$("#loadingimage").hide(),!1):(this.checkFileAndExtension()&&(this.model.set("picture",utils.createFileName(this.model.id)),this.saveFile()),this.saveAccount(),$("#loadingimage").hide(),void 0)},saveAccount:function(){var a=this;this.model.save(null,{success:function(b){a.render(),$("#loadingModal").modal("hide"),$("#lastUpdate").text(convertDate(b.get("modifyDate"))),app.navigate("accounts/"+b.id,!1),utils.showAlert("Success!","Account saved successfully","alert-success")},error:function(){utils.showAlert("Error","An error occurred while trying to save this account","alert-danger")}})},deleteAccountConfirmation:function(){$("#deleteConfirmation").modal("show")},deleteAccount:function(){$("#deleteConfirmation").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove(),this.model.destroy({success:function(){window.history.back()}})},uploadImage:function(a){$("#loadingModal").modal("show");var b=a.target;if(numFiles=b.files?b.files.length:1,numFiles>0){if(label=b.value.replace(/\\/g,"/").replace(/.*\//,""),$("#filename").text(label),!this.checkFileAndExtension())return $("#pictureFile").attr("src","img/user_account.png"),!1;var c=new FileReader;c.onloadend=function(){$("#pictureFile").attr("src",c.result)},c.readAsDataURL(utils.getFile())}$("#loadingModal").modal("hide")},saveFile:function(){var a=new FormData($("#fileuploadForm"));a.append("file",utils.getFile()),$.ajax({url:"rest/accounts/upload/"+this.model.get("picture"),data:a,cache:!1,contentType:!1,processData:!1,type:"POST",success:function(){$("#loadingModal").modal("hide")},error:function(){alert("no upload"),$("#loadingModal").modal("hide")}})},checkFileAndExtension:function(){return utils.checkFile()?utils.checkFileExt()?!0:(utils.showAlert("Error","Only image files are allowed ( .jpg, .jpeg, .png )","alert-danger"),this.model.set("picture","-1"),$("#loadingModal").modal("hide"),!1):!1}}),window.FooterView=Backbone.View.extend({initialize:function(){},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},select:function(a){$(".nav li").removeClass("active"),$("."+a).addClass("active")},showPopup:function(){$("#mypop").popover("show")}}),window.HeaderView=Backbone.View.extend({initialize:function(){},render:function(){return $(this.el).html(this.template()),this},events:{"keyup .search-query":"search","keypress .search-query":"onkeypress","click .search-query":"clean"},search:function(){$("#loadingimage").show();var a=$("#searchText").val();console.log("search "+a),this.searchResults.findByName(a),this.searchResults.length,setTimeout(function(){$(".dropdown").addClass("open"),$("#loadingimage").hide()},1500)},onkeypress:function(a){13==a.keyCode&&a.preventDefault()},select:function(a){$(".nav li").removeClass("active"),$("."+a).addClass("active")},clean:function(){$("#searchText").val("")}}),window.HomeView=Backbone.View.extend({initialize:function(){console.log("Initializing Home View")},events:{"click #showMeBtn":"showMeBtnClick"},render:function(){return $(this.el).html(this.template()),this},showMeBtnClick:function(){alert("Button sulla home")}}),window.AddJobView=Backbone.View.extend({initialize:function(){this.render()},events:{"submit form":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(a){return a.preventDefault(),Backbone.history.navigate("jobs/view/2",{trigger:!0}),!1}}),window.AddProfileView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.JobView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ListJobsView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ProfileView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ListCandidateView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ListLibraryView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ListView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var a=this.model.models,b=a.length,c=8*(this.options.page-1),d=Math.min(c+8,b);$(this.el).html(this.template());for(var e=c;d>e;e++)$(".accountslist",this.el).append(new ListItemView({model:a[e]}).render().el);return $(this.el).append(new Paginator({model:this.model,page:this.options.page}).render().el),this}}),window.ListItemView=Backbone.View.extend({initialize:function(){this.model.bind("change",this.render,this),this.model.bind("destroy",this.close,this)},render:function(){return $(this.el).html(this.template(this.model.toJSON())),this}}),window.SearchResultView=Backbone.View.extend({tagName:"ul",className:"dropdown-menu",initialize:function(){var a=this;this.model.bind("reset",this.render,this),this.model.bind("add",function(b){$(a.el).append(new SearchResultItemView({model:b}).render().el)})},render:function(){return $(this.el).empty(),this.model.size()>0?_.each(this.model.models,function(a){$(this.el).append(new SearchResultItemView({model:a}).render().el)},this):$(this.el).append('<li class="elementSearchResult disabled"><a href="#"><div class="row"><div class="col-xs-4"><img src="../img/no_result.png" alt=""></div><div class="col-xs-8" style="padding-top:5px">No result</div></div></a></li>'),this}}),window.SearchResultItemView=Backbone.View.extend({tagName:"li",className:"elementSearchResult",initialize:function(){this.model.bind("change",this.render,this),this.model.bind("destroy",this.close,this)},render:function(){return $(this.el).html(this.template(this.model.toJSON())),this}}),window.Paginator=Backbone.View.extend({tagName:"ul",className:"pagination",initialize:function(){this.model.bind("reset",this.render,this),this.render()},render:function(){var a=this.model.models,b=a.length,c=Math.ceil(b/8);$(this.el).html("<ul />");for(var d=0;c>d;d++)$(this.el).append("<li"+(d+1===this.options.page?" class='active'":"")+"><a href='#accounts/page/"+(d+1)+"'>"+(d+1)+"</a></li>");return this}}),window.AddTestView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup",'focusout input[name="company_tagline"]':"updateList"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){},updateList:function(a){var b=$(a.target).val();b=parseInt(b,10),console.log(b),$("#question_list",this.el).html("");for(var c=1;b>=c;c++)$("#question_list",this.el).append(new QuestionItemView({index:c}).render().el)}}),window.ChooseTestView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.EditTestView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.AnswerView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.TestView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.GetLinkTestView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.LoginView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.RegisterView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}}),window.ForgetPasswordView=Backbone.View.extend({initialize:function(){this.render()},events:{"click #mypop":"showPopup"},render:function(){return $(this.el).html(this.template()),this},showPopup:function(){}});