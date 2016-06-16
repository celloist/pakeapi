var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hresp = require('./resources/response.js');
var dota2Api = require('dota2api');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan   = require('morgan');
var session  = require('express-session');
var mongoose = require('mongoose');
var NASAmodule = require('./modules/nasa.js');
var keys = require('./resources/config.js');
var NASA = new NASAmodule(keys.NASAKey);
var async = require('async');
mongoose.constructor('');


//Models
var User = require('./models/user.js');
var Hero = require('./models/hero.js');
var HeroLocation = require('./models/herolocation.js')
var Role = require('./models/role.js');
var router = express.Router();


var app = express();

//config
mongoose.connect("mongodb://admin:admin@ds055925.mlab.com:55925/pakeapidb");
require('./resources/passport')(passport,User,Role); // pass passport for configuration

//TODO dota stuff
var dota = new dota2Api('CC8D48FF51F0A7630482334927F4AB37');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({
  secret: 'superdupersecret',
  resave: false,
  saveUninitialized: false
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
var userRoutes = require('./routes/users.js')(router, User, hresp);
var heroRoutes = require('./routes/heroes.js')(router, Hero, hresp);
var heroLocationRoutes = require('./routes/herolocations.js')(router, Hero,HeroLocation, hresp);
var views = require('./routes/views.js')(router,User,HeroLocation,Hero,NASA,async);
var auth = require('./routes/authentication.js')(router,User,passport);

app.use(views);
app.use(userRoutes);
app.use(heroRoutes);
app.use(heroLocationRoutes);
app.use(auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
