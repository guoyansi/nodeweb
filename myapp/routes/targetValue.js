var express = require('express');
var router = express.Router();
var constant=require("../tool/constant");
var remoteHttp=require("../tool/remoteHttp");
//var fetch=require('node-fetch');

var fs=require('fs');
var path=require('path');

//helpers:hp

router.all("/page",function (req,res,next) {
    remoteHttp.form3(constant.getUrl('targetvalue/idxTeplRel'),req,res,function (data) {
        res.render('targetValue', { title: '目标值管理',data:data});
    });
});

/*function getHtml(data) {
    var theadHtml="";
    var tbodyHtml="";
     for(var i=0;i<data.colInfo.length;i++){
         theadHtml+="<th class='ui-table-td'>data.colInfo[i].colName</th>";
     }
     var col="";
     for(i=0;i<data.colParam.length;i++){
         tbodyHtml+="<tr class='ui-table-tr'>";
         for(var j=0;j<data.list.length;j++){
             col=data.list[j][data.colParam[i]];
             if(col!=undefined){
                 tbodyHtml+=" <td class='ui-table-td'>"+col+"</td>";
                 break;
             }
         }
         tbodyHtml+="</tr>"
     }
     return {theadHtml:theadHtml,tbodyHtml:tbodyHtml};
}*/

router.get("/idxDimDetail",function (req,res,next) {
    remoteHttp.form3(constant.getUrl('targetvalue/idxDimDetail'),req,res,function (data) {
        res.render('targetDetailEdit', { title: '设置目标值',data:JSON.stringify(data)});
    });
});
router.get("/idxDimDetail",function (req,res,next) {
    remoteHttp.form3(constant.getUrl('targetvalue/idxDimDetail'),req,res,function (data) {
        res.render('targetDetailLook', { title: '查看目标值',data:JSON.stringify(data)});
    });
});
router.post("/saveTargetValue",function (req,res,next) {
    remoteHttp.ajax3(constant.getUrl('targetvalue/saveTargetValue'),req,res);
});


/*router.post("/targetValueList",function (req,res,next) {
    remoteHttp.ajax(req,res,req.body);
});
router.get("/targetValueList",function (req,res,next) {
    remoteHttp.ajax(constant.getUrl('targetValueList'),res,req.query);

});*/

module.exports = router;
