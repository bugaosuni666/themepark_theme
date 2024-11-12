<?php get_header();?>
<div class="content">
<?php

$temp = get_option('mytheme_error_404_pc');	
$id=echo__temp_id($temp);	
$themepark_post_width=get_post_meta($id,"themepark_post_width",true);
$themepark_padding=get_post_meta($id,"themepark_padding",true);
$aside_sidebar=my_get_dynamic_sidebar("sidebar-widgets4");		
	
if(!$themepark_post_width||$themepark_post_width=="1022px"){
$output= '<div class="twotab" '.$nop.'><mian class="main_slide post_content"><article>';
$outputafter=$bdiv.'</article></mian>'.'<aside class="aside">'.$aside_sidebar.'<div id="boder"></div><div id="fixed"></div></aside><div class="wp_clear"></div></div>';
}else if($themepark_post_width=="1400px"){
$output=	'<div class="twotab"><mian class="post_content"><article>';
	
$outputafter=$bdiv.'</article></mian></div>';	
}else if($themepark_post_width=="100% dong"||$themepark_post_width=="100%"||$themepark_post_width=="swiper"){
	if($themepark_post_width=="100% dong"){$dong="dong";}else{$dong='';}
$output='<mian class="post_content nobotnp '.$dong.'">';
$outputafter=$bdiv.'</mian>';	
}
	
	

if($temp){
	echo $output;
if($themepark_padding==false){echo '<div class="nomorepost '.$nibs.'">';}	
	echo echo__temp($temp);
if($themepark_padding==false){echo '</div>';}
echo $outputafter;
}
	else{echo '<p>404页面，请挂载一个区块模板</p>';}
	
	

?>
</div>

<?php get_footer(); ?>
