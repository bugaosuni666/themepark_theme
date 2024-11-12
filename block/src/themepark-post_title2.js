(function (blocks, element, editor,blockEditor,  i18n, data,components) {
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var	RangeControl= wp.components.RangeControl;
var	TextareaControl=wp.components.TextareaControl;	
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
CheckboxControl	= components.CheckboxControl,	
registerBlockType = wp.blocks.registerBlockType;	
	
registerBlockType('themepark-block/themepark-post-title', {
        title: '调用标题发布时间等', 
        icon: 'admin-post', 
        category: 'themepark-block-b1',
	     keywords: ["标题","文章标题","发布时间","浏览次数","所属分类","标签","参数","价格"],
        description:"如果你屏蔽了自动调用的标题，那么你可以使用这个区块调用到你想要的位置,【注意，如果显示标题此区块每一篇文章或者页面不要放入多个！】",
       attributes: {  
	   title:{type:'string'},
	   title2:{type:'string'},
	   cat:{type:'boolean',},
	   tag:{type:'boolean',},	   
	   time:{type:'boolean',},
	   veiw:{type:'boolean',},
	   commet:{type:'boolean',},
	   titlesize:{type: 'integer',default:16},
	   titlesize2:{type: 'integer',default:14},
	    titlesize3:{type: 'integer'},
	    titlesize4:{type: 'integer',default:14},
	   color:{type: 'string',},
	   color2:{type: 'string',},
	   color3:{type: 'string',},
	    color4:{type: 'string',default:"#ccc"},
	    color5:{type: 'string',default:"#eaeaea"},
	    color6:{type: 'string',default:"#ccc"},
	    margen:{type: 'integer',default:20},
	    pading:{type: 'boolean'},
	   canshu:{type: 'array',default: [{title:"",text:"",f1:'',f2:'',f3:'',images:''}]},
	    
	   cf1:{type: 'integer',default:16},
	   cf2:{type: 'integer',default:16},
	   cf3:{type: 'boolean'},
	   cf4:{type: 'string'},
	   cf5:{type: 'string'},
	   cf6:{type: 'integer',default:100},
	   
	   tx1:{type:'boolean',},
	   tx2:{type:'boolean',},
	   
   }, 
	edit: function (props) {
		var title = props.attributes.title;
		var title2 = props.attributes.title2;
        var cat = props.attributes.cat;
		var time = props.attributes.time;
		var veiw = props.attributes.veiw;
		var commet = props.attributes.commet;
		var titlesize= props.attributes.titlesize;
		var titlesize2= props.attributes.titlesize2;
		var titlesize3= props.attributes.titlesize3;
		var titlesize4= props.attributes.titlesize4;
		var color= props.attributes.color;
		var color2= props.attributes.color2;
		var color3= props.attributes.color3;
		var color4= props.attributes.color4;
		var color5= props.attributes.color5;
		var color6= props.attributes.color6;
		var margen= props.attributes.margen;
		var pading= props.attributes.pading;
		var canshu= props.attributes.canshu;
        var cf1= props.attributes.cf1;
        var cf2= props.attributes.cf2;
		var cf3= props.attributes.cf3;
		var cf4= props.attributes.cf4;
		var cf5= props.attributes.cf5;
		var cf6= props.attributes.cf6;
		var tx1= props.attributes.tx1;
		var tx2= props.attributes.tx2;
		var tag= props.attributes.tag;
	var f1s='',f2s='',f3s='';
		var cf1s='',cf2s='',cf3s='',cf4s='',cf5s='',cf6s='',cstt='',cstt2='';
		if(cf1){cf1s='font-size:'+cf1+'px;'}
		if(cf2){cf2s='font-size:'+cf2+'px;'}
		if(cf3){cf3s='border-bottom:1px solid '+color4+';'}
		if(cf4){cf4s='color:'+cf4+';'}
		if(cf5){cf5s='color:'+cf5+';'}
		if(cf6){cf6s='width:'+cf6+'px;'}
		cstt=cf6s+cf1s+cf4s;
	function upGo(fieldData,index){if(index!=0){fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];}else{fieldData.push(fieldData.shift());}}
function downGo(fieldData,index) {if(index!=fieldData.length-1){fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0];}else{fieldData.unshift( fieldData.splice(index,1)[0]);}}	
		
		var csbox=[];
		var csecho=[];
		if(canshu){
		for (var index=0;index<canshu.length;index++){
			var value=canshu[index];
			var conbtn=el("div",{className:"conbtn"},
						 el("span",{onClick:(function (index) {
					 return function (){
						 upGo(canshu,index);
						var newcanshu= canshu.filter(function(image){return image; });
						 props.setAttributes({canshu: newcanshu}) 
					 }
					  
					 })(index)},el("i",{className:"fas fa-angle-up"})),
						 el("span",{onClick:(function (index) {
					 return function (){
						 downGo(canshu,index);
						var newcanshu= canshu.filter(function(image){return image; });
						 props.setAttributes({canshu: newcanshu}) 
					 }
					  
					 })(index)},el("i",{className:"fas fa-angle-down"})),
						   el("span",{onClick:(function (value) {
					 return function (){ 
						var newcanshu= canshu.filter(function(image){
							 if(image.title != value.title) {
                            return image;
                        }
						});
							props.setAttributes({canshu: newcanshu}) 
					 }
					  
					 })(value)},el("i",{className:"fas fa-times"}))
						  
						 );
			
			
			
			
			
			
			csbox[index]=el( PanelBody, { title: '标题:'+canshu[index].title, initialOpen: false },
						    el( PanelRow,{},        
				el(TextControl , {
							 value:canshu[index].title,
							 label:'标题',
							onChange:(function (index) {
					 return function (el){
						 var newcanshu=canshu;
						for (var i = 0; i < newcanshu.length; i++) {
					       if(i ==index){
							 newcanshu[index].title=el;
						   }
						}
						 newcanshu= newcanshu.filter(function(newcanshu){return newcanshu; });	
						 props.setAttributes({canshu:newcanshu}) 
					 }
					  
					 })(index)
							
							})),
							
					 el( PanelRow,{},        
				el(TextControl , {
							 value:canshu[index].text,
							 label:'参数内容',
							onChange:(function (index) {
					 return function (el){
						 var newcanshu=canshu;
						for (var i = 0; i < newcanshu.length; i++) {
					       if(i ==index){
							 newcanshu[index].text=el;
						   }
						}
						 newcanshu= newcanshu.filter(function(newcanshu){return newcanshu; });	
						 props.setAttributes({canshu:newcanshu}) 
					 }
					  
					 })(index)
							
							}))	,
							
						 el( PanelRow, {}, 
		           el( RangeControl,{label: '参数字号',min:12,max:36,
							onChange:(function (index) {
					 return function (el){
						 var newcanshu=canshu;
						for (var i = 0; i < newcanshu.length; i++) {
					       if(i ==index){
							 newcanshu[index].f1=el;
						   }
						}
						 newcanshu= newcanshu.filter(function(newcanshu){return newcanshu; });	
						 props.setAttributes({canshu:newcanshu}) 
					 }
					  
					 })(index),
		          value: canshu[index].f1})),
				 
					  el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'参数颜色',	  el(ColorPalette,{
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
		onChange:(function (index) {
					 return function (el){
						 var newcanshu=canshu;
						for (var i = 0; i < newcanshu.length; i++) {
					       if(i ==index){
							 newcanshu[index].f2=el;
						   }
						}
						 newcanshu= newcanshu.filter(function(newcanshu){return newcanshu; });	
						 props.setAttributes({canshu:newcanshu}) 
					 }
					  
					 })(index),
		value: canshu[index].f2}))),	
			el( PanelRow, {},el( CheckboxControl,{label: '价格模式',
												 onChange:(function (index) {
					 return function (el){
						 var newcanshu=canshu;
						for (var i = 0; i < newcanshu.length; i++) {
					       if(i ==index){
							 newcanshu[index].f3=el;
						   }
						}
						 newcanshu= newcanshu.filter(function(newcanshu){return newcanshu; });	
						 props.setAttributes({canshu:newcanshu}) 
					 }
					  
					 })(index), 
												  
												  
							checked: canshu[index].f3})),					
							el( PanelRow,{}, 
					 el("p",{className:"tishiwenzi"},"价格模式会将字体加粗，并且在文章列表显示会单独显示出来"))
						   );
			
			
			
			
			if(canshu[index].title||canshu[index].text){
				
			
			if(canshu[index].f1){f1s='font-size:'+canshu[index].f1+'px;'}else{f1s=cf2s;}
			if(canshu[index].f2){f2s='color:'+canshu[index].f2+';'}else{f2s=cf5s;}	
			if(canshu[index].f3){f3s='font-weight: bold;'}else{f3s='';}	
				
				
			csecho[index]=el("li",{Style:cf3s},el('span',{Style:cstt},canshu[index].title),el('span',{Style:f1s+f2s+f3s},canshu[index].text),conbtn);
			}
			
			
			
			
		}}
		
		
		
		var canshus='';
		if(canshu){canshus=el("ul",{className:"csbox_pt"},csecho)}
		
		
		
		
		
		
		
		var cats='',veiws='',times='',commets='',description='',titlesizes='',colors='',color2s='',tt1='',color3s='',titlesize3s='',color5s='',margens='',padings='',title2s='',color6s='',titlesize4s='',tags='';
		if(margen){margens="margin-bottom:"+margen+'px;'}
		if(titlesize){titlesizes="font-size:"+titlesize+"px;"}
		if(color){colors="color:"+color+";"}
		if(titlesize3){titlesize3s="border-bottom:"+titlesize3+"px solid"+color4}
		tt1=titlesizes+colors;
		if(color2){color2s="background-color:"+color2+";"}
		if(color3){color3s="color:"+color3+";"}
		if(color5){color5s="background-color:"+color5+";"}
		if(color6){color6s="color:"+color6+";"}
		if(titlesize4){titlesize4s="font-size:"+titlesize4+"px;"}
		
		var posttitles=wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' )
		if(cat){cats=el("span",{Style:color3s},el("i",{className:"fa fa-folder"}),el("a",{Style:color3s},"自动调用分类"));}
		if(time){times=el("span",{Style:color3s},el("i",{className:"fa fa-calendar"}),"2020/00/00");}
		if(veiw){veiws=el("span",{Style:color3s},el("i",{className:"fa fa-eye"}),"xxx");}
		if(commet){commets=el("span",{Style:color3s},el("i",{className:"fa fa-comment"}),"xxx");}
		if(tag){tags=el("div",{className:"tagbox"},el("a",{},"标签1"),el("a",{},"标签2"),el("a",{},"标签3"));}
		if(pading){padings='padding: 10px 1%;';}
if(cat||time||veiw||commet){description=el("div",{className:"description",Style:color5s},times,cats,veiws,commets,);}
		if(title2){title2s=el("span",{className:"stitle",Style:color6s+titlesize4s},title2)}
			var titles='';
		if(title){titles=title;}else{titles=posttitles;}
		
			var ttilse=el("div",{className:"h1title",Style:tt1},titles);
	if( tx1==true){ttilse='';}
		var html=el("header",{className:"post_title_head",Style:color2s+margens+padings},
					el("div",{className:"title",Style:titlesize3s},ttilse,title2s)
				   ,description,canshus,tags
				   );
	
		var contrbox=el( Fragment, {},el( InspectorControls, {},
					el( PanelBody, { title: '显示设置', initialOpen: true },
					    el( PanelRow, {},el( TextareaControl,{label: '标题', onChange:function (el) {
							props.setAttributes( { title: el } );},value:titles,})),
					   
					   
					    el( PanelRow, {},el( TextareaControl,{label: '副标题', onChange:function (el) {props.setAttributes( { title2: el } );},value: props.attributes.title2,})),
					 el( PanelRow, {},el( CheckboxControl,{label: '不显示标题',onChange:function (el) {props.setAttributes( { tx1: el } );},checked: tx1})), 
					  el( PanelRow,{}, el("p",{className:"tishiwenzi"},"如果你只希望使用参数功能，那么你可以不显示标题以及发布时间等内容，只显示参数"))	, 
					el( PanelRow, {},el( CheckboxControl,{label: '显示发布时间',onChange:function (el) {props.setAttributes( { time: el } );},checked: props.attributes.time})),
					el( PanelRow, {},el( CheckboxControl,{label: '显示所属分类',onChange:function (el) {props.setAttributes( { cat:  el } );},checked: props.attributes.cat})),
				    el( PanelRow, {},el( CheckboxControl,{label: '显示阅读次数',onChange:function (el) {props.setAttributes( {  veiw:  el } );},checked: props.attributes.veiw})),     
	                el( PanelRow, {},el( CheckboxControl,{label: '显示评论次数',onChange:function (el) {props.setAttributes( { commet:  el } );},checked: props.attributes.commet})),  
					   
					   el( PanelRow, {},el( CheckboxControl,{label: '显示标签',onChange:function (el) {props.setAttributes( { tag:  el } );},checked: tag})),   
					   
					 el( PanelRow, {},el( CheckboxControl,{label: '参数保存为数据',onChange:function (el) {props.setAttributes( { tx2: el } );},checked: tx2})), 
					 el( PanelRow,{},  el("p",{className:"tishiwenzi"},"勾选此选项，参数将会保存为自定义文章数据，从而会显示在列表和调用的区块列表中，【特别注意】每一篇文章只可以使用次区块保存功能一次，如果你使用了多个区块并多个区块都勾选了此选项，那么你保存的参数将会出现严重的错误！"))	, 					 
										 
										 
					 el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newcanshu=canshu;
					  newcanshu.push({title:"", text:"",f1:'',f2:'',f3:''})
					    newcanshu=  newcanshu.filter(function( newcanshu){return  newcanshu; });	
					  props.setAttributes({ canshu:newcanshu  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-plus'})
                ),"增加一个参数")
				),
						   
				el( PanelRow,{},        
				el(components.Button, {
                  className: 'uploads_img_btn',
                  onClick:function () {
					  var newcanshu=canshu;
					  newcanshu.pop();
					    newcanshu=  newcanshu.filter(function( newcanshu){return  newcanshu; });	
					  props.setAttributes({ canshu:newcanshu  }
										 
										 )},
                },el('span', { className: 'tp_add_btn' },
                  el("i",{className: 'fas fa-window-minimize'})
                ),"删除最后一个参数")
				), 
					   
					   
					   
					   
                         ),
					el( PanelBody, { title: '区块风格设置', initialOpen: false },
					   
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
		onChange: function (el) {props.setAttributes({ color2: el })},
		value: props.attributes.color2}))),
			
			  el( PanelRow, {},el( CheckboxControl,{label: '开启内边距',onChange:function (el) {props.setAttributes( { pading:  el } );},checked: props.attributes.pading})),         		   
				 el( PanelRow, {}, 							 
		 el( RangeControl,{label: '下边距',min:0,max:100,onChange: function (el) {props.setAttributes({ margen: el })},
		          value: margen})), 		   
					   
					   el( PanelRow, {}, 
		           el( RangeControl,{label: '标题字号',min:12,max:36,onChange: function (el) {props.setAttributes({ titlesize: el })},
		          value: titlesize})),
				 
					  el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'标题颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ color: el })},
		value: props.attributes.color}))),
		  
		el( PanelRow, {}, 
		           el( RangeControl,{label: '副标题字号',min:12,max:36,onChange: function (el) {props.setAttributes({ titlesize4: el })},
		          value: titlesize4})),
					   
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'副标题颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ color6: el })},
		value: props.attributes.color6}))),					   
					   
					   
			 el( PanelRow, {}, 							 
		 el( RangeControl,{label: '标题描边',min:0,max:10,onChange: function (el) {props.setAttributes({ titlesize3: el })},
		          value: titlesize3})), 								 
			
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'描边颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ color4: el })},
		value: props.attributes.color4}))),			   
		
					   
		  	 	   
					   
					   
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'发布时间等文字颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ color3: el })},
		value: props.attributes.color3}))),	
					   
					   
		 el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'发布时间等背景颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ color5: el })},
		value: props.attributes.color5}))),				   
										 
					  ),el( PanelBody, { title: '参数风格默认设置', initialOpen: false },
										 
										el( PanelRow, {}, 
		           el( RangeControl,{label: '参数标题字号',min:12,max:36,onChange: function (el) {props.setAttributes({ cf1: el })},
		          value: cf1})), 
						   el( PanelRow, {}, 
					  el( RangeControl,{label: '参数字号',min:12,max:36,onChange: function (el) {props.setAttributes({ cf2: el })},
		          value: cf2})),
						   el( PanelRow, {}, 
					 el( RangeControl,{label: '参数标题宽度（px）',min:50,max:300,onChange: function (el) {props.setAttributes({ cf6: el })},
		          value: cf6})),				 
					el( PanelRow, {},el( CheckboxControl,{label: '显示参数下边框',onChange:function (el) {props.setAttributes( { cf3: el } );},checked: cf3})),el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'参数标题颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ cf4: el })},
		value: cf4}))),
			el( PanelRow, {}, 			
			el( "lable", {Style:"width:100%;"},'参数颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ cf5: el })},
		value: cf5}))),	
						   
										 
										 
										),csbox
										
										),html)
		

	return contrbox;	
		
	},	save:function (props) {return null}
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


