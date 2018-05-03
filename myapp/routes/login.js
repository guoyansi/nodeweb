var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var fetch=require('node-fetch');
var remoteHttp=require("../tool/remoteHttp");
var fs=require('fs');
var path=require('path');
var crypto = require('crypto');

router.all("/page",function (req,res,next) {
    res.render('login', {layout:false,msg:"" });
});
router.all("/null",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('noPage'),req,res,function (data) {
        res.render('noPage',{title:"权限不足",data:data});
    });
});
var loginAfter=function (funList,res) {
    var len=funList.length;
    var href='';
    var b=false;
    if(!len){
        href='/login/null';
    }else{
        for(var i=0;i<len;i++){
            if(funList[i].target=="_self"){
                href=funList[i].funcUrl;
                b=true;
                break;
            }
        }
        if(!b){
           href='/login/null';
        }
    }
    console.log("href:"+href);
    res.redirect(href);
};
router.post("/go",function (req,res,next) {
    var oldPass=req.body.password;
    var md5=crypto.createHash("md5");
    md5.update(oldPass);
    req.body.password=md5.digest('hex');
    remoteHttp.form4(constant.getUrl('login'),req,res,function (data) {
        if(data.status==1){//登录成功
            res.cookie("accessToken",data.accessToken);
            loginAfter(data.user.funList,res);
        }else if(data.status==2){//登录失败
            res.render('login',{layout:false,msg:data.msg,userCode:req.body.userCode,password:oldPass});
        }
    });
});
router.get("/out",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('out'),req,res,function (data) {
        res.redirect("/login/page");
    });
});

router.get("/yzm",function (req,res,next) {
    fetch(constant.getUrl("yzm"))
        .then(function(res) {
            return res.buffer();
        }).then(function(buffer) {
            res.send(buffer);
        });
   /* var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);*/
});


module.exports = router;
