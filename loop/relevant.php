<?php

function relevant(){
	 global $post;
	$word_t44=get_themepark_option('language_s2','相关推荐');
	
	
	
	echo '
<div id="post_in_list1" class="post_in_list_out " style="background-color:#ffffff;">
  <div class="post_in_list_head modle_title1"><h3><span class="main-title">'.$word_t44.'</span><div class="title_boout"><div class="title_bo" style="border-bottom:1px solid #ccc;"></div></div></h3></div>
 ';
echo '<ul id="relevant" class="post_in_list row2  nobig">';
$post_num =4;
$exclude_id = $post->ID;

$posttags = get_the_tags(); $i = 0;
if ( $posttags ) {
	$tags = ''; foreach ( $posttags as $tag ) $tags .= $tag->term_id . ',';
	$args = array(
		'post_status' => 'publish',
		'tag__in' => explode(',', $tags),
		'post__not_in' => explode(',', $exclude_id),
		'ignore_sticky_posts' => 1,
		'orderby' => 'rand',
		'posts_per_page' => $post_num,
	);
	query_posts($args);
	while( have_posts() ) { the_post(); 
	
case_page_loops('medium','h4','yes','','','','',$cat_cs);
						   
		$exclude_id .= ',' . $post->ID;
		 $i ++;
	} wp_reset_query();
	
}
if ( $i < $post_num ) {
	$cats = ''; foreach ( get_the_category() as $cat ){
		if(get_term_children($cat->cat_ID,'category')){ $cats .= $cat->cat_ID . ',';}else{$cats .= $cat->cat_ID ;}
	
	} 
	
	$args = array(
		'category__in' => explode(',', $cats),
		'post__not_in' => explode(',', $exclude_id),
		'ignore_sticky_posts' => 1,
		'orderby' => 'comment_date',
		'posts_per_page' => $post_num - $i
	);
	query_posts($args);
	while( have_posts() ) { the_post(); 
	
		
	
	case_page_loops('medium','h4','yes','','','','',$cat_cs);
						   $i++;
	} wp_reset_query();
}
echo '</ul></div>';
}



