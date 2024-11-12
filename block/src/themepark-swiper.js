(function (blocks, element, editor,blockEditor,  i18n, data,components) {
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var	RangeControl= wp.components.RangeControl;
	var	SelectControl=wp.components.SelectControl;	
	var InnerBlocks =  wp.blockEditor.InnerBlocks,
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
	
registerBlockType('themepark-block/themepark-swiper', {
        title: '图片幻灯片', 
        icon: 'images-alt2', 
        category: 'themepark-block-b1',
	    keywords: ["图片","幻灯片","滑块"],
        description:"你可以使用这个区块调用一个小型幻灯片",
	   
   attributes: {  
	   images:{type: 'array',default: []},
	   imagestxts:{type: 'array',default: [{id:"", text:"",url:""}]},
	   
        posttitles:{type: 'string'},
	   borderradius:{type: 'integer',},
	   detects:{type: 'string',},
	   marginbottm:{type: 'integer',default:20},
   }, 
	edit: function (props) {
		var images = props.attributes.images;
	    var imagestxts = props.attributes.imagestxts;
		var posttitles= props.attributes.posttitles;
		var borderradius = props.attributes.borderradius;
		var marginbottm = props.attributes.marginbottm;
		var detects= props.attributes.detects;
		var boder="",bodycolors="",borderradiuss="",marginbottms="";
		
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		
		
		
		props.setAttributes({posttitles: wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' )});
		
	 
		
	
			
			
		
function addpush(a,b){
		if(a>b){
			var se=a-b;
			if(se!=0){
			for (var index=0;index<se;index++){
				imagestxts.push({id:"", text:'',url:""}); 
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
	
var imgecont=[];
		
	for (var index=0;index<images.length;index++){
			boxtwidth=(120*(index+1))+"px";
		var tx='';
		if(imagestxts[index]){tx=el("span",{},imagestxts[index].text);}
		imgecont[index]= 
			el( PanelBody, { title: '图片'+(index+1), initialOpen: false },
			    el( PanelRow,{}, 
			el(TextControl, {label: '图片文字',
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
			el(TextControl, {label: '图片url',
							 value:imagestxts[index].url,
							
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
			  
			  
			  );
		
		
		
		
		
		
		
		
		
		var value=images[index];
			if(index==0){cssactive=" active"}else{cssactive=''}
	
		  dispplayswiper[index]=	( el("div",{className:"swiper-slide insbox"+index+cssactive,Style:borderradiuss},
										 el("div",{className:"swiperimg-ds"},tx,
			
				 el("div",{className:"swiperimg-ds-b"})
			   ),
										 el("img",{className:"swiper-lazy",src:value.sizes.full.url})));
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
		
		if(displayimages.length>=2){pimgbox=el("div",{className:"pimg_box_out"},el("div",{className:"pimg_box",Style:"width:"+boxtwidth,},displayimages));}	
		var swipercontainer=el("div",{className:"post_gallery_out2"},el("div",{className:"swiper-container post_gallery_nomral"},el("div",{className:"swiper-wrapper"},dispplayswiper)
							   
							  ))
		
		var html=el("div",{className:"swiperimgbox "+detects,Style:marginbottms},swipercontainer,el("div",{className:"addimgbox"},pimgbox,Uploadbtn));
		
		var contrlbox=el( Fragment, {},el( InspectorControls, {},el( PanelBody, { title: '风格设置', initialOpen: true },
													el( PanelRow, {}, el( RangeControl,{label: '圆角',min:0,max: 20,onChange: function (el) {props.setAttributes({ borderradius: el })},
		value: props.attributes.borderradius})),			   
			
			el( PanelRow, {}, el( RangeControl,{label: '下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
		value: props.attributes.marginbottm})),	
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
		   
						
																	
																	),imgecont),html);
		
		
		
		
		return contrlbox;
		
		
	
		
		
		
		
		
	},	save:(function (props) {
	var images = props.attributes.images;
	var posttitles= props.attributes.posttitles;
	var imagestxts = props.attributes.imagestxts;
	var borderradius = props.attributes.borderradius;
		var detects= props.attributes.detects;	
		var marginbottm = props.attributes.marginbottm;
		var boder="",bodycolors="",borderradiuss="",marginbottms="";
		
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		
		
	var dispplayswiper=[];	
	var se;	
	var tx='';	
	images.forEach((value, index) => {
		var lazyimgs;
			if(index==0){lazyimgs=images[0].sizes.full.url}else{lazyimgs=templateUrl+"/images/loading8.png";}
		
		var imgkk= el("img",{className:"swiper-lazy swiper-move-lazy",src:lazyimgs,"data-src":value.sizes.full.url,alt:tx+value.alt+(posttitles)});
		if(imagestxts[index]&&imagestxts[index].url){
			
			imgkk= el("a",{href:imagestxts[index].url},el("img",{className:"swiper-lazy swiper-move-lazy",src:lazyimgs,"data-src":value.sizes.full.url,alt:tx+value.alt+(posttitles)}));
		}
		
		
		 if(imagestxts[index]&&imagestxts[index].text){se=	el("div",{className:"swiperimg-ds"},el('span', {},imagestxts[index].text),el("div",{className:"swiperimg-ds-b"}) );tx=imagestxts[index].text }else{se="";}
		dispplayswiper[index]=	( el("div",{className:"swiper-slide",Style:borderradiuss},se,imgkk
				
									 
									));
	});	
		var swipercontainer=el("div",{className:"post_gallery_out2 "+detects,Style:marginbottms},el("div",{className:"swiper-container post_gallery_nomral"},el("div",{className:"swiper-wrapper"},dispplayswiper),
							   el("a",{className:"swiper-next"},el("i",{className:"fas fa-angle-right"})),
						       el("a",{className:"swiper-prev"},el("i",{className:"fas fa-angle-left"})),
							   el("div",{className:"pagination post_gallery_nomral_pagination"})
							  ));
		
	return swipercontainer;
	
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


