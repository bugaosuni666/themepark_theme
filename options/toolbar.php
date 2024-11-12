<?php

function mytheme_move_opion($wp_customize){
	
	  $wp_customize->add_section('mytheme_detects_scheme', array(
        'title'    => __('PC侧边客服工具设置', 'mytheme'),
        'description' => '客服设置是调用了一个菜单制作的，你可以查看教程了解如何制作：
<a target="_blank" href="https://www.themepark.com.cn/wordpressqkztxfkfgjdsz.html">[客服悬浮菜单的制作教程]</a>',
        'priority' => 79,
    ));
	
	 
	 

	$wp_customize->add_setting('mytheme_toolbar_nav', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
$wp_customize->add_control( new Ari_Customize_select_nav_Control($wp_customize, 'mytheme_toolbar_nav', array(
        'label'    => __('客服菜单', 'mytheme_toolbar_nav'),
         'section'    => 'mytheme_detects_scheme',
        'settings' => 'mytheme_toolbar_nav',
	
     )
    )); 	
	
$wp_customize->add_setting('mytheme_toolbar_navwz', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_toolbar_navwz', array(
        'label'      => __('显示位置', 'mytheme_toolbar_navwz'),
            'section'    => 'mytheme_detects_scheme',
        'settings'   => 'mytheme_toolbar_navwz',
		 'description' => '可选工具条位置',
		'type'    => 'select',
		 'choices'    => array(
            '' => '默认中间',
            'toolbottm' => '贴近底部',
	       
			
          
        ),
    ));	
	
	
	
$wp_customize->add_setting('mytheme_toolbar_nav2', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_toolbar_nav2', array(
        'label'      => __('显示方式', 'mytheme_toolbar_nav2'),
            'section'    => 'mytheme_detects_scheme',
        'settings'   => 'mytheme_toolbar_nav2',
		 'description' => '你可以选择什么时候缩起侧边客服栏目（注意，滚轴模块是一直缩起的）',
		'type'    => 'select',
		 'choices'    => array(
            '' => '一直展开不缩起',
            'type1' => '默认缩起,点击展开',
	        'type2' => '向下滚动一定距离自动展开，回到顶部自动缩起',
			
          
        ),
    )); 	
	
	
	


 $wp_customize->add_setting('mytheme_toolbar_PC_zx', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control('mytheme_toolbar_PC_zx', array(
        'label'      => __('缩起到底部时的文字提示', 'mytheme_toolbar_PC_zx'),
        'section'    => 'mytheme_detects_scheme',
        'settings'   => 'mytheme_toolbar_PC_zx',
		'description' => '可以设置边栏缩起时，底部的提示',
    ));

$wp_customize->add_setting('mytheme_toolbar_PC_zx1', array(
        'default'        => '缩起时的图标',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control('mytheme_toolbar_PC_zx1', array(
        'label'      => __('fa-comments', 'mytheme_toolbar_PC_zx1'),
        'section'    => 'mytheme_detects_scheme',
        'settings'   => 'mytheme_toolbar_PC_zx1',
		'description' => '请输入图标代码，如fa-qq',
    ));	 
	

$wp_customize->add_setting('mytheme_toolbar_PC_zx2', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_toolbar_PC_zx2', array(
        'label'    => __('图标颜色', 'mytheme_toolbar_PC_zx2'),
           'section'    => 'mytheme_detects_scheme',
        'settings' => 'mytheme_toolbar_PC_zx2',
	
    )));	
	
$wp_customize->add_setting('mytheme_toolbar_PC_zx3', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_toolbar_PC_zx3', array(
        'label'    => __('文字颜色', 'mytheme_toolbar_PC_zx3'),
           'section'    => 'mytheme_detects_scheme',
        'settings' => 'mytheme_toolbar_PC_zx3',
	
    )));	
	
$wp_customize->add_setting('mytheme_toolbar_PC_zx4', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_toolbar_PC_zx4', array(
        'label'    => __('背景颜色', 'mytheme_toolbar_PC_zx4'),
           'section'    => 'mytheme_detects_scheme',
        'settings' => 'mytheme_toolbar_PC_zx4',
	
    )));	
	
	
		
	
	
	
	
	
	
};

add_action('customize_register', 'mytheme_move_opion');		
?>