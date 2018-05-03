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
//var MemcachedStore = require('connect-memcached')(session);
app.use(cookieParser());
//app.use(cookieParser('keyboard cat'));
//app.set('trust proxy', 1); // trust first proxy

/*app.use(session({
    secret: 'keyboard cat',
    resave: false,
    proxy:true,
    key:'sessionId',//session在cookie中保存的键值
    saveUninitialized: false,
    cookie: {
        secure: false,   //是否允许cookie在http中传递
        maxAge:1000*60*60
    },
    store:new MemcachedStore({
        hosts: ['127.0.0.1:3000'],
        secret: '123, easy as ABC. ABC, easy as 123' // Optionally use transparent encryption for memcache session data
    })
}));*/
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    proxy:true,
    key:'sessionId',//session在cookie中保存的键值
    saveUninitialized: false,
    cookie: {
        secure: false,   //是否允许cookie在http中传递
        maxAge:1000*60*60
    }
}));
/*app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});*/

/*app.use(function (req, res, next) {
    var d=domain.create();
    d.on('error',function (err) {
        logger.error(err);
        res.statusCode=500;
        res.json({status:2,msg:"程序异常"});
        d.dispose();
    });
    d.add(req);
    d.add(res);
    d.run(next);
});*/
/*//监听未捕获的异常
process.on('uncaughtException',function(err){
    console.error("程序出现异常");
});
//监听Promise没有被捕获的失败函数
process.on('unhandledRejection',function(err,promise){
    console.error("请求出现异常");
    //console.log(err);
    console.error(promise);
});*/
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
