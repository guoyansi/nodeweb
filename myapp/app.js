var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var hp = require('./tool/hbsHelper');



var handlebars=require("express3-handlebars").create({
    defaultLayout:'main',
    extname:'.html',
    helpers:hp
});

var app = express();
//禁止模板缓存
app.set('view cache', false);

app.engine('html',handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * 放到app.use(logger('dev'));前面
 * 否则会打印各种静态文件的http请求
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    proxy:true,
    rolling:true,//强制在每一个response中都发送session标识符的cookie
    key:'sessionId',//session在cookie中保存的键值
    saveUninitialized: true,//无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
    cookie: {
        secure: false,   //是否允许cookie在http中传递
        maxAge:1000*60*60
    }
}));
/**
 * ============分发路由
 */
app.use('/test',require('./routes/test'));
app.use('/login',require('./routes/login'));
app.use('/role',require('./routes/role'));
app.use('/userBindRole',require('./routes/userBindRole'));
app.use('/customer',require('./routes/customer'));
app.use('/orgBindRole',require('./routes/orgBindRole'));
app.use('/board',require('./routes/board'));
app.use('/userBoard',require('./routes/userBoard'));
app.use('/targetvalue',require('./routes/targetValue'));
app.use('/admin',require('./routes/admin'));
app.use('/gjdd',require('./routes/gjdd'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
