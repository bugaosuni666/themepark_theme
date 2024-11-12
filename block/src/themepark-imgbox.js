(function (blocks, element, editor,blockEditor,  i18n, data,components) {
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var CheckboxControl	=wp.components.CheckboxControl;			
var	RangeControl= wp.components.RangeControl;		
var	SelectControl=wp.components.SelectControl;
var	ToggleControl=wp.components.ToggleControl;	
	var ColorPalette=wp.components.ColorPalette;
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
	
registerBlockType('themepark-block/themepark-imgbox', {
        title: '并排图集', 
        icon: 'images-alt2', 
        category: 'themepark-block-b1',
	    keywords: ["相册","图集","图片并排"],
        description:"你可以使用这个区块调用一组图片并排的合集",
	   
   attributes: {  
	   images:{type: 'array',default: []},
	   imagestxts:{type: 'array',default: [{id:"", text:"",url:""}]},
	   detects:{type: 'string',},
        posttitles:{type: 'string'},
	    borderradius:{type: 'integer',},
	    imgwidth:{type: 'integer',default:100},
	    marginbottm:{type: 'integer',default:20},
	    margintop:{type: 'integer',default:20},
	    align:{type: 'string'},
	    thum:{type: 'string'},
	    marginleft:{type: 'integer',default:3},
	    bpadding:{type:'boolean'},
	   maxw:{type:'boolean'},
	    savebtn: {type: 'boolean',default:false},
	    lightbox: {type: 'boolean',default:false},
	   texth:{type: 'integer',default:0},
	   textf:{type: 'integer',default:12},
	   textc:{type: 'string'},
   }, 
	edit: function (props) {
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
		var detects= props.attributes.detects;
		var texth= props.attributes.texth;
		var textf= props.attributes.textf;
		var textc= props.attributes.textc;
		var maxw= props.attributes.maxw;
		var thums;
		
		var imgwidth= props.attributes.imgwidth;
		var boder="",bodycolors="",borderradiuss="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='';
		if(imgwidth){imgwidths="max-width:"+imgwidth+'px;'}
		if(maxw==true){imgwidths='max-width:100%;'}
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		if(marginleft){marginlefts="margin-left:"+marginleft+'px;'}
		if(margintop){margintops="margin-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
		if(align){aligns="text-align:"+align+';'}
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
		
		
var texths='',textfs='',	textcs='';		
	if(texth){texths='height:'+texth+'px;'}	
	if(textf){textfs='font-size:'+textf+'px;'}
	if(textc){textcs='color:'+textc+';'}	
var showimgbox=[];
var sbox=[];		
	for (var index=0;index<images.length;index++){
			boxtwidth=(120*(index+1))+"px";
		var value=images[index];
		var imgtrueurl;
		if(value.sizes.thumbnail){
		 imgtrueurl=value.sizes.thumbnail.url;}else{ imgtrueurl=value.sizes.full.url;}
		if(thum=="medium"&&value.sizes.medium){imgtrueurl=value.sizes.medium.url}else if(thum=="full"){imgtrueurl=value.sizes.full.url}
		
		var seltxt=''
		if(texth>0){
			seltxt=el("span",{className:"boxtext",Style:texths+textfs+textcs},imagestxts[index].text)
			
		}
		
		
		showimgbox[index]=el("a",{className:"showbox",Style:marginlefts+imgwidths}, el("img",{className:"swiper-lazy",Style:imgwidths+borderradiuss,src:imgtrueurl}),seltxt);
		
		sbox[index]=el( PanelBody, { title: '图片'+(index+1), initialOpen: false },
			    el( PanelRow,{},  el(TextControl, {
							 value:imagestxts[index].text,
							 label:'请输图片入标题',
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
					 el(TextControl, {
							 value:imagestxts[index].url,
							 label:'请输图片入链接:https://',
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
							
							})));
		
		
		
		
		
		
		
			if(index==0){cssactive=" active"}else{cssactive=''}
		  dispplayswiper[index]=	( el("div",{className:"cotrlboxs insbox"+index+cssactive,},
										 
										 el("img",{className:"swiper-lazy",src:imgtrueurl})
										
										));
	      displayimages[index]= 	 (
		    el("div",{className:"thempark_gallery-item"},
			  
			   el("img",{src:imgtrueurl}),
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
		var maxws='';
	if(maxw==true){maxws="line-height: 0;"}
		
		var html=el("div",{className:"swiperimgbox"+bpaddings+' '+detects,id:"list_imgs",Style:marginbottms+margintops},el("div",{className:"showimgboxs",Style:aligns+maxws},showimgbox),el("div",{className:"addimgbox"},pimgbox,Uploadbtn));
		
		var contrlbox=el( Fragment, {},el( InspectorControls, {},el( PanelBody, { title: '风格设置', initialOpen: true },
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
			label: "对齐方式",
			selected: align,
			
			options : [
        { label: '居左', value:'', },
		{ label: '居中', value: 'center' },
		{ label: '居右', value: 'right' },	
        ], 
			onChange: function( content ) {
				props.setAttributes( { align: content } );
				
			},
		})),	
																	
						el( PanelRow, {},el( SelectControl, {
			label: "略缩图选择",
			selected: thum,
			
			options : [
        { label: '小略缩图', value:'thumbnail', },
		{ label: '中等尺寸', value: 'medium' },
		{ label: '完整尺寸', value: 'full' },	
        ], 
			onChange: function( content ) {
				props.setAttributes( { thum: content } );
				
			},
		})),															
																	
																	
			el( PanelRow, {}, el( RangeControl,{label: '图片最大尺寸',min:0,max:2000,onChange: function (el) {props.setAttributes({imgwidth: el })},
		value: props.attributes.imgwidth})),	
			el( PanelRow, {},el( ToggleControl,{label: '开启图片尺寸100%自适应',onChange: ( value ) => {props.setAttributes( { maxw: value } );},
					checked: props.attributes.maxw,})),	
																	
				el( PanelRow, {}, el( RangeControl,{label: '图片左间距',min:0,max:200,onChange: function (el) {props.setAttributes({ marginleft: el })},
		value: props.attributes.marginleft})),															
			el( PanelRow, {},el( ToggleControl,{label: '开启点击弹出完整图片模式',onChange: ( value ) => {props.setAttributes( { lightbox: value } );},
					checked: props.attributes.lightbox,})),			
																	
																	
																	
																	
		el( PanelRow, {}, el( RangeControl,{label: '圆角',min:0,max: 500,onChange: function (el) {props.setAttributes({ borderradius: el })},
		value: props.attributes.borderradius})),	
																	
																	
			el( PanelRow, {}, el( RangeControl,{label: '上边距',min:0,max:50,onChange: function (el) {props.setAttributes({ margintop: el })},
		value: props.attributes.margintop})),	
			el( PanelRow, {}, el( RangeControl,{label: '下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
		value: props.attributes.marginbottm})),	
																	
		el( PanelRow, {},el( ToggleControl,{label: '左右内边距（2%）',onChange: ( value ) => {props.setAttributes( { bpadding: value } );},
					checked: props.attributes.bpadding,})),															
		   						
		el( PanelRow, {}, el( RangeControl,{label: '文字高度（0则不显示文字）',min:0,max:200,onChange: function (el) {props.setAttributes({ texth: el })},
		value: texth})),			
			el( PanelRow, {}, el( RangeControl,{label: '文字字号',min:12,max:36,onChange: function (el) {props.setAttributes({ textf: el })},
		value: textf})),															
																	
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文字颜色',	  el(ColorPalette,{
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
		onChange: ( value ) => {props.setAttributes( { textc: value } );},
		value: textc}))),																
																									
																	
																	
																	),sbox),html);
		
		
		
		
		return contrlbox;
		
		
	
		
		
		
		
		
	},	save:(function (props) {
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
		var detects= props.attributes.detects;	
		var imgwidth= props.attributes.imgwidth;
		var texth= props.attributes.texth;
		var textf= props.attributes.textf;
		var textc= props.attributes.textc;
		var maxw= props.attributes.maxw;
		
		var boder="",bodycolors="",borderradiuss="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='';
		if(imgwidth){imgwidths="max-width:"+imgwidth+'px;'}
		if(maxw==true){imgwidths='max-width:100%;'}
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		if(marginleft){marginlefts="margin-left:"+marginleft+'px;'}
		if(margintop){margintops="margin-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
		if(align){aligns="text-align:"+align+';'}
		var texths='',textfs='',	textcs='';		
	if(texth){texths='height:'+texth+'px;'}	
	if(textf){textfs='font-size:'+textf+'px;'}
	if(textc){textcs='color:'+textc+';'}	
		
	var dispplayswiper=[];	
	var se;		
	images.forEach((value, index) => {
		
			var seltxt=''
		if(texth>0){
			seltxt=el("span",{className:"boxtext",Style:texths+textfs+textcs},imagestxts[index].text)
			
		}
		
		var url='';
		var text='';
		var imgtrueurl
		if(value.sizes.thumbnail){
		 imgtrueurl=value.sizes.thumbnail.url;}else{ imgtrueurl=value.sizes.full.url;}
		if(thum=="medium"&&value.sizes.medium){imgtrueurl=value.sizes.medium.url}else if(thum=="full"){imgtrueurl=value.sizes.full.url}
		
		 if(imagestxts[index].text){var text=imagestxts[index].text;}
		if(lightbox){
			dispplayswiper[index]=el("a",{className:"showbox swipebox",rel:"boxt",Style:marginlefts+imgwidths,href:value.sizes.full.url}, el("img",{className:"swiper-lazy",Style:imgwidths+borderradiuss,src:imgtrueurl,alt:posttitles+imagestxts[index].text}),seltxt);
			
			
		}else{
			 if(imagestxts[index].url){var url=imagestxts[index].url;
								dispplayswiper[index]=el("a",{className:"showbox",Style:marginlefts+imgwidths,href:url}, el("img",{className:"swiper-lazy",Style:imgwidths+borderradiuss,src:imgtrueurl,alt:posttitles+imagestxts[index].text}),seltxt)	  
									  }else{
		dispplayswiper[index]=el("span",{className:"showbox",Style:marginlefts+imgwidths}, el("img",{className:"swiper-lazy",Style:imgwidths+borderradiuss,src:imgtrueurl,alt:posttitles+imagestxts[index].text}),seltxt);
										  }
		}
		
	});	
			var maxws='';
	if(maxw==true){maxws="line-height: 0;"}
		
		var swipercontainer=el("div",{className:"swiperimgbox"+bpaddings+' '+detects,id:"list_imgs",Style:marginbottms+margintops},el("div",{className:"showimgboxs",Style:aligns+maxws},dispplayswiper));
		
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


