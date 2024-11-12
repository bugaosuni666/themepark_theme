<?php

function mytheme_tolbar_opion($wp_customize){
	
	  $wp_customize->add_section('mytheme_detects_scheme_move', array(
        'title'    => __('移动端底部悬浮客服设置【付费版解锁】', 'mytheme'),
        'description' => '移动端底部悬浮客服设置，你可以在此设置边栏的风格以及数据设置，升级付费版即可解锁兼容移动端的设置<br></br> <a class="button"  target="_blank" href="https://www.themepark.com.cn/cjqkwordpresszt-bzb.html">[查看付费版详情]</a>',
        'priority' => 79,
    ));
	
$wp_customize->add_setting('mytheme_toolbar_move_nav', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
$wp_customize->add_control( new Ari_Customize_select_nav_Control($wp_customize, 'mytheme_toolbar_move_nav', array(
        'label'    => __('客服菜单', 'mytheme_toolbar_move_nav'),
         'section'    => 'mytheme_detects_scheme_move',
        'settings' => 'mytheme_toolbar_move_nav',
	
     )
    )); 	
	
	
	
	
	
	
};

add_action('customize_register', 'mytheme_tolbar_opion');		
?>