var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiusersRouter = require('./api/users');
var apibannerRouter = require('./api/banner');
var apisingleProductRouter = require('./api/singleProduct');
var app = express();

var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。 
    next(); 
  }; 

// cors跨域，运用跨域的中间件  
app.use(allowCrossDomain);  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', apiusersRouter);
app.use('/api/banner', apibannerRouter);
app.use('/api/singleProduct', apisingleProductRouter);

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
