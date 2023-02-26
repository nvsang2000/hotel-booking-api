const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const connect = require('./db/connectDB')

const feHomeRouter = require('./routes/frontend/home');
const feProductsRouter = require("./routes/frontend/products");


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set("layout", "./layouts/layout");

app.use("/", feHomeRouter);
app.use("/products", feProductsRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.use("/asset", express.static(__dirname + "public/asset"));
app.use("/svg", express.static(__dirname + "public/svg"));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/stylesheets', express.static(__dirname + 'public/stylesheets'));
app.use('/vendor', express.static(__dirname + 'public/vendor'));
app.use('/uploads', express.static( __dirname +'public/uploads'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
