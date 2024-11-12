(function (blocks, element, editor,blockEditor, i18n, data,components) {
var InnerBlocks =  wp.blockEditor.InnerBlocks;
var MediaUpload=wp.editor.MediaUpload;	
var BlockList = wp.blockEditor.BlockList;
var el = wp.element.createElement; 
var ColorPalette=wp.components.ColorPalette;	
var	RadioControl=wp.components.RadioControl;	
var CheckboxControl	=wp.components.CheckboxControl;		
//const { TextControl, ToggleControl, Panel, PanelBody, PanelRow } = components;	
var	TextControl=wp.components.TextControl;
var	TextareaControl=wp.components.TextareaControl;	
var	ToggleControl=wp.components.ToggleControl;	
var	Panel=wp.components.Panel;	
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var	SelectControl=wp.components.SelectControl;	
var Text=wp.element.Text;
var	RangeControl= wp.components.RangeControl;	
var	InspectorControls=wp.blockEditor.InspectorControls ;	
var RichText = wp.blockEditor.RichText, 
registerBlockType = blocks.registerBlockType;
registerBlockType('themepark-block/themepark-listbox', {
        title: '图标列表', 
        icon: 'embed-photo', 
        category: 'themepark-block-b1', 
         keywords: ["列表","图标"],
        description:"插入一个带有预设图标样式的列表",
        attributes: { 
		  
		    title:{type: 'string'},
			titlecolor:{type: 'string'},
			titlesize:{type: 'integer',default:16},
				detects:{type: 'string',default:""},
			bottom:{type:'integer',default:0,},
			top:{type: 'integer',default:0},
		    iconmodle:{type:  'boolean'},
			bcolor:{type: 'string',},
			bcolorop:{type: 'integer',default:100},
			bpadding:{type:'integer',default:2},
			bpadding2:{type:'integer',default:2},
			border:{type: 'string'},
			lists:{type: 'integer',default:1},
		
			listcolor:{type: 'string'},
			listsize:{type: 'integer',default:14},
			listm:{type: 'integer',default:3},
		    icon:{type: 'array',default: [{ text:"请输入文字", icon:"",url:""}]},
			iconcolor:{type: 'string'},
			 boderup:{type: 'boolean'},
			boderdonw:{type: 'boolean'},
			boderleft:{type: 'boolean'},
			boderright:{type: 'boolean'},
			bodercolor:{type: 'string',default:"#ccc"},
			borderradius:{type: 'integer',},
			
			
        },
     
        edit: function (props) {
           
			
			var title= props.attributes.title;
			var titlecolor= props.attributes.titlecolor;
			var titlesize= props.attributes.titlesize;
			var listm= props.attributes.listm;
			var iconcolor= props.attributes.iconcolor;
			
			var listcolor= props.attributes.listcolor;
			var listsize= props.attributes.listsize;
			var icon= props.attributes.icon;
			var lists= props.attributes.lists;
			var list= props.attributes.list;
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var bpadding2= props.attributes.bpadding2;
			var boderup = props.attributes.boderup;
			var boderdonw = props.attributes.boderdonw;
			var boderleft = props.attributes.boderleft;
			var boderright = props.attributes.boderright;
			var borderradius = props.attributes.borderradius;
			var bodercolor = props.attributes.bodercolor;
			var border= props.attributes.border;
			var  iconmodle= props.attributes.iconmodle;
			var 	detects= props.attributes.detects;
			var bottoms='',tops='',bcolors='',bpaddings='',bstyle='',borders='',titlesizes='',titlecolors='',tts='',ttls='',listcolors='',listsizes='',iconcolors='',listms='',listsizes2='';
			var imageshow;
			var ili='';
function addbr(str){
	if(str){
var str_array = new Array();
str_array = str.split(/[(\r\n)\r\n]+/);	
var s=[];
for (var i = 0; i < str_array.length; i++) {
s[i]=	el("span",{},str_array[i])
	
}
	return s;}
}		
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		if(border){borders='border: solid 1px '+border+';'}
		
		    if(bpadding||bpadding2){
				
				bpaddings='padding-left:'+bpadding+'%;'+'padding-right:'+bpadding2+"%;"}
		
			if(iconmodle==true){
				
				if(listcolor){listcolors='background-color:'+listcolor+';color:#fff;'}
				if(iconcolor){iconcolors='color:#fff;'}
				
			}else{
				
				if(iconcolor){iconcolors='color:'+iconcolor+';'}
				 if(listcolor){listcolors='color:'+listcolor+';'}
				 }
			
			if(listm){listms='margin-bottom:'+listm+'px;';}
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;
			
			if(titlecolor){titlecolors='color:'+titlecolor+';'}
			if(titlesize){titlesizes='font-size:'+titlesize+'px;'}
			tts=titlecolors+titlesizes;
			
			
			if(listsize){listsizes='font-size:'+listsize+'px;line-height:'+(listsize+10)+'px;'}
			ttls=listcolors+listsizes+listms;
			
			
		var boder="",boderups="",boderdonws="",boderlefts="",boderrights="",bodycolors="",borderradiuss="" ;
			if( boderup){ boderups="border-top:solid 1px "+bodercolor+";"}
			if( boderdonw){ boderdonws="border-bottom:solid 1px "+bodercolor+";"}
			if( boderleft){ boderlefts="border-left:solid 1px "+bodercolor+";"}
			if( boderright){ boderrights="border-right:solid 1px "+bodercolor+";"}
			
			if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}	
			boder= boderups+boderdonws+boderlefts+boderrights+bodycolors+borderradiuss ;	
           styles=bottoms+tops;
			var listinput=[],iconlists=[],iconlists2=[];
		
			var titlebox;
			if(title){titlebox=el(  'span',{},title)}
		

	var iconcolors;		
for (var index=0;index<icon.length;index++){
	var iconss='';
	if(icon[index].icon){
	if(!iconmodle){listsizes2='padding-left:'+(listsize+15)+'px;'}
		iconss=el("i",{className:icon[index].icon,Style:iconcolors+'line-height:'+(listsize+10)+'px'})}else{
	if(icon[0].icon){iconss=el("i",{className:icon[0].icon,Style:iconcolors+'line-height:'+(listsize+10)+'px'})}else{listsizes2='';}	
		
	}

	iconlists[index]=el("li",{Style:ttls+listsizes2},iconss,addbr(icon[index].text));
	
	
	iconlists2[index]= 
		el( PanelBody, { title:'列：'+ icon[index].text, initialOpen:false },
		el( PanelRow, {}, 						
					 el(TextControl , {
							 value:icon[index].icon,
							 label:'Font Awesome图标名称',
							onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].icon=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							})),
		   
		   
		   el( PanelRow, {}, 						
					 el(TextareaControl, {
							 value:icon[index].text,
							 label:'列表文字(可换行)',
							onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].text=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							})),
		   
		    el( PanelRow, {}, 						
					 el(TextControl , {
							 value:icon[index].url,
							 label:'URL',
							onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].url=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							}))
		   
		   
	)
	
}			
			var iconmodles='';
			if(iconmodle==true){iconmodles=' iconmodle'}
			
			var html=el("section",{className:"themepark_listbox"+iconmodles+' '+detects,Style:styles},
						
						el("h3",{className:"themepark_listbox_title",Style:tts+bpaddings},titlebox),
						el("ul",{className:"themepark_listbox_list",Style:boder+bpaddings},iconlists),
						
					   el("div",{className:"themepark_listbox_ba",Style:bstyle})
					   );
			
			
			
			
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
												
									el( PanelBody, { title: '列表数量增减', initialOpen: false },							
								el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newicon=icon;
					  newicon.push({text:"请输入文字", icon:"",url:""})
					    newicon=  newicon.filter(function( newicon){return  newicon; });	
					  props.setAttributes({ icon:newicon  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一个元素到最后")
				),
						   
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newicon=icon;
					  newicon.pop();
					    newicon=  newicon.filter(function( newicon){return  newicon; });	
					  props.setAttributes({ icon:newicon  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-window-minimize'})
                ),"删除最后一个元素")
				)  ,   	   
			el( PanelRow, {},					
				el(  TextControl,{label: '填写标题',onChange: function (el) {props.setAttributes({ title: el })},
		value: props.attributes.title}))				  
									  
									  ),
												
									el( PanelBody, { title: '文字样式设置', initialOpen: false },			
																			   
			el( PanelRow, {}, el( RangeControl,{label: '标题字号',min:10,max:48,onChange: function (el) {props.setAttributes({ titlesize: el })},
		value: props.attributes.titlesize})),
									   
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'标题颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
		onChange: function (el) {props.setAttributes({ titlecolor: el })},
		value: props.attributes.titlecolor}))),	
									   
			el( PanelRow, {}, el( RangeControl,{label: '菜单字号',min:10,max:48,onChange: function (el) {props.setAttributes({ listsize: el })},
		value: props.attributes.listsize})),
									   
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'菜单文字颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
		onChange: function (el) {props.setAttributes({ listcolor: el })},
		value: props.attributes.listcolor}))),											   
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
        ], 
		onChange: function (el) {props.setAttributes({ iconcolor: el })},
		value: props.attributes.iconcolor}))),
									   
        el( PanelRow, {}, el( RangeControl,{label: '菜单间距',min:0,max:30,onChange: function (el) {props.setAttributes({listm: el })},
		value: props.attributes.listm}))
									   
									   
									   
),
									
											
												
												
												el( PanelBody, { title: '区块外观设置', initialOpen:false},
		  			
						  el( PanelRow, {},
		el(SelectControl, {label:'设备识别',
         options:[
        { label: "所有设备都显示", value:""},
		 { label: "只显示在PC设备", value:"PcOnly"},
		 { label: "只显示在移动设备", value:"MovePnly"},
		
        ],
         value:  detects,
         onChange: function (el) {props.setAttributes({  detects: el })},}) 
				  ),						   
												   
												   
	
			el( PanelRow, {},el( ToggleControl,{label: '标签模式',onChange: ( value ) => {props.setAttributes( {iconmodle: value } );},
					checked: props.attributes.iconmodle,})),			
												   
			el( PanelRow, {}, el( RangeControl,{label: '内边距(上)',min:0,max:300,onChange: function (el) {props.setAttributes({ top: el })},
		value: props.attributes.top})),	
				el( PanelRow, {}, el( RangeControl,{label: '内边距(下)',min:0,max:300,onChange: function (el) {props.setAttributes({ bottom: el })},
		value: props.attributes.bottom})),	
												   
					el( PanelRow, {}, el( RangeControl,{label: '左内边距（%）',min:0,max:20,onChange: function (el) {props.setAttributes({ bpadding: el })},
		value: props.attributes.bpadding})),										   
												   
				el( PanelRow, {}, el( RangeControl,{label: '右内边距（%）',min:0,max:20,onChange: function (el) {props.setAttributes({ bpadding2: el })},
		value: props.attributes.bpadding2})),							   
												   
												   
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块背景颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
		onChange: function (el) {props.setAttributes({ bcolor: el })},
		value: props.attributes.bcolor}))),				
			el( PanelRow, {}, el( RangeControl,{label: '背景透明度',min:0,max:100,onChange: function (el) {props.setAttributes({ bcolorop: el })},
		value: props.attributes.bcolorop})),											
	
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块描边色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
		onChange: function (el) {props.setAttributes({ border: el })},
		value: props.attributes.border}))),									   
			el( PanelRow, {},el( CheckboxControl,{label: '显示上边框',onChange:function (el) {props.setAttributes( { boderup: el } );},checked: props.attributes.boderup})),
			 
			el( PanelRow, {},el( CheckboxControl,{label: '显示下边框',onChange: function (el) {props.setAttributes( { boderdonw: el } );},checked: props.attributes.boderdonw})),
											   
			el( PanelRow, {},el( CheckboxControl,{label: '显示左边框',onChange: function (el) {props.setAttributes( { boderleft: el } );},checked: props.attributes.boderleft})),	
			el( PanelRow, {},el( CheckboxControl,{label: '显示右边框',onChange:function (el) {props.setAttributes( { boderright: el} );},checked: props.attributes.boderright})),  
			
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'边框颜色',	  el(ColorPalette,{
			colors : [
        { name: '默认灰色', color: '#666666' },
		{ name: '白色', color: '#ffffff' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
		onChange: function (el) {props.setAttributes({ bodercolor: el })},
		value: props.attributes.bodercolor}))),							   
												   
									   
												
											   
											  ),iconlists2),html)
			
		
			
return  controlbpx;
			
        },save: function (props) {
			var title= props.attributes.title;
			var titlecolor= props.attributes.titlecolor;
			var titlesize= props.attributes.titlesize;
			var listm= props.attributes.listm;
			var iconcolor= props.attributes.iconcolor;
			
			var listcolor= props.attributes.listcolor;
			var listsize= props.attributes.listsize;
			var icon= props.attributes.icon;
			var lists= props.attributes.lists;
			var list= props.attributes.list;
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var bpadding2= props.attributes.bpadding2;
			var boderup = props.attributes.boderup;
			var boderdonw = props.attributes.boderdonw;
			var boderleft = props.attributes.boderleft;
			var boderright = props.attributes.boderright;
			var borderradius = props.attributes.borderradius;
			var bodercolor = props.attributes.bodercolor;
			var border= props.attributes.border;
			var  iconmodle= props.attributes.iconmodle;
			var detects= props.attributes.detects;
			var bottoms='',tops='',bcolors='',bpaddings='',bstyle='',borders='',titlesizes='',titlecolors='',tts='',ttls='',listcolors='',listsizes='',listsizes2='',listms='';
			var imageshow;
function addbr(str){
	if(str){
var str_array = new Array();
str_array = str.split(/[(\r\n)\r\n]+/);	
var s=[];
for (var i = 0; i < str_array.length; i++) {
s[i]=	el("span",{},str_array[i])
	
}
	return s;}
}			var iconcolors='';
            
		
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		if(border){borders='border: solid 1px '+border+';'}
		
		    if(bpadding||bpadding2){
				
				bpaddings='padding-left:'+bpadding+'%;'+'padding-right:'+bpadding2+"%;"}
			
			
			if(iconmodle==true){
				
				if(listcolor){listcolors='background-color:'+listcolor+';color:#fff;'}
				if(iconcolor){iconcolors='color:#fff;'}
				
			}else{
				
				if(iconcolor){iconcolors='color:'+iconcolor+';'}
				 if(listcolor){listcolors='color:'+listcolor+';'}
				 }
			
			if(listm){listms='margin-bottom:'+listm+'px;';}
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;
			
			if(titlecolor){titlecolors='color:'+titlecolor+';'}
			if(titlesize){titlesizes='font-size:'+titlesize+'px;'}
			tts=titlecolors+titlesizes;
			
			
			if(listsize){listsizes='font-size:'+listsize+'px;line-height:'+(listsize+10)+'px;';}
			var boder="",boderups="",boderdonws="",boderlefts="",boderrights="",bodycolors="",borderradiuss="" ;
			if( boderup){ boderups="border-top:solid 1px "+bodercolor+";"}
			if( boderdonw){ boderdonws="border-bottom:solid 1px "+bodercolor+";"}
			if( boderleft){ boderlefts="border-left:solid 1px "+bodercolor+";"}
			if( boderright){ boderrights="border-right:solid 1px "+bodercolor+";"}
			
			if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}	
			boder= boderups+boderdonws+boderlefts+boderrights+bodycolors+borderradiuss ;	
			
			ttls=listcolors+listsizes+listms;
			
           styles=bottoms+tops;
		
			var listinput=[],iconlists=[],iconlists2=[];
			
			for (var index=0;index<icon.length;index++){
	var iconss='';
	if(icon[index].icon){
		if(!iconmodle){listsizes2='padding-left:'+(listsize+15)+'px;'}
		
		iconss=el("i",{className:icon[index].icon,Style:iconcolors+'line-height:'+(listsize+10)+'px'})}else{
	if(icon[0].icon){iconss=el("i",{className:icon[0].icon,Style:iconcolors+'line-height:'+(listsize+10)+'px'})}else{listsizes2='';}	
		
	}
	if(icon[index].text){
		
		if(icon[index].url){iconlists[index]=el("li",{Style:ttls+listsizes2},el('a',{href:icon[index].url},iconss),el(  'a',{href:icon[index].url,Style:ttls}, addbr(icon[index].text)));}else{
	iconlists[index]=el("li",{Style:ttls+listsizes2},iconss, addbr(icon[index].text));}
	}

	
	
}
			var titlebox;
			if(title){titlebox=el("h3",{className:"themepark_listbox_title",Style:tts+bpaddings},el("span",{},title))}
	var iconmodles='';
			if(iconmodle==true){iconmodles=' iconmodle'}
			
			var html=el("section",{className:"thempark-block themepark_listbox"+iconmodles+' '+detects,Style:styles},
						
						titlebox,
						el("ul",{className:"themepark_listbox_list",Style:boder+bpaddings},iconlists),
					   el("div",{className:"themepark_listbox_ba",Style:bstyle})
					   );
			return html;
			
		}
       
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


