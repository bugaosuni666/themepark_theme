(function (blocks, element, editor,blockEditor, i18n, data,components) {
var InnerBlocks =  wp.blockEditor.InnerBlocks;
var templateUrl = object_name.templateUrl;
var BlockList = wp.blockEditor.BlockList;
var el = wp.element.createElement; 
var ColorPalette=wp.components.ColorPalette;
var	RangeControl= wp.components.RangeControl;
var logo = object_name.logo;
//const { TextControl, ToggleControl, Panel, PanelBody, PanelRow } = components;	
var	TextControl=wp.components.TextControl;	
var MediaUpload=wp.editor.MediaUpload;	
var	ToggleControl=wp.components.ToggleControl;	
var CheckboxControl	=wp.components.CheckboxControl;	
var	Panel=wp.components.Panel;	
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var Text=wp.element.Text;
var themecolor1 = object_name.themecolor1;	
var themecolor2	= object_name.themecolor2;	
var	SelectControl=wp.components.SelectControl;	
var	TextareaControl=wp.components.TextareaControl;	
var	InspectorControls=wp.blockEditor.InspectorControls ;	
var RichText = wp.blockEditor.RichText, 
registerBlockType = blocks.registerBlockType;
registerBlockType('themepark-block/themepark-header', {
        title: '网站头部模板', 
        icon: 'desktop', 
        category: 'themepark-block-b1', 
        keywords: ["顶部","头部"],
        description:"这个区块可以自定义网站的头部，但注意，区块只能在【区块模板】中使用，创建好了之后可以再页面、分类、文章等内容进行挂载，你可以产生不同的顶部风格对应不同的内容",
        attributes: { 
		   
			
			headinfo:{type: 'array',default: [{module:"1",navtext:"",navb:"",navpd:"15",navc1:"",navc2:"",navc3:"",navc4:"",navc5:"",navc6:"",topc1:"",topc2:"",topf:"",seach1:"",seach2:"",sub:"",subsl:"",subhight:"",submoshi:"",subcolor:"",searchbl:"",navlib:"",navheight:"92",shadow:"",sicon:""}]},
			top_left_txt1:{type: 'array',default: [{text:"请输入文字",url:"",icon:""}]},
			top_left_txt2:{type: 'array',default: [{text:"请输入文字",url:"",icon:""}]},
			icontext:{type: 'array',default: [{title:"热线电话",text:"400-800-****",url:"",icon:"fas fa-headset",color:"#3eaa34"},{title:"在线客服",text:"点击联系",url:"",icon:"fab fa-qq",color:"#f1a433"},{title:"在线客服",text:"点击联系",url:"",icon:"fab fa-qq",color:"#f1a433"}]},
			testnavmenue:{type:'string'},
			headinfotop:{type: 'boolean'},
			hidesearch:{type: 'boolean',default:false},
			logoimg:{type: 'array'},
			baimg:{type: 'array',default:''},
			optop:{type: 'integer'},
			optop2:{type:'string'},
			optop3:{type: 'integer'},
			droplogo:{type: 'array'},
			dropbcolor:{type: 'string'},
			droptcolor:{type: 'string'},
			droptcolor2:{type: 'string'},
			droptcolor3:{type: 'string'},
			
        },
     
      edit: function (props) {
			
			var headinfo = props.attributes.headinfo;
			var top_left_txt1= props.attributes.top_left_txt1;
			var top_left_txt2= props.attributes.top_left_txt2;
			var testnavmenue= props.attributes.testnavmenue;
			var headinfotop= props.attributes.headinfotop;
			var icontext= props.attributes.icontext;
			var logoimg= props.attributes.logoimg;
		    var hidesearch= props.attributes.hidesearch;
		  var optop= props.attributes.optop;
		   var optop2= props.attributes.optop2;
		   var optop3= props.attributes.optop3;
			var baimg= props.attributes.baimg;
		  
		var droplogo= props.attributes.droplogo;
		var dropbcolor= props.attributes.dropbcolor;
		var	droptcolor= props.attributes.droptcolor;
		  	var	droptcolor2= props.attributes.droptcolor2;
		  	var	droptcolor3= props.attributes.droptcolor3;
		  
		  
	function addbr(str,navpd,navstyle,navpdnavc3,navstyle2){
	if(str){
var str_array = new Array();
str_array = str.split(/[(\r\n)\r\n]+/);	
var s=[];

		
for (var i = 0; i < str_array.length; i++) {
if(i==0){
s[i]=el("li",{className:"mu-slide  menu-item current-menu-item",Style:navpdnavc3},el("a",{className:"mu_a"},el("span",{Style:navstyle2},str_array[i])),el("i",{className:"mu_i"}))	
}else{
s[i]= el("li",{className:"mu-slide  menu-item",Style:navpd},el("a",{className:"mu_a"},el("span",{Style:navstyle},str_array[i])),el("i",{className:"mu_i"}))
}	
}
	return s;}
}		
		  
		  
		  
	
		  
		  
		  
		  
		  
		  
		  
		  
			
		var imageshow='',imageshow2='',imageshowd='';	
	if(logoimg){
			imageshow= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													var kong=[];
												props.setAttributes({logoimg:''})
												
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:logoimg[0].sizes.full.url}) )}		
			if(droplogo){
			imageshowd= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													var kong=[];
												props.setAttributes({droplogo:''})
												
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:droplogo[0].sizes.full.url}) )}		
			
			if(baimg){
			imageshow2= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													var kong=[];
												props.setAttributes({baimg:''})
												
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:baimg[0].sizes.full.url}) )}		
			
			
		  
		  var dropbpx='';
		  
		  
			
			var headerclass='',navbac='',navtext='',navb='',navstyle='',navstyle2='',navpd='',navc1='',navc2='',navc3='',navc4='',testnavmenues='',navpdnavc3='',top='',topfs='',topc1s='',topc2s='',topff='',navc5='',navc6='',zhengbac='',search1='',search11='',search2='',optop3s='',optops='',subs='',baimgs='',subss='236',subhight='',subfstyle='',navheight='',navheight2='',navheight3='',shadow='';

			if(headinfo[0].navtext!=''){navtext='font-size:'+headinfo[0].navtext+'px;'}
		    if(headinfo[0].navc1!=''){navc1='color:'+headinfo[0].navc1+';'}
			 if(headinfo[0].navc2!=''){navc2='color:'+headinfo[0].navc2+';'}
			if(headinfo[0].navc3!=''){navc3='background-color:'+headinfo[0].navc3+';'}
		  if(headinfo[0].navlib!=''){navc3='border-bottom: 2px solid'+headinfo[0].navc3+';'}
			if(headinfo[0].navc4!=''){navc4='background-color:'+headinfo[0].navc4+';'}
			if(headinfo[0].module==1||headinfo[0].module==2||headinfo[0].module==4){
		  if(headinfo[0].navheight!=''){navheight='height:'+headinfo[0].navheight+'px;';navheight2='line-height:'+headinfo[0].navheight+'px;';
									  
										  navheight3='max-height:'+headinfo[0].navheight+'px;';}}	
		  
		  
		  if(headinfo[0].navb!=''){navb='font-weight:bold;'}
			
			if(headinfo[0].topf!=''){topfs='font-size:'+headinfo[0].topf+'px;'}
			if(headinfo[0].topc1!=''){topc1s='color:'+headinfo[0].topc1+';'}
			if(headinfo[0].topc2!=''){topc2s='background-color:'+headinfo[0].topc2+';'}
			
			if(headinfo[0].navc5!=''){navc5='background-color:'+headinfo[0].navc5+';'}
		    if(baimg){baimgs='background:url('+baimg[0].url+') top center;'}
		  
			if(headinfo[0].module==2){if(headinfo[0].navc6!=''){navc6='opacity:'+(headinfo[0].navc6/100)+';'}}
			if(headinfo[0].search1!=''){search1='background:'+headinfo[0].search1+';';search11='border: 2px solid '+headinfo[0].search1+';'}
			if(headinfo[0].search2!=''){search2='color:'+headinfo[0].search2+';';}
			if(optop3){optop3s='opacity:'+optop3/100;}
			if(headinfo[0].navc6){optops='opacity:'+headinfo[0].navc6/100;}
			if(headinfo[0].sub){subs='width:'+headinfo[0].sub+'px';subss='padding-left:'+headinfo[0].sub+'px';}
		  if(headinfo[0].subhight){subhight='height:'+headinfo[0].subhight+'px;';}
		  
		  bili1='',bili2='';
		  if(headinfo[0].searchbl){bili1="width:"+(40-headinfo[0].searchbl)+'%;'}
		  if(headinfo[0].searchbl){bili2="width:"+(25+headinfo[0].searchbl)+'%;'}
		  if(headinfo[0].shadow){shadow="box-shadow:0 7px 7px -2px rgba(0, 0, 0, "+(headinfo[0].shadow/100)+');'}
		  
			zhengbac=navc5+navc6+baimgs;
			
			topff=topfs+topc1s;
			navstyle=navtext+navb+navc1;
			navstyle2=navtext+navb+navc2;
			
			if(headinfo[0].navpd!=''){navpd='padding:0 '+headinfo[0].navpd+'px;margin-right: 0;'}
			if(headinfo[0].module==2){headerclass=" newhead "}else if(headinfo[0].module==3){headerclass=" newhead2 ";navbac=el("div",{className:"mu_move_container_bac_clor",Style:navc4});}else if(headinfo[0].module==4){headerclass=" newhead  newheadright"}else if(headinfo[0].module==5){headerclass=" newhead2 newheadcenter";navbac=el("div",{className:"mu_move_container_bac_clor",Style:navc4});}
		  if(headinfo[0].submoshi=='showfristmu'&&headinfo[0].module==3){subfstyle='width:'+headinfo[0].sub+'px;color:#fff;padding: 0 25px;';
									 if(headinfo[0].subcolor){subfstyle=subfstyle+'background-color:'+headinfo[0].subcolor+';';}
								 navpdnavc3=subfstyle;	navstyle2=navtext+navb+'color:#fff;'+navc2;
									 }else{ navpdnavc3=navpd+navc3;}
		  
            
		  var lisearch='',sicons='';
		    if(headinfo[0].sicon){sicons='color:'+headinfo[0].sicon+';'}
		  if(headinfo[0].module==3&&hidesearch==true){
			
			  
			lisearch= el("li",{className:"mu-slide  menu-item search_box_btn",Style:navpdnavc3+';float:right;'},el("i",{className:"search_iocn  fa  fa-search",Style:sicons})) 
			  
		  }
		 var subsls=5,subsls2=[];
		if(headinfo[0].subsl){subsls=headinfo[0].subsl;}	
		  
		 for (var i = 0; i < subsls; i++) {
			 subsls2 [i]= el("li",{Style:subs},"子项目文字描述");
			 
		 }
		  
		  var sublist=el("ul",{className:"sublist",Style:subhight},subsls2,el("div",{className:"dise",Style:subs}),el("div",{className:"dise2",Style:subss},"区块模板挂载区域（仅挂载到三级菜单显示）"));
		  
			if(testnavmenue){testnavmenues= el("nav",{className:"menu_header header_pic_nav mu-wrapper"},addbr(testnavmenue,navpd,navstyle,navpdnavc3,navstyle2),sublist);}else{
				testnavmenues= el("nav",{className:"menu_header header_pic_nav mu-wrapper"},sublist,
						  el("li",{className:"mu-slide  menu-item current-menu-item",Style:navpdnavc3+navheight},el("a",{className:"mu_a",Style:navheight2},el("span",{Style:navstyle2},"首页")),el("i",{className:"mu_i"})),
						   el("li",{className:"mu-slide  menu-item",Style:navpd+navheight},el("a",{className:"mu_a",Style:navheight2},el("span",{Style:navstyle},"关于我们")),el("i",{className:"mu_i"})),
						    el("li",{className:"mu-slide  menu-item",Style:navpd+navheight},el("a",{className:"mu_a",Style:navheight2},el("span",{Style:navstyle},"公司新闻")),el("i",{className:"mu_i"})),
						    el("li",{className:"mu-slide  menu-item",Style:navpd+navheight},el("a",{className:"mu_a",Style:navheight2},el("span",{Style:navstyle},"公司产品")),el("i",{className:"mu_i"})),
						   el("li",{className:"mu-slide  menu-item",Style:navpd+navheight},el("a",{className:"mu_a",Style:navheight2},el("span",{Style:navstyle},"联系我们")),el("i",{className:"mu_i"})),lisearch
						  );
				
				
			}
			var leftbox='',rightbox='',leftboxs=[],rightboxs=[],lefthtml=[],righthtml=[],topst='',topclass='';
		if(headinfotop==true){	
			topclass=' addtop ';
		 top=el("div",{className:"header_top"},el("div",{className:"header_top_in"},
												 el("div",{className:"header_top_left"},lefthtml),
												  el("div",{className:"header_top_right"},righthtml),
												 el("div",{className:"wp_clear"})
												 ),el("div",{className:"header_top_ba",Style:topc2s+optop3s}));
			
			topst=el( PanelBody, { title: '额外顶部风格设置', initialOpen:false },	
			el( PanelRow, {}, 
		           el( RangeControl,{label: '文字字号',min:12,max:36,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].topf=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].topf})),
					 
			
					 
					 
					 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文字颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].topc1=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].topc1}))),
					 	 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'背景颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].topc2=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].topc2}))),
					 
					el( PanelRow, {}, 
		           el( RangeControl,{label: '额外顶部的透明度',min:0,max:100,onChange: function (el) {
				    
			 props.setAttributes({optop3: el })
				   
				   },
		          value: optop3})) , 
					 
			);
			
			leftbox=		el( PanelBody, { title: '额外顶部左边文字', initialOpen:false },				  
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newtop_left_txt1=top_left_txt1;
					  newtop_left_txt1.push({text:"请输入文字",url:"",icon:""})
					    newtop_left_txt1=  newtop_left_txt1.filter(function( newtop_left_txt1){return  newtop_left_txt1; });	
					  props.setAttributes({ top_left_txt1:newtop_left_txt1  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一条文字")
				),
						   
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newtop_left_txt1=top_left_txt1;
					  newtop_left_txt1.pop();
					    newtop_left_txt1=  newtop_left_txt1.filter(function( newtop_left_txt1){return  newtop_left_txt1; });	
					  props.setAttributes({ top_left_txt1:newtop_left_txt1  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-window-minimize'})
                ),"删除最后一条文字")
				) ,leftboxs)
			
			
			for (var index=0;index<top_left_txt1.length;index++){
				if(top_left_txt1[index].icon){
					
				lefthtml[index]=el("a",{Style:topff},el("i",{className:top_left_txt1[index].icon}),top_left_txt1[index].text);	
				}else{
				lefthtml[index]=el("a",{Style:topff},top_left_txt1[index].text);		
				}
				
				
				
				leftboxs[index]=el( PanelBody, { title: '文字'+(index+1), initialOpen: false },	
								  el( PanelRow, {}, 						
					 el(TextControl , {
							 value:top_left_txt1[index].text,
							 label:'标题',
							onChange:(function (index) {
					 return function (el){
						 var newtop_left_txt1=top_left_txt1;
						for (var i = 0; i < newtop_left_txt1.length; i++) {
					       if(i==index){
							  
							 top_left_txt1[index].text=el;
						    
							   
						   }
						}
						 newtop_left_txt1= newtop_left_txt1.filter(function(newtop_left_txt1){return newtop_left_txt1; });	
						 props.setAttributes({top_left_txt1:newtop_left_txt1}) 
					 }
					  
					 })(index),
							
							})),
							 el( PanelRow, {}, 			 
					 el(TextControl , {
							 value:top_left_txt1[index].icon,
							 label:'icon图标',
							onChange:(function (index) {
					 return function (el){
						 var newtop_left_txt1=top_left_txt1;
						for (var i = 0; i < newtop_left_txt1.length; i++) {
					       if(i==index){
							  
							 top_left_txt1[index].icon=el;
						    
							   
						   }
						}
						 newtop_left_txt1= newtop_left_txt1.filter(function(newtop_left_txt1){return newtop_left_txt1; });	
						 props.setAttributes({top_left_txt1:newtop_left_txt1}) 
					 }
					  
					 })(index),
							
							})), 
							 el( PanelRow, {}, 			
								el(TextControl , {
							 value:top_left_txt1[index].url,
							 label:'URL',
							onChange:(function (index) {
					 return function (el){
						 var newtop_left_txt1=top_left_txt1;
						for (var i = 0; i < newtop_left_txt1.length; i++) {
					       if(i==index){
							  
							 top_left_txt1[index].url=el;
						    
							   
						   }
						}
						 newtop_left_txt1= newtop_left_txt1.filter(function(newtop_left_txt1){return newtop_left_txt1; });	
						 props.setAttributes({top_left_txt1:newtop_left_txt1}) 
					 }
					  
					 })(index),
							
							}))					 
								  
								  )
			}
			
			rightbox=		el( PanelBody, { title: '额外顶部右边文字', initialOpen: false },				  
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newtop_left_txt2=top_left_txt2;
					  newtop_left_txt2.push({text:"请输入文字",url:"",icon:""})
					    newtop_left_txt2=  newtop_left_txt2.filter(function( newtop_left_txt2){return  newtop_left_txt2; });	
					  props.setAttributes({ top_left_txt2:newtop_left_txt2  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一条文字")
				),
						   
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newtop_left_txt2=top_left_txt2;
					  newtop_left_txt2.pop();
					    newtop_left_txt2=  newtop_left_txt2.filter(function( newtop_left_txt2){return  newtop_left_txt2; });	
					  props.setAttributes({ top_left_txt2:newtop_left_txt2  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-window-minimize'})
                ),"删除最后一条文字")
				) ,rightboxs)
			
			
			for (var index2=0;index2<top_left_txt2.length;index2++){
					if(top_left_txt2[index2].icon){
					
				righthtml[index2]=el("a",{Style:topff},el("i",{className:top_left_txt2[index2].icon}),top_left_txt2[index2].text);	
				}else{
				righthtml[index2]=el("a",{Style:topff},top_left_txt2[index2].text);		
				}
				rightboxs[index2]=el( PanelBody, { title: '文字'+(index2+1), initialOpen: false },	
								  el( PanelRow, {}, 						
					 el(TextControl , {
							 value:top_left_txt2[index2].text,
							 label:'标题',
							onChange:(function (index2) {
					 return function (el){
						 var newtop_left_txt2=top_left_txt2;
						for (var i = 0; i < newtop_left_txt2.length; i++) {
					       if(i==index2){
							  
							 top_left_txt2[index2].text=el;
						    
							   
						   }
						}
						 newtop_left_txt2= newtop_left_txt2.filter(function(newtop_left_txt2){return newtop_left_txt2; });	
						 props.setAttributes({top_left_txt2:newtop_left_txt2}) 
					 }
					  
					 })(index2),
							
							})),
							 el( PanelRow, {}, 			 
					 el(TextControl , {
							 value:top_left_txt2[index2].icon,
							 label:'icon图标',
							onChange:(function (index2) {
					 return function (el){
						 var newtop_left_txt2=top_left_txt2;
						for (var i = 0; i < newtop_left_txt2.length; i++) {
					       if(i==index2){
							  
							 top_left_txt2[index2].icon=el;
						    
							   
						   }
						}
						 newtop_left_txt2= newtop_left_txt2.filter(function(newtop_left_txt2){return newtop_left_txt2; });	
						 props.setAttributes({top_left_txt2:newtop_left_txt2}) 
					 }
					  
					 })(index2),
							
							})), 
							 el( PanelRow, {}, 			
								el(TextControl , {
							 value:top_left_txt2[index2].url,
							 label:'URL',
							onChange:(function (index2) {
					 return function (el){
						 var newtop_left_txt2=top_left_txt2;
						for (var i = 0; i < newtop_left_txt2.length; i++) {
					       if(i==index2){
							  
							 top_left_txt2[index2].url=el;
						    
							   
						   }
						}
						 newtop_left_txt2= newtop_left_txt2.filter(function(newtop_left_txt2){return newtop_left_txt2; });	
						 props.setAttributes({top_left_txt2:newtop_left_txt2}) 
					 }
					  
					 })(index2),
							
							}))					 
								  
								  )
			}
			
			
			
			}
			
			var searchbox='',contact_box='',cicons1='',cicons2='',cicons3='',cicons3bx='',cicons3bxs='';
		  
			 if(headinfo[0].module==3){
				if(hidesearch==false){ 
			 searchbox=el("div",{className:"search_box_out",id:"newseach",Style:bili1},el("div",{className:"search_box_in"},
				el("p",{},
				  el("span",{className:"sel",Style:search1},el("i",{className:"fas fa-search"}),"全站搜索"),
				   el("span",{Style:search2},"搜索产品"),
				   el("span",{Style:search2},"搜索新闻"),
				   el("span",{Style:search2},"搜索下载"),
				  ),														  
				 el("div",{className:"search_boxs",Style:search11},
						 el("form",{id:"searchform"},
						   el("input",{id:"keywords",type:"text"}),
						    el("input",{type:"submit",value:"搜索",Style:search1})
						   
						   )
						 )));}else{
				 
				 cicons3bx= el( PanelBody, { title: '图标3', initialOpen: false },
		el( PanelRow, {},el( TextControl,{label: '图标名称', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[2].icon=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[2].icon})),
					  
			el( PanelRow, {},el( TextControl,{label: '图标标题', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[2].title=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[2].title})),	
					  
		el( PanelRow, {},el( TextControl,{label: '图标描述', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[2].text=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[2].text})),
					  
			el( PanelRow, {},el( TextControl,{label: 'url', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[2].url=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[2].url})),				  
					el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[2].color=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext: newicontext })
		
		
		},
		value: icontext[2].color}))),	  
					 
					 )  
		if(icontext[2].title){
		
		cicons3=el("a",{className:"header_iconbox_b"},
				
				   el("span",{className:"header_iconbox_b_s"},
					  el("span",{Style:search2},icontext[2].title),
					  el("span",{Style:search2},icontext[2].text)
					 ),  el("i",{className:icontext[2].icon,Style:"background-color:"+icontext[2].color})
				  
				  )
	}	
				 
				cicons3bxs=' threicon' ;
				 
			 }
	
	if(icontext[0].title){
		
		cicons1=el("a",{className:"header_iconbox_b"},
				
				   el("span",{className:"header_iconbox_b_s"},
					  el("span",{Style:search2},icontext[0].title),
					  el("span",{Style:search2},icontext[0].text)
					 ),  el("i",{className:icontext[0].icon,Style:"background-color:"+icontext[0].color})
				  
				  )
	}
	if(icontext[1].title){
		
		cicons2=el("a",{className:"header_iconbox_b"},
				 
				   el("span",{className:"header_iconbox_b_s"},
					  el("span",{Style:search2},icontext[1].title),
					  el("span",{Style:search2},icontext[1].text)
					 ), el("i",{className:icontext[1].icon,Style:"background-color:"+icontext[1].color}),
				  
				  )
	}			 
				 
	if(icontext[0].title||icontext[1].title){		 
	contact_box=el("div",{className:"header_iconbox"+cicons3bxs,Style:bili2},cicons1,cicons2,cicons3)
			}		 
				 
				 
			 }else{
				 
				searchbox= el("div",{className:"listlet"},el("li",{className:"search_box_btn"},el("i",{className:"search_iocn  fa  fa-search",Style:sicons})));
			 }
		var logoimgs='';	
		if(logoimg){logoimgs=logoimg[0].sizes.full.url  }	else{logoimgs=logo;}
		var html=el("div",{className:"header "+headerclass+topclass,Style:shadow}, top,
				   el("div",{className:"nav",Style:navheight},
					 el("div",{className:"logo"},el("a",{},el("img",{src:logoimgs,Style:navheight3}))),contact_box,
					searchbox,
					 el("div",{className:"mu_move_container"},
					    testnavmenues
					  
					   )
					 
					 ),el("div",{className:"haeader_bac_clor",Style:zhengbac+optops}), navbac
				   )
		
		
		var cnav='',cnav2='',cnav3='',zjbox22='';
		  
		 if( headinfo[0].module==5){	cnav=	el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'导航背景色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc4=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc4})));}
		  
		 if(headinfo[0].module==3){	
			cnav=	el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'导航背景色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc4=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc4})));
			 
								 
		zjbox22=	el( PanelBody, { title: '搜索和联系图标', initialOpen: false },
			el( PanelRow, {},el( ToggleControl,{label: '收起搜索框',onChange: ( value ) => {props.setAttributes( { hidesearch: value } );},
					checked: props.attributes.hidesearch,})),
					   
					  el( PanelRow, {}, 
		           el( RangeControl,{label: '搜索框比例',min:0,max:15,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].searchbl=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].searchbl})),		   
					   
					   
				  
				el( PanelRow, {}, el( "lable", {Style:"width:100%;"},'搜索主色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].search1=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].search1}))),	
		el( PanelRow, {}, el( "lable", {Style:"width:100%;"},'搜索和联系文字颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].search2=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].search2}))),
					   
					   	el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'整体背景色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc5=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc5}))),
					   
					   
					   
				   el( PanelBody, { title: '图标1', initialOpen: false },
		el( PanelRow, {},el( TextControl,{label: '图标名称', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[0].icon=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext: newicontext})
		
		
		},value: icontext[0].icon})),
					  
			el( PanelRow, {},el( TextControl,{label: '图标标题', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[0].title=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext: newicontext})
		
		
		},value: icontext[0].title})),	
					  
		el( PanelRow, {},el( TextControl,{label: '图标描述', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[0].text=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[0].text})),
					  
			el( PanelRow, {},el( TextControl,{label: 'url', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[0].url=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[0].url})),
					  
					  
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[0].color=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext: newicontext })
		
		
		},
		value: icontext[0].color}))),		  
					  
					 
					 ),		   
		
				   el( PanelBody, { title: '图标2', initialOpen: false },
		el( PanelRow, {},el( TextControl,{label: '图标名称', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[1].icon=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[1].icon})),
					  
			el( PanelRow, {},el( TextControl,{label: '图标标题', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[1].title=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[1].title})),	
					  
		el( PanelRow, {},el( TextControl,{label: '图标描述', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[1].text=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[1].text})),
					  
			el( PanelRow, {},el( TextControl,{label: 'url', 
				 onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[1].url=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext:  newicontext})
		
		
		},value: icontext[1].url})),				  
					el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newicontext=icontext;
			  newicontext[1].color=el;
			 newicontext= newicontext.filter(function(newicontext){return newicontext; });	
			 props.setAttributes({icontext: newicontext })
		
		
		},
		value: icontext[1].color}))),	  
					 
					 ),cicons3bx   

				  )	;  
			 
			
			 
			 
	 
			 
			 
		 }else{
			 
			cnav2=	el("div",{},el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'整体背景色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc5=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc5}))), el( PanelRow, {}, el("div",{className:"postbar_img"},imageshow2,el( MediaUpload, {
			type: 'image',
			
			value: baimg,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },'背景图片上传（平铺）')},
			onSelect: function( content ) {
			 var newbaimg=[];
			  newbaimg.push(content);
			 props.setAttributes({baimg:newbaimg});
				
				
			},
		}))	));
			cnav3=  el("div",{},el( PanelRow, {}, 
		           el( RangeControl,{label: '背景透明度(靠顶部状态)',min:0,max:100,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].navc6=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].navc6})),
					  
					
					   el( PanelRow, {},
		el(SelectControl, {label:'头部位置',
         options:[
        { label: "默认留出高度", value:""},
		{ label: "覆盖悬浮", value:"closed"},
	 
        ],
         value: optop2,
         onChange: function (el) {
			
			 props.setAttributes({optop2: el })},}) 
				  )	,
					  
					  );
			 
			 
		 };
		
		
		
		var controlbox=el( Fragment, {},el( InspectorControls, {},
							el( PanelBody, { title: '模式和预览', initialOpen: false },
							  
							  									 
		el( PanelRow, {},
		el(SelectControl, {label:'顶部结构选择',
         options:[
        { label: "单层等宽", value:"1"},
		{ label: "单层全宽居中", value:"2"},
		{ label: "单层全宽居右", value:"4"},	 	 
		{ label: "双层叠加", value:"3"},	 
		{ label: "双层居中", value:"5"},		 
        ],
         value: headinfo[0].module,
         onChange: function (el) {
			 var newheadinfo=headinfo;
			  newheadinfo[0].module=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })},}) 
				  )	,
						
				  				   
					el( PanelRow, {},el( ToggleControl,{label: '显示额外的顶部内容',onChange: ( value ) => {props.setAttributes( { headinfotop: value } );},
					checked: props.attributes.headinfotop,})),		   
							   
				  el( PanelRow, {},el( TextareaControl,{label: '导航文字预览调试', onChange:function (el) {props.setAttributes( { testnavmenue: el } );},value: testnavmenue,})), el( PanelRow,{},  el("p",{className:"tishiwenzi"},"区块无法直接调用已选的菜单内容，你可以输入文字，一行一个，以替换默认文字，对导航的内容进行预览，从而方便的设置他们的样式")),
							   
				 el( PanelRow, {}, el("div",{className:"postbar_img"},imageshow,el( MediaUpload, {
			type: 'image',
			
			value: logoimg,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },'logo上传（400X133）')},
			onSelect: function( content ) {
			 var newlogoimg=[];
			  newlogoimg.push(content);
			 props.setAttributes({logoimg:newlogoimg});
				
				
			},
		}))	),cnav2,cnav3
							   
							   
							   
							   
							  
							  ),leftbox,rightbox,topst,el( PanelBody, { title: '导航样式设置', initialOpen: false },
									
								  el( PanelRow, {}, 
		           el( RangeControl,{label: '导航字号',min:12,max:36,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].navtext=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].navtext})),
														  
				 
				el( PanelRow, {}, 	 
				 el( RangeControl,{label: '导航高度（单层模式有效）',min:30,max:200,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].navheight=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].navheight})),	 												  
									
				 el( PanelRow, {},el( CheckboxControl,{label: '字体加粗',onChange:function (el) {
					 var newheadinfo=headinfo;
			  newheadinfo[0].navb=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
					 ;},checked:headinfo[0].navb})),  			
									
					  el( PanelRow, {},  el( RangeControl,{label: '导航之间的间距',min:0,max:50,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].navpd=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].navpd})),
														  
				  el( PanelRow, {},  el( RangeControl,{label: '下拉子菜单宽度',min:200,max:500,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].sub=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].sub})),										  
														  
															  
				  el( PanelRow, {},  el( RangeControl,{label: '下拉子菜单高度',min:200,max:1500,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].subhight=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].subhight})),	
														  
				 el( PanelRow, {},  el( RangeControl,{label: '下拉子菜单数量（便于和前端对应）',min:1,max:30,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].subsl=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].subsl})),											  
				
				  el( PanelRow, {},  el( RangeControl,{label: '头部阴影透明度',min:0,max:100,onChange: function (el) {
				    var newheadinfo=headinfo;
			  newheadinfo[0].shadow=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
				   
				   },
		          value: headinfo[0].shadow})),											  
														  
														  
														  
				el( PanelRow, {},
		el(SelectControl, {label:'第一个下拉子菜单显示模式',
         options:[
        { label: "默认收起", value:""},
		{ label: "强制展开", value:"showfristmu"},
		
		 
        ],
         value: headinfo[0].submoshi,
         onChange: function (el) {
			 var newheadinfo=headinfo;
			  newheadinfo[0].submoshi=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })},}) 
				  )	,
 										  
				 	 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'高亮菜单第一个元素',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].subcolor=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].subcolor}))),										  
					el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文字颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc1=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc1}))),
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'当前页/鼠标经过的文字颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc2=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc2}))),
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'当前页/鼠标经过的背景颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].navc3=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].navc3}))),
														  
														  
														  
														  
														  
														  
	 el( PanelRow, {},el( CheckboxControl,{label: '背景色替换为底部描边',onChange:function (el) {
					 var newheadinfo=headinfo;
			  newheadinfo[0].navlib=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
					 ;},checked:headinfo[0].navlib})),  														  
														  
						el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'搜索和语言图标颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {
		 var newheadinfo=headinfo;
			  newheadinfo[0].sicon=el;
			 newheadinfo= newheadinfo.filter(function(newheadinfo){return newheadinfo; });	
			 props.setAttributes({headinfo: newheadinfo })
		
		
		},
		value: headinfo[0].sicon}))),								  
														  cnav						
								
									
										   
								),dropbpx,zjbox22
										  
										  ),html)
		
		return controlbox;
			
          
        },	save:function (props) {return null}
	
	
			
       
    });
}(
    window.wp.blocks,
	 window.wp.blockEditor,
    window.wp.element,
    window.wp.editor,
	window.wp.data,
    window.wp.i18n,
   window.wp.components
));


