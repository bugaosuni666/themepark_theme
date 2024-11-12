<?php
/**
 * 主题选项汇总菜单
 * 针对主题选项建立选项菜单

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/themeoption
 * @version     1.o
 */
include_once("widget_option.php"); 
include_once("Initialization.php"); 
include_once("language.php");
include_once("woo-language.php");
include_once("bq_404_option.php");
include_once("product_language_option.php");
include_once("theme_cat_search_option_function.php");
include_once("plugins-theme.php");
include_once("import_data.php");
if (  class_exists( 'WC_Smart_Coupons' ) ) {include_once("salespromotion.php");}
add_action('admin_menu', 'themepark_theme_option');

function themepark_theme_option() {
	if(function_exists('add_menu_page')) {
		add_menu_page('初始化选项', '主题选项', 'administrator','themepark_theme', 'theme_main_opting',  get_bloginfo('template_url').'/images/themepark_theme_option.png',60);
		add_menu_page( 'linked_url', '可重用区块', 'read', 'edit.php?post_type=wp_', '', 'dashicons-editor-table', 32 );
	}
	
}
add_action('admin_menu', 'my_submenu_page');
function my_submenu_page() {
add_submenu_page( 'themepark_theme', '默认列表和筛选', '默认列表和筛选', 'edit_themes', 'theme_cat_search_option', 'theme_cat_search_option_function' );	
add_submenu_page( 'themepark_theme', '404和版权设置', '404和版权设置', 'edit_themes', 'bq_404_option', 'bq_404_option_function' );
add_submenu_page( 'themepark_theme', '侧边小工具区域设置', '侧边小工具区域设置', 'edit_themes', 'widget_option', 'widget_option_function' );
add_submenu_page( 'themepark_theme', '文章系统多语言', '文章系统多语言', 'edit_themes', 'language_option', 'language_option_function' );
//add_submenu_page( 'themepark_theme', 'woocommerce产品系统多语言', '产品系统多语言', 'edit_themes', 'product_language_option', 'product_language_option_function' );
//add_submenu_page( 'themepark_theme', 'woocommerce多语言', 'WOO多语言', 'edit_themes', 'woo_language_option', 'woo_language_option_function' );
//add_submenu_page( 'themepark_theme', '插件兼容', '插件兼容设置', 'edit_themes', 'plugin_theme_option', 'plugin_theme_option_function' );
add_submenu_page( 'themepark_theme', '教程和步骤', '教程和步骤', 'edit_themes', 'import_data', 'import_data_function' );	
	
if (  class_exists( 'WC_Smart_Coupons' ) ) {add_submenu_page( 'themepark_theme', '优惠活动', '优惠活动提醒设置', 'edit_themes', 'salespromotion', 'salespromotion' );}

}
//顶部输出函数
function theme_themepark_video($post){
$themeinfo_hidden= get_option('themeinfo_hidden');	
if(!$themeinfo_hidden){
$ct = wp_get_theme();
$screenshot = $ct->get_screenshot();
$class = $screenshot ? 'has-screenshot' : '';
$customize_title = sprintf( __( 'Customize &#8220;%s&#8221;' ), $ct->display('Name') );
?>
<div id="message" class="updated"><p><strong><?php echo $post; ?></strong></p>
 <p>主题名称：<?php echo $ct->display('Name'); ?> |  版本：<?php echo $ct->display('Version'); ?> | <a target="_blank" href="https://www.themepark.com.cn/cjqkwordpresszt-bzb.html">[付费版介绍]</a></p>
	<p>需要帮助？我们为你录制了细致的视频教程,点击前往：<br /></p>
<ul class="community-events" >	 
<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/jchjwordpressqkztspjb.html">区块主题使用步骤合集教程</a></li>
<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/category/library">从区块库下载区块导入使用</a></li>
<li class="event-none"><a target="_blank" href=" https://www.themepark.com.cn/cqkkxzwymkdrdndwd.html">如何从区块库下载网页模块导入到你的网站制作</a></li>
	
</ul>	
<p>	区块库是我们将一些制作好了的区块单独拆分提供下载，你可以在区块库找到适合自己的网页模块单独导入某一个模块到可重用区块中插入排版，大大减少你的工作量！</p>
</div>	
	<?php 
	}}


//仪表盘提示
add_action( 'wp_dashboard_setup', 'themepark_wellcome' );
function themepark_wellcome() {
	$themeinfo_hidden= get_option('themeinfo_hidden');	
	if(!$themeinfo_hidden){
   add_meta_box( 'themepark_wellcome', '【主题教程和资源】', 'themepark_wellcome_box', 'dashboard', 'side', 'high' );}
}
function themepark_wellcome_box(){

?>	

<p>嗨！欢迎使用WEB主题公园出品的古藤堡(Gutenberg)区块主题<br />你也可以直接进入<a target="_blank" href="https://www.themepark.com.cn">WEB主题公园</a></p>
<ul class="community-events" >
<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/wordpressgtbqkztsxcjxz.html">主题所需插件包合集下载【使用主题之前请先下载安装！】</a></li>		
<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/jchjwordpressqkztspjb.html">区块主题使用步骤合集教程【必看！】</a></li>
<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/xcdy"><strong>详细了解免费版和付费版的区别</strong></a> </li>	

<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/category/news/design/">[建立网站找不到合适的素材？点击这里看看！]</a> </li>


</ul>

	
	<?php 
	}
?>
