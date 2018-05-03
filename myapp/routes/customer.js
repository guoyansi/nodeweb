var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var fetch=require('node-fetch');
var remoteHttp=require("../tool/remoteHttp");
var fs=require('fs');
var path=require('path');
var crypto = require('crypto');

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('customer/page'),req,res,function (data) {
        res.render('customer', { title: '用户账号管理',data:data});
    });
});
router.get("/getOrgList",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/getOrgList'),req,res);
});
router.get("/getCustomerDialogInfo",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/getCustomerDialogInfo'),req,res);
});
router.post("/saveCustomer",function (req,res,next) {
    var md5=crypto.createHash("md5");
    md5.update("123456");
    req.body.password=md5.digest('hex');
    remoteHttp.ajax4(constant.getUrl('customer/saveCustomer'),req,res);
});
router.get("/deleteCustomer",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/deleteCustomer'),req,res);
});
router.get("/customerBindRolePage",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('customer/customerBindRolePage'),req,res,function (data) {
        res.render('customerBindRole',{title:"用户角色授权",data:data});
    })
});
router.post("/customerBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/customerBindRole'),req,res);
});
router.post("/customerNoBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/customerNoBindRole'),req,res);
});
router.post("/getNextLevel",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('customer/getNextLevel'),req,res);
});

module.exports = router;
