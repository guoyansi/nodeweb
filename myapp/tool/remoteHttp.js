var fetch=require('node-fetch');
//var formData=require('form-data');
var heards={
    'Content-Type':'application/json'
};

var remoteHttp={};

remoteHttp.test=function (a) {
    console.log("来自测试的打印："+a);
};

/*var checkRequestType=function (req) {
  if(req.header("X-Requested-With")=="XMLHttpRequest"){
      return true;
  }
  return false;
};*/
var getParam=function (req) {
    var param={};
    for(var k in req.query){
        param[k]=req.query[k];
    }
    for(var k in req.body){
        param[k]=req.body[k];
    }
    return param;
};
/**
 * 客户端发送ajax请求
 * @param url
 * @param res
 * @param param
 */
function ajax (url,res,param) {
    console.log("请求java路径1："+url);
    //console.log("请求参数2："+JSON.stringify(param));
    fetch(url,{method:'POST',body:JSON.stringify(param),headers: heards})
        .then(function (data) {
            return data.json();
        }).then(function (body) {
            //body.href="/login/page";
        console.log(JSON.stringify(body));
            res.send(body);
    });
}

function form(url,res,param,callback) {
    console.log("请求java路径："+url);
    console.log("请求参数："+JSON.stringify(param));
    fetch(url,{method:'POST',body:JSON.stringify(param),headers: heards})
        .then(function (data) {
            return data.json();
        }).then(function (body) {
            console.log(JSON.stringify(body));
        if(body.status==3){//后台session失效
            //res.redirect('/login/page');
            res.render('noSession',{layout:false,msg:body.msg});
        }else if(body.status==4){//程序异常
            res.render("exception",{layout:false,msg:body.msg});
        }else{
            callback(body);
        }
    });
}


/**
 * 追加accessToken
 * @param req
 * @param url
 * @returns {*}
 */
var appendAccessdToken=function(req,url) {
    /*console.log("session:"+JSON.stringify(req.session));
    console.log("cookie:"+JSON.stringify(req.session.cookie));
    console.log("session.id:"+req.session.id);*/
    var accessToken=req.cookies.accessToken;
    if(url.indexOf("?")>0){
        url+="&accessToken="+accessToken;
    }else{
        url+="?accessToken="+accessToken;
    }
    return url;
};

function ajax1 (url,req,res,param) {
    url=appendAccessdToken(req,url);
    ajax(url,res,param);
}

function form1(url,req,res,param,callback) {
    url=appendAccessdToken(req,url);
    form(url,res,param,callback);
}
function ajax2 (url,req,res) {
    url=appendAccessdToken(req,url);
    var param=getParam(req);
    ajax(url,res,param);
}

function form2(url,req,res,callback) {
    url=appendAccessdToken(req,url);
    var param=getParam(req);
    form(url,res,param,callback);
}

var checkParamFromUrl=function (url,req) {
    console.log("请求node路径："+url);
    var arr=req.url.split("?");
    var paramStr="";
    var i=0;
    var param={};
    var arr1=null;
    if(arr.length==2){
        paramStr=arr[1];
    }
    if(paramStr){
        url+="?"+paramStr;
        arr=paramStr.split("&");
        var len=arr.length;
        for(i=0;i<len;i++){
            arr1=arr[i].split("=");
            param[arr1[0]]=arr1[1];
        }
    }
    var allParam=getParam(req);
    for(var k in param){//路径中的参数
        for(var a in allParam){//包括路径中的总参数
            if(k==a){
                delete allParam[a];
                break;
            }
        }
    }
    return {
        url:url,
        param:allParam
    }
};

function ajax3(url,req,res) {
    var data=checkParamFromUrl(url,req);
    url=appendAccessdToken(req,data.url);
    ajax(url,res,data.param);
}
function form3(url,req,res,callback) {
    var data=checkParamFromUrl(url,req);
    url=appendAccessdToken(req,data.url);
    form(url,res,data.param,callback);
}
function ajax4(url,req,res) {
    var data=checkParamFromUrl(url,req);
    url=appendAccessdToken(req,data.url);
    ajax(url,res,data.param);
}
function form4(url,req,res,callback) {
    var data=checkParamFromUrl(url,req);
    url=appendAccessdToken(req,data.url);
    form(url,res,data.param,callback);
}

remoteHttp.ajax=ajax;
remoteHttp.form=form;
remoteHttp.ajax1=ajax1;
remoteHttp.form1=form1;
remoteHttp.ajax2=ajax2;
remoteHttp.form2=form2;
remoteHttp.ajax3=ajax3;
remoteHttp.form3=form3;
remoteHttp.ajax4=ajax4;
remoteHttp.form4=form4;
module.exports=remoteHttp;