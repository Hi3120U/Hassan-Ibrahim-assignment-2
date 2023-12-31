/* installed 3rd party packages */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'Assets')));

// Define separate page routes here
app.get('/home', (req, res) => {
  res.render('index', { title: 'Home', page: 'home' });
});

app.get('/about', (req, res) => {
  res.render('index', { title: 'About', page: 'about' });
});

app.get('/projects', (req, res) => {
  res.render('index', { title: 'Projects', page: 'projects' });
});

app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact', page: 'contact' });
});


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error', { title: "Error" });
});

module.exports = app;

