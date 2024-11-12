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
registerBlockType('themepark-block/themepark-videotext', {
        title: '视频预设区块', 
        icon: 'embed-photo', 
        category: 'themepark-block-b1', 
         keywords: ["视频","视频和文字","两侧"],
        description:"插入一个有预设样式的图文区块",
        attributes: { 
		  
		    bimg:  {type: 'array'},
			bottom:{type:'integer',default:0,},
			top:{type: 'integer',default:0},
			bili:{type: 'integer',default:45},
			bcolor:{type: 'string',},
			bcolorop:{type: 'integer',default:100},
			bpadding:{type:'boolean'},
			modle:{type: 'boolean'},
			leftright:{type: 'boolean'},
			border:{type: 'string'},
			textalign:{type: 'string'},
			textalign2:{type: 'string'},
			bigpic:{type: 'boolean'},
		    vedio:  {type: 'array'},
        },
     
        edit: function (props) {
           
			
			var bimg= props.attributes.bimg;
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var modle= props.attributes.modle;
			var leftright= props.attributes.leftright;
			var border= props.attributes.border;
			var textalign=props.attributes.textalign;
			var textalign2=props.attributes.textalign2;
			var bigpic=props.attributes.bigpic;
			var vedio=props.attributes.bigpic;
			
			var bottoms='',tops='',bimgss='',modles='',bcolors='',bpaddings='',bstyle='',leftrights='',borders='',textaligns='',textaligns2='';
			var imageshow;
			var left='',right='';
			var bili= props.attributes.bili;
		   if(bili!=45){left="width:"+bili+"%;";right="width:"+(97-bili)+"%;"}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		if(border){borders='border: solid 1px '+border+';'}
			if(modle){modles=" updonwmodle"}
		    if(bpadding){bpaddings=" padingmodle"}
			 if(leftright){leftrights=" leftright"}
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;
			if(textalign){textaligns='text-align:'+textalign+';'}
			if(textalign2){textaligns2='text-align:'+textalign2+';'}
			
			
			
			
			
			var Innerbox= el(InnerBlocks, {
             
				 template:  [['core/column',{className:"themepark_imgtext_text",Style:styles}],['core/video',{className:"themepark_imgtext_img"}]],templateLock:false,
                allowedBlocks: ['core/column']});
			
		
			styles=bottoms+tops+borders;
			var iner_t='';var inter_b='',bigpics='';
			
		
			if(bigpic==true){bigpics=' bigpic '}
			var html=el("section",{className:"themepark_imgtext"+bigpics+modles+bpaddings+leftrights,Style:styles},Innerbox,
						
						
					   el("div",{className:"themepark_imgtext_ba",Style:bstyle})
					   );
			
			
			
			
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
												el( PanelBody, { title: '外观设置', initialOpen: true },
		  			
												   
				el( PanelRow, {},el( ToggleControl,{label: '开启上下模式',onChange: ( value ) => {props.setAttributes( { modle: value } );},
					checked: props.attributes.modle,})),
				el( PanelRow, {},el( ToggleControl,{label: '左右对调',onChange: ( value ) => {props.setAttributes( { leftright: value } );},
					checked: props.attributes.leftright,})),	
												   
					el( PanelRow, {},el( ToggleControl,{label: '左右模式关闭等比缩放图片',onChange: ( value ) => {props.setAttributes( { bigpic: value } );},
					checked: props.attributes.bigpic,})),							   
												   
												   
			el( PanelRow, {}, el( RangeControl,{label: '左右比例',min:10,max:90,onChange: function (el) {props.setAttributes({ bili: el })},
		value: props.attributes.bili})),
												   
			el( PanelRow, {}, el( RangeControl,{label: '内边距(上)',min:0,max:300,onChange: function (el) {props.setAttributes({ top: el })},
		value: props.attributes.top})),	
				el( PanelRow, {}, el( RangeControl,{label: '内边距(下)',min:0,max:300,onChange: function (el) {props.setAttributes({ bottom: el })},
		value: props.attributes.bottom})),	
			el( PanelRow, {},el( ToggleControl,{label: '左右内边距（2%）',onChange: ( value ) => {props.setAttributes( { bpadding: value } );},
					checked: props.attributes.bpadding,})),									   
				
												   
			el( PanelRow, {},el( SelectControl, {
			label: "文字对齐方式",
			value: textalign,
			
			options : [
        { label: '居左', value:'left', },
		{ label: '居中', value: 'center' },
		{ label: '居右', value: 'right' },	
	
        ], 
			onChange: function( content ) {
				props.setAttributes( { textalign: content } );
				
			},
		})),	
			el( PanelRow, {},el( SelectControl, {
			label: "图片对齐方式",
			value: textalign2,
			
			options : [
        { label: '居左', value:'left', },
		{ label: '居中', value: 'center' },
		{ label: '居右', value: 'right' },	
	
        ], 
			onChange: function( content ) {
				props.setAttributes( { textalign2: content } );
				
			},
		})),											   
												   
												   
												   
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
		value: props.attributes.border})))								   
									   
												   
									   
												
											   
											  ) ),html)
			
		
			
return  controlbpx;
			
        },save: function (props) {
            var bimg= props.attributes.bimg;
			var bottom= props.attributes.bottom;
			var top= props.attributes.top;
			var bcolor= props.attributes.bcolor;
			var bcolorop= props.attributes.bcolorop;
			var bpadding= props.attributes.bpadding;
			var modle= props.attributes.modle;
			var leftright= props.attributes.leftright;
			var border= props.attributes.border;
			var textalign= props.attributes.textalign;
			var textalign2= props.attributes.textalign2;
			var bigpic= props.attributes.bigpic;
			var bottoms='',tops='',bimgss='',modles='',bcolors='',bpaddings='',bstyle='',leftrights='',borders='',textaligns='',textaligns2='',imgbox='';
			var imageshow;
			var left='',right='';
			var bili= props.attributes.bili;
		   if(bili!=45){left="width:"+bili+"%;";right="width:"+(97-bili)+"%;"}
			if(bottom){bottoms='padding-bottom:'+bottom+'px;'}
			if(top){tops='padding-top:'+top+'px;'}
		if(border){borders='border: solid 1px '+border+';'}
			if(modle){modles=" updonwmodle"}
		    if(bpadding){bpaddings=" padingmodle"}
			 if(leftright){leftrights=" leftright"}
			if(bcolor){bcolors="background-color:"+bcolor+";"}
			if(bcolorop){bcolorops="opacity:"+(bcolorop/100)+";"}
			bstyle=bcolors+bcolorops;
            if(textalign){textaligns='text-align:'+textalign+';'}
			if(textalign2){textaligns2='text-align:'+textalign2+';'}
			if(bimg){imgbox=el("img",{src:bimg[0].sizes.full.url})}
		
		
			
		
			
		
			
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


