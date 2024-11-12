<?php 
/**
 * themepark提供的常见问题区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_topimg() {

for ($x=1; $x<=10; $x++) {		
	
	
register__pattern('themepark/topimg-pattern-'.$x, array(
        'title'       => '大图和文字样板-'.$x,
		   'slug'          => 'topimg'.$x,
        'description' => '大图和文字样板'.$x,
		'categories'=> array('topimg'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/topimg/topimg'.$x.'.json'),
	  'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_topimg' ,200);




