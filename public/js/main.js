window.Router = Backbone.Router.extend({

    routes: {
    	"": "home",
        "users/register": "registerUser",
        "users/edit/:id": "editUser",
        "users/view/:id": "viewUser",
        "users/login": "doLogIn",
        "users/logout": "doLogOut",
        "jobs": "listJobs",
        "jobs/add":"addJob",
        "jobs/view/:id":"viewJob",
        "company/add":"addCompany",
        "company/view/:id":"viewCompany"
    },

    initialize: function () {
        this.headerView = new HeaderView();
    	$('.header').html(this.headerView.render().el);
    	this.footerView = new FooterView();		
    	$('.footer').html(this.footerView.render().el);
    	
        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {        	
        	$('.dropdown').removeClass("open");
        });
    },

    home: function () {
        //Since the home view never changes, we instantiate it and render it only once    	
        if (!this.homeView) {        	        	
            this.homeView = new HomeView();        	
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }                
        $("#content").html(this.homeView.el);
        this.headerView.select('home-menu');                                
    },

    doLogIn: function (argument) {
        // body...
    },
    doLogOut: function () {
        // body...
    },
    registerUser: function () {
        // body...
    },
    editUser: function () {
        this.editUserView = new EditUserView();         
        this.editUserView.render();   
        $("#content").html(this.editUserView.el);
        // this.headerView.select('home-menu');  
    },
    listJobs: function () {
        // body...
         console.log('listJob');
        $("#content").html(this.ListJobsView.el);
        // this.headerView.select('home-menu');  
    },
    addJob: function () {
        // body...
        console.log('addJob');
        $("#content").html(this.AddJobView.el);
        // this.headerView.select('home-menu');  

    },
    viewUser: function (id) {
        var j = new User({id: id});
        $("#content").html(this.ProfileView({model:j}).el);

    },
    viewJob: function (id) {
        var j = new Job({id: id});
        $("#content").html(this.DetailJobView({model:j}).el);

    },
    addCompany: function () {
        // body...
        console.log('addCompany');
    }
    
 //    accountsList: function(page) {
 //    	//$('#loadingModal').modal('show');
 //    	$('#loadingimage').show();
 //    	var p = page ? parseInt(page, 10) : 1;
 //        var accountsList = new AccountsCollection();
 //        accountsList.fetch({success: function(){
 //            $("#content").html(new ListView({model: accountsList, page: p}).el);
 //            //$('#loadingModal').modal('hide');
 //            $('#loadingimage').hide();
 //        }});
 //        this.headerView.select('accounts-menu');        
 //    },
    
 //    accountDetails: function (id) {
 //        var account = new Account({id: id});
 //        account.fetch({success: function(){        	
 //            $("#content").html(new DetailsView({model: account}).el);
 //            $('#lastUpdate').text(convertDate(account.get('modifyDate')));            
 //        }});
        
 //        //this.headerView.selectMenuItem();
 //    },
    
 //    addAccount: function() {
 //        var account = new Account();
 //        $('#content').html(new DetailsView({model: account}).el);
 //        //$('#deleteAccountButton').prop('disabled', true);
 //        $('#deleteAccountButton').hide();  
 //        this.headerView.select('add-menu');
	// },
    
});

templateLoader.load(["HeaderView","HomeView","FooterView"],
	function () {
		app = new Router();
		Backbone.history.start();//{pushState: true}
	});