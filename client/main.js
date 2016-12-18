import{ Template } from 'meteor/templating';
import './main.html';

this.Document = new Mongo.Collection("documents");
var limiter = 1;

Template.Intro.helpers({
    subTopics: function(){
        return [{
            link:'Point and Line'
        },{
            link:'Rectangle and Circle'
        },{
            link:'Triangle'
        },{
            link:'Vertex'
        }]   
    }
});

Template.topicList.helpers({
    topics: function(){
      return [{
              label: 'Intro'
            },{
              label: 'Variable'
            },{
              label: 'Condition'
            },{
              label: 'Loop'
            },{
              label: 'Function'
            },{
              label: 'Class and Object'
            },{
              label: 'Array'
            }]
    }
});

Router.configure({
   layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function (params) {
    console.log(params);
    this.render('mainMenu',{
      to:"firstNavbar"
  });
  
  this.render('contentHome',{
      to:"appContent"
  });
  this.render('pfsmFooter',{
     to:"appFooter" 
  });
});

Router.route('/about', function () {
  this.render('mainMenu',{
      to:"firstNavbar"
  });
  
  this.render('contentAbout',{
      to:"appContent"
  });
  this.render('pfsmFooter',{
     to:"appFooter" 
  });
});

Router.route('/videos', function () {
  this.render('mainMenu',{
      to:"firstNavbar"
  });
        
  this.render('videosContent',{
      to: "appContent"
  });
        
  this.render('pfsmFooter',{
     to:"appFooter" 
  });
});

Router.route('/discussion', function () {
  this.render('mainMenu',{
      to:"firstNavbar"
  });
  
  this.render('contentDiscussion',{
      to:"appContent"
  });
  this.render('pfsmFooter',{
     to:"appFooter" 
  });
});


    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });

    Template.mainMenu.helpers({username:function(){
        if(Meteor.user()){
            $("#user_name").css("display", "block");
            $(".second-nav").css("display", "block");
            return Meteor.user().emails[0].address;
        }else{
            $("#user_name").css("display", "none");
            $(".second-nav").css("display", "none");
            $(".second-nav div .container").css("display", "none");
            $("#justTry").css("display","none");
            return "anonymous user";
        }
    }
        
    });

$("#login-buttons-logout").click(function(){
   console.log("HELLO THERE");
});
