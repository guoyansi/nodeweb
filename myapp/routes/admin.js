var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");
var crypto = require('crypto');

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('admin/page'),req,res,function (data) {
        res.render('admin', { title: '管理员账号管理',data:data});
    });
});
router.get("/getAdminDialogInfo",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('admin/getAdminDialogInfo'),req,res);
});
router.post("/saveAdmin",function (req,res,next) {
    var md5=crypto.createHash("md5");
    md5.update("123456");
    req.body.password=md5.digest('hex');
    remoteHttp.ajax4(constant.getUrl('admin/saveAdmin'),req,res);
});
router.get("/deleteAdmin",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('admin/deleteAdmin'),req,res);
});
router.get("/adminBindRolePage",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('admin/adminBindRolePage'),req,res,function (data) {
        res.render('adminBindRole',{title:"角色授权",data:data});
    });
});
router.post("/adminBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('admin/adminBindRole'),req,res);
});
router.post("/adminNoBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('admin/adminNoBindRole'),req,res);
});
router.post("/getNextLevel",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('admin/getNextLevel'),req,res);
});
module.exports = router;
