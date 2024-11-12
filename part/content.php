<?php function page__content($id=""){
	include(dirname(dirname(__FILE__))."/options/data_cache.php"); 
$output=$outputafter="";$titlehtml='';	$pads='';$top_imgs='';
if(!$id){$id=get_the_ID();}
$themepark_post_width=get_post_meta($id,"themepark_post_width",true);
$themepark_post_hide_title=get_post_meta($id,"themepark_post_hide_title",true);
$themepark_post_main_b=get_post_meta($id,"themepark_post_main_b",true);	
$themepark_post_main_p=get_post_meta($id,"themepark_post_main_p",true);	
$themepark_post_hide_title=get_post_meta($id,"themepark_post_hide_title",true);
$themepark_padding=get_post_meta($id,"themepark_padding",true);
$mytheme_leftright=get_option("mytheme_leftright");
	

	
if($themepark_post_main_b){$stlye.='background-color:'.$themepark_post_main_b.';';$nibs="nombac";}
if($themepark_post_main_p){$stlye.='opacity:'.($themepark_post_main_p/100).';';}	
if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}	
if($stlye){$bdiv='<div class="main_ba"style="'.$stlye.'"></div>';}	
	
$sidebar="sidebar-widgets4";
	

    $cat_widget='sidebar-widgets4';
	  $aside=$cat_widget;
		
	
$aside_sidebar=my_get_dynamic_sidebar($aside);		

if(!$themepark_post_width||$themepark_post_width=="1022px"){
$output= '<div class="twotab" '.$nop.'><mian class="main_slide post_content"><article>';
$outputafter=$bdiv.'</article></mian>'.'<aside class="aside">'.$aside_sidebar.'<div id="boder"></div><div id="fixed"></div></aside><div class="wp_clear"></div></div>';
}else if($themepark_post_width=="1400px"){
$output=	'<div class="twotab"><mian class="post_content"><article>';
	
$outputafter=$bdiv.'</article></mian></div>';	
}else if($themepark_post_width=="100% dong"||$themepark_post_width=="100%"){
	if($themepark_post_width=="100% dong"){$dong="dong";}else{$dong='';}
$output='<mian class="post_content nobotnp '.$dong.'">';
$outputafter=$bdiv.'</mian>';	
}	

	
	
	
	
if(!$themepark_post_hide_title&&!is_front_page()){
if(is_single()||is_page()){
foreach((get_the_category()) as $category) { $cas.= '<a '.styleecho($color3).' href="'. get_category_link($category->cat_ID).'">' .$category->cat_name .'</a> ';} 
if( comments_open() ){$commet='<span><i class="fa fa-comment"></i>'.get_comments_number('0', '1', '% ' ).'</span>';	}
$posttags = get_the_tags(); if ($posttags) {$taglist.= '<span class="tags"><i class="fa fa-tag"></i>'; foreach($posttags as $tag) { $taglist.= '<a target="_blank" id="tagss" href="'.get_bloginfo('url').'/tag/'.$tag->slug.'">' .$tag->name .'</a>';}$taglist.= '</span>';}	
	
	
$titlehtml='<header class="post_title_head pp"><div class="title"><h1 class="h1title">'.get_the_title($id).'</h1></div><div class="description"><time ><i class="fa fa-calendar"></i>'.get_the_time('Y/m/d').'</time><span><i class="fa fa-folder"></i>'.$cas.'</span>'.$taglist.'<span><i class="fa fa-eye"></i>'.$getPostViews.'</span>'.$commet.'</div></header>';	
	
	
	
}
}
if($themepark_post_width=="1022px"||$themepark_post_width=="1400px"){$co=' cat_content ';}
echo '<div class="content '.$co.$mytheme_leftright.'">';	
	
if(!is_front_page()){if($themepark_post_width=="1022px"||$themepark_post_width=="1400px"){woo_breadcrumbs();}}

echo $output.'

<div class="the_page_content">';
 if (have_posts()) : while (have_posts()) : the_post(); 
echo $titlehtml;
if($themepark_padding==false){echo '<div class="nomorepost '.$nibs.'">';}	
the_content(); 
if($themepark_padding==false){do_action("add_meta_after_the_content");
							echo '<div class="post_next">';	   
				echo '<span>'; if (get_previous_post()) { previous_post_link($language_s3.': %link','%title',true);}echo '</span>';
				echo '<span>';if (get_next_post()) { echo  next_post_link($language_s4.': %link','%title',true);}  echo '</span>'; 
								   echo '</div></div>';
								  if(is_single()){relevant(); }
								   if ( comments_open() ){
echo '<div id="respond"><section>';
  comments_template();
echo '</section></div>' ;
    }
								  }		
endwhile; wp_reset_query(); 
endif; 
echo'</div>'.$outputafter.'</div>';
}
