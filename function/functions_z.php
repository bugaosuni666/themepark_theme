<?php 

/**
 * 文章系统函数
 * 函数清单：
 * 文章页面底部固定文字输出判断;
 * option获取和默认函数;
 * 多作者时，只显示自己的文章;
 * 特定的meta—key在qeury进行筛选；
 * 如果有Memcached或者Memcache，缓存菜单;
 * 排除搜索敏感字;
 * Gravatar缓存头像;
 * 排除搜索敏感字;
 * 开启安全登录链接,以及管理员和编辑权限不得从默认woocommerce登陆;
 * 如果打开了安全key,那么woocommerce的登录将会被拦截;
 * 移动端去除掉adminbar，因为会影响悬浮的顶部;
 * 仪表盘提示
   
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/functions
 * @version     1.o
 */



//文章页面底部固定文字输出判断

add_filter( 'get_avatar' , 'my_custom_avatar' , 1 , 5 );
function my_custom_avatar( $avatar, $id_or_email, $size, $default, $alt) {

    if ( ! empty( $id_or_email->user_id ) ) {
        $avatar = get_bloginfo('template_url').'/images/2.gif';
    }else{
        $avatar =get_bloginfo('template_url').'/images/2.gif';
    }
    $avatar = "<img alt='{$alt}' src='{$avatar}' class='avatar avatar-{$size} photo' height='{$size}' width='{$size}' />";

    return $avatar;
}

function  show_fenxang($option){
	
$mytheme_fenxiang_show = substr(get_option('mytheme_fenxiang_show'), 0, -1);
$mytheme_fenxiang_show_away=explode(',',$mytheme_fenxiang_show);
if(in_array("page", $mytheme_fenxiang_show_away)&&$option=='page'){return'page'; }	
elseif(in_array("single", $mytheme_fenxiang_show_away)&&$option=='single'){return'single'; }	
elseif(in_array("product", $mytheme_fenxiang_show_away)&&$option=='product'){return'product'; }	
	} 

//option获取和默认函数
function get_themepark_option($show,$default){
	
	if(get_option($show)){return get_option($show);}
	else{
		return $default;
		}
	

	}

//多作者时，只显示自己的文章
function mypo_parse_query_useronly( $wp_query ) {
    if ( strpos( $_SERVER[ 'REQUEST_URI' ], '/wp-admin/edit.php' ) !== false ) {
        if ( !current_user_can( 'manage_options' ) ) {
            global $current_user;
            $wp_query->set( 'author', $current_user->id );
        }
    }
}
 add_filter('parse_query', 'mypo_parse_query_useronly' );

//特定的meta—key在qeury进行筛选
add_filter('query_vars', 'metakey_queryvars' );
function metakey_queryvars( $qvars )
{
$qvars[] = 'not_meta_key';
return $qvars;
}

add_filter('posts_where', 'metakey_where' );
function metakey_where( $where )
{
global $wp_query;
global $wpdb;

if( isset( $wp_query->query_vars['not_meta_key'] )) {
$where .= $wpdb->prepare(" AND $wpdb->posts.ID NOT IN ( SELECT post_id FROM $wpdb->postmeta WHERE ($wpdb->postmeta.post_id = $wpdb->posts.ID) AND meta_key = %s) ", $wp_query->query_vars['not_meta_key']);
}

return $where;
}






//排除搜索敏感字
add_action('template_redirect', 'search_safe_key_word');
function search_safe_key_word(){
if (is_search()) {
global $wp_query;
$safe_search_key_word = get_option('safe_search_key_word');
if($safe_search_key_word){
$safe_search_key_word = str_replace("\r\n", "|", $safe_search_key_word);
$BanKey = explode('|', $safe_search_key_word);
$S_Key = $wp_query->query_vars;
foreach($BanKey as $Key){
if( stristr($S_Key['s'],$Key) != false ){
wp_die('Illegal keyword');
}
}
}
}
}

//开启安全登录链接,以及管理员和编辑权限不得从默认woocommerce登陆

add_action('login_enqueue_scripts','login_safe_url');  
function login_safe_url(){  
$safe_login_key  = get_option('safe_login_key');
$safer='';
if(isset($_GET['safer'])){$safer=$_GET['safer'];}
    if($safer != $safe_login_key&&$safe_login_key )header('Location:'.get_bloginfo('url'));  
}

//如果打开了安全key,那么woocommerce的登录将会被拦截
$safe_login_key  = get_option('safe_login_key');
if ( $safe_login_key) {
add_action('init', 'theme_wc_safe_admin_login' );
function theme_wc_safe_admin_login() {
if($_POST['woologin_form']){
	   $admin = new WP_User( null, $_POST['username']);      
	  if(  $admin->has_cap('edit_pages')){ wp_die('管理员和编辑请使用安全链接进行登录'); };
  
    } ;

}
}
remove_action( 'admin_print_scripts', 'wp-ajax-response' );
//移动端去除掉adminbar，因为会影响悬浮的顶部	
if(wp_is_mobile()){	
add_filter('show_admin_bar', '__return_false');
}

	
function remove_dist_js() {
	
if(!is_admin()){
	
wp_deregister_script('wp-polyfill-js');	
	
}		
}	
add_action( 'wp_head', 'remove_dist_js' );

function remove_open_sans() {
wp_deregister_style( 'open-sans' );
wp_register_style( 'open-sans', false );
wp_enqueue_style('open-sans','');
	

	
	
}
add_action( 'init', 'remove_open_sans' );
//清理header输出
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link',10, 0 );
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link');
remove_action( 'wp_head', 'rel_canonical' ); 
remove_action ( 'pre_post_update', 'wp_save_post_revision' );





//移除版本号
function themepark_remove_cssjs_ver( $src ) {
	if( strpos( $src, 'ver='. get_bloginfo( 'version' ) ) )
		$src = remove_query_arg( 'ver', $src );
	return $src;
}
add_filter( 'style_loader_src', 'themepark_remove_cssjs_ver', 999 );
add_filter( 'script_loader_src', 'themepark_remove_cssjs_ver', 999 );
	
function _temp() {
  $labels = array(
    'name'               => _x( '区块模板', '区块模板' ),
    'singular_name'      => _x( '区块模板', '区块模板' ),
    'add_new'            => _x( '新建模板', '_temp' ),
    'add_new_item'       => __( '新建一个模板' ),
    'edit_item'          => __( '编辑模板' ),
    'new_item'           => __( '新模板' ),
    'all_items'          => __( '所有模板' ),
    'view_item'          => __( '查看模板' ),
    'search_items'       => __( '搜索模板' ),
	  
    'not_found'          => __( '没有找到有关模板' ),
    'not_found_in_trash' => __( '回收站里面没有相关模板' ),
    'parent_item_colon'  => '',
   
	   'taxonomies' => array( '-cat' ),
  );
  $args = array(
    'labels'        => $labels,
    'description'   => '区块模板信息',
    'public'        => true,
   
	 'show_in_rest' => true, 
     'supports' => array('title', 'editor', 'custom-fields', ),
    'has_archive'   => true
  );
  register_post_type( '_temp', $args );
}
add_action( 'init', '_temp' );

function _cat_fun() {
  $labels = array(
    'name'              => _x( '区块模板分类', '-cat' ),
    'singular_name'     => _x( '区块模板分类', '-cats' ),
    'search_items'      => __( '搜索区块模板分类' ),
    'all_items'         => __( '所有区块模板分类' ),
    'parent_item'       => __( '该区块模板分类的上级分类' ),
    'parent_item_colon' => __( '该区块模板分类的上级分类：' ),
    'edit_item'         => __( '编辑区块模板分类' ),
    'update_item'       => __( '更新区块模板分类' ),
    'add_new_item'      => __( '添加新的区块模板分类' ),
    'new_item_name'     => __( '新区块模板分类' ),
    'menu_name'         => __( '区块模板分类' ),
  );
  $args = array(
    'hierarchical' => true,
            'labels' => $labels,
         
  );
  register_taxonomy( '-cat', '_temp', $args );
}
//add_action( 'init', '_cat_fun', 0 );


function _temp_option($name){
$args=array( 'post_type'=>'_temp', 'showposts' =>1000 ,'orderby' =>'asc'); 
	$query= new WP_Query($args);
	 if($query->have_posts()) :         
	while ($query->have_posts() ) :$query->the_post(); 
	if($name==get_the_title()){$sc='selected="selected" ';}else{$sc='';}
	$options.='<option '.$sc.' value="'.get_the_title().'">'.get_the_title().'</option>';
	endwhile;  wp_reset_query();endif;	
	return $options;
}

function echo__temp($name){
$args=array( 'post_type'=>'_temp', 'showposts' =>1000 ,'orderby' =>'asc'); 
	$query= new WP_Query($args);
	 if($query->have_posts()) :         
	while ($query->have_posts() ) :$query->the_post(); 
	if($name==get_the_title()){
	
	$s =do_s(get_the_content( get_the_ID() ));


	}
	endwhile;  wp_reset_query();endif;	
	return '<div class="post_content ">'.$s.'</div>';
	
	
}





function echo__temp_id($name){
$args=array( 'post_type'=>'_temp', 'showposts' =>1000 ,'orderby' =>'asc'); 
	$query= new WP_Query($args);
	 if($query->have_posts()) :         
	while ($query->have_posts() ) :$query->the_post(); 
	if($name==get_the_title()){$contents=get_the_ID();}
	
	
	endwhile;  wp_reset_query();endif;	
	return $contents;
	
	
}

