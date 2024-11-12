<?php 
/**
 * themepark提供的常见问题区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_web404() {

for ($x=1; $x<=4; $x++) {		
	
	
register__pattern('themepark/web404-pattern-'.$x, array(
        'title'       => '网站头部样板'.$x,
	   'slug'          => 'web404'.$x,
        'description' => '网站头部样板'.$x,
		'categories'=> array('web404'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/404/404-'.$x.'.json'),
	    'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_web404',200 );




