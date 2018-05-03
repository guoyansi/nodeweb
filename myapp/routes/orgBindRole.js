var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var fetch=require('node-fetch');
var remoteHttp=require("../tool/remoteHttp");
var fs=require('fs');
var path=require('path');
/*var filter=require('../tool/filter');*/

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('role/orgBindRolePage'),req,res,function (data) {
        res.render('orgBindRole', { title: '机构授权',data:data});
    });
});
router.post("/orgBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/orgBindRole'),req,res);
});
router.post("/orgNoBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/orgNoBindRole'),req,res);
});


module.exports = router;
