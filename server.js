/**@author : Yawo Guillaume Kpotufe
*/
var express =  require('express');
var app = express.createServer();

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


app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.cookieParser());  
  app.use(express.session({ secret: 'keyboard cat' }));
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
  app.use(express.bodyParser());  
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





 
//Routes

app.get('/users/:ids', function(req, res){
    res.json({'user':req.params.ids});
});

app.get('/', function(req, res){
  res.send('hello world');	
}); 

app.listen(8855);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
