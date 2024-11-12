<?php
 function themepark_meta_inbody(){
	 if(is_page()|| is_front_page()||is_single()||is_404()){
	 $id=get_the_ID();
if(is_404()){	 
$temp = get_option('mytheme_error_404_pc');	
$id=echo__temp_id($temp);	}	
	  $themepark_post_bcolor=get_post_meta($id,"themepark_post_bcolor",true);
	  $themepark_post_img=get_post_meta($id,"themepark_post_img",true);
	  $themepark_post_img_po=get_post_meta($id,"themepark_post_img_po",true);
	  $themepark_post_img_re=get_post_meta($id,"themepark_post_img_re",true);
	  $themepark_post_img_cover=get_post_meta($id,"themepark_post_img_cover",true);
	   $themepark_post_img_fixed=get_post_meta($id,"themepark_post_img_fixed",true);
	 
	 if($themepark_post_bcolor){$style.="background-color:".$themepark_post_bcolor.';';}
	 if($themepark_post_img){$style.="background-image:url(".$themepark_post_img.');';}
	 if($themepark_post_img_po){$style.="background-position:".$themepark_post_img_po.';';}
	 if($themepark_post_img_re){$style.="background-repeat:no-repeat;";}
	 if($themepark_post_img_cover){$style.="background-size:cover;";}
	 if($themepark_post_img_fixed){$style.="background-attachment:fixed;";}
	if($style){$styles='style="'.$style.'"'; echo $styles;}	 
	 }
 }


