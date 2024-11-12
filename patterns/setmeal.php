<?php 
/**
 * themepark提供的套餐/对比区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_setmeal() {

for ($x=1; $x<=4; $x++) {		
	
	
register__pattern('themepark/setmeal-pattern-'.$x, array(
        'title'       => '套餐/对比'.$x,
	  'slug'          => 'setmeal'.$x,
        'description' => '套餐/对比'.$x,
		'categories'=> array('setmeal'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/setmeal/setmeal'.$x.'.json'),
	  'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_setmeal',200 );




