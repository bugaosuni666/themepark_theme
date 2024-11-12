<?php
function mytheme_initialization_options($wp_customize){
		$wp_customize->add_section('mytheme_initialization_options', array(
        'title'    => __('主题整站风格调整', 'mytheme'),
        'description' => '首页、分类、文章、产品等等页面的背景与颜色都可以在此调整
</br> </br>需要帮助？</br></br><a   class="button" target="_blank" href="https://www.themepark.com.cn/jchjwordpressqkztspjb.html">[主题的视频和图文教程合集]</a>',        'priority' => 70,
    ));
	
	
	
	
		
	$wp_customize->add_setting('mytheme_leftright', array(
        'default'        => '',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_leftright', array(
        'label'      => __('两栏模式左右模式', 'mytheme_leftright'),
         'section'  => 'mytheme_initialization_options',
        'settings'   => 'mytheme_leftright',
		 
		'type'    => 'select',
		 'choices'    => array(
           
            '' => '默认左主又从',
	        'leftright' => '左右对调',
			
          
        ),
    )); 
	


 $wp_customize->add_setting('mytheme_index_title', array(
	    'default'        =>   '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_index_title', array(
        'label'    => __('主色调配色', 'mytheme_index_title'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_index_title',
		'description' => '主色调配色将会统一设定各区域标题、小区块的颜色',
    )));	
	
	
	 $wp_customize->add_setting('mytheme_index_title2', array(
	    'default'        =>   '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_index_title2', array(
        'label'    => __('鼠标经过颜色', 'mytheme_index_title2'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_index_title2',
		'description' => '一些按钮在鼠标经过时你可以设置一个鼠标经过的颜色，这样可以增加更多互动性',
    )));	
	
	
//----------------------------index------------------------------------------------		

	
	
	$wp_customize->add_setting('mytheme_screening_color', array(
	    'default'        =>   '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_screening_color', array(
        'label'    => __('【全站】筛选按钮（包括文章筛选和产品筛选）', 'mytheme_screening_color'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_screening_color',
    )));
	
	
	
	
	
	
	
	
	
	
	$wp_customize->add_setting('mytheme_page_muen_nav', array(
	    'default'        =>   '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_page_muen_nav', array(
        'label'    => __('【全站】面包屑背景颜色', 'mytheme_page_muen_nav'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_page_muen_nav',
    )));
	
	
		$wp_customize->add_setting('mytheme_page_muen_nav2', array(
	    'default'        =>   '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_page_muen_nav2', array(
        'label'    => __('【全站】面包屑文字颜色', 'mytheme_page_muen_nav2'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_page_muen_nav2',
    )));
	
	
	
//----------------------------all------------------------------------------------	






 $wp_customize->add_setting('mytheme_product_bac3', array(

        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_product_bac3', array(
        'label'    => __('列表背景颜色', 'mytheme_index_bac3'),
        'section'  => 'mytheme_initialization_options',
        'settings' => 'mytheme_product_bac3',
    )));	
	
	

	

//---------------------------product&cat&single------------------------------------------------	

	
};
add_action('customize_register', 'mytheme_initialization_options');