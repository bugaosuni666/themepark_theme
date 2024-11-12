<?php
/**
 * 区块相关调用函数
 * 此文件处要处理动态区块输出的数据
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/ functions
 * @version     1.0
 */
//自定义添加小工具位置获取id函数
function themepark_theme_widget_id($widget_id){
$themepark_theme_widget = get_option('themepark_theme_widget');
$themepark_theme_widget_id=get_option('themepark_theme_widget_id');

if($themepark_theme_widget){$themepark_theme_widgets=explode(",",$themepark_theme_widget);};
if($themepark_theme_widget_id){$themepark_theme_widget_ids=explode(",",$themepark_theme_widget_id);};


			$ii=-1;
			if($themepark_theme_widgets){ foreach ($themepark_theme_widgets as $a){
				$ii++;
				for($i=0;$i<count($themepark_theme_widget_ids);$i++)  {
					
					$checkbox=$themepark_theme_widget_ids[$ii];
					}
				if($widget_id===$checkbox){$selected='selected="selected"';}else{$selected='';}
				$widget_list.= '<option  value="'.$checkbox.'"'.$selected.'>'.$a.'</option>';
				
				
				} }
				
			return $widget_list;

};
function par_pagenavi($range = 10){
$word_t3='<<';
$word_t4='<';
$word_t5='>';
$word_t6='>>';
global $paged, $wp_query;
$max_page='';
if ( !$max_page ) {$max_page = $wp_query->max_num_pages;}

if($max_page > 1){if(!$paged){$paged = 1;}

if($paged != 1){echo "<a href='" . get_pagenum_link(1) . "' class='extend'

title=' ".$word_t3."'> ".$word_t3." </a>";}

previous_posts_link($word_t4);

if($max_page > $range){

if($paged < $range){for($i = 1; $i <= ($range + 1); $i++)

{echo "<a href='" . get_pagenum_link($i) ."'";

if($i==$paged)echo " class='current'";echo ">$i</a>";}}

elseif($paged >= ($max_page - ceil(($range/2)))){

for($i = $max_page - $range; $i <= $max_page; $i++){echo "<a href='" . get_pagenum_link($i) ."'";

if($i==$paged)echo " class='current'";echo ">$i</a>";}}

elseif($paged >= $range && $paged < ($max_page - ceil(($range/2)))){

for($i = ($paged - ceil($range/2)); $i <= ($paged + ceil(($range/2))); $i++)

{echo "<a href='" . get_pagenum_link($i) ."'";if($i==$paged) echo " class='current'";echo ">$i</a>";}}}

else{for($i = 1; $i <= $max_page; $i++){echo "<a href='" . get_pagenum_link($i) ."'";

if($i==$paged)echo " class='current'";echo ">$i</a>";}}

next_posts_link($word_t5);

if($paged != $max_page){echo "<a href='" . get_pagenum_link($max_page) . "' class='extend'

title='".$word_t6."'>".$word_t6." </a>";}}

}
/*分页函数*/

function no_nav_id($nav_name){
	
	$menus = wp_get_nav_menus( array( 'orderby' => 'name' ) );
	
	foreach ( $menus as $menu ) {
		if($nav_name=== $menu->name){
			
			$nav_id=$menu->term_id ;
		}
		
	}
	return $nav_id;	
}

function no_cat_id($cat_name){
	 $categoryss = get_categories();
		
		foreach( $categoryss AS $categorys ) { 
		if($categorys->cat_name==$cat_name){
			$category_id= $categorys->term_id;
		 }
		}
	return $category_id;	
}
function no_cat_ids($cat_name){
	 $categoryss = get_categories();
		
		foreach( $categoryss AS $categorys ) { 
		if($categorys->slug==$cat_name){
			$category_id= $categorys->cat_ID;
		 }
		}
	return $category_id;	
}
function no_tag_id($cat_name,$moe=''){
	 $categoryss = get_tags();
		
		foreach( $categoryss AS $categorys ) { 
		if($categorys->name==$cat_name){
			$category_id= $categorys->term_id;
			$category_slug= $categorys->slug;
		 }
		}
	if($moe==1){return $category_id;}else{return $category_slug;}		
}

function get__cats($catname,$typle){
	if($catname){
	$cat=[];
	if($typle=="cat"){
       foreach($catname as $cats){
			 if($cats["checked"]==1){$cat[]=no_cat_id($cats["name"]);}}
	}elseif($typle=="tag"){
	       foreach($catname as $tags){
		          if($tags["checked"]==1){$cat[]=no_tag_id($tags["name"],"");}
	}
		}}
	return $cat;
}

function styleecho($val){$vals="";if($val){$vals='style="'.$val.'"';}return $vals;}
function stylehasdefault($val,$default){ if(!$val){$val=$default;};return $val;}

function styleinto($val,$class,$px=""){
	if($val&&$class){
		$vals=$class.':'.$val.$px.';';
		}
	
	return $vals;
}


add_action( 'pre_get_posts', 'main_query_menbers' );
function main_query_menbers( $query ) {
    if(!$query->is_main_query()) {
        return;
    }
	$categorys = get_categories();
	foreach( $categorys AS $category ) { 
		 $category_id= $category->term_id;
        $parent_id=get_category_root_id( $category_id);
	$cat_nummber= get_option('cat_nummber_'.$category_id);
	$cat_nummber_parent= get_option('cat_nummber_'.$parent_id);
	
	$cat_stiky= get_option('stiky_'.$category_id);
	$cat_stiky_parent= get_option('stiky_'.$parent_id);
		
	$sticky=get_option( 'sticky_posts' );
	if($cat_nummber){
		 if ( is_category($category_id)) {
        $query->set('posts_per_page',$cat_nummber);
    }}elseif(!$cat_nummber&&$cat_nummber_parent){  if ( is_category($category_id)) {$query->set('posts_per_page',$cat_nummber_parent);}}
	
		
	if($sticky){
	if($cat_stiky){
		 if ( is_category($category_id)) {
        $query->set('post__not_in',$sticky);
    }}elseif(!$cat_stiky&&$cat_stiky_parent){  if ( is_category($category_id)) {$query->set('post__not_in',$sticky);}}	
		
	}	
		
		
		
		
		
		
	}


};

add_filter('manage_posts_columns', 'posts_show_id', 5);
    add_action('manage_posts_custom_column', 'posts_custom_id_columns', 5, 2);
    add_filter('manage_pages_columns', 'posts_show_id', 5);
    add_action('manage_pages_custom_column', 'posts_custom_id_columns', 5, 2);
function page_show_id($defaults){
	
    $defaults['wps_post_id'] = __('ID/SEO');

    return $defaults;
}

function posts_show_id($defaults){
	$post_type = get_post_type();
		if ( get_post_type() == 'post' ) {
    $defaults['wps_post_id'] = __('ID/SEO');
		}
    return $defaults;
}
function posts_custom_id_columns($column_name, $id){
        if($column_name === 'wps_post_id'){
			
			
$keyword=get_post_meta( $id, 'themepark_seo_keyword', true );
$title= get_post_meta( $id, 'themepark_seo_title', true );
$description=get_post_meta( $id, 'themepark_seo_description', true );	
			
                echo '<p>当前ID：'.$id.'</p><p class="title"><strong>title：</strong><span>'.$title.'</span></p><p class="descriptions"><strong>描述：</strong><span>'.$description.'</span</p><p class="keyword"><strong>关键词：</strong><span>'.$keyword.'</span</p>';
    }
}


// Allow SVG
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

  global $wp_version;
  if ( $wp_version !== '4.7.1' ) {
     return $data;
  }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );

function hierarchical_cat_tree($category = 0,$a)
{
   $r = array();
    $args = array(
        'parent' => $category,'hide_empty'  => 0,
    );
    $next = get_terms('category', $args);
    if ($next) {
        foreach ($next as $cat) {
			$fegs='';$b='nops';$cj=1;
			if($cat->parent){$b='nops nops0';
							if(get_category($cat->parent)->parent){
								$b='nops nops1';$cj=2;
						if(get_category(get_category($cat->parent)->parent)->parent){
								$b='nops nops2';$cj=3;
						
							}
						if(get_category(get_category(get_category($cat->parent)->parent)->parent)->parent){
								$b='nops nops3';$cj=4;
						
							}		
						if(get_category(get_category(get_category(get_category($cat->parent)->parent)->parent)->parent)->parent){
								$b='nops nops4';$cj=5;
						
							}		
								
								
								
							}
							}else{$b='isps';}
             $r[]=array("relname"=>$fegs.$cat->name.'('.$cat->count.')',"name"=>$cat->name,"id"=>$cat->term_id,"count"=>$cat->count,'isp'=>$b,'cj'=>$cj);
           // $r []= $cat->term_id !== 0 ? hierarchical_cat_tree($cat->term_id) : null;
			if($cat->term_id != 0 ){$r=array_merge($r,hierarchical_cat_tree($cat->term_id,$r)) ;}
			    
        }
    }

    return $r;
}
