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
	
registerBlockType('themepark-block/themepark-listul', {
       title: '图片并列滚动', 
        icon: 'admin-page', 
        category: 'themepark-block-b2',
	    keywords: ["并列","图片","相册"],
        description:"使用此区块可以输出一个带有动画效果的大型图片并列滚动效果",
    attributes: {  
	   images:{type: 'array',default: []},
		 tpvedio:{type: 'array'},
	   imagestxts:{type: 'array',default: [{id:"", text:"",textf:"18",textc:"#fff", text2:"",text2f:"14",text2c:"#fff",btn:"",btnc:"", top:"",left:"",url:"",move:"",showm:''}]},
        posttitles:{type: 'string'},
	    borderradius:{type: 'integer',},
	    imgwidth:{type: 'integer',default:4},
	    marginbottm:{type: 'integer',default:20},
	    margintop:{type: 'integer',default:20},
	    align:{type: 'string',default:0},
	    thum:{type: 'string'},
		textc:{type: 'string'},
		text2c:{type: 'string'},
		textf:{type: 'integer',default:16},
		text2f:{type: 'integer',default:14},
		btnc:{type: 'string'},
	    marginleft:{type: 'integer',default:3},
		top:{type: 'integer'},
		left:{type: 'string'},
	    bpadding:{type:'boolean'},
	    xuanfu: {type: 'boolean',default:false},
	    lightbox: {type: 'boolean',default:false},
		b1:{type: 'string'},
		b2:{type: 'string'},
		title:{type: 'string'},
		title2:{type: 'string'},
		title1mode:{type: 'string',default:"modle_title1"},
			title1color:{type: 'string',},
			title2color:{type: 'string',},
			titlecolor:{type: 'string',},
			title1size:{type: 'integer',default:16},
			title2size:{type: 'integer',default:14},
			titleboder:{type: 'integer',default:1},
			titleboderc:{type: 'string'},
		    titletext:{type: 'string'},
		tiletextsize:{type: 'integer',default:14},
			seo1:{type: 'string',default:'h2'},
			seo2:{type: 'string',default:'h3'},
		    blockbtn:{type: 'string',},
	        blockbtnurl:{type: 'string',},
		  blockbtnc:{type: 'string',},
		blockbtnt:{type:'boolean'},
		blockbtnt2:{type:'boolean'},
		listlie:{type: 'integer',default:1},
		imgloop:{type:'boolean'},
		detects:{type: 'string',},
		prvebtn:{type:'boolean',default:true},
		detects:{type: 'string',},
   }, 
	edit: function (props) {
		var images = props.attributes.images;
		var tpvedio= props.attributes.tpvedio;
	    var imagestxts = props.attributes.imagestxts;
		var xuanfu = props.attributes.xuanfu;
		var posttitles= props.attributes.posttitles;
		var borderradius = props.attributes.borderradius;
		var marginbottm = props.attributes.marginbottm;
		var margintop= props.attributes.margintop;
		var marginleft= props.attributes.marginleft;
		var bpadding= props.attributes.bpadding;
		var align= props.attributes.align;
		var thum= props.attributes.thum;
		var lightbox= props.attributes.lightbox;
		var textc= props.attributes.textc;
		var text2c= props.attributes.text2c;
		var textf= props.attributes.textf;
		var text2f= props.attributes.text2f;
		var btnc= props.attributes.btnc;
		var top= props.attributes.top;
		var left= props.attributes.left;
		var b1= props.attributes.b1;
		var b2= props.attributes.b2;
		var listlie= props.attributes.listlie;
		var blockbtnt2= props.attributes.blockbtnt2;
		var detects= props.attributes.detects;
		var imgloop= props.attributes.imgloop;
		var title = props.attributes.title;
			var title2 = props.attributes.title2;
		
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
		  var prvebtn= props.attributes.prvebtn;
		var detects= props.attributes.detects;
		var thums;
		
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
		
		var imgwidth= props.attributes.imgwidth;
		var boder="",bodycolors="",borderradiuss="",borderradiuss2="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='';
		
		if(borderradius){
			if(xuanfu==true){borderradiuss ="border-radius:"+borderradius +"%;border: 8px rgba(255,255,255,0.5) solid;width:90%; margin:15px 5%;overflow: hidden";borderradiuss2 =''}else{
				borderradiuss2 ="border-radius:"+borderradius +"%;overflow: hidden;;"
				borderradiuss=''
			}
			
			}
		
		if(marginbottm){marginbottms ="padding-bottom:"+marginbottm +"px;"}
		
		if(margintop){margintops="padding-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
		
		props.setAttributes({posttitles: wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' )});
	
		var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='';
	 if(titlecolor){titlecolors="color:"+titlecolor+";"}
			if(titleboderc){titlebodercs=titleboderc}
			if(titleboder){titleboders="border-bottom:"+titleboder+"px solid "+titlebodercs+";"}
			tb=titleboders;
			tb2=titleboders;
			if(title1color){title1colors="color:"+title1color+";"}
			if(title1size){title1sizes="font-size:"+title1size+"px;"}
			tt1=title1colors+title1sizes;
			if(title2color){title2colors="color:"+title2color+";"}
			if(title2size){title2sizes="font-size:"+title2size+"px;"}
			tt2=title2colors+title2sizes;
		if(tiletextsize){titletexts="font-size:"+tiletextsize+"px;"}
		
		if(title||title2){
		 head=el("div",{className:"post_in_list_head "+title1mode},
						
				el("span",{Style:tt1,className:"main-title"},title) ,
						
					   el("span",{Style:tt2,className:"as-title"}, title2),leftrightbtn,
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext)),leftrightbtn2
					   );}	
			
		
		
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn",Style:blockscs},blockbtn);}
		
	
		
		
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
	
var showimgbox=[];
		var textfs='',textcs='',text2fs='',text2cs='',texts2='',btncs='',lefts='',moves='',move2='',tops='',b1s='',b2s='',showms=" hidemo";
	if(textf){textfs="font-size:"+textf+'px;'}
		if(textc){textcs="color:"+textc+';'}
		if(text2f){text2fs="font-size:"+text2f+'px;'}
		if(text2c){text2cs="color:"+text2c+';'}
		
		if(btnc){
				if(blockbtnt2==true){btncs="color:"+btnc+";border:1px solid "+btnc+";background:none;"}else{btncs="background:"+btnc+";"}
			}
		
		
		if(left){lefts="text-align:"+left+';'}
		if(top){tops="padding-top:"+top+'%;'}
		if(b1){b1s="background:"+b1+';'}
		if(b2){b2s="background:"+b2+';'}
	for (var index=0;index<images.length;index++){
			boxtwidth=(120*(index+1))+"px";
		var value=images[index];

		var texts='',texts2='',btns='',moves='',move2='',showms=" hidemo",listul_box_text='';
		
		if(imagestxts[index].text){texts= el("h3",{className:"pcimg_title",Style:textfs+textcs}, addbr(imagestxts[index].text))}
		if(imagestxts[index].text2){texts2= el("font",{className:"pcimg_dis",Style:text2fs+text2cs},addbr(imagestxts[index].text2))}
		if(imagestxts[index].btn){btns= el("a",{className:"pcimg_btn",Style:btncs},imagestxts[index].btn)}
		
		if(imagestxts[index].showm==true){showms=" showthetext"}
		if(texts||texts2||btns){listul_box_text=el("div",{className:"listul_box_text",Style:tops+lefts},texts,texts2,btns)}
		var zhezhao='',xuanfus='';
		if(xuanfu==false){zhezhao=el("div",{className:"zhezhao"});}else{xuanfus=" xtpfms"}
		var bacimgs=el("a",{Style:borderradiuss,className:"listulpic",},el("img",{src:value.sizes.full.url}));
		showimgbox[index]=el("div",{className:"listul_box "+xuanfus,Style:b1s+borderradiuss2}, 
						el("div",{className:"listul_box_img"},bacimgs,zhezhao,
						  listul_box_text
						  ),move2
							
							);
		
			
		  dispplayswiper[index]=	el( PanelBody, { title: '图片'+(index+1), initialOpen: false },
									   
									  el( PanelRow,{}, 
										 el("div",{class:"showthum"},
											el("span",{},el("img",
															{className:"swiper-lazy",
															 src:value.sizes.thumbnail.url,
															
															}),"略缩预览"),moves
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
                ),"替换图片")}
			
		}
						 
						 ) ),
						   
									   
									 el( PanelRow,{},   el("p",{className:"tishiwenzi"},"点击按钮单独替换某一张图片"),	),
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
                ),"点击上传按住ctrl多选")}
			
		}
						 
						 );
	  
		
		 var vedioss='';
	
		if(tpvedio){vedioss=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
			onClick:(function (value) {
					 return function (){

					 props.setAttributes({tpvedio:'',}) 
					 }
					  
					 })(value),
			
		},"删除背景图："+tpvedio[0].name)));	}
		
		if(displayimages.length>=2){pimgbox=el("div",{className:"pimg_box_out",id:"list_ul_thum_box"},el("div",{className:"pimg_box",Style:"width:"+boxtwidth,},displayimages));}	
		var swipercontainer=dispplayswiper;
		var nnd;var quanweitg,cp,bk;
		
		var ws = 1440;   
		console.log(ws);
		nnd=(ws/imgwidth)+10
	
		
		if(nnd*(displayimages.length-(imgwidth*listlie))>0){cp=(nnd*(displayimages.length-(imgwidth*listlie)))}else{cp=0}
		
		if(listlie>1){ quanweitg=((nnd*imgwidth)+cp);}else{ quanweitg=(nnd*displayimages.length);}
	    
		var lightboxs,loop;
		lightboxs=" listpadings"
		if(imgwidth){imgwidths="list_hang"+imgwidth}
		
		if(tpvedio){bk="background-image: url("+tpvedio[0].sizes.full.url+');'}
		if(!imgloop){loop='no'}else{loop='yes'}
		var html=el("div",{className:"list_ul_box_out"+bpaddings+' '+detects,Style:marginbottms+margintops+b2s+bk,progressEffect:align,autoplays:marginleft,line:listlie,loops:loop},el("div",{className:"showslidebox_out "+lightboxs},head,el("div",{className:"showslidebox",id:imgwidths,Style:"width:"+quanweitg+"px"},showimgbox)),blocksb);
		
		var contrlbox=el( Fragment, {},el( InspectorControls, {},
										  
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
		 
			 el( PanelRow, {}, el( RangeControl,{label: '主标题字号',min:12,max:50,onChange: function (el) {props.setAttributes({ title1size: el })},
		value: props.attributes.title1size})),	
				 el( PanelRow, {}, el( RangeControl,{label: '副标题字号',min:12,max:50,onChange: function (el) {props.setAttributes({ title2size: el })},value: props.attributes.title2size})),	 									   
											 
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
        ], 
		onChange: function (el) {props.setAttributes({  title1color: el })},
		value: props.attributes. title1color}))),
		 
		   
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
        ], 
		onChange: function (el) {props.setAttributes({  blockbtnc: el })},
		value: props.attributes.blockbtnc}))) 
			 							  
			  ),							  
										  
										  
					 el( PanelBody, { title: '图片内容设置', initialOpen: true },
					   el( PanelRow, {},el("div",{className:"addimgbox slideb"},pimgbox,Uploadbtn)	),
					   
					   ),					  
										  
										  
										  el( PanelBody, { title: '区块风格设置', initialOpen: false },
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
        { label: '默认滚动', value:'0', },
		{ label: '全屏无缝滚动【付费版解锁】', value:'0', },		
		{ label: '中间缩放效果【付费版解锁】', value: '0' },
		{ label: 'Y轴位移+透明度【付费版解锁】', value: '0' },	
		{ label: '旋转rotate【付费版解锁】', value: '0' },		
        ], 
			onChange: function( content ) {
				props.setAttributes( { align: content } );
				
			},
		})),	
																	
														
																															
																	
			el( PanelRow, {}, el( RangeControl,{label: '一行多少列',min:1,max:8,onChange: function (el) {props.setAttributes({imgwidth: el })},
		value: props.attributes.imgwidth})),	
											 
			el( PanelRow, {}, el( RangeControl,{label: '显示多少行',min:1,max:4,onChange: function (el) {props.setAttributes({listlie: el })},
		value: props.attributes.listlie})),									 
			
									 
			el( PanelRow, {},el( ToggleControl,{label: '循环图片',onChange: ( value ) => {props.setAttributes( { imgloop: value } );},
					checked: props.attributes.imgloop,})),									 
				el( PanelRow,{},   el("p",{className:"tishiwenzi"},"循环图片开启会让图片生成在最后面保持永远可以滚动，在选择缩放。位移和旋转模式时你需要开启"),	),							 
				el( PanelRow, {},el( ToggleControl,{label: '隐藏左右按钮和底部计数按钮',onChange: ( value ) => {props.setAttributes( { prvebtn: value } );},
					checked: props.attributes.prvebtn,})),	
					el( PanelRow,{},   el("p",{className:"tishiwenzi"},"如果你的图片数量和行数刚好是相等的，不希望滚动，那么选择不显示按钮就行了。"),	),								 
				el( PanelRow, {}, el( RangeControl,{label: '自动播放',min:0,max:30,onChange: function (el) {props.setAttributes({ marginleft: el })},
		value: props.attributes.marginleft})),															
	
				
		el( PanelRow, {}, el( RangeControl,{label: '图片圆角',min:0,max:100,onChange: function (el) {props.setAttributes({ borderradius: el })},
		value: props.attributes.borderradius})),																			
																	
									
																	
			el( PanelRow, {}, el( RangeControl,{label: '上边距',min:0,max:50,onChange: function (el) {props.setAttributes({ margintop: el })},
		value: props.attributes.margintop})),	
			el( PanelRow, {}, el( RangeControl,{label: '下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
		value: props.attributes.marginbottm})),
																	
					
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块整体背景色',	  el(ColorPalette,{
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
		onChange: ( value ) => {props.setAttributes( { b2: value } );},
		value: props.attributes.b2}))),	vedioss,													
																	
																	
																	
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
                ),"设置背景图片")}
			
		}
						 
						 ) ),											
																	
),
										    el( PanelBody, { title: '图片内风格设置', initialOpen:false },
											   
						el( PanelRow, {},el( ToggleControl,{label: '文字模式开启悬浮',onChange: ( value ) => {props.setAttributes( { xuanfu: value } );},
					checked: props.attributes.xuanfu,})),		
											 
																								
		el( PanelRow, {}, el( RangeControl,{label: '文字距离顶部高度(百分比,悬浮模式有效)',min:0,max:40,
													onChange: ( value ) => {props.setAttributes( { top: value } );},
		                                            value:top})),					
											
						el( PanelRow, {},el( SelectControl, {
			label: "文字位置",
			selected: left,
			
			options : [
        { label: '居左', value:'', },
		{ label: '居中', value: 'center' },
		{ label: '居右', value: 'right' },	
        ], 
		onChange: ( value ) => {props.setAttributes( { left: value } );},
		})),
								   
											   
											   
											   
											   
											   el( PanelRow, {}, el( RangeControl,{label: '标题字体大小',min:12,max:50,onChange: ( value ) => {props.setAttributes( { textf: value } );}, value:textf})),														el( PanelRow, {}, el( RangeControl,{label: '描述字体大小',min:12,max:50,onChange: ( value ) => {props.setAttributes( { text2f: value } );}, value:text2f})),				
																
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
		onChange: ( value ) => {props.setAttributes( { textc: value } );},
		value: props.attributes.textc}))),		
																										
		
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
		onChange: ( value ) => {props.setAttributes( { text2c: value } );},
		value: props.attributes.text2c}))),		
																	
															
		
		el( PanelRow, {},el( ToggleControl,{label: '按钮边框模式',onChange: ( value ) => {props.setAttributes( { blockbtnt2: value } );},
					checked: props.attributes.blockbtnt2,})),
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'按钮颜色',	  el(ColorPalette,{
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
		onChange: ( value ) => {props.setAttributes( { btnc: value } );},
		value: props.attributes.btnc}))),																	
											
																	
											
																	
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'项目背景色',	  el(ColorPalette,{
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
		onChange: ( value ) => {props.setAttributes( { b1: value } );},
		value: props.attributes.b1}))),																
																	
																	
																	
			
											  
											  
											  
											  ),
										  
										  
										  dispplayswiper),html);
		
		
		
		
		return contrlbox;
		
		
	
		
		
		
		
		
	},
	save:(function (props) {
		
		var images = props.attributes.images;
		var tpvedio= props.attributes.tpvedio;
	    var imagestxts = props.attributes.imagestxts;
		var xuanfu = props.attributes.xuanfu;
		var posttitles= props.attributes.posttitles;
		var borderradius = props.attributes.borderradius;
		var marginbottm = props.attributes.marginbottm;
		var margintop= props.attributes.margintop;
		var marginleft= props.attributes.marginleft;
		var bpadding= props.attributes.bpadding;
		var align= props.attributes.align;
		var thum= props.attributes.thum;
		var lightbox= props.attributes.lightbox;
		var textc= props.attributes.textc;
		var text2c= props.attributes.text2c;
		var textf= props.attributes.textf;
		var text2f= props.attributes.text2f;
		var btnc= props.attributes.btnc;
		var top= props.attributes.top;
		var left= props.attributes.left;
		var b1= props.attributes.b1;
		var b2= props.attributes.b2;
		var blockbtnt2= props.attributes.blockbtnt2;
		var imgloop= props.attributes.imgloop;
		
		var title = props.attributes.title;
			var title2 = props.attributes.title2;
		
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
		var listlie= props.attributes.listlie;
		var blockbtnt= props.attributes.blockbtnt;
		var detects= props.attributes.detects;
		
		var prvebtns= props.attributes.prvebtn;
		
		var thums;
		
		var imgwidth= props.attributes.imgwidth;
		var boder="",bodycolors="",borderradiuss="",borderradiuss2="",marginbottms="",imgwidths='',aligns='',margintops='',marginlefts='',bpaddings='',loop='';
		
	if(borderradius){
			if(xuanfu==true){borderradiuss ="border-radius:"+borderradius +"%;width:90%;border: 8px rgba(255,255,255,0.5) solid; margin:15px 5%;overflow: hidden"}else{
				borderradiuss2 ="border-radius:"+borderradius +"%;overflow: hidden;;"
				
			}
			
			}
		if(marginbottm){marginbottms ="padding-bottom:"+marginbottm +"px;"}
		
		if(margintop){margintops="padding-top:"+margintop+'px;'}
		if(bpadding){bpaddings=" padingmodle"}
	var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='';
	 if(titlecolor){titlecolors="color:"+titlecolor+";"}
			if(titleboderc){titlebodercs=titleboderc}
			if(titleboder){titleboders="border-bottom:"+titleboder+"px solid "+titlebodercs+";"}
			tb=titleboders;
			tb2=titleboders;
			if(title1color){title1colors="color:"+title1color+";"}
			if(title1size){title1sizes="font-size:"+title1size+"px;"}
			tt1=title1colors+title1sizes;
			if(title2color){title2colors="color:"+title2color+";"}
			if(title2size){title2sizes="font-size:"+title2size+"px;"}
			tt2=title2colors+title2sizes;
		if(tiletextsize){titletexts="font-size:"+tiletextsize+"px;"}
		var headclass='';
		if(title||title2){
			headclass='head_hight';
		 head=el("div",{className:"post_in_list_head "+title1mode},
				el(seo1,{},		
				el("span",{Style:tt1,className:"main-title"},title) ,
						
					   el("span",{Style:tt2,className:"as-title"}, title2)),
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext)),
					   );}	
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn",Style:blockscs},blockbtn);}
		
		var nextbtn=el("span",{className:"swiper-next"},el("i",{className:"fas fa-angle-right"}));
		var prvebtn=el("span",{className:"swiper-prev"},el("i",{className:"fas fa-angle-left"}));
		
		if(prvebtns==false){parn=el("div",{className:"pagination"})}else{prvebtn='',nextbtn='',parn=el("div",{className:"pagination MovePnly"})}
		if(!imgloop){loop='no'}else{loop='yes'}
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
		var textfs='',textcs='',text2fs='',text2cs='',texts2='',btncs='',lefts='',tops='',b1s='',b2s='',showms=" hidemo";
	if(textf){textfs="font-size:"+textf+'px;'}
		if(textc){textcs="color:"+textc+';'}
		if(text2f){text2fs="font-size:"+text2f+'px;'}
		if(text2c){text2cs="color:"+text2c+';'}
		if(btnc){
				if(blockbtnt2==true){btncs="color:"+btnc+";border:1px solid "+btnc+";background:none;"}else{btncs="background:"+btnc+";"}
			}
		if(left){lefts="text-align:"+left+';'}
		if(top){tops="padding-top:"+top+'%;'}
		if(b1){b1s="background:"+b1+';'}
		if(b2){b2s="background:"+b2+';'}
		var lightboxs='',imgwidths;
		
		if(imgwidth){imgwidths="list_hang"+imgwidth}
		
		
		
		for (var index=0;index<images.length;index++){
			boxtwidth=(120*(index+1))+"px";
		var value=images[index];

		var texts='',texts2='',btns='',showms=" hidemo",listul_box_text='';
			var lazyload;
     lazyload="swiper-lazy swiper-move-lazy lazyload"
		
		
		if(imagestxts[index].text){texts= el(seo2,{className:"pcimg_title",Style:textfs+textcs}, addbr(imagestxts[index].text))}
		if(imagestxts[index].text2){texts2= el("font",{className:"pcimg_dis",Style:text2fs+text2cs},addbr(imagestxts[index].text2))}
		if(imagestxts[index].btn){btns= el("a",{className:"pcimg_btn",Style:btncs,href:imagestxts[index].url,},imagestxts[index].btn)}
		
		if(imagestxts[index].showm==true){showms=" showthetext"}
		if(texts||texts2||btns){listul_box_text=el("div",{className:"listul_box_text",Style:tops+lefts},texts,texts2,btns)}
		var zhezhao='',xuanfus='',shadow='';
		if(xuanfu==false){zhezhao=el("div",{className:"zhezhao"});}else{xuanfus=" xtpfms";if(borderradiuss!=''){shadow=" "}}
		var bacimgs=el("a",{Style:borderradiuss,className:"listulpic",href:imagestxts[index].url,},el("img",{className:lazyload,'data-src':value.sizes.full.url,src:templateUrl+"/images/loading.png",alt:imagestxts[index].text,width:value.sizes.full.width,height:value.sizes.full.height}));
		showimgbox[index]=el("div",{className:"swiper-slide listul_box "+xuanfus+shadow,Style:borderradiuss2}, 
						el("div",{className:"listul_box_img",Style:b1s},bacimgs,zhezhao,
						  listul_box_text
						  )
							
							);}
		var xs=0,bk;
		if(align>0){xs=1}
		lightboxs=" listpadings"
		if(tpvedio){bk="background-image: url("+tpvedio[0].sizes.full.url+');'}
	var html=el("section",{className:"thempark-block list_ul_box_out "+" Effect"+xs+' '+ detects+' '+headclass,Style:marginbottms+margintops+b2s+bk,swlist:imgwidth,progressEffect:align,autoplays:marginleft,line:listlie,loops:loop},
				el("div",{className:"swiper-container showslidebox_out "+lightboxs},head,
				   el("div",{className:"swiper-wrapper"},showimgbox),parn,nextbtn,prvebtn
				  ),blocksb)	
		
		
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


