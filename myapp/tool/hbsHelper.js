var hbs = require('hbs');
var Cache=require('./Cache');
var hleper={};
/**
 * 比较大小
 * @returns {*}
 */
hleper.p_condition=function () {
    var exps = [];
    try{
        //最后一个参数作为展示内容，也就是平时的options。不作为逻辑表达式部分
        var arg_len = arguments.length;
        var len = arg_len-1;
        for(var j = 0;j<len;j++){
            exps.push(arguments[j]);
        }
        var result = eval(exps.join(' '));
        if (result) {
            return arguments[len].fn(this);
        } else {
            return arguments[len].inverse(this);
        }
    }catch(e){
        throw new Error('Handlerbars Helper "p_condition" 不能处理错误的表达式:'+exps.join(' '));
    }

};
/**
 * p_condition简写
 */
hleper.p_cod=function () {
    var exps = [];
    try{
        //最后一个参数作为展示内容，也就是平时的options。不作为逻辑表达式部分
        var arg_len = arguments.length;
        var len = arg_len-1;
        for(var j = 0;j<len;j++){
            exps.push(arguments[j]);
        }
        /*console.log(exps);
        console.log("p_cod 参数："+exps.join(" "));*/
        //console.log(exps);
        //console.log("p_cod 参数："+exps.join(" "));
        /**
         * TODO 如果含有null值  待解决
         * [ '54', '==', null, '&&', '2', '==', '2' ]
            p_cod 参数：54 ==  && 2 == 2
         * @type {Object}
         */
        var result = eval(exps.join(' '));
        if (result) {
            return arguments[len].fn(this);
        } else {
            return arguments[len].inverse(this);
        }
    }catch(e){
        throw new Error('Handlerbars Helper "p_cod" 不能处理错误的表达式:'+exps.join(' '));
    }

};
/**
 * 暂时未使用（待验证）
 * @param value
 * @param text
 * @param list
 * @param selected
 * @returns {string}
 */
hleper.p_option=function (value,text,list,selected) {
    var len=list.length;
    var html="";
    var sel;
    for(var i=0;i<len;i++){
        sel="";
        if(selected==list[i][value]){
           sel="selected=selected";
        }
        html+="<option value='"+list[i][value]+"' sel>"+list[i][text]+"</option>";
    }
    return html;
};
/**
 * 未使用，待废弃（缓存不在前端维护）
 * 获取缓存的dictName
 * @param dictId
 * @param dictValue
 * @param options
 * @returns {*}
 */
hleper.p_cache_getName=function (dictId,dictValue,options) {
    var cache=new Cache().getCache();
    if(!cache){
        return "";
    }
    console.log("读取缓存:"+typeof  cache);
    console.log(cache);
    for(var i=0;i<cache.length;i++){
        console.log("##"+cache[i].dictTypeId+";"+dictId);
        if(cache[i].dictTypeId==dictId){
            for(var j=0;j<cache[i].list.length;j++){
                console.log("**"+cache[i].list[j].dictValue+";"+dictValue);
                if(cache[i].list[j].dictValue==dictValue){
                    return cache[i].list[j].dictName;
                }
            }
        }
    }
    return "";
};
/**
 * 未使用，待废弃（缓存不在前端维护）
 * 返回select的option
 * @param dictId
 * @param select_value
 * @param options
 * @returns {string}
 */
hleper.p_cache_option=function (dictId,select_value,options) {
    var cache=new Cache().getCache();
    if(!cache){
        return "";
    }
    var html="";
    for(var i=0;i<cache.length;i++){
        console.log("##"+cache[i].dictTypeId+";"+dictId);
        if(cache[i].dictTypeId==dictId){
            for(var j=0;j<cache[i].list.length;j++){
                console.log("**"+cache[i].list[j].dictValue+";"+dictValue);
                if(cache[i].list[j].dictValue==select_value){
                    html+="<option value='"+cache[i].list[j].dictValue+"' selected='selected'>cache[i].list[j].dictName</option>";
                }else{
                    html+="<option value='"+cache[i].list[j].dictValue+"'>cache[i].list[j].dictName</option>";
                }
            }
            return html;
        }
    }
    return "";
};



hleper.p_gys=function(a){
    return '您填充的姓名是：>>>' + a;
};

module.exports = hleper;

