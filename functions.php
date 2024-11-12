<?php
error_reporting(0);ini_set("display_errors", 0);
remove_action( 'wp_enqueue_scripts', 'wp_common__scripts_and_styles' );
include_once("load.php");

include_once("part/header.php");
include_once("/-functions.php");
include_once("/-options/-options.php");
include_once("function/metaclass.php");
include_once("function/base.php");
include_once("function/themefunction.php");
include_once("function/walker.php");
include_once("function/post-thumbnails.php");
include_once("function/functions_z.php");
include_once("function/seo.php");
include_once("function/tags.php");

include_once("part/content.php");
include_once("part/breadcrumbs.php");
include_once("part/archive.php");
include_once("loop/case.php");
include_once("loop/caseshow.php");
include_once("widget/widget.php");

include_once("toolbar/toolbar_pc.php");
include_once("toolbar/metabox.php");
include_once("themeoption/themeoption.php");


include_once("options/header.php");
include_once("options/footer.php");
include_once("options/initialization.php");
include_once("options/customize_css.php");
include_once("options/toolbar.php");
include_once("options/toolbar-move.php");
include_once("options/footer-form.php");
include_once("loop/relevant.php");
include_once("options/move.php");
include_once("options/search.php");
include_once("import/import.php");

include_once("patterns.php");

remove_theme_support('core--patterns');
include_once("theme-updates/theme-update-checker.php");
	    $example_update_checker = new ThemeUpdateChecker(	
		  'smartenterprise-free', 
         'http://data.themepark.com.cn/2021/n/smartenterprise_data/free/smartenterprise-free.json'  
);





if (!function_exists( 'chact_url_http' ) ){
function chact_url_http($url){
$replaseur= get_option('replaseur');
	if(!$replaseur){
	if(strstr($url,'uploads')){ 		
$strlen = strlen($url);  //全部字符长度
$tp = strpos($url,"/wp-content/");  //limit之前的字符长度
$sql = substr($url,-$strlen,$tp);  //从头开始截取到指字符位置。
//$strlens = strlen($sql."/wp-content/uploads/20");
$sql2 =  substr($url,strripos($url,"/uploads/")+8);; 
		
		
	if($sql==get_bloginfo('url')){return $url;}	else{
		$upload_dir = wp_upload_dir();
	return $upload_dir['baseurl'].'/'.$sql2;	
	
	}
	}else{
		return $url;
	}}
	else{
		return $url;
	}
}
}



function pageNotice(){
	  if (!function_exists( 'font_awesome_ded' ) ) {	
	echo '<div class="updated">'
		. '<p>请安装Fontawasome本地化插件（1.01版本以上）：<a  target="_blank" href="https://www.themepark.com.cn/fontawasome5xbbbdhcjxzyj.html">下载插件安装启用</a>  ，<b>否则可能部分图标无法显示，安装插件后，你可以按照下载页面的说明切换到Fontawasome5.0版本，千面企业后续新增的导入数据需要依赖这个版本才能显示完整的图标！</b></p>'
		. '</div>';
}
echo '<div class="updated">'
		. '<p>欢迎使用<a target="_blank" href="https://www.themepark.com.cn/">WEB主题公园</a>的主题，你现在使用的是免费版本，如果需要解锁付费版的功能，可以升级付费版：<a  target="_blank" href="https://www.themepark.com.cn/cjqkwordpresszt-bzb.html">超级区块WordPress主题-标准版</a>  ，<b>付费版支持自适应各类移动设备，并且有更多强大的功能！<br><br>付费版可提供给您全程细致的售后客服技术支持和指导</b></p>'
		. '</div>';
	
global $pagenow;	
	  if ( 'edit.php' == $pagenow && $_GET['post_type']=='wp_'  ){
		  
		  echo '<div class="updated">'
		. '<ul class="community-events" >
		<li class="event-none"><a target="_blank" href="https://www.themepark.com.cn/category/library">从区块库下载区块导入使用</a></li>
<li class="event-none"><a target="_blank" href=" https://www.themepark.com.cn/cqkkxzwymkdrdndwd.html">如何从区块库下载网页模块导入到你的网站制作</a></li>
<ul>
	<p>区块库是我们将一些制作好了的区块单独拆分提供下载，你可以在区块库找到适合自己的网页模块单独导入某一个模块到可重用区块中插入排版，大大减少你的工作量！</p></div>';
		  
		  
	  }
}

add_action('admin_notices', 'pageNotice');

global $pagenow;
if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' )
{
      wp_redirect( admin_url( 'admin.php?page=import_data' ) );
      exit;
}

function example_theme_support() {
    remove_theme_support( 'widgets--editor' );
    }
    add_action( 'after_setup_theme', 'example_theme_support' );
