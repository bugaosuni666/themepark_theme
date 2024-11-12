<?php 
/**
 * themepark提供的常见问题区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_product() {

for ($x=1; $x<=4; $x++) {		
	
	
register__pattern('themepark/product-pattern-'.$x, array(
        'title'       => '产品调用样板'.$x.'[请重新选择分类和标签]',
	 'slug'          => 'product'.$x,
        'description' => '产品调用样板'.$x.'[请重新选择分类和标签]',
		'categories'=> array('product'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/product/product'.$x.'.json'),
	  'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_product',200 );




