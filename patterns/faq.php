<?php 
/**
 * themepark提供的常见问题区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_faq() {

for ($x=1; $x<=3; $x++) {		
	
	
register__pattern('themepark/faq-pattern-'.$x, array(
        'title'       => '常见问题模式'.$x,
	    'slug'          => 'faq'.$x,
        'description' => '常见问题模式'.$x,
		'categories'=> array('faq'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/faq/faq'.$x.'.json'),
	  'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_faq',200 );




