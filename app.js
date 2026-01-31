var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongo = require('mongoose');
var config = require('./config/db.json');

var indexController = require('./controllers/index');
var usersController = require('./controllers/users');
var chatsController = require('./controllers/chats');
var usersDBController = require('./controllers/usersDB');
var productsController = require('./controllers/product');
var osController = require('./controllers/os');
var carsController = require('./controllers/car');

var app = express();

    mongo
    .connect(config.url)
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => { console.log("Connection error", err) });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexController);
app.use('/users', usersController);
app.use('/chats', chatsController);
app.use('/usersdb', usersDBController);
app.use('/products', productsController);
app.use('/os', osController);
app.use('/cars', carsController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
