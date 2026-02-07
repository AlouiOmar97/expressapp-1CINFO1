var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongo = require('mongoose');
var config = require('./config/db.json');
var debug = require('debug')('expressapp:server');
var http = require('http');
var indexController = require('./controllers/index');
var usersController = require('./controllers/users');
var chatsController = require('./controllers/chats');
var usersDBController = require('./controllers/usersDB');
var productsController = require('./controllers/product');
var osController = require('./controllers/os');
var carsController = require('./controllers/car');
var { socketIO } = require('./services/chatsService')

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
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// Initialize socket.io with the http server as parameter
const io = socketIO(server);

server.listen(3000,() => {
  console.log('Server is running on port 3000');
})
server.on('error', onError);
server.on('listening', onListening);



module.exports = app;
