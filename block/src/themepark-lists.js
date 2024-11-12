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
registerBlockType('themepark-block/themepark-lists', {
        title: '菜单列表', 
        icon: 'embed-photo', 
        category: 'themepark-block-b1', 
         keywords: ["列表","菜单"],
        description:"插入一个列表，这个列表可以设置超链接，不能设置图标",
        attributes: { 
			bottom:{type:'integer',default:0,},
			top:{type: 'integer',default:0},
			bcolor:{type: 'string',},
			bcolorop:{type: 'integer',default:100},
			bpadding:{type:'boolean'},
			border:{type: 'string'},
			textcolor:{type: 'string'},
			textsize:{type: 'integer',default:16},
        },
     
        edit: function (props) {
           
		
		
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var border= props.attributes.border;
			var textcolor= props.attributes.textcolor;
			var textsize= props.attributes.textsize;
			var bottoms='',tops='',bcolors='',bpaddings='',bstyle='',borders='',textcolors='',textsizes='';
			
	      if(textcolor){textcolors='color:'+textcolor+';'}
		if(textsize){textsizes='font-size:'+textsize+'px;'}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		if(border){borders='border: solid 1px '+border+';'}
		
		    if(bpadding){bpaddings=" padingmodle"}
			
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;

           styles=bottoms+tops+borders+textcolors+textsizes;
		
		
			
			
			var html=el("section",{className:"themepark_lists"+bpaddings,Style:styles},
						
						el(InnerBlocks, {
                template:  [['core/heading',{className:"themepark_lists_head"}],['core/list',{className:"themepark_lists_text"}]],templateLock:false,
                allowedBlocks: ['core/all']}),
						
					   el("div",{className:"themepark_lists_ba",Style:bstyle})
					   );
			
			
			
			
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
	
												el( PanelBody, { title: '区块外观设置', initialOpen:false},
		  			
												   
				
												   
			el( PanelRow, {}, el( RangeControl,{label: '内边距(上)',min:0,max:300,onChange: function (el) {props.setAttributes({ top: el })},
		value: props.attributes.top})),	
				el( PanelRow, {}, el( RangeControl,{label: '内边距(下)',min:0,max:300,onChange: function (el) {props.setAttributes({ bottom: el })},
		value: props.attributes.bottom})),	
			el( PanelRow, {},el( ToggleControl,{label: '左右内边距（2%）',onChange: ( value ) => {props.setAttributes( { bpadding: value } );},
					checked: props.attributes.bpadding,})),									   
			el( PanelRow, {}, el( RangeControl,{label: '列表字体大小',min:10,max:36,onChange: function (el) {props.setAttributes({ textsize: el })},
		value: props.attributes.textsize})),										   
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文字默认颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ textcolor: el })},
		value: props.attributes.textcolor}))),	
		  el("p",{className:"tishiwenzi"},"你还可以单独设置标题或者列表中任意文字颜色"),											   
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
									   
												   
									   
												
											   
											  ) ),html)
			
		
			
return  controlbpx;
			
        },save: function (props) {
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var border= props.attributes.border;
			var textcolor= props.attributes.textcolor;
			var textsize= props.attributes.textsize;
			var bottoms='',tops='',bcolors='',bpaddings='',bstyle='',borders='',textcolors='',textsizes='';
			
		  if(textcolor){textcolors='color:'+textcolor+';'}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		    if(border){borders='border: solid 1px '+border+';'}
		if(textsize){textsizes='font-size:'+textsize+'px;'}
		    if(bpadding){bpaddings=" padingmodle"}
			
			
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;

           styles=bottoms+tops+borders+textcolors+textsizes;
		
		

			
			var html=el("section",{className:"thempark-block themepark_lists"+bpaddings,Style:styles},
						
					   el( InnerBlocks.Content ),
					   el("div",{className:"themepark_lists_ba",Style:bstyle})
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


