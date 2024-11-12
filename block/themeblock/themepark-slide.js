(function (blocks, element, editor,blockEditor,  i18n, data,components) {
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var CheckboxControl	=wp.components.CheckboxControl;			
var	RangeControl= wp.components.RangeControl;		
var	SelectControl=wp.components.SelectControl;
var	ToggleControl=wp.components.ToggleControl;	
var	TextareaControl=wp.components.TextareaControl;
var ColorPalette=wp.components.ColorPalette;
	
var InnerBlocks =  wp.blockEditor.InnerBlocks,
templateUrl = object_name.templateUrl,
BlockList = wp.blockEditor.BlockList,	
templateUrl = object_name.templateUrl,
el = wp.element.createElement,
RichText = wp.editor.RichText,
BlockControls = wp.editor.BlockControls,
AlignmentToolbar = wp.editor.AlignmentToolbar,
MediaUpload = wp.editor.MediaUpload,
InspectorControls = wp.editor.InspectorControls,
TextControl = components.TextControl,
registerBlockType = wp.blocks.registerBlockType;	
	
registerBlockType('themepark-block/themepark-slide', {
        title: '动效幻灯片', 
        icon: 'images-alt2', 
        category: 'themepark-block-b2',
	    keywords: ["幻灯片","焦点图","动画"],
        description:"使用此区块可以输出一个带有动画效果的大型幻灯片",
	   
    attributes: {  
	   images:{type: 'array',default: []},
		 tpvedio:{type: 'array'},
	   imagestxts:{type: 'array',default: [{id:"", text:"",textf:"24",textc:"#fff", text2:"",text2f:"18",text2c:"#fff",btn:"",btnc:"", top:"",left:"",url:"",move:"",showm:''}]},
        posttitles:{type: 'string'},
	    borderradius:{type: 'integer',},
	    imgwidth:{type: 'integer',default:400},
	    marginbottm:{type: 'integer',default:20},
	    margintop:{type: 'integer',default:20},
	    align:{type: 'string'},
	    thum:{type: 'string'},
	    marginleft:{type: 'integer',default:3},
	    bpadding:{type:'boolean'},
	    savebtn: {type: 'boolean',default:false},
	    lightbox: {type: 'boolean',default:false},
		loops:{type:'string'},
		seo1:{type: 'string',default:'h3'},
		detects:{type: 'string',},
			zhezhao:{type: 'integer'},
		zhezhaocolor:{type: 'string',default:""},	
   }, 
	edit: function (props) {
		var detects= props.attributes.detects;
		var images = props.attributes.images;
		var tpvedio= props.attributes.tpvedio;
	    var imagestxts = props.attributes.imagestxts;
		var savebtn = props.attributes.savebtn;
		var posttitles= props.attributes.posttitles;
		var borderradius = props.attributes.borderradius;
		var marginbottm = props.attributes.marginbottm;
		var margintop= props.attributes.margintop;
		var marginleft= props.attributes.marginleft;
		var bpadding= props.attributes.bpadding;
		var align= props.attributes.align;
		var thum= props.attributes.thum;
		var lightbox= props.attributes.lightbox;
		var loops= props.attributes.loops;
		 var seo1= props.attributes.seo1;
		var zhezhaocolor= props.attributes.zhezhaocolor;
			var zhezhao= props.attributes.zhezhao;
		loops: 'true';
		var thums;
		
		var imgwidth= props.attributes.imgwidth;
		var boder="",bodycolors="",borderradiuss="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='';
		if(imgwidth){imgwidths="max-width:"+imgwidth+'px;'}
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		
		if(margintop){margintops="margin-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
		
		props.setAttributes({posttitles: wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' )});
		
	 	var zhezhaos='';
			if(zhezhao){zhezhaos=el("div",{className:"shizhezhao",Style:"opacity:"+(zhezhao/100)+';background-color:'+zhezhaocolor+';'})}
		
	
			
			
		
function addpush(a,b){
		if(a>b){
			var se=a-b;
			if(se!=0){
			for (var index=0;index<se;index++){
				imagestxts.push({id:"", text:"",textf:"",textc:"", text2:"",text2f:"",text2c:"",btn:"",btnc:"", top:"",left:"",url:"",move:"",showm:''}); 
              var newimagestxts= imagestxts.filter(function(imagestxt){return imagestxt; });		
              props.setAttributes({imagestxts: newimagestxts}) 
			}}}}
		
function upGo(fieldData,index){if(index!=0){fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];}else{fieldData.push(fieldData.shift());}}
function downGo(fieldData,index) {if(index!=fieldData.length-1){fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0];}else{fieldData.unshift( fieldData.splice(index,1)[0]);}}
		var pimgbox;
	  var displayimages=[];
	  var dispplayswiper=[];	
		var boxtwidth;
		var textecho=[];
		var cssactive="";	
		var onSelectImage = function (media) {if(images){	
			                                                     addpush(images.length+media.length,imagestxts.length);
			
			                                           return props.setAttributes({images:[...images ,...media]});
														}else{
															 addpush(media.length,imagestxts.length);
															return props.setAttributes({images: media,});}
											
											
											 };
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
var showimgbox=[];
		
	for (var index=0;index<images.length;index++){
			boxtwidth=(120*(index+1))+"px";
		var value=images[index];

		var textfs='',textcs='',text2fs='',text2cs='',texts='',texts2='',btns='',btncs='',lefts='',moves='',move2='',showms=" hidemo";
		if(imagestxts[index].textf){textfs="font-size:"+imagestxts[index].textf+'px;'}
		if(imagestxts[index].textc){textcs="color:"+imagestxts[index].textc+';'}
		if(imagestxts[index].text2f){text2fs="font-size:"+imagestxts[index].text2f+'px;'}
		if(imagestxts[index].text2c){text2cs="color:"+imagestxts[index].text2c+';'}
		if(imagestxts[index].btnc){btncs="background:"+imagestxts[index].btnc+';'}
		if(imagestxts[index].text){texts= el("h3",{className:"pcimg_title",Style:textfs+textcs}, addbr(imagestxts[index].text))}
		if(imagestxts[index].text2){texts2= el("font",{className:"pcimg_dis",Style:text2fs+text2cs},addbr(imagestxts[index].text2))}
		if(imagestxts[index].btn){btns= el("a",{className:"pcimg_btn",Style:btncs},imagestxts[index].btn)}
		if(imagestxts[index].left){lefts="text-align:"+imagestxts[index].left+';'}
		if(imagestxts[index].showm==true){showms=" showthetext"}
		if(imagestxts[index].move){
			moves= el("span",{},el("img",{className:"swiper-lazy",src:imagestxts[index].move.sizes.thumbnail.url}),"手机图片略缩预览");
			
		}
		var imgtrueurl=value.sizes.thumbnail.url;
		var topvedio='';
		if(index==0){cssactive=" active"
					if(tpvedio){topvedio=el("video",{poster:tpvedio[0].url,autoplay:"autoplay",preload:"auto",loop:"loop",muted:""},el("source",{src:tpvedio[0].url,type:"video/mp4"}))}
					
					}else{cssactive=''}
		
		var bacimgs=el("a",{className:"pcimg_pic",Style:'background: center no-repeat url('+value.sizes.full.url+')'},topvedio,zhezhaos)
		showimgbox[index]=el("div",{className:"showbox insbox"+index+cssactive,}, 
						el("div",{className:"pcimgx"+showms,Style:"height:"+imgwidth+'px;'},
						  el("div",{className:"pcimg_text",Style:"padding-top:"+imagestxts[index].top+'%;'+lefts},
							texts,texts2,btns
							 ),bacimgs
						  )
							
							);
		
			
		  dispplayswiper[index]=	el( PanelBody, { title: '幻灯片'+(index+1), initialOpen: false },
									   
									  el( PanelRow,{}, 
										 el("div",{class:"showthum"},el("span",{},el("img",{className:"swiper-lazy",src:value.sizes.thumbnail.url}),"pc图片略缩预览"),moves
									  )	
										
										),
				          el( PanelRow,{},                 el(MediaUpload,{
			 type: 'image',
			
			 value:images,
			onSelect:(function (index) {
					 return function (el){
						  var newimages=images;
						for (var i = 0; i < newimages.length; i++) {
					       if(i==index){
							  
							 images[index]=el;
						    
							   
						   }
						}
						 newimages= newimages.filter(function(newimages){return newimages; });	
						 props.setAttributes({images:newimages}) 
					 }
					  
					 })(index),
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"替换PC端图片")}
			
		}
						 
						 ) ),					   
				el( PanelRow,{},     
									   el(MediaUpload,{
			 type: 'image',
			
			 value:images,
			
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn'
                 
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"设置移动端图片【付费版解锁】")}
			
		}
						 
						 ) ),
							
									   
						el( PanelRow, {}, el( RangeControl,{label: '文字距离顶部高度(百分比)',min:0,max:40,
													onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].top=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		                                            value: imagestxts[index].top})),					
											
						el( PanelRow, {},el( SelectControl, {
			label: "文字位置",
			selected: imagestxts[index].left,
			
			options : [
        { label: '居左', value:'', },
		{ label: '居中', value: 'center' },
		{ label: '居右', value: 'right' },	
        ], 
							onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].left=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		})),						   
									   
					el( PanelRow, {},el( ToggleControl,{label: '移动端显示文字【付费版解锁】',
														
														checked: imagestxts[index].showm})),			   
									   
									 el( PanelRow,{},   el("p",{className:"tishiwenzi"},"默认移动端是不显示文字的，你可以打开这个选项让文字显示在移动端，但请注意移动端的字号是不可调整的"),	),
									   el( PanelRow,{},
										
			 el(TextareaControl, {label: '图片标题',
							 value:imagestxts[index].text,
							 
							onChange:(function (index) {
					 return function (el){
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].text=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
							
							})),
									   
									   
							   
			   el( PanelRow,{},								
			 el(TextareaControl, {label: '文字描述',
							 value:imagestxts[index].text2,
							 
							onChange:(function (index) {
					 return function (el){
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].text2=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
							
							})),	
									   
									   
						
				el( PanelRow, {}, 						
					 el(TextControl , {
							 value:imagestxts[index].btn,
							 label:'按钮文字',
							onChange:(function (index) {
					 return function (el){
						 var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].btn=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
							
							})),					   
						el( PanelRow, {}, 						
					 el(TextControl , {
							 value:imagestxts[index].url,
							 label:'按钮/图片链接:https://',
							onChange:(function (index) {
					 return function (el){
						 var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].url=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
							
							})),
									
									   
									   
									   
					el( PanelRow, {}, el( RangeControl,{label: '标题字体大小',min:12,max:100,
													onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].textf=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		                                            value: imagestxts[index].textf})),
									   
										   
					el( PanelRow, {}, el( RangeControl,{label: '描述字体大小',min:12,max:100,
													onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].text2f=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		                                            value: imagestxts[index].text2f})),				   
									   
									   
									   
									   
							el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'标题文字颜色',	  el(ColorPalette,{
			colors : [
		{ name: '默认白色', color: '#ffffff' },
        { name: '灰色', color: '#666666' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
					onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].textc=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		value: props.attributes. imagestxts[index].textc}))),				   
									   
									   
									   
				
					
									   
									   
							el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'描述文字颜色',	  el(ColorPalette,{
			colors : [
		{ name: '默认白色', color: '#ffffff' },
        { name: '灰色', color: '#666666' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
					onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].text2c=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		value: props.attributes. imagestxts[index].text2c}))),				   
									   
								   
									   
							el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'按钮颜色',	  el(ColorPalette,{
			colors : [
		
        { name: '灰色', color: '#666666' },
        { name: '深蓝', color: '#146ba2' },
        { name: '深绿', color: '#5e8b0f' },
		{ name: '宝石蓝', color: '#24b6b1' },
	    { name: '咖啡色', color: '#b27630' },
		{ name: '橙黄色', color: '#f29900' },
		{ name: '红色', color: '#e21f2f' },
        ], 
					onChange: (function (index) {
					 return function (el){
						
						  var newimagestxts=imagestxts;
						for (var i = 0; i < newimagestxts.length; i++) {
					       if(i==index){
							  
							 imagestxts[index].btnc=el;
						     imagestxts[index].id=images[index].id;
							   
						   }
						}
						 newimagestxts= newimagestxts.filter(function(newimagestxts){return newimagestxts; });	
						 props.setAttributes({imagestxts:newimagestxts}) 
					 }
					  
					 })(index),
		value: props.attributes. imagestxts[index].btnc}))),				   
									   
											
								
			

										
										
										);
	      displayimages[index]= 	 (
		    el("div",{className:"thempark_gallery-item"},
			  
			   el("img",{src:value.sizes.thumbnail.url}),
			   el("div",{className:"deletimg"},
				  
				   el("span",
					 {onClick:(function (index) {
					 return function (){
						
						 upGo(images,index);
						 upGo(imagestxts,index);
						 
						var newimages= images.filter(function(image){return image; });
						var newimagestxts= imagestxts.filter(function(imagestxt){return imagestxt; });
						 props.setAttributes({images: newimages}) 
                        props.setAttributes({imagestxts: newimagestxts}) 
					
					 }
					  
					 })(index),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-caret-left"}),el("div",{},el("span",{}),"向前移动")),
				  
				  
				     el("span",
					 {onClick:(function (index) {
					 return function (){
						
					
                    
                           downGo(images,index);
						 downGo(imagestxts,index);
						 
						 var newimages= images.filter(function(image){return image; });
						var newimagestxts= imagestxts.filter(function(imagestxt){return imagestxt; });
						 props.setAttributes({images: newimages}) 
                        props.setAttributes({imagestxts: newimagestxts}) 
					
					 }
					  
					 })(index),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-caret-right"}),el("div",{},el("span",{}),"向后移动")),
				  
				  
				  el("span",
					 {onClick:(function (value) {
					 return function (){
					
						 
						var newimages= images.filter(function(image){
							 if(image.id != value.id) {
                            return image;
                        }
							
						});
						 
						 
						 	var newimagestxts= imagestxts.filter(function(imagestxt){
							 if(imagestxt.id != value.id) {
                            return imagestxt;
                        }
							
						});
						 
						 
							props.setAttributes({images: newimages,}) 
					 props.setAttributes({imagestxts: newimagestxts,}) 
					 }
					  
					 })(value),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-trash-alt"}),el("div",{},el("span",{}),"删除此图片"))
				 
				 )
			  )
		)
		}
		
			var  Uploadbtn=el(MediaUpload,{
			 type: 'image',
			 multiple:true,
			 value:images,
			onSelect: onSelectImage,
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"点击上传或选择已有图片，可按住ctrl多选")}
			
		}
						 
						 );
	    var vedioss='';
	
		if(tpvedio){vedioss=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
			onClick:(function (value) {
					 return function (){

					 props.setAttributes({tpvedio:'',}) 
					 }
					  
					 })(value),
			
		},"删除视频："+tpvedio[0].name)));	}
		
		
		if(displayimages.length>=2){pimgbox=el("div",{className:"pimg_box_out"},el("div",{className:"pimg_box",Style:"width:"+boxtwidth,},displayimages));}	
		var swipercontainer=dispplayswiper;
	
		
		var html=el("div",{className:"swiperimgbox"+bpaddings+' '+detects,id:"list_imgs",Style:marginbottms+margintops},el("div",{className:"showslidebox",},showimgbox),el("div",{className:"addimgbox slideb"},pimgbox,Uploadbtn));
		
		var contrlbox=el( Fragment, {},el( InspectorControls, {},el( PanelBody, { title: '区块设置', initialOpen: false },
																	
					el( PanelRow, {},
		el(SelectControl, {label:'幻灯片标题HTML标签',
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
		el(SelectControl, {label:'设备识别',
         options:[
        { label: "所有设备都显示", value:""},
		 { label: "只显示在PC设备", value:"PcOnly"},
		 { label: "只显示在移动设备", value:"MovePnly"},
		
        ],
         value:  detects,
         onChange: function (el) {props.setAttributes({  detects: el })},}) 
				  ),																						
																	
					el( PanelRow, {},el( SelectControl, {
			label: "幻灯片效果",
			value: align,
			
			options : [
        { label: '默认左右滚动', value:'slide', },
		{ label: '淡入淡出', value: 'fade' },
		{ label: '3D横向滚动', value: 'cube' },	
		{ label: '3D反转滚动', value: 'flip' },		
        ], 
			onChange: function( content ) {
				props.setAttributes( { align: content } );
				
			},
		})),	
																	
																	
																	
			el( PanelRow, {}, el( RangeControl,{label: 'pc图片固定端高度',min:200,max:2000,onChange: function (el) {props.setAttributes({imgwidth: el })},
		value: props.attributes.imgwidth})),	
																	
				el( PanelRow, {}, el( RangeControl,{label: '自动播放',min:0,max:30,onChange: function (el) {props.setAttributes({ marginleft: el })},
		value: props.attributes.marginleft})),															
			
			el( PanelRow, {},el( ToggleControl,{label: '开启镜头推进动画效果',onChange: ( value ) => {props.setAttributes( { lightbox: value } );},
					checked: props.attributes.lightbox,})),															
																	
																	
																	
		
																	
																	
			el( PanelRow, {}, el( RangeControl,{label: '上边距',min:0,max:50,onChange: function (el) {props.setAttributes({ margintop: el })},
		value: props.attributes.margintop})),	
			el( PanelRow, {}, el( RangeControl,{label: '下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
		value: props.attributes.marginbottm})),	vedioss,
																	
																	
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
                ),"设置PC端视频背景")}
			
		}
						 
						 ) ),												
																	
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
	
        ], 
		onChange: function (el) {props.setAttributes({  zhezhaocolor: el })},
		value: props.attributes.zhezhaocolor}))),
		   el( PanelRow, {}, el( RangeControl,{label: '视频遮罩透明度',min:0,max:100,onChange: function (el) {props.setAttributes({  zhezhao: el })},
		value: props.attributes.zhezhao})),									
																	
							   
						
																	
																	),dispplayswiper),html);
		
		
		
		
		return contrlbox;
		
		
	
		
		
		
		
		
	},save:(function (props) {
	
	var images = props.attributes.images;
	    var imagestxts = props.attributes.imagestxts;
		var savebtn = props.attributes.savebtn;
		var posttitles= props.attributes.posttitles;
		var borderradius = props.attributes.borderradius;
		var marginbottm = props.attributes.marginbottm;
		var margintop= props.attributes.margintop;
		var marginleft= props.attributes.marginleft;
		var bpadding= props.attributes.bpadding;
		var align= props.attributes.align;
		var thum= props.attributes.thum;
		var lightbox= props.attributes.lightbox;
		var tpvedio= props.attributes.tpvedio;
		var loops= props.attributes.loops;
		 var seo1= props.attributes.seo1;
		var detects= props.attributes.detects;
		var thums;
		var zhezhaocolor= props.attributes.zhezhaocolor;
			var zhezhao= props.attributes.zhezhao;
		var imgwidth= props.attributes.imgwidth;
		var boder="",bodycolors="",borderradiuss="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='';
		
		if(imgwidth){imgwidths="max-width:"+imgwidth+'px;'}
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		
		if(margintop){margintops="margin-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
		var zhezhaos='';
			if(zhezhao){zhezhaos=el("div",{className:"shizhezhao",Style:"opacity:"+(zhezhao/100)+';background-color:'+zhezhaocolor+';'})}
		
		
		var displayslide=[];
		function addbr(str){
	if(str){
var str_array = new Array();
str_array = str.split(/[(\r\n)\r\n]+/);	
var s=[];
for (var i = 0; i < str_array.length; i++) {
	var lax=(-100*i)-1000;
s[i]=	el("span",{"data-swiper-parallax":lax},str_array[i])
	
}
	return s;}
}
		
		for (var index=0;index<images.length;index++){
				var value=images[index];
			
			var textfs='',textcs='',text2fs='',text2cs='',texts='',texts2='',btns='',btncs='',lefts='',moves='',move2='',pcimgxal='',pcimgxal2='',showms=" hidemo";
			
			if(align=='fade'){pcimgxal="-500",pcimgxal2='data-swiper-parallax'}
		if(imagestxts[index].textf){textfs="font-size:"+imagestxts[index].textf+'px;'}
		if(imagestxts[index].textc){textcs="color:"+imagestxts[index].textc+';'}
		if(imagestxts[index].text2f){text2fs="font-size:"+imagestxts[index].text2f+'px;'}
		if(imagestxts[index].text2c){text2cs="color:"+imagestxts[index].text2c+';'}
		if(imagestxts[index].btnc){btncs="background:"+imagestxts[index].btnc+';'}
		if(imagestxts[index].text){texts= el(seo1,{className:"pcimg_title",Style:textfs+textcs}, addbr(imagestxts[index].text))}
		if(imagestxts[index].text2){texts2= el("font",{className:"pcimg_dis",Style:text2fs+text2cs,'data-swiper-parallax':"-500","data-swiper-parallax-scale":"0.5"},addbr(imagestxts[index].text2))}
		if(imagestxts[index].btn){btns= el("a",{className:"pcimg_btn",href:imagestxts[index].url,Style:btncs,'data-swiper-parallax':"-1800"},imagestxts[index].btn)}
		if(imagestxts[index].left){lefts="text-align:"+imagestxts[index].left+';'}
			if(imagestxts[index].showm==true){showms=" showthetext"}	
		if(imagestxts[index].move){
			if(index==0){
				
				move2= el("a",{className:"movepic",href:imagestxts[index].url},el("img",{className:"movepic",src:imagestxts[index].move.sizes.full.url,alt:imagestxts[index].text}))}else{
				
				move2= el("a",{className:"movepic",href:imagestxts[index].url},el("img",{className:"movepic swiper-move-lazy",'data-src':imagestxts[index].move.sizes.full.url,alt:imagestxts[index].text,src:templateUrl+"/images/loading8.png"},),el("div",{className:"swiper-lazy-preloader"}))
			}
			;
		}
			var topvedio='';
			if(index==0){
				if(tpvedio){topvedio=el("video",{poster:tpvedio[0].url,autoplay:"autoplay",preload:"auto",loop:"loop",muted:""},el("source",{src:tpvedio[0].url,type:"video/mp4"}));}
				var bacimgs=el("a",{className:"pcimg_pic swiper-lazy",href:imagestxts[index].url,'data-background':value.sizes.full.url,pcimgxal2:pcimgxal,Style:"background:url("+value.sizes.full.url+")"},topvedio,zhezhaos)
			
			}else{
					
					var bacimgs=el("a",{className:"pcimg_pic swiper-lazy",href:imagestxts[index].url,'data-background':value.sizes.full.url,pcimgxal2:pcimgxal},topvedio,zhezhaos)
					
				}
			
		
			
			
			displayslide[index]=el("div",{className:"swiper-slide",}, 
						el("div",{className:"pcimgx"+showms,Style:"height:"+imgwidth+'px;'},
						  el("div",{className:"pcimg_text",Style:"padding-top:"+imagestxts[index].top+'%;'+lefts},
							texts,texts2,btns
							 ),bacimgs
						  )
							
							);
			
			
		}
		var lightboxs='';
		if(lightbox==true){lightboxs="jtauto"}
		var nebx_btn1='',nebx_btn2='',nebx_btn3='';
		if(images.length>1){
			nebx_btn1= el("a",{className:"swiper-next"},el("i",{className:"fas fa-angle-right"}));
			nebx_btn2=el("a",{className:"swiper-prev"},el("i",{className:"fas fa-angle-left"}));
			nebx_btn3=el("div",{className:"pagination"});
		}
		var html=el("section",{className:"thempark-block thenepark-slide-out "+detects,Style:marginbottms+margintops,datafade:align,autoplays:marginleft,"loops":loops},
				   el("div",{className:"swiper-container thenepark-slide "+lightboxs},
					 el("div",{className:"swiper-wrapper"},displayslide),nebx_btn1,nebx_btn2,nebx_btn3
					  
						
						
					 )
				   
				   )
		
		
		
		return html;
	
	
})
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


