var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var fetch=require('node-fetch');
var remoteHttp=require("../tool/remoteHttp");
var fs=require('fs');
var path=require('path');
/*var filter=require('../tool/filter');*/

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('role/roleList'),req,res,function (data) {
        res.render('role', { title: '角色管理',data:data});
    });
});

router.post("/getEditDialogInfo",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/getEditDialogInfo'),req,res);
});
router.get("/getEqualLevelRoleListByLevelCode",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/getEqualLevelRoleListByLevelCode'),req,res);
});
router.post("/saveRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/saveRole'),req,res);
});
router.get("/deleteRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/deleteRole'),req,res);
});
router.post("/getOrgDialogInfo",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/getOrgDialogInfo'),req,res);
});
router.post("/orgBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/orgBindRole'),req,res);
});
router.post("/orgNoBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/orgNoBindRole'),req,res);
});

router.get("/roleBindBoardPage",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('role/roleBindBoardPage'),req,res,function (data) {
        res.render('roleBindBoard',{title:"看板授权",data:data});
    });
});

router.post("/roleBindBoard",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/roleBindBoard'),req,res);
});
router.post("/roleNoBindBoard",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('role/roleNoBindBoard'),req,res);
});
module.exports = router;
