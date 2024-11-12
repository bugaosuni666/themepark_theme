<?php 
/**
 * themepark提供的区块样板
 * 此文件增加云端提供的区块样板内容
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/patterns
 * @version     1.0
 */


 
include_once("patterns/recover/auto--recovery.php");	
function themepark_register__pattern_category() {
  register__pattern_category('wright',array( 'label' => '常用文章写作' ));
  register__pattern_category('slide',array( 'label' => 'Banner/头部焦点' ));
  register__pattern_category('icon',array( 'label' => '图标/分类/优势' ));
  register__pattern_category('imgtext',array( 'label' => '图文介绍/图文并排' ));


  register__pattern_category('faq',array( 'label' => '常见问题样板' ));

  register__pattern_category('topimg',array( 'label' => '大图文字/顶部/分割' ));
 
  register__pattern_category('logo',array( 'label' => 'logo/团队/证书/评价' ));
	
  register__pattern_category('news',array( 'label' => '新闻调用' ));
  register__pattern_category('product',array( 'label' => '产品调用' ));


  register__pattern_category('webhead',array( 'label' => '网站头部[区块模板]' ));	

  register__pattern_category('webfoot',array( 'label' => '网站底部[区块模板]' ));	
  register__pattern_category('web404',array( 'label' => '404样板[区块模板]' ));	
  register__pattern_category('webcat',array( 'label' => '分类头部样板[区块模板]' ));	
}

 
add_action( 'init', 'themepark_register__pattern_category',200 );




