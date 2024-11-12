<?php
function mytheme_move_opions($wp_customize){
	
	  $wp_customize->add_section('mytheme_loading_scheme', array(
        'title'    => __('加载动画设置', 'mytheme'),
        'description' => '设置加载动画',
        'priority' => 79,
    ));
	
	 
	   $wp_customize->add_setting('mytheme_detects', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control('mytheme_detects', array(
        'label'      => __('开启加载动画', 'mytheme_detects'),
        'section'    => 'mytheme_loading_scheme',
        'settings'   => 'mytheme_detects',
		'type'    => 'select',
		 'choices'    => array(
            '' => '默认不开启',
            'all' => '全设备开启',
		    'phone' => '只在手机端开启',
			
           
        ),
    )); 
	
	 $wp_customize->add_setting('mytheme_detects2', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control('mytheme_detects2', array(
        'label'      => __('开启加载动画', 'mytheme_detects2'),
        'section'    => 'mytheme_loading_scheme',
        'settings'   => 'mytheme_detects2',
		'type'    => 'select',
		 'choices'    => array(
            'all' => '首页开启',
            '' => '全站开启',
		   
			
           
        ),
    )); 
	 
	
	
	  $wp_customize->add_setting('mytheme_loading_logo', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Image_Control($wp_customize, 'mytheme_loading_logo', array(
        'label'    => __('loading图片[尺寸高度：350*60]', 'mytheme_loading_logo'),
       'section'    => 'mytheme_loading_scheme',
        'settings' => 'mytheme_loading_logo',
     )
    )); 
	  
	
	$wp_customize->add_setting('mytheme_loadingtext', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control('mytheme_loadingtext', array(
        'label'      => __('加载时的提示文字', 'mytheme_loadingtext'),
          'section'  => 'mytheme_loading_scheme',
        'settings'   => 'mytheme_loadingtext',
		
    ));
	
	
	
	
	 

	
	$wp_customize->add_setting('mytheme_loading_color', array(
	    'default'        => '#0f1923',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_loading_color', array(
        'label'    => __('背景颜色', 'extraordinaryvision'),
         'section'  => 'mytheme_loading_scheme',
        'settings' => 'mytheme_loading_color',
    )));
	
		$wp_customize->add_setting('mytheme_loading_color2', array(
	    'default'        => '#fff',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_loading_color2', array(
        'label'    => __('文字颜色', 'extraordinaryvision'),
         'section'  => 'mytheme_loading_scheme',
        'settings' => 'mytheme_loading_color2',
    )));
	
};
add_action('customize_register', 'mytheme_move_opions');		
