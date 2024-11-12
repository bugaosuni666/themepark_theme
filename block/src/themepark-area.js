(function (blocks, element, editor,blockEditor, i18n, data,components) {
var InnerBlocks =  wp.blockEditor.InnerBlocks;
var MediaUpload=wp.editor.MediaUpload;	
var BlockList = wp.blockEditor.BlockList;
var el = wp.element.createElement; 
var ColorPalette=wp.components.ColorPalette;	
var	RadioControl=wp.components.RadioControl;	
var CheckboxControl	=wp.components.CheckboxControl;	
var	TextareaControl=wp.components.TextareaControl;
var themecolor1 = object_name.themecolor1;	
var themecolor2	= object_name.themecolor2;
var	TextControl=wp.components.TextControl;	
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
registerBlockType('themepark-block/themepark-area', {
        title: '居中布局区块', 
        icon: 'screenoptions', 
        category: 'themepark-block-b2', 
         keywords: ["布局","背景","居中"],
        description:"这是一个布局模块，可以插入一个可以拥有最大宽度居中的布局块,并且这个区块可设置标题和尾部的按钮",
        attributes: { 
			 tpvedio:{type: 'array'},
			bcolor: {type: 'string',},
			bimg:{type: 'array',},
			bimg2: {type: 'array',},
			bimgp1: {type: 'boolean',default:false},
	        bimgp2: {type: 'boolean',default:false},
			bimgp3: {type: 'boolean',default:false},
			bimgp6: {type: 'boolean',default:false},
			bimgp5: {type: 'boolean',default:false},
			maxw: {type: 'boolean',default:false},
			bimgp4: {type: 'string',},
			bottom:{type:'integer',default:0,},
			top:{type: 'integer',default:0},
			bottomm:{type: 'string',default:' '},
			topm:{type: 'string',default:' '},
			
			detects:{type: 'string',},
				title:{type: 'string'},
		title2:{type: 'string'},
		title1mode:{type: 'string',default:"modle_title1"},
			title1color:{type: 'string',},
			title2color:{type: 'string',},
			titlecolor:{type: 'string',},
			
			title1size:{type: 'integer'},
			title2size:{type: 'integer'},
			titleboder:{type: 'integer',default:1},
			titleboderc:{type: 'string'},
		    titletext:{type: 'string'},
		tiletextsize:{type: 'integer',default:14},
			seo1:{type: 'string',default:'h3'},
			seo2:{type: 'string',},
		    blockbtn:{type: 'string',},
	        blockbtnurl:{type: 'string',},
		  blockbtnc:{type: 'string',},
		blockbtnt:{type:'boolean'},
		moheight:{type: 'string'},
		zhezhao:{type: 'integer'},
		zhezhaocolor:{type: 'string',default:""},	
		movevideo: {type: 'boolean',default:false},	
        },
     
        edit: function (props) {
			var moheight= props.attributes.moheight;
			var bcolor= props.attributes.bcolor;
            var tpvedio= props.attributes.tpvedio;
			var bimg= props.attributes.bimg;
			var bimg2= props.attributes.bimg2;
			var bimgp1= props.attributes.bimgp1;
			var bimgp2= props.attributes.bimgp2;
			var bimgp3= props.attributes.bimgp3;
			var bimgp4= props.attributes.bimgp4;
			var bimgp5= props.attributes.bimgp5;
			var bimgp6= props.attributes.bimgp6;
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var movevideo= props.attributes.movevideo;
			var bottomm= props.attributes.bottomm;
			var topm= props.attributes.topm;
			var title = props.attributes.title;
			var title2 = props.attributes.title2;
		var detects= props.attributes.detects;
		    var title1mode= props.attributes.title1mode;
			var titleboder= props.attributes.titleboder;
			var titleboderc= props.attributes.titleboderc;
			var titlecolor= props.attributes.titlecolor;
			
			var title1color= props.attributes.title1color;
			var title2color= props.attributes.title2color;
			var title1size= props.attributes.title1size;
			var title2size= props.attributes.title2size;
		   var  titletext= props.attributes.titletext;
           var tiletextsize= props.attributes.tiletextsize;
		   var  blockbtn= props.attributes.blockbtn;
		  var  blockbtnc= props.attributes.blockbtnc;
	       var  blockbtnurl= props.attributes.blockbtnurl;
			var blockbtnt= props.attributes.blockbtnt;
		    var seo1= props.attributes.seo1;
			var seo2= props.attributes.seo2;
			
			var zhezhaocolor= props.attributes.zhezhaocolor;
			var zhezhao= props.attributes.zhezhao;
		
		var tpvedio= props.attributes.tpvedio;
		var b2= props.attributes.b2;
		var maxw= props.attributes.maxw;
			
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
			
function fontsizeecho(a){
var b='自定义字号：'+a;
	if(a==12){b='小号(12px)';}
	if(a==16){b='标准(16px)';}	
	if(a==24){b='中等（pc:24,手机：18)';}
	if(a==36){b='大号（pc:36,手机：24）';}
	if(a==42){b='特大号（pc:42,手机：36）';}
	return b;
}			
			
			
		var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='',moheights='',title1sizescss='',title2sizescss='';
	 if(titlecolor){titlecolors="color:"+titlecolor+";"}
			if(titleboderc){titlebodercs=titleboderc}
			if(titleboder){titleboders="border-bottom:"+titleboder+"px solid "+titlebodercs+";"}
			tb=titleboders;
			tb2=titleboders;
			if(title1color){title1colors="color:"+title1color+";"}
			if(title1size){
				title1sizes="font-size:"+title1size+"px;"
			
			}
			
			if(title2size){
				title2sizes="font-size:"+title2size+"px;"
				
			
						  
						  }
			
			
			
			tt1=title1colors+title1sizes;
			if(title2color){title2colors="color:"+title2color+";"}
			
			tt2=title2colors+title2sizes;
		if(tiletextsize){titletexts="font-size:"+tiletextsize+"px;"}
		
		if(title||title2){
		 head=el("div",{className:"post_in_list_head "+title1mode},
						
				el("span",{Style:tt1,className:"main-title "+title1sizescss},title) ,
						
					   el("span",{Style:tt2,className:"as-title "+title2sizescss}, title2),leftrightbtn,
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext)),leftrightbtn2
					   );}	
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn2"},el("span",{Style:blockscs},blockbtn));}	
			
			var bimgss='', bcolors='',bimgs='',styles='',bimgp1s='',bimgp2s='',bimgp3s='',bimgp4s='',bottoms='',tops='',maxws='',bimgsss='',bimg2s='',topvedio='',vedioss='';;
			var imageshow='',imageshow2='';
			if(bimgp1){bimgp1s='background-repeat:no-repeat;'}
			if(bimgp2){bimgp2s='background-size:cover;'}
			if(bimgp3){bimgp3s='background-attachment:fixed;'}
			if(bimgp4){bimgp4s='background-position:'+bimgp4+';'}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
			if(moheight){moheights="height:"+moheight+'px;min-height:'+moheight+'px;';}
			if(bimg){
			imageshow= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													var kong='';
												props.setAttributes({bimg: kong})
												
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:bimg[0].sizes.full.url}) )}

			
						if(bimg2){
			imageshow2= el("div",{className:"postbar_img_in"},
									   el("span",{className:"dieteimglbtn",
												 onClick:(function () {
													var kong=[];
												props.setAttributes({bimg2:''})
												
												 }),
												 },"删除图片") ,
									   el("img",{className:"show",src:bimg2[0].sizes.full.url}) )}
			
			
			
			if(tpvedio){vedioss=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
															  
					onClick:(function () {
													
												props.setAttributes({tpvedio:'',}) 
												
												 })																	  
			
		},"删除视频："+tpvedio[0].name)));	}
			
			
			var Innerbox= el(InnerBlocks, {
                template:  [['core/column',{ 'className':'block_layout_in'}]],templateLock:false,
                allowedBlocks: ['core/column']});
			
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			var zhezhaos='';
			if(zhezhao){zhezhaos=el("div",{className:"shizhezhao",Style:"opacity:"+(zhezhao/100)+';background-color:'+zhezhaocolor+';'})}
			styles=bcolors+bottoms+tops;
			if(maxw==true){maxws='maxw'}
			var movevideos='';
			if(movevideo==false){movevideos='PcOnly '}
			if(tpvedio){topvedio=el("div",{className:movevideos+"themepark-block_layout_ba videoba"},el("video",{poster:tpvedio[0].url,autoplay:"autoplay",preload:"auto",loop:"loop",muted:""},el("source",{src:tpvedio[0].url,type:"video/mp4"})));}
			
			if(bimg){bimgsss=el("div",{className:"PcOnly themepark-block_layout_ba lazyload " ,Style:bimgp1s+bimgp2s+bimgp3s+bimgp4s+"background-image: url("+bimg[0].sizes.full.url+');'})}
			 
			var html=el("section",{className:"block_layout "+detects+topm+bottomm,id:maxws,Style:styles+moheights},el('div',{className:"block_layout_in"},head,Innerbox,blocksb),el("div",{className:"layout_badh"},zhezhaos,topvedio,bimgsss,bimg2s));
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
													el( PanelBody, { title: '标题风格设置', initialOpen:false },
			
		   
		  	   el( PanelRow,{},								
			 el(TextControl , {label: '区块标题',
							 value:  title,
							  onChange: function (el) {props.setAttributes({   title: el })},
						
							
							})), 
		     el( PanelRow,{},	
		    el(TextControl , {label: '区块副标题',
							 value:  title2,
							  onChange: function (el) {props.setAttributes({   title2: el })},
						
							
							})), 
		   
			   el( PanelRow,{},								
			 el(TextareaControl, {label: '文字描述',
							 value:  titletext,
							  onChange: function (el) {props.setAttributes({   titletext: el })},
						
							
							})),   
		   
		   
		   
		   
											 
		el( PanelRow, {},
		el(SelectControl, {label:'区块标题的HTML标签',
         options:[
        { label: "H2", value:"H2"},
		 { label: "H3", value:"H3"},
		 { label: "H4", value:"H4"},
		 { label: "H5", value:"H5"},
	     { label: "b", value:"b"},
		 { label: "div", value:"div"},
        ],
         value: seo1,
         onChange: function (el) {props.setAttributes({ seo1: el })},}) 
				  ),									
				 
								 
		 el( PanelRow, {},
				   el(SelectControl, {label:'选择标题样式',
         options:[
        { label: "默认居左直排", value:"modle_title1"},
		{ label: "居中直排", value:"modle_title2"},
         { label: "居中竖排", value:"modle_title3"},
        ],
         value: title1mode,
         onChange: function (el) {props.setAttributes({  title1mode: el })},})
				  ),						   
		 
				
		 el( PanelRow, {}, el( RangeControl,{label: '主标题自定义字号',min:12,max:50,value:parseInt(title1size),onChange: function (el) {props.setAttributes({ title1size: el })}
		})),												   
												   
												   
													   
		el( PanelRow, {}, el( RangeControl,{label: '副标题自定义字号',min:12,max:50,value:parseInt(title2size),onChange: function (el) {props.setAttributes({ title2size: el })}})),
													   
													   
													   
															   
					   										   
											 
			 el( PanelRow, {}, el( RangeControl,{label: '文字描述字号',min:12,max:50,onChange: function (el) {props.setAttributes({tiletextsize: el })},
		value: props.attributes.tiletextsize})),
													   
			   el( PanelRow, {}, el( RangeControl,{label: '标题区域下边框',min:0,max:5,onChange: function (el) {props.setAttributes({  titleboder: el })},
		value: props.attributes.titleboder})),										   
													   
													   
		   
		
		   
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'主标题颜色',	  el(ColorPalette,{
			colors : [
        { name: '灰色', color: '#666666' },
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
		onChange: function (el) {props.setAttributes({  title1color: el })},
		value: props.attributes.title1color}))),
		 
		   
		   el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'副标题颜色',	  el(ColorPalette,{
			colors : [
        { name: '灰色', color: '#666666' },
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
		onChange: function (el) {props.setAttributes({  title2color: el })},
		value: props.attributes.title2color}))),  
		 
		    el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文字描述颜色', el(ColorPalette,{
			colors : [
        { name: '灰色', color: '#666666' },
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
		onChange: function (el) {props.setAttributes({ titlecolor: el })},
		value: props.attributes.titlecolor}))),
		
		 
		  
		      
		  el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'边框颜色',	  el(ColorPalette,{
			colors : [
        { name: '灰色', color: '#666666' },
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
		onChange: function (el) {props.setAttributes({titleboderc: el })},
		value: props.attributes.titleboderc}))), 

											 
		el( PanelRow, {}, 						
					 el(TextControl , {
							 value:blockbtn,
							 label:'底部按钮',
							onChange: function (el) {props.setAttributes({ blockbtn: el })},
							
							})),									 
											 
		 										   
			
			el( PanelRow, {}, 						
					 el(TextControl , {
							 value:blockbtnurl,
							 label:'底部按钮url',
							onChange: function (el) {props.setAttributes({ blockbtnurl: el })},
							
							})),									 
											 
			el( PanelRow, {},el( ToggleControl,{label: '按钮边框模式',onChange: ( value ) => {props.setAttributes( { blockbtnt: value } );},
					checked: props.attributes.blockbtnt,})),								  
										  
			
		   el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'底部按钮颜色',	  el(ColorPalette,{
			colors : [
        { name: '灰色', color: '#666666' },
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
		onChange: function (el) {props.setAttributes({  blockbtnc: el })},
		value: props.attributes.blockbtnc}))) 
			 							  
			  ),		
												el( PanelBody, { title: '外观设置', initialOpen: true },
												   
													   
			el( PanelRow, {},el( ToggleControl,{label: '关闭最大宽度',onChange: ( value ) => {props.setAttributes( {maxw: value } );},
					checked:maxw,})),										   
		    el("p",{className:"tishiwenzi"},"你可以关闭最大宽度，最大宽度为1400px"),											
				
			el( PanelRow, {}, el( RangeControl,{label: '内边距(上)',min:0,max:300,onChange: function (el) {props.setAttributes({ top: el })},
		value: props.attributes.top})),	
												   
	
															
													   
												   
												   
												   
				el( PanelRow, {}, el( RangeControl,{label: '内边距(下)',min:0,max:300,onChange: function (el) {props.setAttributes({ bottom: el })},
		value: props.attributes.bottom})),										   
				
									   
												   
												   
													 
		el( PanelRow, {}, 						
					 el(TextControl , {
							 value:moheight,
							 label:'固定高度（px）',
							onChange: function (el) {props.setAttributes({ moheight: el })},
							
							})),									 
																			   
					 el( PanelRow,{},  el("p",{className:"tishiwenzi"},"注意：固定高度如果设置了内边距，整体的高度应该为固定高度值+内边距上下的值")),							   
												   
												   
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
{ name: '主色调配色', color:themecolor1 },
{ name: '主色调配色2', color:themecolor2 },	
        ], 
		onChange: function (el) {props.setAttributes({bcolor: el })},
		value: props.attributes.bcolor})))	,							
		el( PanelRow, {}, el("div",{className:"postbar_img"},imageshow,el( MediaUpload, {
			type: 'image',
			
			value: bimg,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },'PC背景图片上传(1920宽度)')},
			onSelect: function( content ) {
			 var newbimg=[];
			  newbimg.push(content);
			 props.setAttributes({bimg:newbimg});
				
				
			},
		}))	),
										   
												   
												   
			el( PanelRow, {},el( SelectControl, {
			label: props.title,
			selected: bimgp4,
			
			options : [
        { label: '居左', value: 'left top', },
		{ label: '居中', value: 'center' },
		{ label: '居中和居上', value: 'center top' },	
		{ label: '居中和居下', value: 'center bttom' },
		{ label: '居右', value: 'right top' },	
        ], 
			onChange: function( content ) {
				props.setAttributes( { bimgp4: content } );
				
			},
		})),
			vedioss,
																	
																	
						el( PanelRow,{},     
						 el(MediaUpload,{
		
			 value:tpvedio,
			 onSelect:function( content ) {
				 var newtpvedio=[];
			  newtpvedio.push(content);
			 props.setAttributes({tpvedio:newtpvedio});
			 
			},
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"设置视频背景")}
			
		}
						 
						 ) ),													   
				
		el( PanelRow, {},el( ToggleControl,{label: '移动端开启视频背景',onChange: ( value ) => {props.setAttributes( {movevideo: value } );},
					checked:movevideo,})),												   
			   
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'视频遮罩颜色',	  el(ColorPalette,{
			colors : [
        { name: '黑色', color: '#000000' },
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
		onChange: function (el) {props.setAttributes({  zhezhaocolor: el })},
		value: props.attributes.zhezhaocolor}))),
		   el( PanelRow, {}, el( RangeControl,{label: '视频遮罩透明度',min:0,max:100,onChange: function (el) {props.setAttributes({  zhezhao: el })},
		value: props.attributes.zhezhao})),										   
												   
			el( PanelRow, {},el( CheckboxControl,{label: '背景图片不重复平铺',onChange:function (el) {props.setAttributes( { bimgp1: el } );},checked: props.attributes.bimgp1})),									
			el( PanelRow, {},el( CheckboxControl,{label: '背景图片强制铺满',onChange:function (el) {props.setAttributes( { bimgp2: el } );},checked: props.attributes.bimgp2})),
			el( PanelRow, {},el( CheckboxControl,{label: '背景图片悬浮固定',onChange:function (el) {props.setAttributes( { bimgp3: el } );},checked: props.attributes.bimgp3})),
											   
				el( PanelRow, {},el( CheckboxControl,{label: '背景图片尽头推进效果',onChange:function (el) {props.setAttributes( { bimgp6: el } );},checked: props.attributes.bimgp6})),	
					el( PanelRow, {},el( CheckboxControl,{label: '背景图片镜头推进时倾斜',onChange:function (el) {props.setAttributes( { bimgp5: el } );},checked: props.attributes.bimgp5}))
												
											   
											  ) ),html)
			
		
			
return  controlbpx
			
        },save: function (props) {
			var bcolor= props.attributes.bcolor;
			var bimg= props.attributes.bimg;
			var bimg2= props.attributes.bimg2;
			var bimgp1= props.attributes.bimgp1;
			var bimgp2= props.attributes.bimgp2;
			var bimgp3= props.attributes.bimgp3;
			var bimgp4= props.attributes.bimgp4;
			var bimgp5= props.attributes.bimgp5;
			var bimgp6= props.attributes.bimgp6;
			
			var bottomm= props.attributes.bottomm;
			var topm= props.attributes.topm;
			
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
				var top= props.attributes.top;
			var title = props.attributes.title;
			var title2 = props.attributes.title2;
		     var tpvedio= props.attributes.tpvedio;
		    var title1mode= props.attributes.title1mode;
			var titleboder= props.attributes.titleboder;
			var titleboderc= props.attributes.titleboderc;
			var titlecolor= props.attributes.titlecolor;
			
			var title1color= props.attributes.title1color;
			var title2color= props.attributes.title2color;
			var title1size= props.attributes.title1size;
			var title2size= props.attributes.title2size;
		   var  titletext= props.attributes.titletext;
           var tiletextsize= props.attributes.tiletextsize;
		   var  blockbtn= props.attributes.blockbtn;
		  var  blockbtnc= props.attributes.blockbtnc;
	       var  blockbtnurl= props.attributes.blockbtnurl;
		    var seo1= props.attributes.seo1;
			var seo2= props.attributes.seo2;
		var blockbtnt= props.attributes.blockbtnt;
		var tpvedio= props.attributes.tpvedio;
		var b2= props.attributes.b2;
		var maxw= props.attributes.maxw;	
			var moheight= props.attributes.moheight;	
			var detects= props.attributes.detects;	
				var zhezhaocolor= props.attributes.zhezhaocolor;
			var zhezhao= props.attributes.zhezhao;
			var movevideo= props.attributes.movevideo;
			
			
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
		var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='',title2ss='',titletextssx2='',bimgsss='',topvedio='',moheights='',title1sizescss='',title2sizescss='';
	 if(titlecolor){titlecolors="color:"+titlecolor+";"}
			if(titleboderc){titlebodercs=titleboderc}
			if(titleboder){titleboders="border-bottom:"+titleboder+"px solid "+titlebodercs+";"}
			tb=titleboders;
			tb2=titleboders;
			if(title1color){title1colors="color:"+title1color+";"}
				if(title1size){
				title1sizes="font-size:"+title1size+"px;"
			if(title1size==24){title1sizescss='has-medium-font-size';title1sizes=''}
			if(title1size==36){title1sizescss='has-large-font-size';title1sizes=''}
			if(title1size==42){title1sizescss='has-huge-font-size';title1sizes=''}
			}
			
			if(title2size){
				title2sizes="font-size:"+title2size+"px;"
				
			if(title2size==24){title2sizescss='has-medium-font-size';title2sizes=''}
			if(title2size==36){title2sizescss='has-large-font-size';title2sizes=''}
			if(title2size==42){title2sizescss='has-huge-font-size';title2sizes=''}		  
						  
						  }
			tt1=title1colors+title1sizes;
			if(title2color){title2colors="color:"+title2color+";"}
		
			tt2=title2colors+title2sizes;
		if(tiletextsize){titletexts="font-size:"+tiletextsize+"px;"}
		
		if(title||title2){
			if(title2){title2ss=  el("span",{Style:tt2,className:"as-title "+title2sizescss}, title2);}
			if(titletext){titletextssx2=el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext));}
		 head=el("div",{className:"post_in_list_head "+title1mode},
				el(seo1,{},		
				el("span",{Style:tt1,className:"main-title "+title1sizescss},title) ,
						
					   title2ss),leftrightbtn,
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),titletextssx2,leftrightbtn2
					   );}	
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn2",href:blockbtnurl},el("span",{Style:blockscs},blockbtn));}	
			var bimgss='', bcolors='',bimgs='',styles='',bimgp1s='',bimgp2s='',bimgp3s='',bimgp4s='',bottoms='',tops='',maxws='',bimgp5s='',bimgp6s='',bimg2s='';
	
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bimg){bimgs="background-image:url("+bimg[0].sizes.full.url+");"}
			if(bimgp1){bimgp1s='background-repeat:no-repeat;'}
			if(bimgp2){bimgp2s='background-size:cover;'}
			if(bimgp3){bimgp3s='background-attachment:fixed;'}
			if(bimgp4){bimgp4s='background-position:'+bimgp4+';'}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
			if(moheight){moheights="height:"+moheight+'px;box-sizing: border-box;width: 100%;'}
			if(maxw==true){maxws='maxw'}
			var zhezhaos='';
			if(zhezhao){zhezhaos=el("div",{className:"shizhezhao",Style:"opacity:"+(zhezhao/100)+';background-color:'+zhezhaocolor+';'})}
			
			 if(bimgp5){bimgp5s=' xiena '}
		     if(bimgp6){bimgp6s=' jttj '}
			var movevideos='';
			if(movevideo==false){movevideos='PcOnly '}
			
			if(bimg2){
			if(tpvedio){topvedio=el("div",{className:movevideos+"themepark-block_layout_ba videoba"},el("video",{id:'VideoPlayer',poster:bimg2[0].sizes.full.url,src:tpvedio[0].url,autoplay:"",loop:"",muted:"",defaultmuted:"",playsinline:""},el("source",{src:tpvedio[0].url,type:"video/mp4"})));}
			}else{
				if(tpvedio){topvedio=el("div",{className:movevideos+"themepark-block_layout_ba"},el("video",{id:'VideoPlayer',src:tpvedio[0].url,autoplay:"",loop:"",muted:"",defaultmuted:"",playsinline:""},el("source",{src:tpvedio[0].url,type:"video/mp4"})));}
			}
			
			styles=bcolors+bottoms+tops;	
			if(bimg){bimgsss=el("div",{className:"PcOnly themepark-block_layout_ba lazyload swiper-lazy "+bimgp5s+bimgp6s ,Style:bimgp1s+bimgp2s+bimgp3s+bimgp4s+"","data-src":bimg[0].sizes.full.url})}
			
		    var html=el("section",{className:"block_layout thempark-block "+detects+bottomm+topm,id:maxws,Style:styles+moheights,'data-swiper-parallax':"-700"},el('div',{className:"block_layout_in"},head, el(InnerBlocks.Content ),blocksb),el("div",{className:"layout_badh"},zhezhaos,topvedio,bimgsss,bimg2s));
			
			return html;		
		},
			
       
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


