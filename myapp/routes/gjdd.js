var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");
var fetch=require('node-fetch');

router.all("/page",function (req,res,next) {
    /*remoteHttp.form4(constant.getUrlAnys("analysis/internationalOrder"),req,res,function (data) {
        res.render('gjdd',{title:'国际订单',layout:false,data:JSON.stringify(data)});
    });*/
    remoteHttp.form4("http://192.168.4.103:28080/analysis/internationalOrder",req,res,function (data) {
        res.render('gjdd',{title:'国际订单',layout:false,data:JSON.stringify(data)});
    });
    //var data1=JSON.stringify(data);
    //console.log(data1);
    //res.render('gjdd',{title:'国际订单',layout:false,data:data1});
});
router.post("/getData",function (req,res,next) {
    //remoteHttp.ajax(constant.getUrlAnys("analysis/internationalOrder"),req,res);
    remoteHttp.ajax4("http://192.168.4.103:28080/analysis/internationalOrder",req,res);
    /*var data1=JSON.stringify(data2);
    console.log(data1);
    res.send({data:data1});*/
});
module.exports = router;
