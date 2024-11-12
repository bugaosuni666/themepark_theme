<?php 
/**
 * themepark提供的图标/分类/优势/联系区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_imgtext() {

for ($x=1; $x<=19; $x++) {		
	
	
register__pattern('themepark/imgtext-pattern-'.$x, array(
        'title'       => '图文排版模式'.$x,
	    'slug'          => 'imgtext'.$x,
        'description' => '图文排版模式'.$x,
		'categories'=> array('imgtext'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/imgtext/imgtext'.$x.'.json'),
	   'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_imgtext',200 );




