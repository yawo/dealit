/**@author : Yawo Guillaume Kpotufe
*/

var express =  require('express');
var app = express.createServer();
var store  = new express.session.MemoryStore;
//Authentication. (Passport)
var passport = require('passport')
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy
  , GoogleStrategy = require('passport-google').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy
  , YahooStrategy = require('passport-yahoo').Strategy
  , WindowsLiveStrategy = require('passport-windowslive').Strategy
  , LinkedInStrategy = require('passport-linkedin').Strategy
  , TwitterStrategy = require('passport-twitter').Strategy
  , GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.configure(function(){
  app.set('dealit_host','127.0.0.1');
  app.set('dealit_port',8855);
  app.use(express.methodOverride());
  app.use(express.bodyParser()); 
  app.use(express.cookieParser());  
  app.use(express.session({ secret: 'keyboard cat', store: store }));
  app.use(passport.initialize());
  app.use(passport.session());  
   app.use(app.router);
  app.use(express.static(__dirname + '/../../public'));
  
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('redis_port',6379);
    app.set('redis_host','127.0.0.1');
  	app.set('redis_auth','0c9f2bc6e1565a3c1463052b6f3b7d53'); 
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());  
  app.set('redis_port',6415);
  app.set('redis_auth','0c9f2bc6e1565a3c1463052b6f3b7d53');  
  app.set('redis_host','127.0.0.1');
});
 
//Connect to Redis Database 
var redis = require("redis");
client = redis.createClient(app.settings.redis_port,app.settings.redis_host);
client.auth(app.settings.redis_auth,redis.print);
client.on("error", function (err) {
    console.log("Error connecting to Redis (check auth) " + err);
    //Exit on error
    process.exit(1);
});

//Users
var users = [
    { id: 1, username: 'admin', password: 'nimda', email: 'mcguy2008@gmail.com' }
  , { id: 2, username: 'manager', password: '123456', email: 'mcguy2008@gmail.com' }
];
users.forEach(function (reply, i) {
    client.hset("dealit_users", reply.id, reply, redis.print);
});

//Auth Strategies
passport.use(new GoogleStrategy({
    returnURL: 'http://'+app.settings.dealit_host+':'+app.settings.dealit_port+'/auth/google/return',
    realm: 'http://'+app.settings.dealit_host+':'+app.settings.dealit_port+'/'
  },
   function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {      
      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier;
      console.log("Google profile :",profile);
      return done(null, profile);
    });
  }
));
// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authenticating, Google will redirect the
//   user back to this application at /auth/google/return
app.get('/auth/google', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// GET /auth/google/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/return', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

 
//Routes

app.get('/users/:ids', function(req, res){
    res.json({'user':req.params.ids});
});

app.get('/login', function(req, res){
    res.send("<center style='margin-top:250px'><h3>Login page </h3> Here, we should provide many Auth Strategies</center>");
});

app.get('/',ensureAuthenticated, function(req, res){
  name = (req.user)?req.user.displayName:'Anonymous';
  res.send('Hello ' +name);	
  req.session.currentUser=req.user;
}); 

app.listen(app.settings.dealit_port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
