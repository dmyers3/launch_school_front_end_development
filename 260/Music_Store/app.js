var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var nib = require('nib');

var routes = require('./routes/all');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(stylus.middleware({
  // src pulls any stylus files in named directory (below its public directory)
  src: path.join(__dirname, "public"),
  // str represents stylus, p represents path
  // string is passed into stylus to be converted to css, and filename set to current path
  // nib adds mixins to be used
  compile: function(str, p) {
    return stylus(str).set("filename", p).use(nib());
  }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// path.join basically creates "./views" (current dir/views)
// so if we move application as long as views dir is relative to this file it will work
app.locals.basedir = path.join(__dirname, 'views');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
