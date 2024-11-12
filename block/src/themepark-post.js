(function (blocks, element, editor,blockEditor, i18n, data,components) {
var InnerBlocks =  wp.blockEditor.InnerBlocks;
var	TextareaControl=wp.components.TextareaControl;
var BlockList = wp.blockEditor.BlockList;
var el = wp.element.createElement; 
var ColorPalette=wp.components.ColorPalette;
var	RangeControl= wp.components.RangeControl;	
var select= wp.data.select;
var	TextControl=wp.components.TextControl;
var	SelectControl=wp.components.SelectControl;	
var	RadioControl=wp.components.RadioControl;	
var	ToggleControl=wp.components.ToggleControl;	
var CheckboxControl	=wp.components.CheckboxControl;	
var	Panel=wp.components.Panel;	
var	PanelBody=wp.components.PanelBody;	
var	PanelRow =wp.components.PanelRow ;		
var Fragment=wp.element.Fragment ;	
var Text=wp.element.Text;
var cattree	= object_name.cattree;	
var sticky_posts = object_name.sticky_posts;
var	InspectorControls=wp.blockEditor.InspectorControls ;	
var RichText = wp.blockEditor.RichText, 
registerBlockType = blocks.registerBlockType;

registerBlockType('themepark-block/themepark-post', {
        title: '调用一个文章列表', 
        icon: 'grid-view', 
        category: 'themepark-block-b2', 
	    keywords: ["文章","文章列表","调用","调用分类","调用标签"],
        description:"这是一个动态区块，可以调用一个文章列表，动态区块代表这个区块会从数据库中获取数据输出【请注意：分类和标签的混合选择是交叉获取文章，意味着符合条件的少量文章才会显示】",
        attributes: { 
		 
			
			cats:{type: 'string'},
			tags:{type: 'string'},
			
			nb:{type: 'integer',default:10},
			modle:{type: 'string',default:"post_in_list1"},
			borderradius:{type: 'integer',},
			bodycolor:{type: 'string',},
			marginbottm:{type: 'integer',default:20},
			canshu:{type: 'integer',default:0},
			b1:{type: 'integer'},
			b2:{type: 'string'},
			
			first:{type:'boolean'},
			firsth1:{type: 'integer'},
			firsth2:{type: 'integer'},
			
			pbtnicon:{type: 'string',},
			pbtn:{type: 'string',},
			ch:{type: 'integer',},
			ch2:{type: 'integer',},
			row:{type: 'integer',default:4},
			seo1:{type: 'string',},
			seo2:{type: 'string',},
			detects:{type: 'string',},
			refhas:{type:'boolean'},
			wtitlesize:{type: 'integer',default:16},
			wtitlecolor:{type: 'string',},
			wtitlecolor2:{type: 'string',},
			btncolor:{type: 'string',},
			wtitlehight:{type: 'integer',default:100},
			
			
			
			title:{type: 'string'},
		    title2:{type: 'string'},
		    title1mode:{type: 'string',default:"modle_title1"},
			title1color:{type: 'string',},
			title2color:{type: 'string',},
			titlecolor:{type: 'string',},
			title1size:{type: 'integer',default:16},
			title2size:{type: 'integer',default:14},
			titleboder:{type: 'integer'},
			titleboderc:{type: 'string'},
		    titletext:{type: 'string'},
		    tiletextsize:{type: 'integer',default:14},
			 blockbtn:{type: 'string',},
	        blockbtnurl:{type: 'string',},
		  blockbtnc:{type: 'string',},
		blockbtnt:{type:'boolean'},
		blockbtnt2:{type:'boolean'},	
		blockbtnmolde:{type:'boolean'},	
		blockbtnicon:{type:'string'},		
			post_rand:{type: 'string',},
			post_tishi:{type: 'string',default:"已经是到最后一篇内容了！"},
			load:{type: 'string'},
			
        },
     
        edit: (function (props) {
			
		var post_rand= props.attributes.post_rand;
		    var canshu= props.attributes.canshu;
			var row= props.attributes.row;
			var seo1= props.attributes.seo1;
			var seo2= props.attributes.seo2;
			var detects= props.attributes.detects;
			var ch = props.attributes.ch;
			var ch2 = props.attributes.ch2;
		
			var cats = props.attributes.cats;
			var tags = props.attributes.tags;
		    var allcats = props.attributes.allcats;
			var alltags = props.attributes.alltags;
			var nb = props.attributes.nb;
			var modle = props.attributes.modle;
			var borderradius = props.attributes.borderradius;
		    var bodycolor = props.attributes.bodycolor;
		    var marginbottm = props.attributes.marginbottm;
			
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
		  
		var blockbtnt= props.attributes.blockbtnt;
			var blockbtnt2= props.attributes.blockbtnt2;
			var blockbtnmolde= props.attributes.blockbtnmolde;
			var blockbtnicon= props.attributes.blockbtnicon;
			
			var pbtnicon=props.attributes.pbtnicon;
			var pbtn=props.attributes.pbtn;
			var refhas=props.attributes.refhas;
			var wtitlesize=props.attributes.wtitlesize;
			var wtitlecolor=props.attributes.wtitlecolor;
			var wtitlecolor2=props.attributes.wtitlecolor2;
			var wtitlehight=props.attributes.wtitlehight;
			var btncolor=props.attributes.btncolor;
			
			var b1=props.attributes.b1;
			var b2=props.attributes.b2;
			  
			var first=props.attributes.first;
			var firsth1=props.attributes.firsth1;
		    var firsth2=props.attributes.firsth2;
			var load=props.attributes.load;
			var post_tishi=props.attributes.post_tishi;
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
var canshus='';
			
if(canshu){
	var canshuli=[];
	for (var i = 0; i < canshu; i++) {
		 canshuli[i]=el("li",{},el("span",{},'参数标题'),el("span",{},'参数内容'))
		
	}
	canshus=el("ul",{className:"csbox_pt ov_"+canshu},canshuli)
}			
		
		
		 if(modle=="post_in_list3") {veiws=''}
			

			
			
			//wp.apiFetch( {path:'/wp/v2/categories?per_page=100'}).then( terms =>{console.log(terms); }  );
			//wp.apiFetch( {path:'/wp/v2/tags?per_page=100'}).then( terms => {return props.setAttributes({tagll: terms })  );
			//console.log(tagll);
			//wp.apiFetch('/wp-json/wp/v2/tags?per_page=100' )
	        var tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',pbtns='',pbtnicons="", wtitlesizes='',wtitlecolors='',wtitlecolors2='',titstyle=''.wtitlehight='',btncolors='';			
if(wtitlesize){ wtitlesizes="font-size:"+wtitlesize+'px;'}
if(wtitlecolor){wtitlecolors="color:"+wtitlecolor+';'}
if(wtitlecolor2){wtitlecolors2="color:"+wtitlecolor2+';'}			
titstyle=wtitlesizes+wtitlecolors;	
if(wtitlehight){wtitlehights="height:"+wtitlehight+"px;"}	
if(btncolor){btncolors="color:"+btncolor+";border:1px solid"+btncolor+";"}			
			if(pbtn){
				if(pbtnicon){pbtnicons=el("i",{className:"fa fa-"+pbtnicon});}
				pbtns=el("a",{className:"btn_url",Style:btncolors},pbtnicons,pbtn)
			}
			var times=el("span",{Style:wtitlecolors2},el("i",{className:"fa fa-calendar"}),"2020/00/00");
		var veiws=el("span",{Style:wtitlecolors2},el("i",{className:"fa fa-eye"}),"xxx");
			
		var description=el("div",{className:"description"},times,veiws);		
			
			
		var boder="",bodycolors="",borderradiuss="",marginbottms="";
		if( bodycolor ){bodycolors ="background-color:"+bodycolor +";"}
		if(borderradius){borderradiuss ="border-radius:"+borderradius +"px;"}
		if(marginbottm){marginbottms ="margin-bottom:"+marginbottm +"px;"}
		boder=bodycolors+borderradiuss+marginbottms;

		var list=[];	
		var featured;	
		var imgecho;	
		var postSelections=[];
		var postSelectionst=[];	
			var relcatid;
			var i=0;
			
		
			var catll=[], tagll=[];	
		    catll=cattree;
			if(catll) {catll= catll.filter(function(catll){return catll; });}	
			
		     tagll=select( "core" ).getEntityRecords( "taxonomy", "post_tag", { per_page: -1 } );
           if(tagll){  tagll= tagll.filter(function(tagll){return tagll; });}	
			
			
			
			  postSelections.push({label: "选择一个分类", value:"0"});   
			if(catll){ 
				$.each( catll , function( key, val ) {
                   postSelections.push({label: val.relname, value: val.name,id:val.id}); 
                 
                  });
			}
			
			
			postSelectionst.push({label: "选择一个标签", value:"0"});   
			if(tagll){ 
				$.each( tagll , function( key, val ) {
                   postSelectionst.push({label: val.name, value: val.name,id:val.id}); 
              
                  });
			}
			
		
			
			
			
	
var regex = /(<([^>]+)>)/ig			

var checkedcat="";	
var ccatid="";			
var checkedtag="";
var ctagid="";
if(catll&&cats){
//checkedcat;
for (var index=0;index<catll.length;index++){	
if(catll[index].name==cats){checkedcat=catll[index].id}
}	
}
if(tagll&&tags){
//checkedtag;
for (var index=0;index<tagll.length;index++){	
if(tagll[index].name==tags){checkedtag=tagll[index].id}
}	
}	
			
if(checkedcat||checkedtag){	
var query	
if(post_rand=="rand"){
	if(checkedcat&&!checkedtag){
		query = { per_page : nb,orderby : 'date',order : 'asc',status : 'publish', categories : checkedcat};	
		
	}else if(!checkedcat&&checkedtag){
			query = { per_page : nb,orderby : 'date',order : 'asc',status : 'publish', tags : checkedtag};	
		
	}else{
	query = { per_page : nb,orderby : 'date',order : 'asc',status : 'publish', categories : checkedcat, tags : checkedtag};
	}
	
}else if(post_rand=="zhiding"){
	
		if(checkedcat&&!checkedtag){
		query = { per_page : nb,orderby : 'date',order : 'desc', status : 'publish',include:sticky_posts, categories : checkedcat};	
		
	}else if(!checkedcat&&checkedtag){
			query = { per_page : nb,orderby : 'date',order : 'desc', status : 'publish',include:sticky_posts, tags : checkedtag};	
		
	}else{
	query = { per_page : nb,orderby : 'date',order : 'desc', status : 'publish',include:sticky_posts, categories : checkedcat, tags : checkedtag};
	}
	
	
}else{	
	
	if(checkedcat&&!checkedtag){
		query = { per_page : nb,orderby : 'date',order : 'desc',status : 'publish', categories : checkedcat};	
		
	}else if(!checkedcat&&checkedtag){
			query = { per_page : nb,orderby : 'date',order : 'desc',status : 'publish', tags : checkedtag};	
		
	}else{
	query = { per_page : nb,orderby : 'date',order : 'desc',status : 'publish', categories : checkedcat, tags : checkedtag};
	}
	
	
 
}



	
	
}else{
	query = { per_page : nb,orderby : 'date',order : 'desc',status : 'publish'};
	
}
var posts=[];	
	
posts = select( 'core' ).getEntityRecords( 'postType', 'post', query ); 
//posts= posts.filter(function(posts){return posts; });			
console.log(posts);			
			
			
var b2s='';					
if(b2){b2s="background:"+b2+';border:none;'}
var b1s='';					
if(b1){b1s="max-height:"+b1+'px;'}			
			
if(posts){
	for (var i=0;i<posts.length;i++){
		
		
		
		if(modle!="post_in_list3"){
			if(modle=="post_in_list2"){
              if(row<5){featured=posts[i].full_url}else{featured=posts[i].medium_url}
		
				
			}else{featured=posts[i].thumbnail_url}
			
			if(row<5){if(first==true){if(i==0){featured=posts[i].full_url}}}
			imgecho=el("div",{className:"case_pic",Style:b1s},el("img",{src:featured}))
		}
		var firstclass='';
		if(modle=="post_in_list1"&&first==true){
			if(row==2||row==4){firstclass='firstclass';}
			
		}else if(modle=="post_in_list2"&&first==true){
				if(row<5){firstclass='firstclass';}
			
		}else{firstclass=''}
		
		
		if(row<5){if(first==true){if(i==0){featured=posts[i].full_url}}}
		if(i==0){
			if(first==true){
			var firsth1s,firsth2s;
			var imgechos	
			firsth1s=wtitlehights;	
			firsth2s=b1s	
			if(modle=="post_in_list1"){if(row==2||row==4){firsth1s="height:129px"}}
			 if(modle=="post_in_list1"){if(row==2||row==4){firsth2s="max-height:318px"}}
			if(modle!="post_in_list3"){ imgechos=el("div",{className:"case_pic",Style:firsth2s},el("img",{src:featured}));}
				
				
			list[i]=el("li",{className:firstclass ,Style:b2s},
				imgechos,
				 el("div",{className:"case_text",Style:firsth1s},el("h4",{className:"posts_titles",Style:titstyle},posts[i].title.rendered),description,canshus,
				   el("p",{Style:wtitlecolors2},((posts[i].content.rendered).replace(regex, "")).substring(0,250))),
				   pbtns
				  );}else{
				list[i]=el("li",{ Style:b2s},
				imgecho,
				 el("div",{className:"case_text",Style:wtitlehights},el("h4",{className:"posts_titles",Style:titstyle},posts[i].title.rendered),description,canshus,
				   el("p",{Style:wtitlecolors2},((posts[i].content.rendered).replace(regex, "")).substring(0,250))),
				   pbtns
				  );
				
			}
			
		}else{
		list[i]=el("li",{ Style:b2s},
				imgecho,
				 el("div",{className:"case_text",Style:wtitlehights},el("h4",{className:"posts_titles",Style:titstyle},posts[i].title.rendered),description,canshus,
				   el("p",{Style:wtitlecolors2},((posts[i].content.rendered).replace(regex, "")).substring(0,250))),
				   pbtns
				  );
		}
	}
	
	
}	else{
	
	el("li",{},el("div",{className:"case_text",Style:wtitlehights}, el("p",{},"没有调用到文章，请重新选择")))
	
}


			var lists;
			var fs=' nobig';
		if(first==true){
		if(modle=="post_in_list1"){
			if(row==2||row==4){fs=' firstbig';}
			
		}else if(modle=="post_in_list2"){
				if(row<5){fs=' firstbig';}
			
		}
			}
			
			
			if(list!=""){lists=el("ul",{className:"post_in_list row"+row+fs},list)}else{
				lists=el("div",{className:"loadlist"},
						 el("span",{},el( CheckboxControl,{label: '这是一个动态模块，首次进入或者在选择分类或者标签后如果没有显示，请疯狂点击这里刷新！',onChange:function (el) {props.setAttributes( { refhas: el} );},checked: props.attributes.refhas}))  )
																					}
			var head='';
			if(!title1mode){title1mode="modle_title1"}
			
				var	tb='',tt1='',tt2='',titlecolors='',titleboders='',titlebodercs='#ccc',title1colors='',title1sizes='',title2colors='',title2sizes='',leftrightbtn='',leftrightbtn2='',titletexts='',blocksb='',blockscs='',head='',blockbtnicons='',blockbtnhead='';
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
		
		if(blockbtnicon){blockbtnicons=el("i",{className:blockbtnicon});}
			
			if(blockbtnc){
				if(blockbtnt==true){blockscs="color:"+blockbtnc+";border:1px solid "+blockbtnc+";background:none;"}else if(blockbtnt2==true){blockscs="color:"+blockbtnc+";padding:2px 0;"}else{	blockscs="background:"+blockbtnc+";"}
			}
		    
			if(blockbtn){ blocksb=el("a",{className:"bttombtn",Style:blockscs},blockbtnicons,blockbtn);}	
			var blocksb2=blocksb;
			if(blockbtnmolde==true){blockbtnhead=blocksb;blocksb2=''}
			
		if(title||title2){
		 head=el("div",{className:"post_in_list_head "+title1mode},
						
				el("span",{Style:tt1,className:"main-title"},title) ,
						
					   el("span",{Style:tt2,className:"as-title"}, title2),blockbtnhead,
					    el("div",{className:"title_boout"}, el("div",{className:"title_bo",Style:tb2})),el("font",{className:"titletext",Style:titlecolors+titletexts},addbr(titletext))
					   );}	
			
			
			
			
			
			
			
			
			var html=el("div",{id:modle,className:"post_in_list_out "+detects,Style:boder},head,lists,blocksb2);
				
		
			
			
			
			
			
			
			
	        
				var controlbox=el( Fragment, {}, el( InspectorControls, {},
													
													el( PanelBody, { title: '标题设置', initialOpen:false },
			
		   
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
							 value:blockbtnicon,
							 label:'底部按钮图标代码',
							onChange: function (el) {props.setAttributes({blockbtnicon: el })},
							
							})),									 
																		   
			
			el( PanelRow, {}, 						
					 el(TextControl , {
							 value:blockbtnurl,
							 label:'底部按钮url',
							onChange: function (el) {props.setAttributes({ blockbtnurl: el })},
							
							})),									 
											 
			el( PanelRow, {},el( ToggleControl,{label: '按钮边框模式',onChange: ( value ) => {props.setAttributes( { blockbtnt: value } );},
					checked: props.attributes.blockbtnt,})),
													   
			el( PanelRow, {},el( ToggleControl,{label: '按钮文字模式',onChange: ( value ) => {props.setAttributes( { blockbtnt2: value } );},
					checked: props.attributes.blockbtnt2,})),
													   
			el( PanelRow, {},el( ToggleControl,{label: '按钮在标题区域',onChange: ( value ) => {props.setAttributes( { blockbtnmolde: value } );},
					checked: props.attributes.blockbtnmolde,})),							  
			
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
		value: props.attributes.blockbtnc}))) ,
													   
													   
													   
											   
													   
			 							  
			  ),
													
													
													el( PanelBody, { title: '调用设置', initialOpen:true },
																			  
													el( PanelRow, {},					  
													 el(SelectControl, {label:'选择分类',
                                                                        help: '',
                                                                        options: postSelections,
                                                                        value:cats,
                                                                        onChange: function (el) {props.setAttributes({ cats: el })},
																		
                                                                    })),	
																			 
					
														el( PanelRow, {},				  
													 el(SelectControl, {label:'选择标签',
                                                                        help: '',
                                                                        options: postSelectionst,
                                                                        value:tags,
                                                                        onChange: function (el) {props.setAttributes({ tags: el })},
                                                                    })
			
			 
														  
														  ),	
											 		el("p",{className:"tishiwenzi"},"这是一个动态模块，如果没有显示列表请点击模块刷新区域"),		 
														 	  
														
																										  
			el( PanelRow, {},
		el(SelectControl, {label:'排序设置',
         options:[
        { label: "默认最新文章", value:""},
		 { label: "随机文章", value:"rand"},
		 { label: "只显示置顶文章", value:"zhiding"},
		
        ],
         value: post_rand,
         onChange: function (el) {props.setAttributes({ post_rand: el })},}) 
				  ),			   
													   
													   
													   
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
		el(SelectControl, {label:'调用的文章标题的HTML标签',
         options:[
        { label: "H2", value:"H2"},
		 { label: "H3", value:"H3"},
		 { label: "H4", value:"H4"},
		 { label: "H5", value:"H5"},
	     { label: "b", value:"b"},
		 { label: "div", value:"div"},
        ],
         value: seo2,
         onChange: function (el) {props.setAttributes({ seo2: el })},}) 
				  ),									
											
		  el("p",{className:"tishiwenzi"},"这两个选项是关于SEO框架标签的选项，输出不同权重的标签有助于让搜索引擎很容易弄清楚你的网站内容主次之分")
																		  
																			  
													 ),
		
	el( PanelBody, { title: '风格设置', initialOpen:false },
	   el( PanelRow, {},el( ToggleControl,{label: '开启第一篇高亮',onChange: ( value ) => {props.setAttributes( {first: value } );},
					checked:props.attributes.first})),	
		
		     el("p",{className:"tishiwenzi"},"第一篇高亮在【默认横向的图文列表】中：2、4列有效，【图文竖向列表】中：3、4列有效，其余的无效"),
	   
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
		   
		   el( PanelRow, {},el( RangeControl,{label: '文章数量', min:1,max:20,onChange:function (el) {props.setAttributes( { nb: el } );},value: nb})),															  
				el( PanelRow, {},
				   el(SelectControl, {label:'选择样式',
         options:[
        { label: "默认横向的图文列表", value:"post_in_list1"},
		{ label: "图文竖向列表", value:"post_in_list2"},
         { label: "纯文字横向列表", value:"post_in_list3"},
        ],
         value: modle,
         onChange: function (el) {props.setAttributes({ modle: el })},}) 
				  ),
		
		el( PanelRow, {}, el( RangeControl,{label: '并列行数',min:1,max:8,onChange: function (el) {props.setAttributes({ row: el })},value: props.attributes.row}))	,
			  el("p",{className:"tishiwenzi"},"并列行数在横向列表最多4行，其余的无效，竖向列表最少3行，小于三行无效"),												
																		
			  
		  el( PanelRow, {}, el( RangeControl,{label: '显示参数',min:0,max:6,onChange: function (el) {props.setAttributes({ canshu: el })},value: props.attributes.canshu}))	,	
			 el( PanelRow, {}, 	  el("p",{className:"tishiwenzi"},"参数如果显示不全，请设置下文字区域高度")),				
		el( PanelRow, {}, 

		   el( RangeControl,{label: '文章标题字号',min:12,max:36,onChange: function (el) {props.setAttributes({ wtitlesize: el })},
		value: wtitlesize})),
	el( PanelRow, {}, 	 el( RangeControl,{label: '文字区域高度',min:13,max:200,onChange: function (el) {props.setAttributes({ wtitlehight: el })},
		value: wtitlehight})),
				
		el( PanelRow, {}, 	 el( RangeControl,{label: '图片的最大高度',min:80,max:500,onChange: function (el) {props.setAttributes({b1: el })},
		value:b1})),		
				
				
				
			  el("p",{className:"tishiwenzi"},"竖向排版时调整标题区域的高度，以便在自适应时，不会因为标题字数差异而错位，横向标题时无需设置"),											
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
		onChange: function (el) {props.setAttributes({ wtitlecolor: el })},
		value: props.attributes.wtitlecolor}))),
	   
	    el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'描述颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ wtitlecolor2: el })},
		value: props.attributes.wtitlecolor2}))),	
	   
													
			  
		el( PanelRow, {},el( TextControl,{label: '文章按钮', onChange:function (el) {props.setAttributes( { pbtn: el } );},value:  pbtn,})),	
	    el( PanelRow, {},el( TextControl,{label: '按钮图标', onChange:function (el) {props.setAttributes( { pbtnicon: el } );},value: pbtnicon,})),	
		el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'按钮颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ btncolor: el })},
		value: props.attributes.btncolor}))),  
			  
			  
		   el( PanelRow, {}, 
		   el( RangeControl,{label: '区块圆角',min:0,max: 20,onChange: function (el) {props.setAttributes({ borderradius: el })},
		value: borderradius})),			   
			el( PanelRow, {}, el( RangeControl,{label: '区块下边距',min:0,max:50,onChange: function (el) {props.setAttributes({ marginbottm: el })},
		value: marginbottm})),
				
				
				el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'文章块背景颜色',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ b2: el })},
		value: props.attributes.b2})))	,	
				
				
				
			el( PanelRow, {},   
			el( "lable", {Style:"width:100%;"},'区块背景颜色(含标题)',	  el(ColorPalette,{
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
		onChange: function (el) {props.setAttributes({ bodycolor: el })},
		value: props.attributes.bodycolor})))
		
			   
			   
			   
			   )									   
												   
												   ),html);
			
			
			
			
			
			
			
			return controlbox;
	
          
        }),
	
	
			
       
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


