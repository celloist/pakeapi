var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hresp = require('./resources/response.js');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan   = require('morgan');
var session  = require('express-session');
var mongoose = require('mongoose');
var NASA = require('./modules/nasa.js');
var pokeApi = require('./modules/pokeapi.js');
pokeApi = new pokeApi();
var pokeNode = require('pokenode');
var keys = require('./resources/config.js');
NASA = new NASA(keys.NASAKey);
var async = require('async');
mongoose.constructor('');


//Models
var User = require('./models/user.js');
var Pokemon = require('./models/pokemon.js');
var PokemonLocation = require('./models/pokemonlocation.js');
var router = express.Router();


var app = express();

//config
mongoose.connect("mongodb://admin:admin@ds055925.mlab.com:55925/pakeapidb");
require('./resources/passport')(passport,User); // pass passport for configuration

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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


// routes
var userRoutes = require('./routes/users.js')(router, User, hresp);
var pokemonRoutes = require('./routes/pokemon.js')(router, Pokemon, pokeApi, hresp);
var pokemonLocationRoutes = require('./routes/pokemonlocations.js')(router, Pokemon,PokemonLocation, hresp);
var auth = require('./routes/authentication.js')(router,User,passport);

// frontend routes
var views = require('./routes-frontend/views.js')(router,User,PokemonLocation,Pokemon,NASA,async);

app.use(views);
app.use(userRoutes);
app.use(pokemonRoutes);
app.use(pokemonLocationRoutes);
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
