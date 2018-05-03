var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('board/getBoardList'),req,res,function (data) {
        res.render('board', { title: '看板管理',data:data});
    });
});
router.get("/getEditDialogInfo",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('board/getEditDialogInfo'),req,res);
});
router.post("/saveBoard",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('board/saveBoard'),req,res);
});
router.post("/deleteBoard",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('board/deleteBoard'),req,res);
});
router.all("/boardBindRolePage",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('board/boardBindRolePage'),req,res,function (data) {
        res.render('boardBindRole', { title: '看板角色授权',data:data});
    });
});
router.post("/boardBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('board/boardBindRole'),req,res);
});
router.post("/boardNoBindRole",function (req,res,next) {
    remoteHttp.ajax4(constant.getUrl('board/boardNoBindRole'),req,res);
});

module.exports = router;
