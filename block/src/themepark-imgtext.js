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
registerBlockType('themepark-block/themepark-imgtext', {
        title: '图文预设区块', 
        icon: 'embed-photo', 
        category: 'themepark-block-b1', 
         keywords: ["图文","图片和文字","两侧"],
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
			PC:{type: 'boolean'},
			leftright:{type: 'boolean'},
			border:{type: 'string'},
			textalign:{type: 'string'},
			textalign2:{type: 'string'},
			bigpic:{type: 'boolean'},
		    tpvedio:  {type: 'array'},
			moveupd:{type: 'boolean'},
			detects:{type: 'string',},
			imgurl:{type: 'string',},
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
			var tpvedio=props.attributes.tpvedio;
			var moveupd=props.attributes.moveupd;
			var detects= props.attributes.detects;	
			var imgurl= props.attributes.imgurl;	
			var PC= props.attributes.PC;	
			var bottoms='',tops='',bimgss='',modles='',bcolors='',bpaddings='',bstyle='',leftrights='',borders='',textaligns='',textaligns2='',bcolorops='';
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
			var uploadimg=el(MediaUpload, {
			type: 'image',
			value: bimg,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },'图片上传')},
			onSelect: function( content ) {
				 var newbimg=[];
			  newbimg.push(content);
			 props.setAttributes({bimg:newbimg});
			
				
				
			},
		});
				
			
			if(bimg){imageshow= el("div",{},el("img",{src:bimg[0].sizes.full.url}),el("div",{className:"dielt",},el("span",{onClick:function (){

					 props.setAttributes({bimg:''}) ;
					 
					  
					 }},"删除图片"))) }else{imageshow=el("div",{},el("div",{className: 'nopic'},uploadimg))}
			
			
			var Innerbox= el(InnerBlocks, {
                template:  [['core/column',{}]],templateLock:false,
                allowedBlocks: ['core/column']});
			
		var topvedio='';
			if(tpvedio){topvedio=el("figure",{className:"wp-block-video"},el("video",{className:"themepark_imgtext_vidio",poster:bimg[0].sizes.full.url,src:tpvedio[0].url,controls:'controls',preload:"auto",loop:"loop",muted:""},el("source",{src:tpvedio[0].url,type:"video/mp4"})))}
		
			
			styles=bottoms+tops+borders;
			var iner_t='';var inter_b='',bigpics='',moveupds='',PCclass='';
			if(moveupd==true){moveupds=" moveupd " }
			var iner=el('div',{className:"themepark_imgtext_text",Style:right+textaligns},Innerbox)
			if(leftrights&&modles){iner_t=iner}else{inter_b=iner}
			if(bigpic==true){bigpics=' bigpic '}
			if(PC==true){PCclass=' PcOnly'}
			var html=el("section",{className:"themepark_imgtext"+bigpics+modles+bpaddings+leftrights+moveupds+' '+detects,Style:styles},iner_t,
						el('div',{className:"themepark_imgtext_img"+PCclass,Style:left+textaligns2},topvedio,imageshow),inter_b,
						
					   el("div",{className:"themepark_imgtext_ba",Style:bstyle})
					   );
			
			
			 var vedioss='';
	
		if(tpvedio){vedioss=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
			onClick:function (el) {props.setAttributes({ tpvedio:'' })},
			
		},"删除视频："+tpvedio[0].name)));	}
			
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
												el( PanelBody, { title: '外观设置', initialOpen: true },
												   
												   
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
												   
		  			
				el( PanelRow, {},el( ToggleControl,{label: '移动端堆叠',onChange: ( value ) => {props.setAttributes( { moveupd: value } );},
					checked:moveupd})),	
				el( PanelRow, {},el( ToggleControl,{label: '移动端不显示图片区域',onChange: ( value ) => {props.setAttributes( { PC: value } );},
					checked:PC})),									   
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
		
		  	   el( PanelRow,{},								
			 el(TextControl , {label: '图片跳转url',
							 value:  imgurl,
							  onChange: function (el) {props.setAttributes({   imgurl: el })},
						
							
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
		value: props.attributes.border}))),vedioss,									   
			el( PanelRow,{},     
						 el(MediaUpload,{
		type: "video",
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
                ),"设置视频")}
			
		}
						 
						 ) ),	el( PanelRow,{},    el("p",{className:"tishiwenzi"},"视频上传必须有图片，图片会变成封面，否则视频将无法获取正确的高度"))							   
												   
									   
												
											   
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
			var tpvedio= props.attributes.tpvedio;
			var moveupd= props.attributes.moveupd;
			var detects= props.attributes.detects;
			var imgurl= props.attributes.imgurl;
			var 	PC= props.attributes.PC;
			var bottoms='',tops='',bimgss='',modles='',bcolors='',bpaddings='',bstyle='',leftrights='',borders='',textaligns='',textaligns2='',imgbox='',bcolorops='';
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
			if(bimg){
			if(imgurl){imgbox=el("a",{href:imgurl},el("img",{src:bimg[0].sizes.full.url,alt:bimg[0].alt}))}
				else{imgbox=el("img",{src:bimg[0].sizes.full.url,alt:bimg[0].alt});}
				
			
			
			
			}
		
		
			
		
			var topvedio='';
			if(tpvedio){topvedio=el("figure",{className:"wp-block-video"},el("video",{className:"themepark_imgtext_vidio",poster:bimg[0].sizes.full.url,src:tpvedio[0].url,controls:'controls',loop:"loop",muted:""},el("source",{src:tpvedio[0].url,type:"video/mp4"})))}
		
			styles=bottoms+tops;
			var iner_t='';var inter_b='',bigpics='',moveupds='',PCclass='';
			if(PC==true){PCclass=' PcOnly'}
			var iner=el('div',{className:"themepark_imgtext_text",Style:right+textaligns},el( InnerBlocks.Content ));
			if(leftrights&&modles){iner_t=iner}else{inter_b=iner}
				if(bigpic==true){bigpics=' bigpic '}
			if(moveupd==true){moveupds=' moveupd '}
			var html=el("section",{className:"thempark-block themepark_imgtext"+bigpics+modles+bpaddings+leftrights+moveupds+' '+detects,Style:styles+borders},iner_t,
						el('div',{className:"themepark_imgtext_img"+PCclass,Style:left+textaligns2},topvedio,imgbox),inter_b,
						
					   el("div",{className:"themepark_imgtext_ba",Style:bstyle})
					   );
		   
			
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


