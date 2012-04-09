var express =  require('express');
var app = express.createServer();

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
  app.set('redis_port',6415);
  app.set('redis_auth','0c9f2bc6e1565a3c1463052b6f3b7d53');  
});


app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});

app.get('/users/:ids', function(req, res){
    res.json({'user':req.params.ids});
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(8855);
