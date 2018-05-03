/***************************ajax拦截********************************/
bg.ajax=function(opts){
    var d={
        load:true,//加载动画
        loadText:"数据处理中...",
        done:true,//是否需要执行成功拦截步骤
        fail:true,//是否需要执行失败统一提示
        always:true,//不管成功和失败,是否都执行always(比如未true:ajax效果在ajax结束后不关闭)
        //contentType:"application/json",
        data:{},
        success:function(data,textStatus,jqXHR){},
        error:function(jqXHR,textStatus,errorThrown){},
        type:"post",
        dataType:"json",
        async:true
    };
    //opts.url=bg.appendAccessToken(opts.url);
    opts = $.extend({}, d, opts);
    //opts.data=JSON.stringify(opts.data);
    if(opts.load){
        $.ui_load({
            icon:1,
            msg:opts.loadText
        });
    }
    var success=opts.success;
    opts.success=function(){};
    $.ajax(opts).done(function(data,textStatus,jqXHR){
        if(!opts.done){
            success(data);
            return;
        }
        //ajax请求时 session失效
        if(data.status==3){
            $.ui_dialog({
                type:"e",
                con:data.msg,
                btn:[{name:"确定",action:function(){
                    alert(data.href);
                    window.location.href=data.href;
                }}]
            });
        }else{
            success(data);
        }
    }).fail(function(jqXHR, textStatus, errorThrown){
        if(!opts.fail){
            opts.error(jqXHR,textStatus,errorThrown);
            return;
        }
        alert("连接服务器失败！");
        /*$.ui_dialog({
            type:"e",
            con:"连接服务器失败！",
        });*/
    }).always(function(){
        if(!opts.always){
            return;
        }
        if(opts.load){
            $.ui_load_close();
        }
    });
};
/***************************ajax拦截********************************/
bg.appendAccessToken=function (url) {
    /*var accessToken=window.sessionStorage.getItem("accessToken");
    if(url.indexOf("?")>0){
        url+="&accessToken="+accessToken;
    }else{
        url+="?accessToken="+accessToken;
    }*/
    return url;
};
bg.goPage=function(url){
    window.location.href=bg.appendAccessToken(url);
};
bg.submit=function (str) {
    var obj=$(str);
    /*var accessToken=window.sessionStorage.getItem("accessToken");
    var method=obj.attr("method").toLowerCase();
    if(!method||method=="get"){
        obj.append("<input type='hidden' name='accessToken' value='"+accessToken+"' />");
    }else if(method=="post"){
        var action=obj.attr("action");
        action=bg.appendAccessToken(action);
        obj.attr("action",action);
    }*/
    obj.submit();
};

/**
 * 将list装换成tree
 * @param {Object} myId  数据主键id
 * @param {Object} pId     数据关联的父级id
 * @param {Object} list list集合
 *
 *
 * console.log(JSON.stringify(listToTree("ids","parentId",list)));
 console.log(listToTree("ids","parentId",list));
 */
bg.listToTree=function(myId,pId,list){
    function exists(list, parentId){
        for(var i=0; i<list.length; i++){
            if (list[i][myId] == parentId) return true;
        }
        return false;
    }

    var nodes = [];
    // get the top level nodes
    for(var i=0; i<list.length; i++){
        var row = list[i];
        if (!exists(list, row[pId])){
            nodes.push(row);
        }
    }

    var toDo = [];
    for(var i=0; i<nodes.length; i++){
        toDo.push(nodes[i]);
    }
    while(toDo.length){
        var node = toDo.shift();    // the parent node
        // get the children nodes
        for(var i=0; i<list.length; i++){
            var row = list[i];
            if (row[pId] == node[myId]){
                //var child = {id:row.id,text:row.name};
                if (node.children){
                    node.children.push(row);
                } else {
                    node.children = [row];
                }
                toDo.push(row);
            }
        }
    }
    return nodes;
};
bg.listToTree1=function(list){
    var myId="id";
    var pId="parentId";

    function exists(list, parentId){
        for(var i=0; i<list.length; i++){
            if (list[i][myId] == parentId) return true;
        }
        return false;
    }

    var nodes = [];
    // get the top level nodes
    for(var i=0; i<list.length; i++){
        var row = list[i];
        if (!exists(list, row[pId])){
            nodes.push(row);
        }
    }

    var toDo = [];
    for(var i=0; i<nodes.length; i++){
        toDo.push(nodes[i]);
    }
    while(toDo.length){
        var node = toDo.shift();    // the parent node
        // get the children nodes
        for(var i=0; i<list.length; i++){
            var row = list[i];
            if (row[pId] == node[myId]){
                node.state="closed";
                //var child = {id:row.id,text:row.name};
                if (node.children){
                    node.children.push(row);
                } else {
                    node.children = [row];
                }
                toDo.push(row);
            }
        }
    }
    return nodes;
};


/*设置滚动条*/
/*$(function(){

    if(!window.sessionStorage){
        return ;
    }
    var scrollTop=window.sessionStorage.getItem("scrollTop");
    var scrollLeft=window.sessionStorage.getItem("scrollLeft");
    if(scrollTop&&scrollLeft){
        scrollTop=Number(scrollTop);
        scrollLeft=Number(scrollLeft);
        var doc=$(document);
        doc.scrollTop(scrollTop);
        doc.scrollLeft(scrollLeft);
        window.sessionStorage.removeItem("scrollTop");
        window.sessionStorage.removeItem("scrollLeft");
    }
});*/
/**************************设置滚动条**************************************/

/************************常用正则表达式****************************************/
bg.z={
    phone:/^1(3|4|5|7|8)\d{9}$/,//手机号
    email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,//邮箱
    card:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,//身份证号
    china:/[\u4E00-\u9FA5\uF900-\uFA2D]/,//中文
    englisAndNumber:/^[0-9a-zA-Z]*$/g//只有数字和字母
};
/************************正则表达式****************************************/