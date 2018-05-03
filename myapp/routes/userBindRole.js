var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var fetch=require('node-fetch');
var remoteHttp=require("../tool/remoteHttp");
var fs=require('fs');
var path=require('path');

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('userBindRole/page'),req,res,function (data) {
        res.render('userBindRole', { title: '用户授权',data:data});
    });
});
router.post("/roleBindUser",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('userBindRole/roleBindUser'),req,res);
});
router.post("/noBindUser",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('userBindRole/deleteRs'),req,res);
});

module.exports = router;
