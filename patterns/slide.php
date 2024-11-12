<?php 
/**
 * themepark提供的Banner/头部焦点区块样板
 * 此文件增加云端提供的Banner/头部焦点区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


function themepark_register_my_patterns() {

	
register__pattern('themepark/slide-pattern-01', array(
        'title'       => '常规模式幻灯片01',
	'slug'          => 'slide1',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide01.json'),
	   'viewportWidth'=>1920,
    )
);
	
register__pattern('themepark/slide-pattern-02', array(
        'title'       => '常规模式幻灯片02',
	'slug'          => 'slide2',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide02.json'),
		 'viewportWidth'=>1920,
    )
);
	
register__pattern('themepark/slide-pattern-03', array(
        'title'       => '常规模式幻灯片03',
	'slug'          => 'slide3',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide03.json'),
		 'viewportWidth'=>1920,
    )
);	
register__pattern('themepark/slide-pattern-04', array(
        'title'       => '常规模式幻灯片04',
	'slug'          => 'slide4',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide04.json'),
		 'viewportWidth'=>1920,
    )
);
register__pattern('themepark/slide-pattern-05', array(
        'title'       => '常规模式幻灯片05',
	'slug'          => 'slide5',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide05.json'),
		 'viewportWidth'=>1920,
    )
);		
register__pattern('themepark/slide-pattern-06', array(
        'title'       => '常规模式幻灯片06',
	'slug'          => 'slide6',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide06.json'),
		 'viewportWidth'=>1920,
    )
);		
register__pattern('themepark/slide-pattern-07', array(
        'title'       => 'TAB组合模式的幻灯片',
	'slug'          => 'slide7',
        'description' => 'TAB组合模式的幻灯片，由TAB切换区块为主要切换工具，TAB内填入多种类型的图文区块组合成一个幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide07.json'),
		 'viewportWidth'=>1920,
    )
);
	
register__pattern('themepark/slide-pattern-08', array(
        'title'       => '常规模式幻灯片08',
	'slug'          => 'slide8',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide08.json'),
		 'viewportWidth'=>1920,
    )
);	
register__pattern('themepark/slide-pattern-09', array(
        'title'       => '视频背景的首页头部(非幻灯片滚动)',
	'slug'          => 'slide9',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide09.json'),
		 'viewportWidth'=>1920,
    )
);	
	
	
register__pattern('themepark/slide-pattern-10', array(
        'title'       => '纯图片无文字幻灯片',
	'slug'          => 'slide10',
        'description' => '常规模式下的幻灯片',
		'categories'=> array('slide'),
        'content'     =>get_cloud_fie(get_stylesheet_directory_uri().'/patterns/patterns/slide/slide10.json'),
		 'viewportWidth'=>1920,
    )
);		
		
}
 
add_action( 'init', 'themepark_register_my_patterns',200 );




