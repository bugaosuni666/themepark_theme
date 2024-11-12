<?php
/**
 * 主题面包屑
 * 文章系统的面包屑，woocommerce部分使用woocommerce的面包屑
   
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/functions
 * @version     1.o
 */

function woo_breadcrumbs() {
	

$word_t7=get_themepark_option('language_th4','首页');
	echo '<div class="breadcrumbs"><nav>';
$delimiter = '/'; // 分隔符
$before = '<span class="current">'; // 在当前链接前插入
$after = '</span>'; // 在当前链接后插入
if ( !is_home() && !is_front_page() || is_paged() ) {

global $post;
$homeLink = home_url();
echo ' <a itemprop="breadcrumb" href="' . $homeLink . '"><i class="fa fa-home"></i>' . __( $word_t7 , 'cmp' ) . '</a> ' . $delimiter . ' ';
if ( is_category() ) { // 分类 存档
global $wp_query;
$cat_obj = $wp_query->get_queried_object();
$thisCat = $cat_obj->term_id;
$thisCat = get_category($thisCat);
$parentCat = get_category($thisCat->parent);
if ($thisCat->parent != 0){
$cat_code = get_category_parents($parentCat, TRUE, ' ' . $delimiter . ' ');
echo $cat_code = str_replace ('<a','<a itemprop="breadcrumb"', $cat_code );
}
echo $before . '' . single_cat_title('', false) . '' . $after;
} elseif ( is_day() ) { // 天 存档
echo '<a itemprop="breadcrumb" href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
echo '<a itemprop="breadcrumb"  href="' . get_month_link(get_the_time('Y'),get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . ' ';
echo $before . get_the_time('d') . $after;
} elseif ( is_month() ) { // 月 存档
echo '<a itemprop="breadcrumb" href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
echo $before . get_the_time('F') . $after;
} elseif ( is_year() ) { // 年 存档
echo $before . get_the_time('Y') . $after;
} elseif ( is_single() && !is_attachment() ) { // 文章
if ( get_post_type() != 'post' ) { // 自定义文章类型
$post_type = get_post_type_object(get_post_type());
$slug = $post_type->rewrite;
echo '<a itemprop="breadcrumb" href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a> ' . $delimiter . ' ';
echo $before . get_the_title() . $after;
} else { // 文章 post
$cat = get_the_category(); $cat = $cat[0];
$cat_code = get_category_parents($cat, TRUE, ' ' . $delimiter . ' ');
echo $cat_code = str_replace ('<a','<a itemprop="breadcrumb"', $cat_code );
echo $before . get_the_title() . $after;
}
} elseif ( is_search() ) {
	
echo $before .get_themepark_option('language_th2','搜索结果'). $after;	
}
	
	elseif ( !is_single() && !is_page() && get_post_type() != 'post' ) {
$post_type = get_post_type_object(get_post_type());
echo $before . $post_type->labels->singular_name . $after;
} elseif ( is_attachment() ) { // 附件
$parent = get_post($post->post_parent);
$cat = get_the_category($parent->ID); $cat = $cat[0];
echo '<a itemprop="breadcrumb" href="' . get_permalink($parent) . '">' . $parent->post_title . '</a> ' . $delimiter . ' ';
echo $before . get_the_title() . $after;
} elseif ( is_page() && !$post->post_parent ) { // 页面
echo $before . get_the_title() . $after;
} elseif ( is_page() && $post->post_parent ) { // 父级页面
$parent_id  = $post->post_parent;
$breadcrumbs = array();
while ($parent_id) {
$page = get_page($parent_id);
$breadcrumbs[] = '<a itemprop="breadcrumb" href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
$parent_id  = $page->post_parent;
}
$breadcrumbs = array_reverse($breadcrumbs);
foreach ($breadcrumbs as $crumb) echo $crumb . ' ' . $delimiter . ' ';
echo $before . get_the_title() . $after;
} elseif ( is_search() ) { // 搜索结果
echo $before ;
printf( __( 'Search Results for: %s', 'cmp' ),  get_search_query() );
echo  $after;
} elseif ( is_tag() ) { //标签 存档
echo $before ;
printf( __( 'Tag Archives: %s', 'cmp' ), single_tag_title( '', false ) );
echo  $after;
} elseif ( is_author() ) { // 作者存档
global $author;
$userdata = get_userdata($author);
echo $before ;
printf( __( 'Author Archives: %s', 'cmp' ),  $userdata->display_name );
echo  $after;
} elseif ( is_404() ) { // 404 页面
echo $before;
_e( 'Not Found', 'cmp' );
echo  $after;
}
if ( get_query_var('paged') ) { // 分页
if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() )
echo sprintf( __( '( Page %s )', 'cmp' ), get_query_var('paged') );
}

}
	echo "</nav></div>";
}

add_filter('post_type_link', 'custom_qa_link', 1, 3);
function custom_qa_link( $link, $post = 0 ){
	if ( $post->post_type == 'dwqa-question' ){
		return home_url( 'question/' . $post->ID .'.html' );
	} else {
		return $link;
	}
}
add_action( 'init', 'custom_qa_rewrites_init' );
function custom_qa_rewrites_init(){
	add_rewrite_rule(
		'question/([0-9]+)?.html$',
		'index.php?post_type=dwqa-question&p=$matches[1]',
		'top' );
}
//支持中文用户名
function chinese_login_name( $username, $raw_username, $strict ) {
    if( !$strict )
        return $username;

    return sanitize_user(stripslashes($raw_username), false);
}
add_filter('sanitize_user', 'chinese_login_name', 10, 3);
//注册用户显示注册时间
 
function themepark_add_users_column_reg_time($column_headers){
	$column_headers['reg_time'] = '注册时间';
	return $column_headers;
}
add_filter('manage_users_columns','themepark_add_users_column_reg_time');

function themepark_show_users_column_reg_time($value, $column_name, $user_id){
	if($column_name=='reg_time'){
		$user = get_userdata($user_id);
		return get_date_from_gmt($user->user_registered);
	}else{
	return $value;
	}
}
add_filter('manage_users_custom_column', 'themepark_show_users_column_reg_time',11,3);
function ys_users_sortable_columns($sortable_columns){
	$sortable_columns['reg_time'] = 'reg_time';
	return $sortable_columns;

}
add_filter( "manage_users_sortable_columns", 'ys_users_sortable_columns' );

function themepark_users_search_order($obj){
	if(!isset($_REQUEST['orderby']) || $_REQUEST['orderby']=='reg_time' ){
		if(isset($_REQUEST['order'])){
		
		if( !in_array($_REQUEST['order'],array('asc','desc')) ){
			$_REQUEST['order'] = 'desc';
		}
		$obj->query_orderby = "ORDER BY user_registered ".$_REQUEST['order']."";
			}
	}
}
add_action( 'pre_user_query', 'themepark_users_search_order' );

