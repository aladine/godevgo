window.Router = Backbone.Router.extend({

    routes: {
    	"": "home",
        "users/register": "registerUser",
        "users/edit/:id": "editUser",
        "users/view/:id": "viewUser",
        "users/login": "doLogIn",
        "users/forgetpassword": "doForgetPassword",
        "users/logout": "doLogOut",
        "jobs": "listJobs",
        "jobs/add":"addJob",
        "jobs/view/:id":"viewJob",
        "jobs/addTest":"chooseTest",
        "jobs/getLinkTest":"getLinkTest",
        "company/add":"addCompany",
        "company/view/:id":"viewCompany",
        "company/candidates":"viewCandidates",
		"candidate/view/:id":"viewCandidate",
        "questions/edit/:id": "editTest",
        "questions/view/:id": "viewTest",
        "questions/add": "createTest",
        "questions/answer/:id":"answerTest",
		"library/view":"listLibrary"
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
    doLogIn: function () {
        this.LoginView = new LoginView();         
        this.LoginView.render();   
        $("#content").html(this.LoginView.el);
    },
    doForgetPassword: function  () {
        this.ForgetPasswordView = new ForgetPasswordView();         
        this.ForgetPasswordView.render();   
        $("#content").html(this.ForgetPasswordView.el);
    },
    doLogOut: function () {
        console.log('logout');
    },
    registerUser: function () {
         this.RegisterView = new RegisterView();         
        this.RegisterView.render();   
        $("#content").html(this.RegisterView.el);
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
        this.listJobsView = new ListJobsView();           
        this.listJobsView.render();
        $("#content").html(this.listJobsView.el);
        // this.headerView.select('home-menu');  
    },
    addJob: function () {
        // body...
        console.log('addJob');
        this.AddJobView = new AddJobView();           
        this.AddJobView.render();
        $("#content").html(this.AddJobView.el);
        // this.headerView.select('home-menu');  

    },
    viewUser: function (id) {
        var j = new User({id: id});
        // this.ProfileView = new ProfileView();           
        // this.ProfileView.render();
        $("#content").html(this.ProfileView({model:j}).el);

    },
    viewJob: function (id) {
        // var j = new Job({id: id});
        // $("#content").html(this.DetailJobView({model:j}).el);
        this.JobView = new JobView();           
        this.JobView.render();
        $("#content").html(this.JobView.el);

    },
    addCompany: function () {
        // body...
        console.log('addCompany');
        this.AddCompanyView = new AddCompanyView();           
        this.AddCompanyView.render();
        $("#content").html(this.AddCompanyView.el);
    },
    viewCandidates: function  () {
         console.log('viewCandidates');
         this.ListCandidateView = new ListCandidateView();           
        this.ListCandidateView.render();
        $("#content").html(this.ListCandidateView.el);
    },
	listCandidate: function () {
        // body...
         console.log('listCandidate');
         this.ListCandidateView = new ListCandidateView();           
        this.ListCandidateView.render();
        $("#content").html(this.ListCandidateView.el);
        // this.headerView.select('home-menu');  
    },
	listLibrary: function () {
        // body...
         console.log('listLibrary');
         this.ListLibraryView = new ListLibraryView();           
        this.ListLibraryView.render();
        $("#content").html(this.ListLibraryView.el);
        // this.headerView.select('home-menu');  
    },
    createTest: function  () {
        console.log('createTest');
        this.AddTestView = new AddTestView();           
        this.AddTestView.render();
        $("#content").html(this.AddTestView.el);
    },
    editTest: function  () {
        // body...
    },
    chooseTest: function () {
        // body...
        this.ChooseTestView = new ChooseTestView();           
        this.ChooseTestView.render();
        $("#content").html(this.ChooseTestView.el);
    },
    viewTest: function  (id) {
        this.ViewTestView = new TestView();           
        this.ViewTestView.render();
        $("#content").html(this.ViewTestView.el);
    },
    answerTest: function  (id) {
         this.AnswerView = new AnswerView();           
        this.AnswerView.render();
        $("#content").html(this.AnswerView.el);
    },
    getLinkTest: function  () {
        this.GetLinkTestView = new GetLinkTestView();           
        this.GetLinkTestView.render();
        $("#content").html(this.GetLinkTestView.el);
         // $("#content").html('');
    }
});

templateLoader.load(["AddJobView","AddProfileView","FooterView","HeaderView","HomeView",
    "JobView","ListJobsView","LoginView","ProfileView","RegisterView",
    "ListCandidateView","ListLibraryView","ForgetPasswordView",
    "TestView","AddTestView","EditTestView","AnswerView","GetLinkTestView","ChooseTestView",
    "QuestionItemView"
    ],
	function () {
		app = new Router();
		Backbone.history.start();//{pushState: true}
	});