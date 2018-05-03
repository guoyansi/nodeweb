var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");

router.all("/page",function (req,res,next) {
    remoteHttp.form4(constant.getUrl('userBoard/getUserBoardList'),req,res,function (data) {
        res.render('userBoard', { title: '用户看板查询',data:data});
    });
});

module.exports = router;
