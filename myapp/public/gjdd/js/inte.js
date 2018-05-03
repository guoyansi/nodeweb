/**
 * eCharts主题
 */
var dark = {
    // 全图默认背景
    backgroundColor: 'transparent',

    // 默认色板
    color: [
        '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
        '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
        '#B5C334'
    ],

    // 图表标题
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'          // 主标题文字颜色
        }
    },

    // 图例
    legend: {
        textStyle: {
            color: '#ccc'          // 图例文字颜色
        }
    },

    // 值域
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808','#21BCF9'],
        textStyle: {
            color: '#ccc'          // 值域文字颜色
        }
    },

    toolbox: {
        color : ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor : '#FE8463',
        disableColor: '#666'
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(250,250,250,0.8)',     // 提示背景颜色，默认为透明度为0.7的黑色
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
            lineStyle : {          // 直线指示器样式设置
                color: '#aaa'
            },
            crossStyle: {
                color: '#aaa'
            },
            shadowStyle : {                     // 阴影指示器样式设置
                color: 'rgba(200,200,200,0.2)'
            }
        },
        textStyle: {
            color: '#333'
        }
    },

    // 区域缩放控制器
    dataZoom: {
        dataBackgroundColor: '#555',            // 数据背景颜色
        fillerColor: 'rgba(200,200,200,0.2)',   // 填充颜色
        handleColor: '#eee'     // 手柄颜色
    },

    // 网格
    grid: {
        borderWidth: 0
    },

    // 类目轴
    categoryAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 分隔线
            show: false
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#aaa'],
                type: 'dashed'
            }
        },
        splitArea: {           // 分隔区域
            show: false
        }
    },

    polar : {
        name : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        label: {
            textStyle:{
                color: '#ccc'
            }
        },
        lineStyle : {
            color : '#aaa'
        },
        controlStyle : {
            normal : { color : '#fff'},
            emphasis : { color : '#FE8463'}
        },
        symbolSize : 3
    },

    // 折线图默认参数
    line: {
        smooth : true
    },

    // K线图默认参数
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',       // 阳线填充颜色
                color0: '#9BCA63',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#FE8463',   // 阳线边框颜色
                    color0: '#9BCA63'   // 阴线边框颜色
                }
            }
        }
    },

    // 雷达图默认参数
    radar : {
        symbol: 'emptyCircle',    // 图形类型
        symbolSize:3
        //symbol: null,         // 拐点图形类型
        //symbolRotate : null,  // 图形旋转控制
    },

    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 1)'
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                borderColor:'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        // color: '#ccc'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                areaStyle: {
                    color: '#FE8463'
                },
                label: {
                    textStyle: {
                        // color: 'ccc'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#fff'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.2)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.9)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                width: 3,
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        axisTick: {            // 坐标轴小标记
            length :15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        axisLabel: {            // 坐标轴小标记
            textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        splitLine: {           // 分隔线
            length :25,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width:3,
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        pointer: {           // 分隔线
            shadowColor : '#fff', //默认透明
            shadowBlur: 5
        },
        title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        detail : {
            shadowColor : '#fff', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        }
    },

    funnel : {
        itemStyle: {
            normal: {
                borderColor : 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1
            },
            emphasis: {
                borderColor : 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }
        }
    },

    textStyle: {
        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
    }
};
/*翻牌插件*/
(function($) {
	var animation = function(obj, target, opt, h, num) {
		if(num == undefined) {
			/*if(target <= 0) {
				num = -9;
			} else {
				num = 0;
			}*/
            num=Math.floor(Math.random()*10);
            if(num>target){
                num=-1*num;
            }
		} else {
			num++;
		}
		//num = Math.abs(num);
		obj.html("<label class='ui-fp'>"+Math.abs(num)+"</label>");
		if(num == target) {
			$("label", obj).animate({
				"top": "50%"
			}, opt.delay);
		} else {
			$("label", obj).animate({
				"top": "-" + h + "px"
			}, opt.delay, function() {
				animation(obj, target, opt, h, num);
			});
		}
	};
	var defaults = {
		delay: 200,
		v:5
	};
	$.fn.ui_fp = function(opt) {
		return this.each(function(){
			opt = $.extend({}, defaults, opt);
			var obj=$(this).css("position","relative");
			var h = obj.outerHeight(true);
			animation($(this), opt.v, opt, h);
		});
		
	};
})(jQuery);

var timer=null;
/*秒数变化*/
var secondsAdd=function (dateTime,timeType) {
    $("#myDateTime").html(dateTime);
    var doubleNum=function (d) {
      if(d<10){
          return "0"+d;
      }
      return d;
    };

    if(timeType!=1){
        clearInterval(timer);
        return;
    }
    timer=setInterval(function () {
        var t=$("#myDateTime").html();
        var d=new Date(t);
        var time=d.getTime()+1000;
        var tt=new Date(time);
        var targetDate=tt.getFullYear()+"-"+doubleNum((tt.getMonth()+1))+"-"+doubleNum(tt.getDate())+" "+doubleNum(tt.getHours())+":"+doubleNum(tt.getMinutes())+":"+doubleNum(tt.getSeconds());
        $("#myDateTime").html(targetDate);
    },1000);
};
/*var getParam=function () {
    var form=$("#form");
    var dateTime=$("#myDateTime").html();

    $("[name=dateTime]",form).val(dateTime);
    var curD=new Date(dateTime);
    curD=curD.getDate();
    var otherD=new Date(dateStr);
    if(otherD==curD){//今天
        $("[name=timeType]",form).val(1);
    }else {//昨天
        $("[name=timeType]",form).val(2);
    }
    var itemObj=$(".js-f-item.active");
    if(itemObj.is(".js-f-hour")){
        $("[name=item]",form).val(1);
    }else if(itemObj.is(".js-f-pro")){
        $("[name=item]",form).val(2);
    }else if(itemObj.is(".js-f-way")){
        $("[name=item]",form).val(3);
    }else if(itemObj.is(".js-f-48")){
        $("[name=item]",form).val(4);
    }
};*/

var changeCalender=function (dateStr) {
    clearInterval(timerGetInfo);
    var form=$("#form");
    var dateTime=$("#myDateTime").html();
    $("[name=dateTime]",form).val(dateStr);
    var curD=new Date(dateTime);
    curD=curD.getDate();
    var otherD=new Date(dateStr);
    if(otherD==curD){//今天
        $("[name=timeType]",form).val(1);
    }else {//昨天
        $("[name=timeType]",form).val(2);
    }
    var itemObj=$(".js-f-item.active");
    if(itemObj.is(".js-f-hour")){
        $("[name=item]",form).val(1);
    }else if(itemObj.is(".js-f-pro")){
        $("[name=item]",form).val(2);
    }else if(itemObj.is(".js-f-way")){
        $("[name=item]",form).val(3);
    }else if(itemObj.is(".js-f-48")){
        $("[name=item]",form).val(4);
    }

    $("[name=minDate]",form).val(data.param.minDate);
    $("[name=maxDate]",form).val(data.param.maxDate);
    console.log("dateTime:"+$("[name=dateTime]",form).val());
    console.log("timeType:"+$("[name=timeType]",form).val());
    console.log("item:"+$("[name=item]",form).val());
    console.log("minDate:"+$("[name=minDate]",form).val());
    console.log("maxDate:"+$("[name=maxDate]",form).val());
    form.submit();
};
var topMethod=function (json) {
    $(".js-top-data-item").each(function (index) {
        $(this).remove();
    });
    var objTop=$("#js-top-box");
    var html='';
    var i=1;
    for(var k in json){
        html='';
        html+='<div class="js-top-data-item io-main-right-2-group">';
        html+='<div class="io-main-right-2-group-item io-main-right-2-group-item-1">'+i+'</div>';
        html+='<div class="io-main-right-2-group-item io-main-right-2-group-item-2">'+k+'</div>';
        html+='<div class="io-main-right-2-group-item io-main-right-2-group-item-3">'+json[k]+'</div>';
        html+='</div>';
        objTop.append(html);
        i++;
    }
};
var myEchartMap=null;
var myEchartPie=null;
var myEchartColumn=null;
var mapEcharts=function(data){
    var seriesData=[];

    for(var k in data){
        seriesData.push({name:k,value:data[k]});
    }
    /*地图*/
    myEchartMap = echarts.init(document.getElementById('map'));
    myEchartMap.setOption({
        tooltip : {
            trigger: 'item'
        },
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left', //将颜色控制条移出界面
            //x: '-2000000', //将颜色控制条移出界面
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true,
            color:["#016FDD","#fff"]
        },
        roamController: {
            // 指定宽度，决定4向漫游圆盘大小，可指定 {number}（宽度，单位px）
            width: 60,
            // 指定高度，缩放控制键默认会在指定高度的最下方最大化显示，可指定 {number}（高度，单位px）
            height:90,
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name:'订单量',
                type: 'map',
                mapType: 'china',
                roam: true, // 是否开启滚轮缩放和拖拽漫游,默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            textStyle:{
                                fontSize:"10",
                                //roam:true
                            }
                        },
                    },
                    emphasis:{label:{show:true}}
                },
                data:seriesData/*[
                        {name: '北京',value:125},
                        {name: '天津',value: 358},
                        {name: '上海',value: 357},
                        {name: '重庆',value: 1591},
                        {name: '河北',value: 0},
                        {name: '河南',value: 172},
                        {name: '云南',value: 5},
                        {name: '辽宁',value: 305},
                        {name: '黑龙江',value: 1038},
                        {name: '湖南',value: 200},
                        {name: '安徽',value: 854},
                        {name: '山东',value: 1759},
                        {name: '新疆',value: 1096},
                        {name: '江苏',value: 800},
                        {name: '浙江',value: 1651},
                        {name: '江西',value: 235},
                        {name: '湖北',value: 1114},
                        {name: '广西',value: 1987},
                        {name: '甘肃',value: 709},
                        {name: '山西',value: 1312},
                        {name: '内蒙古',value: 694},
                        {name: '陕西',value: 641},
                        {name: '吉林',value: 1786},
                        {name: '福建',value: 28},
                        {name: '贵州',value: 439},
                        {name: '广东',value: 1296},
                        {name: '青海',value: 1467},
                        {name: '西藏',value: 1551},
                        {name: '四川',value: 662},
                        {name: '宁夏',value: 39},
                        {name: '海南',value: 1638},
                        {name: '台湾',value: 1628},
                        {name: '香港',value: 1752},
                        {name: '澳门',value: 170}
                    ]*/
            }
        ]
    });
    myEchartMap.setTheme(dark);
};

var pieCharts=function(data){
    var seriesData=[];
    var legenData=data.legend;
    var len=legenData.length;
    /*if(!len){
        return;
    }*/
    var dataS=data.data;
    for(var i=0;i<len;i++){
        seriesData.push({value:dataS[i],name:legenData[i]});
    }
    //饼图
    myEchartPie=echarts.init(document.getElementById('sxfb-highcharts'));
    myEchartPie.setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)" /*{a 是 series中name}  <br/>{b} : {c} ({d}%)*/
        },
        legend: {
            orient : 'horizontal',
            x : 'center',
            y : "bottom",
            //itemWidth:30,
            textStyle:{    //图例文字的样式
                color:"rgb(193, 193, 193)",
                fontSize:12
            },
            data:legenData//['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        color:['#dc878c','#9e7f7c','#b7a9de','#fe9b48','#6bb8f0','#8ad59c','#657eb7','#d74e3e','#ffc08b','#f2dd5e','#97e776'],//['red','blue','yellow',"gray","green"],//饼图颜色
        calculable : false,
        series : [
            {
                name:'',
                type:'pie',
                radius : '70%',
                center: ['50%', '39%'],
                data:seriesData,
                /*[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]*/
            }
        ]
    });
    myEchartPie.setTheme(dark);
};

//柱状图
var columnEcharts=function(columnData,type){
    var legendData=[];
    var seriesData=[];
    var jsonData=columnData.data;
    var color=["#0794fd","#ff9c1a","#076739"];
    var i=0;
    for(var k in jsonData){
        legendData.push(k);
        seriesData.push({
            name:k,
            type:'bar',
            stack: '广告',
            barMaxWidth:30,//最大宽度
            data:jsonData[k],
            itemStyle:{
                normal:{
                    color:color[i]?color[i]:"red"
                }
            }
        });
        i++;
    }
    //柱状图
    myEchartColumn = echarts.init(document.getElementById('columnEcharts'));
    var option={
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            //orient : 'horizontal',
            x : 'right',
            y:0,
            //y : "bottom",
            //itemWidth:30,
            /*textStyle:{    //图例文字的样式
                color:"rgb(193, 193, 193)",
                fontSize:12
            },*/
            data:legendData//['邮件营销','联盟广告','视频广告']
        },
        calculable : true,
        xAxis : [
            {
                axisLabel:{
                    textStyle:{
                        color:"#c1c1c1"
                    },
                },
                type : 'category',
                splitLine:{ show:false},  //改设置不显示坐标区域内的y轴分割线
                data :columnData.x //['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    textStyle:{
                        color:"#c1c1c1"// 设置y方向字体颜色
                    },
                },
                splitLine:{ show:false}  //改设置不显示坐标区域内的y轴分割线
            }
        ],
        grid:{
            //x:25,
            y:10,
            //x2:5,
            y2:40
            //borderWidth:1
        },
        series :seriesData
    };
    if(type==3){
        option.dataZoom={
            show: true,
            start : 0,
            end : 20,
            handleSize: 20,//滑动条的 左右2个滑动条的大小
            height: 8//组件高度
        };
    }
    myEchartColumn.setOption(option);
    myEchartColumn.setTheme(dark);
};
/*浏览器尺寸变化*/
window.onresize =function(){
    myEchartMap.resize();
    myEchartPie.resize();
    myEchartColumn.resize();
};
var data=$("#dataInput").val();
console.log(data);
data=JSON.parse(data);
//时间
//$("#myDateTime").html(data.param.dateTime);
secondsAdd(data.param.dateTime,data.param.timeType);
//日历
$("#calendar")
    .attr({"data-min-date":data.param.minDate,"data-max-date":data.param.maxDate})
    .flatpickr({
        onChange:function(dateObj,dateStr){
            changeCalender(dateStr);
        }
    });
var getInfo=function (data) {
    //右上角时间和日历

//广州口岸
    $("#guozhouPort").html(data.ports.guangzhou?data.ports.guangzhou:0);
//深圳口岸
    $("#shenzhenPort").html(data.ports.shenzhen?data.ports.shenzhen:0);
//上海口岸
    $("#shanghaiPort").html(data.ports.shanghai?data.ports.shanghai:0);
//背景口岸
    $("#beijingPort").html(data.ports.beijing?data.ports.beijing:0);
//ebay
    $("#ebayPlat").html(data.plats.e?data.plats.e:0);
//vish
    $("#vishPlat").html(data.plats.v?data.plats.v:0);
//菜鸟
    $("#caiNiaoPlat").html(data.plats.a?data.plats.a:0);
//shipping
    $("#shippingPlat").html(data.plats.s?data.plats.s:0);
//饼图
    pieCharts(data.noclct48);
//翻拍
    $(".js-fp").each(function (index) {
        //翻拍ui
        $(this).ui_fp({delay:200,v:data.todayOrderCount[index]});
    });
//产品
    $("#eyb").html(data.prods.eyb);
    $("#ems").html(data.prods.ems);
    $("#small").html(data.prods.small);
//地图
    mapEcharts(data.provs);
//top
    topMethod(data.custTop10);
    if(data.param.item==1){//分时
        $(".js-f-item.js-f-hour").addClass("active");
        columnEcharts(data.times,data.param.item);
    }else if(data.param.item==2){//分省
        $(".js-f-item.js-f-pro").addClass("active");
        columnEcharts(data.cities,data.param.item);
    }else if(data.param.item==3){//分路向
        $(".js-f-item.js-f-way").addClass("active");
        columnEcharts(data.flows,data.param.item);
    }else if(data.param.item==3){//48小时
        $(".js-f-item.js-f-48").addClass("active");
        columnEcharts(data.clct48,data.param.item);
    }
};
getInfo(data);
/**
 * 十秒刷新一次
 */
var timerGetInfo=setInterval(function(){
    $("body").append("<div id='ajax-div' class='io-ajax-div'></div>");
    var param={};
    var itemObj=$(".js-f-item.active");
    if(itemObj.is(".js-f-hour")){//分时
       param.item=1;
    }else if(itemObj.is(".js-f-pro")){//分省
        param.item=2;
    }else if(itemObj.is(".js-f-way")){//分路向
        param.item=3;
    }else if(itemObj.is(".js-f-48")){//48小时
        param.item=4;
    }
    param.timeType=data.param.timeType;
    param.minDate=data.param.minDate;
    param.maxDate=data.param.maxDate;
    param.dateTime=$("#myDateTime").html();
    $.ajax({
        type:"post",
       // dataTyp:"json",
        data:param,
        url:"/gjdd/getData",
        success:function(data){
            //data=JSON.parse(data);
            getInfo(data);
        },
        complete:function () {
            $("#ajax-div").remove();
        }
    });
},10000);
//绑定item项click
$(".js-f-item").click(function(){
    var obj=$(this);
    if(obj.is(".active")){
        return;
    }
    $(".js-f-item").removeClass("active");
    obj.addClass("active");
    if(obj.is(".js-f-hour")){//分时
        columnEcharts(data.times,1);
    }else if(obj.is(".js-f-pro")){//分省
        columnEcharts(data.cities,2);
    }else if(obj.is(".js-f-way")){//分路向
        columnEcharts(data.flows,3);
    }else if(obj.is(".js-f-48")){//48小时
        columnEcharts(data.clct48,4);
    }
});