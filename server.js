/**@author : Yawo Guillaume Kpotufe
*/
//Auth Strategies
var developmentFACEBOOK_APP_ID = '203855983058663'; 
var developmentFACEBOOK_APP_SECRET = '44b05c5bdf17e66f62bbdccd39e2c8fa';
var productionFACEBOOK_APP_ID = '305865759484247'; //for cloudNode
var productionFACEBOOK_APP_SECRET = '283fb39d66a3d7467c8ffe64a611c4f3';

var developmentTWITTER_APP_ID = '2RX5bEubBLz5tT3XgHCg'; 
var developmentTWITTERK_APP_SECRET = 'JWYm5K1PNLn3tF5or2MgqNWI3CGRlm65bpUdVwicw';
var productionTWITTER_APP_ID = 'moIFY2hLYtnZpeRltsWkMw'; //for cloudNode
var productionTWITTERK_APP_SECRET = 'iIvSzfLtzklmJKVg8ZJMCFND3ockTVfXdMQDzOtIM';


var developmentWINDOWSLIVE_APP_ID = '000000004C09DC3E'; 
var developmentWINDOWSLIVE_APP_SECRET = '3Mj-Jo943KGcQPaBtDxgayblzzNOW2iJ';
var productionWINDOWSLIVE_APP_ID = '00000000400AA2B9'; //for cloudNode
var productionWINDOWSLIVE_APP_SECRET = 'aPmu3vrxmhzwd5azgP4HsSiqHF8Baujx';

var developmentLINKEDIN_APP_ID = 'qr471rqgojaa';
var developmentLINKEDIN_APP_SECRET = 'xlNgQuKCjCCBQEoz';
var productionLINKEDIN_APP_ID = 'jmxeb8tc23vo'; //for cloudNode
var productionLINKEDIN_APP_SECRET = 'G2846x0c0iISx4Cn';

var developmentTUMBLR_APP_ID = 'CkxN7oAtEUqMH8sbwolZFMCtWshDbTiTW8y4PdHnOc5Hhg6aUq'; 
var developmentTUMBLR_APP_SECRET = 'kqydcLFkAjCtjS0mnPFx0Qj3st0InnL4msFE6n89GBDdoUNPLw';
var productionTUMBLR_APP_ID = 'CkxN7oAtEUqMH8sbwolZFMCtWshDbTiTW8y4PdHnOc5Hhg6aUq'; //for cloudNode
var productionTUMBLR_APP_SECRET = 'kqydcLFkAjCtjS0mnPFx0Qj3st0InnL4msFE6n89GBDdoUNPLw';


var developmentGITHUB_APP_ID = '91684fc313c9a42cd0fd';
var developmentGITHUB_APP_SECRET = '45d47bc38832518e6744f83c48a46c474b64d958';
var productionGITHUB_APP_ID = 'fb71b7c825d222862e3c'; //for cloudNode
var productionGITHUB_APP_SECRET = '9e4a82976d2213ce529218ee5c124bd81862d674';
//SSL
const crypto = require('crypto'),
      fs = require("fs"),
      http = require("http");

var privateKey = "-----BEGIN RSA PRIVATE KEY-----\n"+
"MIICXQIBAAKBgQDKBJ4VGHXhOy2c6cvNJI8i5QeC6uAa/2KIpIBuxj4+iyBafd6h\n"+
"/bB4GAF8614uFf1rC/24peEw/GN1aBLEvyCPviLVyVBMg3XS1+10XCsp/2ALFRNX\n"+
"Rww1vt2as9dzGbb5GEnsaLJ+PIzHLcAtpyJJ9tHZjQ1pELG6yDOqsLVsawIDAQAB\n"+
"AoGAMGLUvjbCnTTAYxH4d2UnR3NVzjyVesHqhtHn1SB0biSClkoJlgEeUFVnndT+\n"+
"FMm9jfMsTRqmCkaZR9iqjic9E+MX0PPmLVo5sMjTYSwYX50BTbU92EZcnsmScaCB\n"+
"HZMSXK6ldWyrjQTvWxcSX/234ZEo7n+sS3neq7S/zJ5S/fkCQQD+O296mNSMlO7x\n"+
"F8x3HHayrBprn8huo5VbeONg+o2eGJ5rHMr/faimflXKpdpmw+OWLZ7j7KcH3uPe\n"+
"zXV6oaTlAkEAy2w8BfX1w6bUoNFqYudmm/cax15+rg5req2+b2hV9kMcNqQq6rtO\n"+
"S9yBO3smWgZPqJq12Qv2NCuM3Nl5CaiHDwJBAIe33vlJoR4zW6NlGwfzMAKOEcSm\n"+
"le9KcK9WR7w7xWJCrj9sLYpa4K+Q/eeixobZyCMh05LFgR2YhXkpoa+Hn2kCQBUr\n"+
"OkPUiLLHlbD2mf+Y3RC18k91AfHTBlRJ6FtnnCp4aWM2SlELFObIF5q9Agy0Q23k\n"+
"S7A+kmxza8E/0Fy08PkCQQCN1aZqkuSTf2XnNX4LbKoZWm2xtmlc/+qIDdgwoTuG\n"+
"D84gO8b20X19WFAs++qs8rnFRyl8FlUx0vqxtxJCFjQL\n"+
"-----END RSA PRIVATE KEY-----";
var certificate = "-----BEGIN CERTIFICATE-----\n"+
"MIICXTCCAcYCCQCtabJe5ANXTjANBgkqhkiG9w0BAQUFADBzMQswCQYDVQQGEwJN\n"+
"QTEOMAwGA1UECBMFUmFiYXQxDjAMBgNVBAcTBVJhYmF0MQ8wDQYDVQQKEwZkZWFs\n"+
"aXQxDzANBgNVBAMTBmRlYWxpdDEiMCAGCSqGSIb3DQEJARYTbWNndXkyMDA4QGdt\n"+
"YWlsLmNvbTAeFw0xMjA0MTEwOTA2MjFaFw0xMjA1MTEwOTA2MjFaMHMxCzAJBgNV\n"+
"BAYTAk1BMQ4wDAYDVQQIEwVSYWJhdDEOMAwGA1UEBxMFUmFiYXQxDzANBgNVBAoT\n"+
"BmRlYWxpdDEPMA0GA1UEAxMGZGVhbGl0MSIwIAYJKoZIhvcNAQkBFhNtY2d1eTIw\n"+
"MDhAZ21haWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKBJ4VGHXh\n"+
"Oy2c6cvNJI8i5QeC6uAa/2KIpIBuxj4+iyBafd6h/bB4GAF8614uFf1rC/24peEw\n"+
"/GN1aBLEvyCPviLVyVBMg3XS1+10XCsp/2ALFRNXRww1vt2as9dzGbb5GEnsaLJ+\n"+
"PIzHLcAtpyJJ9tHZjQ1pELG6yDOqsLVsawIDAQABMA0GCSqGSIb3DQEBBQUAA4GB\n"+
"AIm/O3M7ndaUL88J9Livri+IkpDnNaxJH1VBWe6GNNZ7ZYOEdWL8Te1H2TG3CDT1\n"+
"AS2COvzkTpdNgTjI9XYYjfT9vX/n6+rFNClNgQo+JJREWV906ForaLpzul4HZLHD\n"+
"5w5puJl89iAEykfP1rBn2h/JN5KmkjLLK6GlB+zZlBTQ\n"+
"-----END CERTIFICATE-----";

//var credentials = crypto.createCredentials({key: privateKey, cert: certificate});




//var HEROKUFACEBOOK_APP_ID = '195253437258220';
//var HEROKUFACEBOOK_APP_SECRET = '4eeaf505678986059051f9c03b14ef6d';


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
  , TumblrStrategy = require('passport-tumblr').Strategy
  , GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var express =  require('express');

var register = function(app,appPort,redisLocalPort,redisProdPort,secure){
var protocol = (secure)?"https":"http";
//Config.
app.configure(function(){  
  app.set('delait_protocol',protocol);
  app.use(express.methodOverride());
  app.use(express.bodyParser()); 
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
    app.set('dealit_host','localhost');
    app.set('dealit_host_validUrl','www.dealitfree.com');
    app.set('dealit_port',appPort);
    app.set('redis_port',redisLocalPort);
    app.set('redis_host','127.0.0.1');
  	app.set('redis_auth','0c9f2bc6e1565a3c1463052b6f3b7d53'); 
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());  
  app.set('dealit_host','dealit.cloudno.de');
  app.set('dealit_host_validUrl','dealit.cloudeno.de');
  app.set('dealit_port',80);
  app.set('redis_port',redisProdPort);
  app.set('redis_auth','0c9f2bc6e1565a3c1463052b6f3b7d53');  
  app.set('redis_host','127.0.0.1');
});
 
/**
   Routes
*/

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
  req.session.destroy();
  res.redirect('/');
});

app.get('/auth/facebook', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/twitter', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

 app.get('/auth/yahoo',
  passport.authenticate('yahoo'),
  function(req, res){
    // The request will be redirected to Yahoo for authentication, so
    // this function will not be called.
  });

app.get('/auth/yahoo/callback', 
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/windowslive',
  passport.authenticate('windowslive' ,{ scope: ['wl.signin', 'wl.basic']} ),
  function(req, res){
    // The request will be redirected to Windows Live for authentication, so
    // this function will not be called.
  });

app.get('/auth/windowslive/callback', 
  passport.authenticate('windowslive', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so
    // this function will not be called.
  });

app.get('/auth/linkedin/callback', 
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/tumblr',
  passport.authenticate('tumblr'),
  function(req, res){
    // The request will be redirected to Tumblr for authentication, so this
    // function will not be called.
  });

app.get('/auth/tumblr/callback', 
  passport.authenticate('tumblr', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



app.get('/users/:ids', function(req, res){
    res.json({'user':req.params.ids});
});

app.get('/login', function(req, res){
    res.send("<center style='margin-top:250px'><h3>Login page </h3> Here, we should provide many Auth Strategies</center>");
});

app.get('/',ensureAuthenticated, function(req, res){
  name = (req.user)?(req.user.displayName||req.user):'Anonymous';
  res.send('Hello ' +name);	
  req.session.currentUser=req.user;
}); 

app.listen(app.settings.dealit_port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
//console.log("Express server listening");

}

//Servers

var httpsApp  =  express.createServer({key: privateKey, cert: certificate});
var httpApp   =  express.createServer();
register(httpApp,8855,6379,6415);
//register(httpsApp,8800,6379,6415);

//Connect to Redis Database 
var redis = require("redis");
client = redis.createClient(httpApp.settings.redis_port,httpApp.settings.redis_host);
client.auth(httpApp.settings.redis_auth,redis.print);
client.on("error", function (err) {
    console.log("Error connecting to Redis (check auth) " + err);
    //Exit on error
    process.exit(1);
});

//Users for passport-local test...
var users = [
    { id: 1, username: 'admin', password: 'nimda', email: 'mcguy2008@gmail.com' }
  , { id: 2, username: 'manager', password: '123456', email: 'mcguy2008@gmail.com' }
];
users.forEach(function (reply, i) {
    client.hset("dealit_users", reply.id, reply, redis.print);
});



passport.use(new GoogleStrategy({
    returnURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/google/return',
    realm: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/'
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


passport.use(new FacebookStrategy({
    clientID: eval(httpApp.settings.env+'FACEBOOK_APP_ID'),
    clientSecret: eval(httpApp.settings.env+'FACEBOOK_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {   
    console.log("Facebook profile :",profile); 
    return done(null, profile);    
  }
));

passport.use(new TwitterStrategy({
    consumerKey: eval(httpApp.settings.env+'TWITTER_APP_ID'),
    consumerSecret: eval(httpApp.settings.env+'TWITTERK_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    console.log("Twitter profile :",profile); 
    return done(null, profile);       
  }
));
passport.use(new YahooStrategy({
    returnURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/yahoo/callback',
    realm: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port
  },
  function(identifier, profileId, done) {
    console.log("Yahoo profile :",profileId); 
    return done(null, profileId);      
  }
));

//WindowsLive want valid url and localhost is not working, so I created a mapping dealitfree.com => 127.0.0.1 in the etc/host file.
passport.use(new WindowsLiveStrategy({
    clientID: eval(httpApp.settings.env+'WINDOWSLIVE_APP_ID'),
    clientSecret: eval(httpApp.settings.env+'WINDOWSLIVE_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host_validUrl+':'+httpApp.settings.dealit_port+'/auth/windowslive/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("WindowsLive profile :",profile); 
    return done(null, profile);         
  }
));
passport.use(new LinkedInStrategy({
    consumerKey: eval(httpApp.settings.env+'LINKEDIN_APP_ID'),
    consumerSecret: eval(httpApp.settings.env+'LINKEDIN_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/linkedin/callback'
  },
  function(token, tokenSecret, profile, done) {  
  console.log("LinkedIn profile :",profile) ;  
      return done(null, profile);    
  }
));

passport.use(new GitHubStrategy({
    clientID: eval(httpApp.settings.env+'GITHUB_APP_ID'),
    clientSecret: eval(httpApp.settings.env+'GITHUB_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {   
      console.log("GitHub profile :",profile) ;  
      return done(null, profile);    
  }
));

passport.use(new TumblrStrategy({
    consumerKey: eval(httpApp.settings.env+'TUMBLR_APP_ID'),
    consumerSecret: eval(httpApp.settings.env+'TUMBLR_APP_SECRET'),
    callbackURL: httpApp.settings.delait_protocol+'://'+httpApp.settings.dealit_host+':'+httpApp.settings.dealit_port+'/auth/tumblr/callback'
  },
  function(token, tokenSecret, profile, done) {   
      console.log("Tumblr profile :",profile) ;
      return done(null, profile);    
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
