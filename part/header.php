<?php 
function themepark_heaer_class($id='',$all=''){
if(is_page()||is_single()){
	if(!$post_id){$post_id=get_the_ID();$mid=get_the_ID();}
	
	$temp2 = get_post_meta($post_id,"temp2", true);
	$temname=get_post_meta($post_id,'_temname',true);	
	if($temname){
		             $mid=echo__temp_id($temname);
					 $temp2= get_post_meta($mid,"temp2", true);
					 }	
	 }
		if($temp2){$id=echo__temp_id($temp2);;}
	
		else if($temp2=="mo"){$id='';}else{
$id=echo__temp_id(get_option("mytheme_header"));
	}
	
if (class_exists('Woocommerce')&&get_option("woohead")!='') {
	if(is_woocommerce()){$id=echo__temp_id(get_option("woohead"));}
	
	}	
	
if($id)	{
$header_info=get_post_meta($id, "_headinfo",true);
$optop=get_post_meta($id, "_optop",true);
$optop2=get_post_meta($id, "_optop2",true);
$optop3=get_post_meta($id, "_optop3",true);
$baimg=get_post_meta($id, "_baimg",true);
$dropbcolor=get_post_meta($id, "_dropbcolor",true);	
$droptcolor=get_post_meta($id, "_droptcolor",true);		
$droptcolor2=get_post_meta($id, "_droptcolor2",true);
$droptcolor3=get_post_meta($id, "_droptcolor3",true);		
	}else{$header_info='';}
	$navtext='';$navb='';$navpd='';
	
if(is_array($header_info) &&$header_info[0]["navheight"]!=''	){$navheight=$header_info[0]["navheight"];}else{$navheight=92;}

if($dropbcolor){$mystyle.='.header.header_drop .haeader_bac_clor{background:'.$dropbcolor.'}';}	
if($droptcolor){$mystyle.='.header_drop .menu_header li.menu-item a.mu_a span.obk,.header_drop .menu_header li.menu-item a.mu_a,.header_drop .menu_header li.menu-item-has-children::after,.header_drop .menu_header li.xiala::after,.header_drop .menu_header li.menu-item ul.sub-menu li:hover ul.sub-menu li span.obk,.header_drop .menu_header li::before,.header_drop .listlet li.search_box_btn i.search_iocn,.header_drop  .woo_head_btnbox li i,.header_drop  .listlet li.text_ul_btn span,.header_drop  .listlet li.text_ul_btn i,.woo_head_btnbox li i{color:'.$droptcolor.'}';}
	
if(is_array($header_info) &&$header_info[0]["sicon"]){$mystyle.='.woo_head_btnbox li i, li.text_ul_btn span,  li.text_ul_btn i,.menu_header li.text_ul_btn:hover i, li.search_box_btn i.search_iocn{color:'.$header_info[0]["sicon"].'}';	}
	
if(is_array($header_info) &&$header_info[0]["subhight"]){$mystyle.='.noposition2 .sub-menu,.noposition .nav__contents_out{height:'.$header_info[0]["subhight"].'px;max-height:'.$header_info[0]["subhight"].'px;}';}		
if(is_array($header_info) &&$header_info[0]["topc2"]){$mystyle.='.header_top_ba{background-color:'.$header_info[0]["topc2"].'}';}	
if(is_array($header_info) &&$header_info[0]["topf"]){$mystyle.='.header_top_in a{font-size:'.$header_info[0]["topf"].'px}';}	
if(is_array($header_info) &&$header_info[0]["topc1"]){$mystyle.='.header_top_in a{color:'.$header_info[0]["topc1"].'}';}	
if(is_array($header_info) &&$header_info[0]["navtext"]){	$navtext='font-size:'.$header_info[0]["navtext"].'px;';
							  $mystyle.='.woo_head_btnbox li i,.listlet li i,.listlet li.search_box_btn i.search_iocn,.listlet li.text_ul_btn{font-size:'.($header_info[0]["navtext"]).'px;}';
							  
							  }
	
if(is_array($header_info) &&$header_info[0]["navb"]){	$navb='font-weight:bold;';}else{$navb='font-weight:normal;';}	
if(is_array($header_info) &&$header_info[0]["navc1"]){$mytheme_header_title=$header_info[0]["navc1"];}else{$mytheme_header_title=get_option("mytheme_header_title");}	
if(is_array($header_info) &&$header_info[0]["navpd"]){$navpd='@media screen and (min-width:1371px) and (max-width:200000px){.menu_header li.menu-item{padding:0 '.$header_info[0]["navpd"].'px;margin-right: 0;}}';}
	
	if(is_array($header_info) &&$header_info[0]["shadow"]){$mystyle.=".header{box-shadow:0 7px 7px -2px rgba(0, 0, 0, 0.".$header_info[0]["shadow"].")}";}
	
if(is_array($header_info) &&$header_info[0]["module"]==1||is_array($header_info) &&$header_info[0]["module"]==2||is_array($header_info) &&$header_info[0]["module"]==4){
if($navheight!=92){
	
$mystyle.='.menu_header li.menu-item,.listlet li.search_box_btn,.header .nav,.newhead.header .nav .listlet li.search_box_btn,.newhead.header .nav .listlet li,.listlet li.text_ul_btn,.woo_head_btnbox li,.menu_header li.menu-item a.mu_a{height:'.$navheight.'px;}.menu_header li.menu-item a.mu_a,.menu_header li.menu-item::before,.menu_header li.menu-item.menu-item-has-children::after,.listlet li.search_box_btn,.newhead.header .nav .listlet li.search_box_btn,.woo_head_btnbox li,.newhead.header .nav .listlet li,.listlet li.text_ul_btn{line-height:'.$navheight.'px;}.header .nav .logo img{height:'.$navheight.'px;}.admin-bar .content,.content{padding-top:'.$navheight.'px;}.lang_nav,.menu_header li.menu-item .sub-menu{top:'.$navheight.'px;}.admin-bar .content.cat_content,.content.cat_content{padding-top:'.$navheight.'px;}.notxf3 .content, .body.notxf3 .content,.notxf3 .content.cat_content,.admin-bar.notxf3 .content.cat_content{padding-top:'.($navheight+36).'px;}.admin-bar .xf_div2,.admin-bar .fixded .fidex_m{top:'.($navheight+31).'px;}.xf_div2,.fixded .fidex_m,.themepark_imgtext.parallax .themepark_imgtext_img{top:'.$navheight.'px;}
.admin-bar .twotab aside ,.twotab aside ,.fixded .fidex_m{top:'.$navheight.'px;}


';	
	
	
}
}	
if(is_array($header_info) &&$header_info[0]["module"]==3){
	if($navheight!=92){
		$mystyle.='.admin-bar .xf_div2,.admin-bar .fixded .fidex_m{top:88px;}.xf_div2,.fixded .fidex_m,.themepark_imgtext.parallax .themepark_imgtext_img{top:58px;}
.admin-bar .twotab aside ,.twotab aside ,.fixded .fidex_m{top:58px;}';
	}
	$mystyles.='.fixded .fidex_m{top:46px;}';
}	
	
if(is_array($header_info) &&$header_info[0]["sub"]){$mystyle.='.menu_header li.menu-item .sub-menu,.header  .menu_header li.noposition2 .sub-menu li.menu-item,.header  .menu_header li.noposition2 .sub-menu::after{width:'.$header_info[0]["sub"].'px;}.menu_header li.menu-item .sub-menu .sub-menu{left:'.$header_info[0]["sub"].'px;}.header  .header_pic_nav li.noposition2  .sub-menu.nav__contents_out{padding-left:'.$header_info[0]["sub"].'px}';
if(is_array($header_info) &&$header_info[0]["submoshi"]&&$header_info[0]["module"]==3){$mystyle.='.header  .header_pic_nav.showfristmu li.noposition2:first-child{width:'.$header_info[0]["sub"].'px;box-sizing: border-box;}';}						  
	$mystyle.='.header .header_pic_nav li.noposition2:first-child{min-width:'.$header_info[0]["sub"].'px;}.header .header_pic_nav li.noposition2:first-child a{float:none;}	';				  
						  
						  }	
	
if(is_array($header_info) &&$header_info[0]["subcolor"]&&$header_info[0]["module"]==3){$mystyle.='.header  .header_pic_nav li.noposition2:first-child{background-color:'.$header_info[0]["subcolor"].';}body .header  .header_pic_nav li.noposition2:first-child a.mu_a  > span.obk,body .newhead2.header  .header_pic_nav li.noposition2:first-child::after, body .newhead2.header  .header_pic_nav li.noposition2:first-child::before{color:#fff;}';	}
	
	
if(is_array($header_info) &&$header_info[0]["search1"]){$mytheme_header_icon_color=$header_info[0]["search1"];	}else{
	
	$mytheme_header_icon_color=get_option("mytheme_header_icon_color");
}
if(is_array($header_info) &&$header_info[0]["search2"]){$mystyle.='#newseach .search_box_ins p span,.header_iconbox_b_s span{color:'.$header_info[0]["search2"].'}';	}

if(is_array($header_info) &&$header_info[0]["navc2"]){$mytheme_header_title_hover=$header_info[0]["navc2"];}else{
	$mytheme_header_title_hover=get_option("mytheme_header_title_hover");
	}
	
if(is_array($header_info) &&$header_info[0]["navc3"]){$mytheme_header_li_hover=$header_info[0]["navc3"];}else{
$mytheme_header_li_hover=get_option("mytheme_header_li_hover");
}
if(is_array($header_info) &&$header_info[0]["navc5"]){$mytheme_header_top_bac_c2=$header_info[0]["navc5"];}else{	
$mytheme_header_top_bac_c2=get_option("mytheme_header_top_bac_c2");		
}
if(is_array($header_info) &&$header_info[0]["navc6"]){$mytheme_header_top_bac_op=($header_info[0]["navc6"]/100);}else{		
$mytheme_header_top_bac_op	=get_option('mytheme_header_top_bac_op');	
}
if($optop){$mytheme_header_top_bac_op2=($optop/100);}else{		
$mytheme_header_top_bac_op2	=get_option('mytheme_header_top_bac_op2');	
}	
	
if($optop2&&$optop2!="closed2"){$mytheme_header_matop =$optop2;}else{		
$mytheme_header_matop=get_option('mytheme_header_matop');;	
}			
	
if(is_array($header_info) &&$header_info[0]["navc4"]){$mystyle.='.mu_move_container_bac_clor{background-color:'.$header_info[0]["navc4"].'}';}	
	
if($mytheme_header_title){$mystyle.= '.menu_header li.menu-item a.mu_a  span.obk,.menu_header li.menu-item a.mu_a,.menu_header li.menu-item-has-children::after,.menu_header li.xiala::after,.menu_header li.menu-item ul.sub-menu li:hover ul.sub-menu li a.mu_a  span.obk,.menu_header li::before,.menu_header li.menu-item a.mu_a{color:'.$mytheme_header_title.';'.$navtext.'}.menu_header li span.obk,.menu_header li.menu-item a.mu_a{'.$navb.'}';}//导航标题文字颜色
	
if($mytheme_header_title_hover){$mystyle.= '.menu_header li:hover::before, .menu_header li:hover::after, .menu_header li.current-menu-item::before,  .menu_header li.menu-item:hover a.mu_a span.obk,.menu_header li:hover ul.sub-menu li:hover span.obk,.menu_header li ul.sub-menu li ul.sub-menu li:hover  a.mu_a  span, .menu_header li.current-menu-item a.mu_a  span.obk, .menu_header li .sub-menu li.current-menu-item a.mu_a  span.obk,.menu_header li:hover i,.menu_header li.current-menu-item.menu-item-has-children:after,.header .header_pic_nav.showfristmu li.noposition2 a.mu_a > span.obk,.newhead2.header .showfristmu li.noposition2.menu-item-has-children::after,.menu_header li:hover{color:'.$mytheme_header_title_hover.'}.header_pic_nav li.xiala:hover i,.menu_header li.current-product-ancestor a.mu_a  span.obk,.menu_header li.current-product-ancestor::after  {color:'.$mytheme_header_title_hover.'}';
							   
						   
							   
							   }//导航标题鼠标经过文字颜色{color:'.$droptcolor2.'}'
	if($droptcolor2){
	$mystyle.= '.header_drop .menu_header li:hover::before,.header_drop .menu_header li:hover::after,.header_drop .menu_header li.current-menu-item::before,.header_drop .menu_header li:hover a.mu_a  span.obk,.header_drop .menu_header li:hover ul.sub-menu li:hover span.obk,.header_drop .menu_header li ul.sub-menu li ul.sub-menu li:hover  a.mu_a  span,.header_drop .menu_header li.current-menu-item a.mu_a  span.obk,.header_drop .menu_header li .sub-menu li.current-menu-item a.mu_a  span.obk,.header_drop .menu_header li:hover i,.menu_header li.current-menu-item.menu-item-has-children:after,.header_drop .header .header_pic_nav.showfristmu li.noposition2 a.mu_a > span.obk,.newhead2.header .showfristmu li.noposition2.menu-item-has-children::after{color:'.$droptcolor2.'}.header_drop .header_pic_nav li.xiala:hover i,.header_drop .menu_header li:hover a.mu_a  span.obk{color:'.$droptcolor2.'}';	}
	
	
if($mytheme_header_matop=='closed'&&is_page()||is_404()){$mystyle.= '.body .content,.admin-bar.body .content,.swiperbody .content,admin-bar.swiperbody .content , .body.notxf3 .content,.swiperbody.notxf3 .content{padding-top: 0px;}';}
if($mytheme_header_matop==='closed2'){$mystyle.= '.body .content,.admin-bar.body .content,.swiperbody .content,admin-bar.swiperbody .content , .body.notxf3 .content,.swiperbody.notxf3 .content,.admin-bar .content.cat_content, .content.cat_content{padding-top: 0!important;}';}
if($mytheme_header_li_hover){ 
	if(is_array($header_info) &&$header_info[0]["navlib"]!=''){
		
		$mystyle.= '.header_pic_nav li.menu-item:hover .mu_a::after,.header_pic_nav li.current-menu-item .mu_a::after{content: ""; width: 100%; display: ; height: 2px; position: absolute; bottom: 1px; left: 0;background: '.$mytheme_header_li_hover.';}';	
if($droptcolor3){
				
					$mystyle.= '.header_drop .header_pic_nav li.menu-item:hover .mu_a::after,.header_drop .header_pic_nav li.current-menu-item .mu_a::after{content: ""; width: 100%; display: ; height: 2px; position: absolute; bottom: 1px; left: 0;background: '.$droptcolor3.';}';	
				
				}
}
		
	else{
	
	$mystyle.= '.header_pic_nav li.menu-item:hover,.header_pic_nav li.current-menu-item,.header_pic_nav li.current-product-ancestor{background:'.$mytheme_header_li_hover.'}';
	
	if($droptcolor3){$mystyle.= '.header_drop  .header_pic_nav li.menu-item:hover,.header_drop  .header_pic_nav li.current-menu-item {background:'.$droptcolor3.';}';}
}
	
	}	
	
if($baimg){$baimgs=' url('.$baimg[0]["url"].') top center ;';}
	if($mytheme_header_top_bac_c2){$mystyle.= '.header .haeader_bac_clor {background:'.$mytheme_header_top_bac_c2.$baimgs.'}';}	
	
	
	
if($mytheme_header_top_bac_op){$mystyle.= '.body .header .haeader_bac_clor,.swiperbody .header .haeader_bac_clor{opacity:'.$mytheme_header_top_bac_op.'}';}

if($mytheme_header_top_bac_op2){$mystyle.= '.body .header.header_drop .haeader_bac_clor,.swiperbody .header.header_drop .haeader_bac_clor,.nomorebody .header .haeader_bac_clor,.archive .header .haeader_bac_clor {opacity:'.$mytheme_header_top_bac_op2.'}';}
	
	if($mytheme_header_matop==='closed2'){$mystyle.='.archive .header .haeader_bac_clor ,.single .header .haeader_bac_clor{opacity:'.$mytheme_header_top_bac_op.'}';
										 
										 $mystyle.='.archive .header.header_drop .haeader_bac_clor,.single .header.header_drop .haeader_bac_clor {opacity:'.$mytheme_header_top_bac_op2.'}';
										 }

if($mytheme_header_icon_color){$mystyles.= '.listlet  li.search_box_btn i.search_iocn{color:'.$mytheme_header_icon_color.'}.search_boxs{border: 2px solid '.$mytheme_header_icon_color.';}.search_box_in p span.sel,.search_box_ins p span.sel,#newseach .search_boxs input[type="text"] + input{background: '.$mytheme_header_icon_color.';    color: #fff;}.search_boxs input[type="text"] + input{color: '.$mytheme_header_icon_color.';}';}//导航标题图标颜色
	
if($optop3){$mystyles.='.header_top_ba{opacity:'.($optop3/100).'}';}	
	
	
 $mystyles.=$navpd;	
	
if($all=="yes"){return $mystyles;}	else{
return $mystyle;}
}






function themepark_heaer($id=''){
	
	if(is_page()||is_single()){
	if(!$post_id){$post_id=get_the_ID();$mid=get_the_ID();}
	$temp2 = get_post_meta($post_id,"temp2", true);
	$temname=get_post_meta($post_id,'_temname',true);	
	if($temname){
		             $mid=echo__temp_id($temname);
					 $temp2= get_post_meta($mid,"temp2", true);
					 }
	}
		if($temp2){$id=echo__temp_id($temp2);}
		else if($temp2=="mo"){$id='';}else{
$id=echo__temp_id(get_option("mytheme_header"));
	}
if(get_post_meta($post_id,"themepark_menu", true)){$themepark_menu=no_nav_id(get_post_meta($post_id,"themepark_menu", true));}		
if (class_exists('Woocommerce')&&get_option("woohead")) {
	if(is_woocommerce()){$id=echo__temp_id(get_option("woohead"));
						$themepark_menu=get_option("woonav");	
						}
		
	}	

if($id)	{
$header_info=get_post_meta($id, "_headinfo",true);
$hidesearch	=get_post_meta($id, "_hidesearch",true);
	
	}else{$header_info='';}
	

	
	$logourl='href="'.get_bloginfo('url').'"';
	
	$icontext=get_post_meta($id, "_icontext",true);
	$droplogo=get_post_meta($id, "_droplogo",true);

	$headinfotop=get_post_meta($id, "_headinfotop",true);
	$top_left_txt1=get_post_meta($id, "_top_left_txt1",true);
	$top_left_txt2=get_post_meta($id, "_top_left_txt2",true);
	$logoimg=get_post_meta($id, "_logoimg",true);
	$submoshi='';
	if(is_array($header_info) &&$header_info[0]["submoshi"]&&$header_info[0]["module"]==3){$submoshi=$header_info[0]["submoshi"];}
	if($header_info){
	if(is_array($header_info) &&$header_info[0]["module"]==2){$headerclass=" newhead ";}else if(is_array($header_info) &&$header_info[0]["module"]==3){$headerclass=" newhead2 ";}
		else if(is_array($header_info) &&$header_info[0]["module"]==5){$headerclass="newhead2  newheadcenter ";}else if(is_array($header_info) &&$header_info[0]["module"]==4){$headerclass=" newhead  newheadright";}
		if($headinfotop==true){$headerclass.=$headerclass.'  addtop';}
		
	if($top_left_txt1){
		$top_left_txt1s.='<div class="header_top_left">';
		 for($i=0;$i<count($top_left_txt1);$i++)  {
			if($top_left_txt1[$i]["icon"]){$icon='<i class="'.$top_left_txt1[$i]["icon"].'"></i>';}else{$icon='';} 
			$top_left_txt1s.= '<a href="'.$top_left_txt1[$i]["url"].'">'.$icon.$top_left_txt1[$i]["text"].'</a>';
			 
		 }
		$top_left_txt1s.='</div>';
	}	
	if($top_left_txt2){
		$top_left_txt2s.='<div class="header_top_right">';
		
		if (class_exists('Woocommerce')&&get_option("wooclose")!='close') { 
			
			$reg_page=get_option("reg_page");
			$loginpage=wc_get_page_permalink( 'myaccount' );
			$woolangdata=get_option('woolang');	
		if (!is_user_logged_in()) {
			
			if($loginpage){$top_left_txt2ss.='<a href="'.$loginpage.'"><i class="fas fa-key"></i>'.langc($woolangdata[0],'登陆').'</a>';}
			if($reg_page){$top_left_txt2ss.='<a href="'.get_page_link($reg_page).'"><i class="fas fa-file-signature"></i>'.langc($woolangdata[1],'注册').'</a>';}
		}else{
			if($loginpage){$top_left_txt2ss.='<a href="'.$loginpage.'"><i class="fas fa-user"></i>'.langc($woolangdata[2],'个人中心').'</a>';}
			
		}
		if(is_array($header_info) &&$header_info[0]["module"]!=3){$top_left_txt2s.='<a class="opencart"><i class="fas fas fa-shopping-cart"></i>'.langc($woolangdata[3],'购物车').'</a>';}
		}
		if(is_array($header_info) &&$header_info[0]["module"]==1||is_array($header_info) &&$header_info[0]["module"]==2||is_array($header_info) &&$header_info[0]["module"]==4||is_array($header_info) &&$header_info[0]["module"]==3){$top_left_txt2s='<div class="header_top_right">';}
		 for($i=0;$i<count($top_left_txt2);$i++)  {
			 
			 
			if($top_left_txt2[$i]["icon"]){$icon='<i class="'.$top_left_txt2[$i]["icon"].'"></i>';}else{$icon='';} 
			 if($top_left_txt2[$i]["url"]){$url='href="'.$top_left_txt2[$i]["url"].'"';}
			$top_left_txt2s.= '<a '.$url.'>'.$icon.$top_left_txt2[$i]["text"].'</a>';
			 
		 }
		
		$top_left_txt2s.=$top_left_txt2ss.'</div>';
	}	
			
		
	
}else{$headerclass=get_option("mytheme_header_nms");}
	
	if(is_array($header_info)){
  $searchbilo=$header_info[0]["searchbl"];
 if($searchbilo){$bili1='style="width:'.(40-$searchbilo).'%;"';}
 if($searchbilo){$bili2='style="width:'.(25+$searchbilo).'%;"';}
	}
	
?>


	<header class="header <?php echo $headerclass; ?>">
		<?php if($headinfotop==1){ ?>
		<div class="header_top"><div class="header_top_in">
		   <?php echo $top_left_txt1s.$top_left_txt2s; ?>
		
			<div class="wp_clear"></div>
		</div>
		<div class="header_top_ba"></div>
		</div>
		<?php }
		if($droplogo){$droplogoclass=' droplogobox';$droplogos='<img class="droplogo" src="'.$droplogo[0]["sizes"]["full"]["url"].'"alt="'.get_bloginfo('name').'"/>';}else{$droplogoclass="";$droplogos="";}
		?>
		<div class="nav">
			<div class="logo<?php echo $droplogoclass; ?>">
			 <?php
	           
	
				if($logoimg!=''){
					$logo=$logoimg[0]["sizes"]["full"]["url"];
				}else{
				if(get_option("mytheme_logo")){$logo=chact_url_http(get_option("mytheme_logo"));}else{$logo=get_bloginfo('template_url').'/images/logo.png';}
				}	
		    if(is_home()){ $logo_out_s='<h1 ><a '.$logourl.'>';  $logo_out_w='</a></h1>';}else{ $logo_out_s='<div><a '.$logourl.'>';  $logo_out_w='</a></div>';}
				         
						  
						 $logos='<img class="pclogo" src="'.$logo.'" alt="'.get_bloginfo('name').'"/>'.get_bloginfo('name');
				         echo $logo_out_s.$logos.$droplogos.$logo_out_w ;
				
				
		   ?>
		   </div>
		
			<?php if(is_array($header_info) &&$header_info[0]["module"]!=3){if(is_array($header_info) &&$header_info[0]["module"]!=5){ ?>
			 <nav class="listlet PcOnly">
				
			 <li class="search_box_btn"  >
				   <i class="search_iocn  fa  fa-search"></i>
			   </li>
			     <?php if(get_option("mytheme_top_tels")){?> <li class="text_ul_btn">
					<i class='<?php echo get_option("mytheme_top_tels2"); ?>'></i> <span > <?php echo do_shortcode(get_option("mytheme_top_tels")); ?></span>
			   </li>
			   <?php }
				
				 
				 ?>
			</nav>
			 <?php  do_action("woo_btn_html"); }}
		
	
	
	if(is_array($header_info) &&$header_info[0]["module"]==3&&$hidesearch==true||is_array($header_info) &&$header_info[0]["module"]==5){
		$icnboxclass="threicon";
		if(is_array($icontext) &&$icontext[2]["url"]){$icontext_url3='target="_blank"  rel="nofollow" href="'.$icontext[2]["url"].'"';}
		if(is_array($icontext) &&$icontext[2]["title"]){$icontext3='<a '.$icontext_url3.' class="header_iconbox_b"><span class="header_iconbox_b_s"><span>'.$icontext[2]["title"].'</span><span>'.$icontext[2]["text"].'</span></span><i class="'.$icontext[2]["icon"].'"style="background-color:'.$icontext[2]["color"].'"></i></a>';}										   
													   
													   
													   }
	if(is_array($header_info) &&$header_info[0]["module"]==3){
			
			if(is_array($icontext) &&$icontext[0]["title"]||is_array($icontext) &&$icontext[1]["title"]){
				$icontext1='';$icontext2='';$icontext_url1='';$icontext_url2='';
				
				if(is_array($icontext) &&$icontext[0]["url"]){$icontext_url1='target="_blank"  rel="nofollow" href="'.$icontext[0]["url"].'"';}
				if(is_array($icontext) &&$icontext[1]["url"]){$icontext_url2='target="_blank"  rel="nofollow" href="'.$icontext[1]["url"].'"';}
				if(is_array($icontext) &&$icontext[0]["icon"]){$icontext1='<a '.$icontext_url1.' class="header_iconbox_b"><span class="header_iconbox_b_s"><span>'.$icontext[0]["title"].'</span><span>'.$icontext[0]["text"].'</span></span><i class="'.$icontext[0]["icon"].'"style="background-color:'.$icontext[0]["color"].'"></i></a>';}
				if(is_array($icontext) &&$icontext[1]["icon"]){$icontext2='<a '.$icontext_url2.' class="header_iconbox_b"><span class="header_iconbox_b_s"><span>'.$icontext[1]["title"].'</span><span>'.$icontext[1]["text"].'</span></span><i class="'.$icontext[1]["icon"].'"style="background-color:'.$icontext[1]["color"].'"></i></a>';}
			if(function_exists("header_woo_btn2")&&get_option("wooclose")==''){echo header_woo_btn2($icontext[0]["color"],$icontext[1]["color"],$icontext[2]["color"],$bili2);}else{
			echo '<div class="header_iconbox '.$icnboxclass.'"   '.$bili2.'>'.$icontext1.$icontext2.$icontext3.'</div>';}
			?>
		   
			
			
		
			
			
			<?php } if(is_array($header_info) &&$header_info[0]["module"]==3&&$hidesearch==false){ ?>
		   <div class="search_box_outs" id="newseach" <?php echo $bili1; ?>  ><div class="search_box_ins">
			    <?php search_default(); ?> 
			   <div class="close_seach"><i class="fas  fa-times"></i></div>
			   </div> </div>
		   
		   
		 <?php  }} ?>
			
			
			
			<div class="mu_move_container">
				
					
		   <nav class="menu_header header_pic_nav mu-wrapper <?php echo $submoshi; ?>">
			     <?php  if(is_array($header_info) &&$header_info[0]["module"]==5){?>
			     <?php if(get_option("mytheme_top_tels2")){?> <li class="mu-slide PcOnly  menu-item text_ul_btn">
					<i class='<?php echo get_option("mytheme_top_tels2"); ?>'></i> <span> <?php echo get_option("mytheme_top_tels"); ?></span>
			   </li>
			   <?php }?>
			   <?php }   

	
	if($themepark_menu){
		
		wp_nav_menu(array( 'walker' => new header_menu(),'container' => false,'menu' =>$themepark_menu,'items_wrap' => '%3$s' ) );
	}else{
	wp_nav_menu(array( 'walker' => new header_menu(),'container' => false,'theme_location' => 'header-menu','items_wrap' => '%3$s' ) );}?>
			  
			   <li class="mu-slide menu-item mu-sho"></li>
			   
			  <?php if(is_array($header_info) &&$header_info[0]["module"]==3&&$hidesearch==true){?>
			  <li class="mu-slide PcOnly  menu-item search_box_btn"><i class="search_iocn  fa  fa-search"></i></li>
			   <?php  } if(is_array($header_info) &&$header_info[0]["module"]==5){?>
			     <li class="mu-slide PcOnly  menu-item search_box_btn"><i class="search_iocn  fa  fa-search"></i></li>
			   <?php } ?>
			    <?php if(is_array($header_info) &&$header_info[0]["module"]==3){
			   
			    if(get_option("mytheme_top_tels")){?> <li class="mu-slide PcOnly  menu-item search_box_btn text_ul_btn">
					<i class='<?php echo get_option("mytheme_top_tels2"); ?>'></i> <span class="nusw obk" > <?php echo do_shortcode(get_option("mytheme_top_tels")); ?></span>
			   </li>
			   <?php }} ?>
	 	 	</nav>
				
				
	 	 	 </div>
			<span class=" header_nav_move_btn"><i class="fa fas fa-bars fa-navicon"></i></span>
	        <span class="search_box_move_btn"> <i class="search_iocn fa  fa-search"></i> </span>
			
			
			
			
		
	    <?php
			if(get_option("mytheme_top_languge_nav2")){
				echo '	 <span class="langnavbtn"> <i class="fas fa-globe"></i> </span>';
				echo '<div class="lang_nav">';
				wp_nav_menu(array( 'walker' => new text_nav(),'container' => false,'menu'=> get_option("mytheme_top_languge_nav2"),'items_wrap' => '%3$s' ) );
			    echo '</div>';
			}else if(class_exists("GTranslate")){echo '<span class="langnavbtn"> <i class="fas fa-globe"></i> </span><div class="lang_nav gtran">'.do_shortcode('[gtranslate]').'</div>';}
			
			?>
		    <div class="move_bac"></div>
			<div class="wp_clear"></div>
		</div>
		
		<div class="haeader_bac_clor"></div>
		<?php if(is_array($header_info) &&$header_info[0]["module"]==3||is_array($header_info) &&$header_info[0]["module"]==5){echo '<div class="mu_move_container_bac_clor"></div>';} ?>
	</header>
	
	
	<?php if(is_array($header_info) &&$header_info[0]["module"]!=3||is_array($header_info) &&$header_info[0]["module"]==3&&$hidesearch==true||is_array($header_info) &&$header_info[0]["module"]==5){ ?>
	
	<div class="search_box_out" <?php if(get_option("mytheme_search")){echo 'id="search"';} ?>>
		<div class="search_box_in">
			
			 <?php get_template_part( 'searchform' ); ?> 
			<div class="close_seach"><i class="fas  fa-times"></i></div>
		</div>
		
	</div>


<?php
}}
