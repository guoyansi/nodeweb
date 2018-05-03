var path=require('path');
var fs=require("fs");
/**
 * 启动时的参数设置
 */
/*var arg = process.argv.splice(2);
console.log('所传递的参数是：', arg);

var paramJson={
    host:"0.0.0.0",
    env:1
};
for(var i=0;i<arg.length;i++){
    var arr=arg[i].split("=");
    paramJson[arr[0]]=arr[1];
}

exports.arg=paramJson;*/

/*var config=fs.readFileSync(path.join(__dirname,'../../config.json'));
config=JSON.parse(config);
console.log("配置信息："+config);*/
/*
//测试路径
var devUrl={
    'test1':config.host+'test1',
    'test2':config.host+'test2',
    'test3':config.host+'test3',
    'test4':path.join(__dirname,'../json/1.json'),
    'targetValueList':path.join(__dirname,'../json/targetValueList.json'),
    'login':path.join(__dirname,'../json/login.json')
};
//线上路径
var onLineUrl={
    'test1':config.host+'test1',
    'test2':config.host+'test2',
    'test3':config.host+'test3',
    'targetValueList':'http://192.168.1.132:8082/targetvalue/idxTeplRel'
};


function url(name) {
    if(exports.arg.env==1){//dev
        if(devUrl[name]){
            return devUrl[name];
        }else{
            console.error("路劲不存在");
        }
    }else if (exports.arg.env==2){
        if(onLineUrl[name]){
            return onLineUrl[name];
        }else{
            console.error("路劲不存在");
        }
    }
}*/
var config=fs.readFileSync(path.join(__dirname,'../../config.json'));
console.log("配置信息："+config);
config=JSON.parse(config);

exports.config=config;
function getUrl(u){
    return config.host+u;
}
exports.getUrl=function (u) {
    return getUrl(u);
};
exports.getUrlAnys=function (u) {
  return config.hostAnys+u;
};
/*
exports.getUrl1=function (opt) {
  if(opt.h==1){//manager
      getUrl(opt.u);
  }else if(opt.h==2){//analysis
      return config.host1+u;
  }
};*/
