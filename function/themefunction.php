<?php
/**
 * 主题相关函数
 * 此文件处要处理动态区块输出的数据
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/ functions
 * @version     1.0
 */

//清理文字函数

function DeleteHtml($str) 
{ 
$str = trim($str); //清除字符串两边的空格
$str = preg_replace("/\t/","",$str); //使用正则表达式替换内容，如：空格，换行，并将替换为空。
$str = preg_replace("/\r\n/","",$str); 
$str = preg_replace("/\r/","",$str); 
$str = preg_replace("/\n/","",$str); 
$str = preg_replace("/ /","",$str);
return trim($str); //返回字符串
}
//注册菜单位置
register_nav_menus(
array(

'header-menu' => __( '菜单导航' ),
'tag-menu2' => __( '文章筛选菜单' ),
)
);
//略缩图获取以及默认图片
if ( function_exists( 'add_theme_support' ) ) {add_theme_support( 'post-thumbnails' );}
 function themepark_thumbnails($thumbnail_size,$lazy){
	
	  $id =get_the_ID(); 
	  if(get_option('mytheme_'.$thumbnail_size.'_thumbnails')){$case_thumbnails=get_option('mytheme_'.$thumbnail_size.'_thumbnails');}else{$case_thumbnails= get_bloginfo('template_url').'/thumbnails/'.$thumbnail_size.'.jpg';} 
		 
		  $tit= get_the_title();
$post_thumbnail_id = get_post_thumbnail_id();
$src = wp_get_attachment_image_src( $post_thumbnail_id ,$thumbnail_size);
		 if (has_post_thumbnail()) {
		 echo '<img class="'.$lazy.' lazyload" alt="'.$tit.'" title="'.$tit.'" src="'.get_bloginfo('template_url').'/images/loading.png'.'"data-src="'.$src[0].'" />';
		 
		 
		 }else{
			 echo '<img  class="'.$lazy.' lazyload"  alt="'.$tit.'" title="'.$tit.'" src="'.$case_thumbnails.'" />';
			 }
	 
	 }
//get略缩图函数	 
 function get_themepark_thumbnails($thumbnail_size,$lazy){
	  $id =get_the_ID(); 
	 if($lazy){$lazy="swiper-lazy";}
	 $post_thumbnail_id = get_post_thumbnail_id();
$src = wp_get_attachment_image_src( $post_thumbnail_id ,$thumbnail_size);
	  if(get_option('mytheme_'.$thumbnail_size.'_thumbnails')){$case_thumbnails=get_option('mytheme_'.$thumbnail_size.'_thumbnails');}else{$case_thumbnails= get_bloginfo('template_url').'/thumbnails/'.$thumbnail_size.'.jpg';} 
		 
		  $tit= get_the_title();

		 if (has_post_thumbnail()) { return get_the_post_thumbnail($thumbnail_size ,array('alt'=>$tit,'class' =>$lazy), true);}else{
			 return '<img  class="'.$lazy.' lazyload"  alt="'.$tit.'" title="'.$tit.'" src="'.$case_thumbnails.'" />';
			 }
	  
	 
	 }	


 function get_themepark_thumbnails_hotimg($thumbnail_size){
	  $id =get_the_ID(); 
	 $hot_img=get_post_meta($id ,"hot_img", true); 
	 $post_thumbnail_id = get_post_thumbnail_id();
$src = wp_get_attachment_url( $post_thumbnail_id ,$thumbnail_size, true);
	 
		 
		  $tit= get_the_title();
if($hot_img){
			 return '<img class="left_post_pic lazyload" alt="'.$tit.'" title="'.$tit.'"src="'.get_bloginfo('template_url').'/images/loading.png'.'"data-src="'.$hot_img.'"  />';
			 }
		 elseif (has_post_thumbnail()) { return '<img class="left_post_pic lazyload" alt="'.$tit.'" title="'.$tit.'" src="'.get_bloginfo('template_url').'/images/loading.png'.'"data-src="'.$src.'" />';;}else{ return false;}
	  
	 
	 }	 


//去除wordpress头部输出的一些样式和脚本
if(!is_user_logged_in()){
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
add_action( 'wp_print_styles',     'my_deregister_styles', 100 );
function my_deregister_styles()    { 

   wp_deregister_style( 'amethyst-dashicons-style' ); 
   wp_deregister_style( 'dashicons' ); 
 wp_deregister_script('thickbox');}
if ( !function_exists( 'disable_embeds_init' ) ) :
function disable_embeds_init(){
global $wp;
$wp->public_query_vars = array_diff($wp->public_query_vars, array('embed'));
remove_action('rest_api_init', 'wp_oembed_register_route');
add_filter('embed_oembed_discover', '__return_false');
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
add_filter('tiny_mce_plugins', 'disable_embeds_tiny_mce_plugin');

}
add_action('init', 'disable_embeds_init', 9999);

endif;
}
if(!is_admin()){add_action( 'wp_enqueue_scripts', 'fanly_remove__library_css', 100 );}
function fanly_remove__library_css() {
	wp_dequeue_style( 'wp--library' );
}

//获取父级分类
function get_category_root_id($cat)
{
$this_category = get_term($cat,'category');   // 取得当前分类
while($this_category->parent) // 若当前分类有上级分类时，循环
{
$this_category = get_term($this_category->parent,'category'); // 将当前分类设为上级分类（往上爬）
}
return $this_category->term_id; // 返回根分类的id号
}


function get_category_root_id_n($cat)
{
$this_category = get_term($cat,'category');   // 取得当前分类
	$n=0;
while($this_category->parent) // 若当前分类有上级分类时，循环
{
$this_category = get_term($this_category->parent,'category'); 
	// 将当前分类设为上级分类（往上爬）
	$n=$n+1;
}
return $n; // 返回根分类的id号
}


//获取略缩图url
function get_post_thumbnail_url($post_id){
        $post_id = ( null === $post_id ) ? get_the_ID() : $post_id;
        $thumbnail_id = get_post_thumbnail_id($post->ID);
        if($thumbnail_id ){
                $thumb = wp_get_attachment_image_src($thumbnail_id, 'news-vedio-thumb');
                return $thumb[0];
        }else{
                return false;
        }
}

function get_attachment_id_from_src ($link) {
    global $wpdb;
    $link = preg_replace('/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $link);
    return $wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE guid='$link'");
};
 //阅读量统计 
function set_post_views() {   
  
    global $post;   
  
    $post_id = get_the_ID();   
    $count_key = 'views';   
    $count = get_post_meta($post_id, $count_key, true);   
  
    if (is_single() || is_page()) {   
  
        if ($count == '') {   
            delete_post_meta($post_id, $count_key);   
            add_post_meta($post_id, $count_key, '0');   
        } else {   
            update_post_meta($post_id, $count_key, $count + 1);   
        }   
  
    }   
  
}   
add_action('get_header', 'set_post_views'); 

function search_span_echo($mytheme_search_cat1,$sel,$all){
	$mytheme_search_text=get_themepark_option("mytheme_search_text",'输入搜索-');
	if($all){
		?>
 <span taxonomy="0" post_type="<?php echo '0"';if($sel){echo 'class="sel"'; } ?>   category="" placeholder="<?php echo get_themepark_option('language_th5','全站搜索');  ?>"><i class="fas fa-search"></i><?php echo get_themepark_option('language_th5','全站搜索'); ?>
		 </span>
		<?php
	}
	if($mytheme_search_cat1) {	
	 	 ?>
	 	 <span taxonomy="<?php search_type_tp( get_term($mytheme_search_cat1)->taxonomy,'taxonomy') ?>" post_type="<?php search_type_tp( get_term($mytheme_search_cat1)->taxonomy,'post_tpye');echo '"';if($sel){echo 'class="sel"'; } ?>   category="<?php echo $mytheme_search_cat1; ?>" placeholder="<?php echo  $mytheme_search_text.get_term($mytheme_search_cat1)->name;  ?>"><?php echo get_term($mytheme_search_cat1)->name; ?></span>
<?php
	  }
	
	
}

function search_type_tp($id,$type){
	if($type=="post_tpye"){
		if($id=="category"){
			echo 'post';
			
		}elseif($id=="product_cat"){echo 'product';}
		
	}
	
	if($type=="taxonomy"){
		if($id=="category"){
			echo 'cat';
			
		}elseif($id=="product_cat"){echo 'tag_ID';}
		
	}
	
	
}

//给 wp_nav_menu 加上对象缓存，加快效率
add_filter( 'pre_wp_nav_menu', 'wpjam_get_nav_menu_cache', 10, 2 );
function wpjam_get_nav_menu_cache( $nav_menu, $args ) {
    $cache_key      = wpjam_get_nav_menu_cache_key($args);
    $cached_menu    = get_transient( $cache_key );
    if ( ! empty( $cached_menu ) )
        return $cached_menu;

    return $nav_menu;
}

add_filter( 'wp_nav_menu', 'wpjam_set_nav_menu_cache', 10, 2 );
function wpjam_set_nav_menu_cache( $nav_menu, $args ) {
    $cache_key      = wpjam_get_nav_menu_cache_key($args);
    set_transient( $cache_key, $nav_menu, 86400 );

    return $nav_menu;
}

function wpjam_get_nav_menu_cache_key($args){
    $timestamp = get_transient('nav-menu-cache-timestamp');
    if($time === false){
        $timestamp = time();
        set_transient( 'nav-menu-cache-timestamp', $time, 86400 );
    }
    return apply_filters( 'nav_menu_cache_key' , 'nav-menu-' . md5( serialize( $args ).serialize(get_queried_object()) ) . $timestamp );
}

// 更新菜单，清理缓存
add_action( 'wp_update_nav_menu', 'wpjam_delete_nav_menu_cache', 10, 3 );
function wpjam_delete_nav_menu_cache(){
    set_transient( 'nav-menu-cache-timestamp', time(), 86400 );
}
function add_meta_after_post(){
	if(is_single()&&show_fenxang('single')=='single'){
		
		$echo_meta=true;
	}
	if(is_page()&&show_fenxang('page')=='page'){
		
		$echo_meta=true;
	}
$mytheme_show_code = get_option('mytheme_show_code');	
	
$srs=str_replace("[this_post_url]",'<a style="color:#06C " href="'.get_permalink().'">'.get_permalink().'</a>',get_option('mytheme_fenxiang'));
	  
if(get_option('mytheme_fenxiang')&&$echo_meta){echo  echo__temp(get_option('mytheme_fenxiang')); 
											  
			if($mytheme_show_code){  echo '<div class="show_code">',stripslashes($mytheme_show_code),'</div>' ; }
											   
 						   
									   
											   
											  }


}
add_action( 'add_meta_after_the_content',  'add_meta_after_post' );
add_action( 'quick_edit_custom_box', 'themepark_custom_edit_box', 10, 3 );
function themepark_custom_edit_box( $column_name, $post_type, $taxonomy) {
    global $post;

$keyword=get_post_meta( $post->ID, 'themepark_seo_keyword', true );
$title= get_post_meta( $post->ID, 'themepark_seo_title', true );
$description=get_post_meta( $post->ID, 'themepark_seo_description', true );	

        if( $column_name === 'wps_post_id' ): // same column title as defined in previous step
        ?>
                <?php // echo get_post_meta( $post->ID, 'remark', true ); ?>
            <fieldset class=" inline-edit-row" id="#edit-<?php echo $post->ID; ?>">
                <div class="inline-edit-col">
                    <label>
                        <span class="title" title="<?php  echo $title; ?>" ></spa>seo标题</span>
                        <span class="input-text-wrap"><input type="text" name="themepark_seo_title" class="inline-edit-menu-order-input" value="<?php  echo $title; ?>"></span>
                    </label>
                </div>
				<div class="inline-edit-col">
                    <label>
                        <span class="title">seo描述</span>
                        <span class="input-text-wrap"><input type="text" name="themepark_seo_description" class="inline-edit-menu-order-input" value="<?php  echo $description; ?>"></span>
                    </label>
                </div>
				
				 <div class="inline-edit-col">
                    <label>
                        <span class="title">seo关键词</span>
                        <span class="input-text-wrap"><input type="text" name="themepark_seo_keyword" class="inline-edit-menu-order-input" value="<?php echo $keyword; ?>"></span>
                    </label>
                </div>
				
				
				
            </fieldset>




            <?php
        endif;
            // echo 'custom page field';
          
   
}

add_action( 'save_post', 'themepark_update_custom_quickedit_box' );
function themepark_update_custom_quickedit_box() {
    // any checking logic here, skip and keep it simple for simple illustration purpose (nonce, existing of $_POST['remark'], ajax save and so on
    
    // remark in Page
    if( isset( $_POST ) && isset( $_POST['themepark_seo_title'] ) ) { // where remark is defined in the <input name="remark">
        update_post_meta($_POST['post_ID'], 'themepark_seo_title', $_POST['themepark_seo_title']);
    }

      if( isset( $_POST ) && isset( $_POST['themepark_seo_description'] ) ) { // where remark is defined in the <input name="remark">
        update_post_meta($_POST['post_ID'], 'themepark_seo_description', $_POST['themepark_seo_description']);
    }

	   if( isset( $_POST ) && isset( $_POST['themepark_seo_keyword'] ) ) { // where remark is defined in the <input name="remark">
        update_post_meta($_POST['post_ID'], 'themepark_seo_keyword', $_POST['themepark_seo_keyword']);
    }

	
    return; 
}


add_action( 'admin_enqueue_scripts', function( $page ) {

  
    if ( 'edit.php' != $page ) {
        return;
    }
    
    wp_enqueue_script( 'custom-quickedit-box', get_stylesheet_directory_uri() . '/js/themepark_custom_quickedit_box.js', array( 'jquery', 'inline-edit-post' ) );
});
