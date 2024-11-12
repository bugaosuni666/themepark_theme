<?php 
/**
 * 自定义风格设置输出  
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/functions
 * @version     1.o
 */

function extraordinaryvision_customize_css($echo){

$mytheme_header_top_bac_op=$mytheme_header_top_bac_c2=$mytheme_header_matop=$mytheme_header_title=$mytheme_header_title_hover=$mytheme_header_li_hover=$mytheme_header_li_hover2=$mytheme_header_li_hover3=$mytheme_header_icon_color=$mytheme_header_move_ba=$mytheme_header_move_icon=$mytheme_header_move_nav=$mytheme_header_move_nav2=$mytheme_header_move_nav3=$mytheme_header_move_nav4=$mytheme_header_move_nav5=$mytheme_loading_color=$mytheme_loading_color2=$mytheme_style='';	

$mytheme_loading_color=get_option("mytheme_loading_color");
$mytheme_loading_color2=get_option("mytheme_loading_color2");	
$mytheme_toolbar_PC_zx2=get_option("mytheme_toolbar_PC_zx2")	;
$mytheme_toolbar_PC_zx3=get_option("mytheme_toolbar_PC_zx3")	;
$mytheme_toolbar_PC_zx4=get_option("mytheme_toolbar_PC_zx4")	;	
$mytheme_header_move_nav=get_option("mytheme_header_move_nav");	
$mytheme_header_move_nav2=get_option("mytheme_header_move_nav2");	
$mytheme_header_move_nav3=get_option("mytheme_header_move_nav3");		
$mytheme_header_move_nav4=get_option("mytheme_header_move_nav4");	
$mytheme_header_move_nav5=get_option("mytheme_header_move_nav5");		
	
$mytheme_header_move_ba	=get_option("mytheme_header_move_ba");	
$mytheme_header_move_icon		=get_option("mytheme_header_move_icon");


$mytheme_header_top_bac_op2	=get_option('mytheme_header_top_bac_op2');
$mytheme_header_matop=get_option('mytheme_header_matop');	


$mytheme_header_li_hover2=get_option("mytheme_header_li_hover2");//当前页面描边颜色
$mytheme_header_li_hover3=get_option("mytheme_header_li_hover3");//当前页面描边颜色

$mytheme_footer_color_2	=get_option("mytheme_footer_color_2");
$mytheme_footer_color_4	=get_option("mytheme_footer_color_4");	
	
$mytheme_index_title=get_option("mytheme_index_title");		
$mytheme_index_title2=get_option("mytheme_index_title2");		

$mytheme_page_muen_nav=get_option("mytheme_page_muen_nav");		
$mytheme_page_muen_nav2=get_option("mytheme_page_muen_nav2");		
	
$mytheme_product_bac3	=get_option("mytheme_product_bac3");
$mytheme_product_bac4	=get_option("mytheme_product_bac4");
$mytheme_screening_color=get_option("mytheme_screening_color");//筛选颜色	
$mytheme_style.='<style id="extraordinaryvision_customize_css" type="text/css">';
	if(!is_admin()){$mytheme_style.=themepark_heaer_class('','yes');	}

if($mytheme_loading_color){$mytheme_style.= '#pageLoad,#pageLoad samp{background:'.$mytheme_loading_color.'}';}
if($mytheme_loading_color2){$mytheme_style.= '#pageLoad span,#pageLoad p{color:'.$mytheme_loading_color2.'}';}	
if($mytheme_toolbar_PC_zx2){$mytheme_style.= '.toolbar_btn i{color:'.$mytheme_toolbar_PC_zx2.'}';}	
if($mytheme_toolbar_PC_zx3){$mytheme_style.= '.toolbar_btn span{color:'.$mytheme_toolbar_PC_zx3.'}';}		
if($mytheme_toolbar_PC_zx4){$mytheme_style.= '.toolbar_btn{background:'.$mytheme_toolbar_PC_zx4.'}';}

if($mytheme_header_top_bac_op2){$mytheme_style.= '.body .header.header_drop .haeader_bac_clor,.swiperbody .header.header_drop .haeader_bac_clor,.nomorebody .header .haeader_bac_clor,.archive .header .haeader_bac_clor {opacity:'.$mytheme_header_top_bac_op2.'}';}	


if($mytheme_footer_color_2){$mytheme_style.= '.new_footer_bottm{background-color:'.$mytheme_footer_color_2.'}';}	
if($mytheme_footer_color_4){$mytheme_style.= '.new_footer_bottm p,.new_footer_bottm p a,.yl_menu a{color:'.$mytheme_footer_color_4.'}';}	
	
if($mytheme_index_title){$mytheme_style.= '.list_nav_ts font,.cat_loop li .case_text span, .cat_loop li .case_text span time, .case_loop li .case_text span, .case_loop li .case_text span time,.post_in_list_head .main-title,.post_content a.btn_url,.themepark_listbox .themepark_listbox_list li i,.cat_loop li .case_text .vedio_url,.case_title_lists h1.mantitle,.list_nav_title .fas.fa-align-left,.cat_page .cat-text li .case_text span, .cat_page .cat-text li .case_text span time,.index_nav_ul li.current-menu-item span,.tagbox a,#relevant   li .case_text span,#relevant  li .case_text span time,.toolbar_pc ul li i.out,.toolbar_move ul li i.out,.aside .more_m{color:'.$mytheme_index_title.'}
.post_content h2::before,.content .description,.case_title_lists a.active,.content_tab_title a.active,.pager a.current,.pager a:hover,.xian_o .xo,.cat_page .cat-text li .case_text .vedio_url,.cat_page .cat-text li .case_time time:first-child,.thenepark-slide .pagination span.swiper-pagination-bullet-active,.tagbox a:hover,.list_ul_box_out .pagination span.swiper-pagination-bullet-active,#nomo2 .themepark_icon_box_i::before,.list_swiper_tap .pagination span.swiper-pagination-bullet-active,.toolbar_pc ul li:hover{background: '.$mytheme_index_title.';}
.post_content a.btn_url,.cat_loop li .case_text .vedio_url,.tagbox a,.aside .more_m{border: solid 1px  '.$mytheme_index_title.';}
.post_gallery .swiper-slide a.active img,.post_content ul.csbox_pt li span a.product_cs_img.active{border: solid 2px  '.$mytheme_index_title.';}
';}		
if($mytheme_index_title2){$mytheme_style.='.post_content a.btn_url:hover,.cat_loop li .case_text .vedio_url:hover,a.themepark-i-btn:hover,.index_tagcloud a:hover,.cat_page .cat-text li .case_text .vedio_url:hover,.post_content a.bttombtn:hover,.aside .more_m:hover{background: '.$mytheme_index_title2.'!important;color:#fff!important;}
.post_content a.btn_url:hover,.cat_loop li .case_text .vedio_url:hover,a.themepark-i-btn:hover{border: solid 1px  '.$mytheme_index_title2.';}
';}	
if($mytheme_screening_color&&$mytheme_screening_color!="#f00000"){$mytheme_style.= '#screening .widget  ul li.current-cat-parent,#screening .widget ul li.current-cat, #screening .widget ul li.current-menu-item, #screening .widget ul li.chosen,#nav_product_mue #choose,.select,.nav_product_mu li .sub-menu li a:hover,#nav_product_mue #choose,#screening .price_slider_wrapper .button,.screening_close i, .nav_product_close i{background: '.$mytheme_screening_color.'}';}//筛选颜色

	
if($mytheme_page_muen_nav){$mytheme_style.= '.breadcrumbs{background:'.$mytheme_page_muen_nav.'}';}	
if($mytheme_page_muen_nav2){$mytheme_style.= '.breadcrumbs nav a,.breadcrumbs nav span{color:'.$mytheme_page_muen_nav2.'}';}
	
if($mytheme_product_bac3){$mytheme_style.= '.archive,.single,.page{background:'.$mytheme_product_bac3.'}';}	
	
	

//顶部
if($mytheme_header_matop!=''&&is_page()){$mytheme_style.= '.body .content,.admin-bar.body .content,.swiperbody .content,admin-bar.swiperbody .content {padding-top: 0px;}';}
	

		if(!is_admin()){$mytheme_style.=themepark_heaer_class('','');	}
	

if($mytheme_header_li_hover2&&$mytheme_header_li_hover2!="#0096fe"){$mytheme_style.= '.listlet li.text_ul_btn {background:'.$mytheme_header_li_hover2.';}';}
if($mytheme_header_li_hover3){$mytheme_style.= '.listlet li.text_ul_btn span,.listlet li.text_ul_btn i{color:'.$mytheme_header_li_hover3.';}';}

	
	

		
$mytheme_style.= '</style>';

	echo $mytheme_style;
	
 };
add_action( 'wp_head', 'extraordinaryvision_customize_css'); 
add_action( 'admin_head', 'extraordinaryvision_customize_css'); 
