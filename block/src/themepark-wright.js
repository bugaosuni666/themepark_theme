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
registerBlockType('themepark-block/themepark-wright', {
        title: '段落增强', 
        icon: 'editor-paragraph', 
        category: 'themepark-block-b1', 
         keywords: ["段落","框"],
        description:"这个区块你可以直接定义多个段落的样式，并可以设置背景、边框等，而不需要像默认段落一样只能一个个的设置",
        attributes: { 
		  
		   
			font:{type:'integer',default:12},
			font2:{type:'integer',default:20},
			font3:{type:'integer',default:0},
			font4:{type: 'string'},
			font5:{type: 'string'},
			font6:{type: 'string',default:"solid"},
			font7:{type: 'string',default:"#333"},
			font8:{type:'integer',default:0},
			font9:{type:'integer',default:10},
			font0:{type:'integer',default:10},
        },
     
        edit: function (props) {
			var font= props.attributes.font;
            var font2= props.attributes.font2;
			var font3= props.attributes.font3;
			var font4= props.attributes.font4;
			var font5= props.attributes.font5;
			var font6= props.attributes.font6;
			var font7= props.attributes.font7;
			var font8= props.attributes.font8;
			var font9= props.attributes.font9;
			var font0= props.attributes.font0;
			
			var fonts='',fonts2='',fonts3='',fonts4='',fonts5='',fonts6='',fonts7='',fonts8='',fonts9='',fonts0='';
			
			if(font){fonts='font-size:'+font+'px;';}
			if(font2){fonts2='line-height:'+font2+'px;';}
			if(font3){fonts3='text-indent:'+font3+'em;';}
			if(font4){fonts4='color:'+font4+';';}
			if(font5){fonts5='background-color:'+font5+';';}
			if(font8){fonts8=' border:'+font8+'px '+font7+' '+font6+';';}
			if(font9||font0){fonts9='padding:'+font0+'px '+font9+'px;';}
			
			var Innerbox= el("div",{className:"content-super-p",Style:fonts+fonts2+fonts3+fonts4+fonts5+fonts8+fonts9},
				el(InnerBlocks, {
                template:  [['core/column',{}]],templateLock:false,
                allowedBlocks: ['core/column']}));
			
			
		var controlbpx=el( Fragment, {}, el( InspectorControls, {},
												el( PanelBody, { title: '外观设置', initialOpen: true },
												   
												   
			el( PanelRow, {}, el( RangeControl,{label: '段落字体大小',min:12,max:90,onChange: function (el) {props.setAttributes({ font: el })},
		value: font})),				   
				el( PanelRow, {}, el( RangeControl,{label: '段落字间距',min:12,max:90,onChange: function (el) {props.setAttributes({ font2: el })},
		value: font2})),										   
												   
			el( PanelRow, {}, el( RangeControl,{label: '段落首段缩进字符',min:0,max:10,onChange: function (el) {props.setAttributes({ font3: el })},
		value: font3})),		
			
			el( PanelRow, {}, el( RangeControl,{label: '区块左右内边距',min:0,max:100,onChange: function (el) {props.setAttributes({ font9: el })},
		value: font9})),										   
				el( PanelRow, {}, el( RangeControl,{label: '区块上下内边距',min:0,max:100,onChange: function (el) {props.setAttributes({ font0: el })},
		value: font0})),									   
												   
											   
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'段落文字颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ font4: el })},
		value:font4})))	,
												   
												   
		el( PanelRow, {}, el( RangeControl,{label: '区块边框',min:0,max:20,onChange: function (el) {props.setAttributes({ font8: el })},
		value: font8})),	
												   
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块边框颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ font7: el })},
		value:font7})))	,										   
												   
			el( PanelRow, {},el( SelectControl, {
			label: "边框样式",
			value: font6,
			
			options : [
        { label: '直线', value:'solid', },
		{ label: '虚线', value: 'dashed' },
		{ label: '点线', value: 'dotted' },	
	
        ], 
			onChange: function( content ) {
				props.setAttributes( { font6: content } );
				
			},
		})),											   
												   
												   
											   
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块背景色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ font5: el })},
		value:font5})))	,
																   
												   
												   
												   
															   
												   
												   )),Innerbox);
			
			
		
			
return  controlbpx;
			
        },save: function (props) {
           
			var font= props.attributes.font;
            var font2= props.attributes.font2;
			var font3= props.attributes.font3;
			var font4= props.attributes.font4;
			var font5= props.attributes.font5;
			var font6= props.attributes.font6;
			var font7= props.attributes.font7;
			var font8= props.attributes.font8;
			var font9= props.attributes.font9;
			var font0= props.attributes.font0;
			
			var fonts='',fonts2='',fonts3='',fonts4='',fonts5='',fonts6='',fonts7='',fonts8='',fonts9='',fonts0='';
			
			if(font){fonts='font-size:'+font+'px;';}
			if(font2){fonts2='line-height:'+font2+'px;';}
			if(font3){fonts3='text-indent:'+font3+'em;';}
			if(font4){fonts4='color:'+font4+';';}
			if(font5){fonts5='background-color:'+font5+';';}
			if(font8){fonts8=' border:'+font8+'px '+font7+' '+font6+';';}
			if(font9||font0){fonts9='padding:'+font0+'px '+font9+'px;';}
			
			
			var html= el("div",{className:"content-super-p",Style:fonts+fonts2+fonts3+fonts4+fonts5+fonts8+fonts9},el(InnerBlocks.Content));
			
			
			return  html;
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


