(function($){
	/**
	 * <div class="ui-tree-child">
						<div class="ui-tree-title">
							<span class="ui-tree-icon ui-tree-icon-show"></span><label class="ui-tree-text">第三层</label>
						</div>
						<div class="ui-tree-child">
							<div class="ui-tree-title">
								<label class="ui-tree-text">第四层1</label>
							</div>
							<div class="ui-tree-title">
								<label class="ui-tree-text">第四层2</label>
							</div>
							<div class="ui-tree-title">
								<label class="ui-tree-text">第四层3</label>
							</div>
						</div>
					</div>
	 * 
	 */
	var makeTreeHtmlByTreeData=function(id,text,html,treeData,open){
			var len=treeData.length;
			if(open){
				html+='<div class="ui-tree-child" style="display:block">';	
			}else{
				html+='<div class="ui-tree-child" style="display:none;>';
			}
			//html+='<div class="ui-tree-child" style="display:block">';	
			for(var i=0;i<len;i++){
				html+='<div class="ui-tree-title">';
				//$("body").append("<p>"+treeData[i].text+"</p>");
				if(treeData[i].children&&treeData[i].children.length>0){
					if(treeData[i].open){
						html+='<span class="js-ui-tree-icon ui-tree-icon ui-tree-icon-show"></span>';
					}else{
						html+='<span class="js-ui-tree-icon ui-tree-icon ui-tree-icon-hide"></span>';
					}
					//html+='<span class="js-ui-tree-icon ui-tree-icon ui-tree-icon-hide"></span>';
				}
				html+='<label class="ui-tree-text">'+treeData[i][text]+'</label>';
				html+='</div>';
				if(treeData[i].children&&treeData[i].children.length>0){
					html=arguments.callee(id,text,html,treeData[i].children,treeData[i].open);
				}
			}
			html+='</div>';
			return html;
	};
	
	var appendNode=function(paddingLeft,data,valueId,objBox){
		var html="";
		html+='<div class="ui-tree-child" style="display:none;">';
		var len=data.length;
		var attrs="";
		var active="";
		for(var i=0;i<len;i++){
			attrs="";
			active="";
			for(var k in data[i]){
				attrs+="tree-"+k+"="+data[i][k]+" ";
				if(data[i]["id"]==valueId&&$(".active",objBox).length==0){
					active="active";
				}
			}
			html+='<div class="ui-tree-title '+active+'" '+attrs+' style="padding-left:'+paddingLeft+'px">';
			//if(data[i].children){//有子节点
				html+='<span class="ui-tree-icon ui-tree-icon-hide"></span>';	
			//}
			html+='<span class="ui-tree-text" style="left:'+(paddingLeft+6)+'px;">'+data[i].text+'</span>';
			html+='</div>';
		}
		html+='</div>';
		return html;
		//obj.closest(".ui-tree-title").after(html);
	};
	var setCss=function(obj,cssStyle){
		//var offset=obj.offset();
		//var left=offset.left;
		//var top=offset.top;
		//var h=obj.outerHeight();
		//top=h+top;
		//cssStyle.left=left;
		//cssStyle.top=top;
		/*if(!cssStyle.width){
			cssStyle.width=obj.width();
		}*/
	};
	var resetTitleW=function(obj){
		var sw=obj[0].scrollWidth;
		$(".ui-tree-title",obj).each(function(){
			var paddingLeft=$(this).css("padding-left");
			paddingLeft=Number(paddingLeft.substring(0,paddingLeft.indexOf("px")));
			$(this).width(sw-paddingLeft);
		});
	};
    var getNode=function (obj) {
    	var attr=obj[0].getAttributeNames();
        var attrs={};
        var index=0;
        var len=attr.length;
        for(var i=0;i<len;i++){
            index=attr[i].indexOf("tree-");
            if(index>-1){
                attrs[attr[i].substr(5)]=obj.attr(attr[i]);
            }
		}
        return attrs;
    };
	var defaults={
		data:[],
		zIndex:1000,
		value:3,
		width:null,
		height:100,
		maxHeight:null,
		maxWidth:null,
		width:null,
		click:function(node){},
        clickObj:function (obj) {},
		getChild:function(nodeDom,callback){},
        getChildFromObj:function (obj,callback) {}
	};

	$.fn.ui_tree=function(opt){
		opt=$.extend({},defaults,opt);
		var objInput=$(this).addClass("ui-tree-input").attr("readonly","readonly").val(opt.value.text);
		
		var cssStyle={"z-index":opt.zIndex,"display":"none"};
		cssStyle.width=opt.width;
		cssStyle.height=opt.height;
		cssStyle.maxHeight=opt.maxHeight;
		cssStyle.maxWidth=opt.maxWidth;
		cssStyle.minWidth=opt.minWidth;
		cssStyle.maxWidth=opt.maxWidth;
		//setCss(objInput,cssStyle);
		var objBox=$("<div class='ui-tree-box'></div>").css(cssStyle);
		objInput.after(objBox);
		
		var html=appendNode(5,opt.data,opt.value.id,objBox);
		objBox.html(html);
		objInput.click(function(){
			if(objBox.is(":visible")){
				objBox.hide();
			}else{
				objBox.show();
			}
			$(".ui-tree-child",objBox).slideDown(function(){
				resetTitleW(objBox);
			});
			
		});
		objBox.on("click",".ui-tree-title",function(){
			var obj=$(this);
			objBox.find(".active").removeClass("active");
			obj.addClass("active");
			resetTitleW(objBox);
			//var attrs=getNode($(this));
			//var b=opt.click(attrs);
			var b=opt.clickObj(obj);
			if(b){
                objInput.val(obj.attr("tree-text"));
			}
			objBox.hide();
		}).on("click",".ui-tree-icon",function(e){
			var obj=$(this);
			if(obj.is(".ui-tree-icon-hide")){//开始 show
				var objTitle=obj.closest(".ui-tree-title");
				var childDom=objTitle.next(".ui-tree-child");
				if(childDom.length>0){//有子节点dom
					obj.removeClass("ui-tree-icon-hide").addClass("ui-tree-icon-show");
					childDom.slideDown(function(){
						resetTitleW(objBox);
					});
				}else{//没有子节点dom
					//var node=getNode(objTitle);
					//opt.getChild
					opt.getChildFromObj(objTitle,function(data){
						var paddingLeft=objTitle.css("padding-left");
						paddingLeft=paddingLeft.substring(0,paddingLeft.indexOf("px"));
						paddingLeft=Number(paddingLeft)+20;
						//alert(paddingLeft);
						obj.removeClass("ui-tree-icon-hide").addClass("ui-tree-icon-show");
						objTitle.after(appendNode(paddingLeft,data,opt.value.id,objBox)).next().slideDown(function(){
							resetTitleW(objBox);
						});
					});
				}
			}else{//开始 hide
				obj.removeClass("ui-tree-icon-show").addClass("ui-tree-icon-hide");
				obj.closest(".ui-tree-title").next(".ui-tree-child").slideUp(function(){
					resetTitleW(objBox);
				});
			}
			e.stopPropagation();
		});
	};
})(jQuery);
