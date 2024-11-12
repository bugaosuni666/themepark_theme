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
registerBlockType('themepark-block/themepark-bili', {
        title: '进度条区块', 
        icon: 'editor-alignleft', 
        category: 'themepark-block-b1', 
         keywords: ["进度条","进度条图文"],
        description:"插入一个可设置进度条的区块",
        attributes: { 
		  
		    bimg:  {type: 'array',default: [{id:Date.now(), text:"",text2:"",bl:"90"}]},
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
			detects:{type: 'string',},
			blboxstyle:{type: 'array',default: [{t1f:"26",t2f:"16",t1c:"#333",t2c:"#666",border:"1",boderc:"#fff",bac:"#fff",boxrage:"0",hight:"10",bac2:"#1e73be"}]}
			 
			
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
			var blboxstyle=props.attributes.blboxstyle;
			var detects= props.attributes.detects;
			var bottoms='',tops='',bimgss='',modles='',bcolors='',bpaddings='',bstyle='',leftrights='',borders='',textaligns='',textaligns2='',bcolorops='';
			var imageshow;
			var left='',right='';
			var bili= props.attributes.bili;
			
function upGo(fieldData,index){if(index!=0){fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];}else{fieldData.push(fieldData.shift());}}
function downGo(fieldData,index) {if(index!=fieldData.length-1){fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0];}else{fieldData.unshift( fieldData.splice(index,1)[0]);}}					
			
			
			
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
		var blihow=[];
var bilicon=[];
			
			var t1f='',t1c='',t2f='',t2c='',blborder="",blboderc="",blbac="",blboxrage="",blhight="",blbac2="";
			if(blboxstyle[0].t1f){t1f="font-size:"+blboxstyle[0].t1f+'px;'}
			if(blboxstyle[0].t2f){t2f="font-size:"+blboxstyle[0].t2f+'px;'}
			if(blboxstyle[0].t1c){t1c="color:"+blboxstyle[0].t1c+';'}
			if(blboxstyle[0].t2c){t2c="color:"+blboxstyle[0].t2c+';'}
			if(blboxstyle[0].boderc){blboderc=blboxstyle[0].boderc}
			if(blboxstyle[0].border){blborder="border:"+blboxstyle[0].border+'px solid '+blboderc+';'}
			if(blboxstyle[0].bac){blbac="background:"+blboxstyle[0].bac+';'}
			if(blboxstyle[0].boxrage){blboxrage="border-radius:"+blboxstyle[0].boxrage+'px;'}
		    if(blboxstyle[0].hight){blhight="height:"+blboxstyle[0].hight+'px;'}
			if(blboxstyle[0].bac2){blbac2="background:"+blboxstyle[0].bac2+';'}
			
			
			for (var index=0;index<bimg.length;index++){
				var jd='';
				if(bimg[index].bl){jd="width:"+bimg[index].bl+"%;";}
				 blihow[index]=el("div",{className:"bili_box"},
									 el("span",{className:"bili_box_title",Style:t1f+t1c},bimg[index].text),
									 el("span",{className:"bili_box_title2",Style:t2f+t2c},bimg[index].text2),
								   el("div",{className:"bili_box_jd",Style:blborder+blbac+blboxrage},el("div",{className:"bili_box_jd_in",Style:jd+blboxrage+blhight+blbac2}))
									);
				
				bilicon[index]=el( PanelBody, { title: '进度条'+(index+1), initialOpen: false },
								  el( PanelRow, {}, 						
					 el(TextControl , {
							 value:bimg[index].text,
							 label:'进度条标题',
							onChange:(function (index) {
					 return function (el){
						 var newbimg=bimg;
						for (var i = 0; i < newbimg.length; i++) {
					       if(i==index){
							  
							 bimg[index].text=el;
						    
							   
						   }
						}
						 newbimg= newbimg.filter(function(newbimg){return newbimg; });	
						 props.setAttributes({bimg:newbimg}) 
					 }
					  
					 })(index),
							
							})),
								  
								   el( PanelRow, {}, 						
					 el(TextControl , {
							 value:bimg[index].text2,
							 label:'进度条描述',
							onChange:(function (index) {
					 return function (el){
						 var newbimg=bimg;
						for (var i = 0; i < newbimg.length; i++) {
					       if(i==index){
							  
							 bimg[index].text2=el;
						    
							   
						   }
						}
						 newbimg= newbimg.filter(function(newbimg){return newbimg; });	
						 props.setAttributes({bimg:newbimg}) 
					 }
					  
					 })(index),
							
							})),
								  
			  el( PanelRow, {}, el( RangeControl,{label: '进度比例',min:0,max:100,
							onChange:(function (index) {
					 return function (el){
						 var newbimg=bimg;
						for (var i = 0; i < newbimg.length; i++) {
					       if(i==index){
							  
							 bimg[index].bl=el;
						    
							   
						   }
						}
						 newbimg= newbimg.filter(function(newbimg){return newbimg; });	
						 props.setAttributes({bimg:newbimg}) 
					 }
					  
					 })(index),
		value:bimg[index].bl}))						  
								 
								 
								 
								 )
			}
			
			
			
			
			var Innerbox= el(InnerBlocks, {
                template:  [['core/column',{}]],templateLock:false,
                allowedBlocks: ['core/column']});
			
		
			styles=bottoms+tops+borders;
			var iner_t='';var inter_b='';
			var iner=el('div',{className:"themepark_imgtext_text",Style:right+textaligns},Innerbox)
			if(leftrights&&modles){iner_t=iner}else{inter_b=iner}
			
			var html=el("section",{className:"themepark_imgtext"+modles+bpaddings+leftrights+' '+detects,Style:styles},iner_t,
						el('div',{className:"themepark_bili",Style:left+textaligns2},blihow),inter_b,
						
					   el("div",{className:"themepark_imgtext_ba",Style:bstyle})
					   );
			
			
			
			
			
			
			var controlbpx=el( Fragment, {}, el( InspectorControls, {},
												
									el( PanelBody, { title: '进度条数量', initialOpen: true },
									  
									  
									  
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newbimg=bimg;
					  newbimg.push({id:Date.now(), text:"输入标题",text2:"请输入描述",bl:"90"})
					    newbimg=  newbimg.filter(function( newbimg){return  newbimg; });	
					  props.setAttributes({ bimg:newbimg  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一个进度条到最后")
				),
						   
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newbimg=bimg;
					  newbimg.pop();
					    newbimg=  newbimg.filter(function( newbimg){return  newbimg; });	
					  props.setAttributes({ bimg:newbimg  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-window-minimize'})
                ),"删除最后一个进度条")
				)

									  ),
												
												
				el( PanelBody, { title: '进度条风格', initialOpen: false },										   
			el( PanelRow, {}, el( RangeControl,{label: '标题字号',min:10,max:90,
												onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].t1f=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].t1f})),
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
		onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].t1c=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].t1c}))),
						   
						   el( PanelRow, {}, el( RangeControl,{label: '标题字号',min:10,max:90,
												onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].t2f=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].t2f})),
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
		onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].t2c=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].t2c}))),
				   
					   
				    el( PanelRow, {}, el( RangeControl,{label: '进度条圆角',min:0,max:20,
												onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].boxrage=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].boxrage})),
				   
				    el( PanelRow, {}, el( RangeControl,{label: '进度条边框',min:0,max:20,
												onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].border=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].border})),
				  		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'进度条边框颜色',	  el(ColorPalette,{
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
		onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].boderc=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].boderc}))),
				   
				   
				   
				   el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'进度条底色',	  el(ColorPalette,{
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
		onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].bac=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].bac}))),
				  
				  
				    el( PanelRow, {}, el( RangeControl,{label: '进度条高度',min:0,max:20,
												onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].hight=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].hight})),
				   
				   
				      el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'进度条颜色',	  el(ColorPalette,{
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
		onChange: function (el) {
												 var newblboxstyle=blboxstyle;
													newblboxstyle[0].bac2=el;
												 newblboxstyle= newblboxstyle.filter(function( newblboxstyle){return newblboxstyle; });	
												 props.setAttributes({ blboxstyle:newblboxstyle})
												},
		                                        value:blboxstyle[0].bac2})))
				  
				  )	,							
												
												
												
												
												
												el( PanelBody, { title: '区块外观设置', initialOpen: false },
		  			
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
				el( PanelRow, {},el( ToggleControl,{label: '开启上下模式',onChange: ( value ) => {props.setAttributes( { modle: value } );},
					checked: props.attributes.modle,})),
				el( PanelRow, {},el( ToggleControl,{label: '左右对调',onChange: ( value ) => {props.setAttributes( { leftright: value } );},
					checked: props.attributes.leftright,})),								   
												   
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
									   
												   
									   
												
											   
											  ),bilicon ),html)
			
		
			
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
			var blboxstyle=props.attributes.blboxstyle;
				var detects= props.attributes.detects;	
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
		
		
		
			var t1f='',t1c='',t2f='',t2c='',blborder="",blboderc="",blbac="",blboxrage="",blhight="",blbac2="",blihow=[];
			if(blboxstyle[0].t1f){t1f="font-size:"+blboxstyle[0].t1f+'px;'}
			if(blboxstyle[0].t2f){t2f="font-size:"+blboxstyle[0].t2f+'px;'}
			if(blboxstyle[0].t1c){t1c="color:"+blboxstyle[0].t1c+';'}
			if(blboxstyle[0].t2c){t2c="color:"+blboxstyle[0].t2c+';'}
			if(blboxstyle[0].boderc){blboderc=blboxstyle[0].boderc}
			if(blboxstyle[0].border){blborder="border:"+blboxstyle[0].border+'px solid '+blboderc+';'}
			if(blboxstyle[0].bac){blbac="background:"+blboxstyle[0].bac+';'}
			if(blboxstyle[0].boxrage){blboxrage="border-radius:"+blboxstyle[0].boxrage+'px;'}
		    if(blboxstyle[0].hight){blhight="height:"+blboxstyle[0].hight+'px;'}
			if(blboxstyle[0].bac2){blbac2="background:"+blboxstyle[0].bac2+';'}
			
			
			for (var index=0;index<bimg.length;index++){
				var jd='';
				if(bimg[index].bl){jd="width:"+bimg[index].bl+"%;";}
				 blihow[index]=el("div",{className:"bili_box"},
									 el("span",{className:"bili_box_title",Style:t1f+t1c},bimg[index].text),
									 el("span",{className:"bili_box_title2",Style:t2f+t2c},bimg[index].text2),
								   el("div",{className:"bili_box_jd",Style:blborder+blbac+blboxrage},el("div",{className:"bili_box_jd_in",Style:jd+blboxrage+blhight+blbac2}))
									);}
		
			
		
			styles=bottoms+tops;
			var iner_t='';var inter_b='';
			var iner=el('div',{className:"themepark_imgtext_text",Style:right+textaligns},el( InnerBlocks.Content ));
			if(leftrights){iner_t=iner}else{inter_b=iner}
			
			
			var html=el("section",{className:"thempark-block themepark_imgtext dsxws "+modles+bpaddings+leftrights+' '+detects,Style:styles+borders},iner_t,
						el('div',{className:"themepark_bili",Style:left+textaligns2},blihow),inter_b,
						
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


