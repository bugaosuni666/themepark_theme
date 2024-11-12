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
	
registerBlockType('themepark-block/themepark-icon', {
        title: '并列图标区块', 
        icon: 'forms', 
        category: 'themepark-block-b2',
	    keywords: ["并列","图标","icon"],
        description:"使用此区块可以输出一个多模式的图标并列的大型模块，现已支持SVG图标上传",
	   
    attributes: {  
		detects:{type: 'string',},
		txtf1:{type: 'integer',default:16},
		txtf2:{type: 'integer',default:14},
		txtc1:{type: 'string'},
		txtc2:{type: 'string'},
		iconf:{type: 'integer',default:36},
		iconl:{type: 'integer',default:4},
		icont:{type: 'string',default:"nomo"},
		bc1:{type: 'string'},
		bc1o:{type: 'integer',default:100},
	   icon:{type: 'array',default: [{id:Date.now(), text:"", text2:"",icon:"",iconc:"",icont:"",url:"",svg:""}]},
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
			seo1:{type: 'string',default:"h3"},
			seo2:{type: 'string',default:"h3"},
		    blockbtn:{type: 'string',},
	        blockbtnurl:{type: 'string',},
		  blockbtnc:{type: 'string',},
		blockbtnt:{type:'boolean'},
		ewcss:{type:'string'},
		
		marginbottm:{type: 'integer',default:20},
	    margintop:{type: 'integer',default:20},
		b2:{type: 'string'},
		tpvedio:{type: 'array'},
		boxhi:{type: 'integer'},
   }, 
	edit: function (props) {

	var icon = props.attributes.icon;
	var txtf1 = props.attributes.txtf1;	
	var txtc1 = props.attributes.txtc1;		
	var txtf2 = props.attributes.txtf2;	
	var txtc2 = props.attributes.txtc2;		
	var iconf = props.attributes.iconf;		
	var iconl = props.attributes.iconl;
	var icont = props.attributes.icont;			
	var bc1	= props.attributes.bc1;	
	var boxhi	= props.attributes.boxhi;	
		var bc1o	= props.attributes.bc1o;	
	var marginbottm = props.attributes.marginbottm;
	var margintop= props.attributes.margintop;	
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
		    var seo1= props.attributes.seo1;
			var seo2= props.attributes.seo2;
		var blockbtnt= props.attributes.blockbtnt;
		var tpvedio= props.attributes.tpvedio;
		var b2= props.attributes.b2;
			var ewcss= props.attributes.ewcss;
	var icondisplay=[];	
	var conicon=[];	

		
function upGo(fieldData,index){if(index!=0){fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];}else{fieldData.push(fieldData.shift());}}
function downGo(fieldData,index) {if(index!=fieldData.length-1){fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0];}else{fieldData.unshift( fieldData.splice(index,1)[0]);}}		
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
		
		
		
		
		
		
	var iconclass='',texts='',text2s='',txtf1s='',txtf2s='',txtc1s='',txtc2s='',iconfs,bc1s='',icsw='',bc1os='',boxhis='',iconfs2='';
	if(boxhi){boxhis="height:"+boxhi+'px;'}	
	if(txtf1){txtf1s='font-size:'+txtf1+'px;'}
	if(txtc1){txtc1s='color:'+txtc1+';'}	
	if(txtf2){txtf2s='font-size:'+txtf2+'px;'}
	if(txtc2){txtc2s='color:'+txtc2+';'}
	if(iconf){
		if(icont=="nomo1"){
			var widtx;
		widtx=iconf+40
		icsw='width:'+widtx+'px;height:'+widtx+'px;line-height:'+widtx+'px;'				   
		}
		iconfs='font-size:'+iconf+'px;'+icsw;}	
	if(bc1)	{bc1s='background:'+bc1+';'}
	if(bc1o!=100){bc1os='opacity:'+bc1o/100+';';} 	
	for (var index=0;index<icon.length;index++){
		var iconcs='',iconcs2='',boxib='',textsu='',svgbox='',icc='';
		if(!icon[index].iconc&&index>0){icc=icon[0].iconc ;}else{icc=icon[index].iconc;}
		if(icon[index].icon){iconclass=icon[index].icon}else{iconclass='fas fa-icons'}
		if(icon[index].text){texts= el("b",{Style:txtf1s+txtc1s},icon[index].text)}else{texts=''}
		if(icont=="nomo3"){textsu=el("b",{Style:txtf1s+txtc1s},icon[index].text);texts=''
						  text2s= el("div",{className:"themepark_icon_box_d",Style:txtf2s+txtc2s+boxhis},textsu,addbr(icon[index].text2))
						  }else{
		if(icon[index].text2){text2s= el("div",{className:"themepark_icon_box_d",Style:txtf2s+txtc2s+boxhis},textsu,addbr(icon[index].text2))}else{text2s=''}}
		if(icont=="nomo1"){if(icc){iconcs2='background:'+icc+';'}else{iconcs2='background:'+icc+';'}
						   iconcs='color:#fff;'
						   boxib=el("div",{Style:iconcs2,className:"themepark_icon_box_i_b"});
						   }else{
		if(icc){iconcs='color:'+icc+';'}}
		console.log(icon[index].svg);
		if(iconf!=0){
		if(icon[index].svg){
			iconfs2='width:'+iconf+'px;';
			svgbox=el("img",{src:icon[index].svg.url,alt:icon[index].text,Style:iconcs+iconfs2+iconcs2});}else{
			svgbox=el("i",{className:iconclass,Style:iconcs+iconfs+iconcs2});
		}}
			var value=icon[index];
		icondisplay[index]=el("div",{className:"themepark_icon_box"},
							  el("div",{className:"themepark_icon_box_i"},
							 el("div",{className:"themepark_icon_box_i_out"},
								svgbox,boxib
								
							   ),
								 texts),text2s,el("div",{className:"themepark_icon_box_bac",Style:bc1s+bc1os}),
							 
							  el("div",{className:"icondeletimg"},
				  
				   el("span",
					 {onClick:(function (index) {
					 return function (){
						
						 upGo(icon,index);
						
						 
						var newicon= icon.filter(function(image){return image; });
					
						 props.setAttributes({icon: newicon}) 
                       
					
					 }
					  
					 })(index),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-caret-left"}),el("div",{},el("span",{}),"向前移动")),
				  
				     el("span",
					 {onClick:(function (index) {
					 return function (){
						
					
                    
                           downGo(icon,index);
						
						 
						 var newicon= icon.filter(function(image){return image; });
					
						 props.setAttributes({icon: newicon}) 
                    
					 }
					  
					 })(index),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-caret-right"}),el("div",{},el("span",{}),"向后移动")),
				 
				  el("span",
					 {onClick:(function (value) {
					 return function (){ 
						var newicon= icon.filter(function(image){
							 if(image.id != value.id) {
                            return image;
                        }
							
						});
						 	

							props.setAttributes({icon: newicon,}) 
					
					 }
					  
					 })(value),
					  className:"tp_add_btn"}
					 ,el("i",{className:"fas fa-trash-alt"}),el("div",{},el("span",{}),"删除此项目"))
				 
				 )
							
							 );
		var dieletsvg='',icontdbox='',icontdbox2='';
		if(icon[index].svg){
			
			
				dieletsvg=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
			onClick:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].svg='';
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index)
			
		},"删除SVG：")));
			
			
			
			
			
			
			
		}else{dieletsvg=el( PanelRow, {}, 						
					 el(TextControl , {
							 value:icon[index].icon,
							 label:'Font Awesome图标名称',
							onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].icon=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							}));
			  icontdbox2=el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标颜色',	  el(ColorPalette,{
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
		onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].iconc=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
		value: icon[index].iconc})))	
			 
			 
			 }
		
		
		
		conicon[index]=el( PanelBody, { title: '图标'+(index+1), initialOpen: false },
						 
						  	
				dieletsvg,icontdbox2,
						  
		
					el( PanelRow,{},     
									   el(MediaUpload,{
			 type: 'image',
			
			 value:icon[index].svg,
			onSelect:(function (index) {
					 return function (el){
						  var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].svg=el;
						     
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
			 render: function (obj) {
                return el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick: obj.open
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"添加SVG图标")}
			
		}
						 
						 ) ),		  
						  
					el( PanelRow,{},   el("p",{className:"tishiwenzi"},"如果你上传了SVG图标文件，那么此处不会显示字体图标了，SVG图标的颜色无法通过后台控制，上传时注意设置好SVG图标的颜色")	),	  
						  
						  
						  
							  
						  
						  
						  
						 
									   el( PanelRow,{},
										
			 el(TextControl, {label: '图片标题',
							 value:icon[index].text,
							 
							onChange:(function (index) {
					 return function (el){
						  var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].text=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							})),
									   
	
									   
									   
							   
									   
									   
									   
									   
			   el( PanelRow,{},								
			 el(TextareaControl, {label: '文字描述',
							 value:icon[index].text2,
							 
							onChange:(function (index) {
					 return function (el){
						  var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].text2=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							})),
					   
					   
									   
											
					el( PanelRow, {}, 						
					 el(TextControl , {
							 value:icon[index].url,
							 label:'按钮/图片链接:https://',
							onChange:(function (index) {
					 return function (el){
						 var newicon=icon;
						for (var i = 0; i < newicon.length; i++) {
					       if(i==index){
							  
							 icon[index].url=el;
						    
							   
						   }
						}
						 newicon= newicon.filter(function(newicon){return newicon; });	
						 props.setAttributes({icon:newicon}) 
					 }
					  
					 })(index),
							
							})),
						 
						 
						 )
	}	
		
		
			 var vedioss='';
	
		if(tpvedio){vedioss=el( PanelRow,{},el("div",{className:"cvedio_box"},el("a",{Style:"cursor: pointer",
			onClick:(function (value) {
					 return function (){

					 props.setAttributes({tpvedio:'',}) 
					 }
					  
					 })(value),
			
		},"删除背景图："+tpvedio[0].name)));	}
		
		var bk='',marginbottms='',margintops='',b2s='';
		if(marginbottm){marginbottms ="padding-bottom:"+marginbottm +"px;"}
		if(margintop){margintops="padding-top:"+margintop+'px;'}
		if(tpvedio){bk="background-image: url("+tpvedio[0].sizes.full.url+');'}
		if(b2){b2s="background-color:"+b2+';'}
		
	var html=el("div",{className: 'themepark_icon_list_out '+detects,id:icont,Style:marginbottms+margintops+b2s+bk},
				el("div",{className: 'themepark_icon_list_in',},head,
				   el("div",{className:'themepark_icon_lists iconl'+iconl},icondisplay),blocksb),
				);	
		
		
	var control=el( Fragment, {},el( InspectorControls, {},
									
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
									
									
				el( PanelBody, { title: '增加图标', initialOpen:true },
				  
				  	el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newicon=icon;
					  newicon.push({id:Date.now(), text:"", text2:"",icon:"",iconc:"",icont:"",url:""})
					    newicon=  newicon.filter(function( newicon){return  newicon; });	
					  props.setAttributes({ icon:newicon  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一个图标")
				)
				  
				  
				  ),					
									
									
									
									
el( PanelBody, { title: '区块设置', initialOpen:false },
			
							
									   
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
									   
										el( PanelRow, {},
		el(SelectControl, {label:'样式选择',
         options:[
        { label: "默认模式", value:"nomo"},
		 { label: "图标背景模式", value:"nomo1"},
		 { label: "横向小图标模式", value:"nomo2"},
		 { label: "横向大图标模式", value:"nomo3"},	 
		
	   
        ],
         value: icont,
         onChange: function (el) {props.setAttributes({ icont: el })},}) 
				  ),											  
															  
															  
					
			  el( PanelRow, {}, el( RangeControl,{label: '一行多少列？',min:1,max:8,onChange: function (el) {props.setAttributes({iconl: el })},
		value: props.attributes.iconl})),													  
															  
															  
															  
			  el( PanelRow, {}, el( RangeControl,{label: '图标尺寸',min:0,max:100,onChange: function (el) {props.setAttributes({iconf: el })},
		value: props.attributes.iconf})),	
									   
	
														  
			el( PanelRow, {}, el( RangeControl,{label: '区块上边距',min:0,max:50,onChange: function (el) {props.setAttributes({ margintop: el })},
		value: props.attributes.margintop})),	
			el( PanelRow, {}, el( RangeControl,{label: '区块下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
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

		  	   el( PanelRow,{},								
			 el(TextControl , {label: 'a标签额外的css',
							 value:  ewcss,
							  onChange: function (el) {props.setAttributes({   ewcss: el })},
						
							
							})), 									   
				 el( PanelRow,{},   el("p",{className:"tishiwenzi"},"输入 swipebox url输入图片地址，可以点击弹出图片"),	)					   
									   
				   
				   ),el( PanelBody, { title: '图标设置', initialOpen:false },
  el( PanelRow, {}, el( RangeControl,{label: '文字描述高度（响应式对齐）',min:0,max:500,onChange: function (el) {props.setAttributes({boxhi: el })},
		value: props.attributes.boxhi})),											   
															  
				 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标标题颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({  txtc1: el })},
		value: props.attributes.txtc1}))),
		  el( PanelRow, {}, el( RangeControl,{label: '图标标题字号',min:12,max:50,onChange: function (el) {props.setAttributes({ txtf1: el })},
		value: props.attributes.txtf1})),
			
				 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标描述颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({  txtc2: el })},
		value: props.attributes.txtc2}))),
		  el( PanelRow, {}, el( RangeControl,{label: '图标描述字号',min:12,max:50,onChange: function (el) {props.setAttributes({ txtf2: el })},
		value: props.attributes.txtf2})),
																								  
															  
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'图标块背景颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({   bc1: el })},
		value: props.attributes.bc1}))),
									   
		el( PanelRow, {}, el( RangeControl,{label: '图标块背景颜色透明度',min:0,max:100,onChange: function (el) {props.setAttributes({ bc1o: el })},
		value: bc1o})),							   
									    
  
  ),
									
									
									
									
									conicon),html);
		
		
	
		return control;
		
		
		
		
		
	},save:(function (props) {
		var icon = props.attributes.icon;
	var txtf1 = props.attributes.txtf1;	
	var txtc1 = props.attributes.txtc1;		
	var txtf2 = props.attributes.txtf2;	
	var txtc2 = props.attributes.txtc2;		
	var iconf = props.attributes.iconf;		
	var iconl = props.attributes.iconl;
	var icont = props.attributes.icont;			
	var bc1	= props.attributes.bc1;	
	var bc1o	= props.attributes.bc1o;		
	var marginbottm = props.attributes.marginbottm;
	var margintop= props.attributes.margintop;	
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
		    var seo1= props.attributes.seo1;
			var seo2= props.attributes.seo2;
		var blockbtnt= props.attributes.blockbtnt;
		var tpvedio= props.attributes.tpvedio;
		var b2= props.attributes.b2;
	var ewcss= props.attributes.ewcss;
		var boxhi	= props.attributes.boxhi;	
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
		
		
	var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='';
	var iconclass='',texts='',text2s='',txtf1s='',txtf2s='',txtc1s='',txtc2s='',iconfs,bc1s='',bc1os='',icsw='',bhclas='',boxhis='';
	if(boxhi){boxhis="height:"+boxhi+'px;'}			
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
					el(seo1,{},	
				el("span",{Style:tt1,className:"main-title"},title) ,
						
					   el("span",{Style:tt2,className:"as-title"}, title2)),leftrightbtn,
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext)),leftrightbtn2
					   );}	
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn",Style:blockscs},blockbtn);}
		
		var icondisplay=[];
		
			
	if(txtf1){txtf1s='font-size:'+txtf1+'px;'}
	if(txtc1){txtc1s='color:'+txtc1+';'}	
	if(txtf2){txtf2s='font-size:'+txtf2+'px;'}
	if(txtc2){txtc2s='color:'+txtc2+';'}
	if(iconf){
		if(icont=="nomo1"){
			var widtx;
		widtx=iconf+40
		icsw='width:'+widtx+'px;height:'+widtx+'px;line-height:'+widtx+'px;'				   
		}
		iconfs='font-size:'+iconf+'px;'+icsw;}	
	if(bc1)	{bc1s='background:'+bc1+';' }
	if(bc1o!=100){bc1os='opacity:'+(bc1o/100)+';';} 	
	if(bc1=="#ffffff"){bhclas=' bhclas';}	
		
		
		for (var index=0;index<icon.length;index++){
			
			var iconcs='',iconcs2='',boxib='',textsu='',svgbox='',icc='';
		if(!icon[index].iconc&&index>0){icc=icon[0].iconc ;}else{icc=icon[index].iconc;}
		if(icon[index].icon){iconclass=icon[index].icon}else{iconclass='fas fa-icons'}
		if(icon[index].text){texts= el("b",{Style:txtf1s+txtc1s},icon[index].text)}else{texts=''}
		if(icont=="nomo3"){textsu=el("b",{Style:txtf1s+txtc1s},icon[index].text);texts=''
						  text2s= el("div",{className:"themepark_icon_box_d",Style:txtf2s+txtc2s+boxhis},textsu,addbr(icon[index].text2))
						  }else{
		if(icon[index].text2){text2s= el("div",{className:"themepark_icon_box_d",Style:txtf2s+txtc2s+boxhis},textsu,addbr(icon[index].text2))}else{text2s=''}}
		if(icont=="nomo1"){if(icc){iconcs2='background:'+icc+';'}else{iconcs2='background:'+icc+';'}
						   iconcs='color:#fff;'
						   boxib=el("div",{Style:iconcs2,className:"themepark_icon_box_i_b"});
						   }else{
		if(icc){iconcs='color:'+icc+';'}}
			
			if(iconf!=0){
		if(icon[index].svg){
			iconfs2='width:'+iconf+'px;';
			svgbox=el("img",{src:icon[index].svg.url,alt:icon[index].text,Style:iconcs+iconfs2+iconcs2});}else{
			svgbox=el("i",{className:iconclass,Style:iconcs+iconfs+iconcs2});
		}}
			
			
			
			icondisplay[index]=el("a",{className:"themepark_icon_box"+bhclas+' '+ewcss,href:icon[index].url},
							  el("div",{className:"themepark_icon_box_i"},
							 el("div",{className:"themepark_icon_box_i_out"},
								svgbox,boxib
								
							   ),
								 texts),text2s,el("div",{className:"themepark_icon_box_bac",Style:bc1s+bc1os}))
		
		}
		
		
		
		
		var bk='',marginbottms='',margintops='',b2s='';
		if(marginbottm){marginbottms ="padding-bottom:"+marginbottm +"px;"}
		if(margintop){margintops="padding-top:"+margintop+'px;'}
		if(tpvedio){bk="background-image: url("+tpvedio[0].sizes.full.url+');'}
		if(b2){b2s="background:"+b2+';'}
		
	var html=el("section",{className: 'thempark-block themepark_icon_list_out '+detects,id:icont,Style:marginbottms+margintops+b2s+bk},
				el("div",{className: 'themepark_icon_list_in',},head,
				   el("div",{className:'themepark_icon_lists iconl'+iconl},icondisplay),blocksb),
				);	
		
		
		
		
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


