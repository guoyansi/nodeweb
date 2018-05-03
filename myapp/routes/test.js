var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");
//var fetch=require('node-fetch');

var fs=require('fs');
var path=require('path');

//helpers:hp

router.get("/page",function (req,res,next) {
    res.render('test/test', { title: '测试页',v1:24});
});

router.get('/list', function(req, res, next) {
    var json={"username":req.query.username,"age":req.query.age};
    remoteHttp.post(constant.getUrl('text1'),json,function (data) {
        res.send(data);
    },function (err) {
        res.send({status:2,msg:"请求出现异常"})
    });
});
router.post('/list', function(req, res, next) {
    var json={"username":req.body.username,"age":req.body.age};
    remoteHttp.post(constant.getUrl('text1'),json,function (data) {
        res.send(data);
    });
});
router.get('/testMap', function(req, res, next) {
    remoteHttp.post(constant.getUrl('text2'),{username:"gggggg",age:25},function (data) {
        res.send(data);
    });
});
router.get('/testParamNoBody', function(req, res, next) {
    remoteHttp.post(constant.getUrl('text3'),{username:"gggggg",age:25},function (data) {
        res.send(data);
    });
});

router.get("/readJson",function (req,res,next) {
   try{
       remoteHttp.post(constant.getUrl('text4'),{},function (data) {
           res.send(data);
       });
   }catch (ex){
       console.log(ex);
   }
});

router.post('/form',function (req,res,next) {
    var json={"username":req.body.username,"age":req.body.age};
    remoteHttp.post(constant.getUrl('text5'),json,function (data) {
        //res.send(data);
        var str=data;
        console.log("返回结果："+data);
        data=JSON.parse(data);
        var list=[
            {name:'安徽省',count:2600},
            {name:'北京市',count:4800},
            {name:'合肥市',count:9800}
        ];
        res.render("test",{title:"测试页",list:list,v1:25,v2:30,str:str,data:data});
    });
});
router.get("/targetValueList",function (req,res,next) {

    remoteHttp.post(constant.getUrl('targetValueList')+'targetValueList',{},function (data) {
        console.log(JSON.stringify(data));
        res.render('targetValue',{title:'目标值管理',data:data});
    })
});

router.get("/loginPage",function (req,res,next) {
    res.render('test/loginPage',{layout:false});
});
router.post("/login",function (req,res,next) {
    var data=JSON.parse(fs.readFileSync(path.join(__dirname,'../json/login.json')));
    if(data.status==1){//登陆成功
        console.log("结果：》》》》"+req.body.username);
        req.session.user={username:req.body.username,pass:req.body.pass};
        res.render('test/loginSuccess',{layout:false,title:'登录结果',data:data});
    }else{//登陆失败
        res.render('test/loginPage',{layout:false,title:'登录系统',data:data});
    }
    /*remoteHttp.post(constant.config('login'),{},function (data) {
       if(data.status==1){//登陆成功
           console.log("结果：》》》》"+req.body.username);
           req.session.user={username:req.body.username,pass:req.body.pass};
           res.render('test/loginSuccess',{layout:false,title:'登录结果',data:data});
       }else{//登陆失败
           res.render('test/loginPage',{layout:false,title:'登录系统',data:data});
       }
    })*/
});
/**
 * 请求类型
 */
router.get("/requestType",function (req,res,next) {
    console.log(req.header("X-Requested-With"));
});
module.exports = router;
