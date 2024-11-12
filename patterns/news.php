<?php 
/**
 * themepark提供的常见问题区块样板
 * 此文件增加云端提供的图标/分类/优势/联系区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_news() {

for ($x=1; $x<=8; $x++) {		
	
	
register__pattern('themepark/news-pattern-'.$x, array(
        'title'       => '新闻和文章调用样板'.$x.'[请重新选择分类和标签]',
	    'slug'          => 'news'.$x,
        'description' => '新闻和文章调用样板'.$x.'[请重新选择分类和标签]',
		'categories'=> array('news'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/news/news'.$x.'.json'),
	  'viewportWidth'=>1920,
    )
);

}

}
 
add_action( 'init', 'themepark_register_news',200 );




