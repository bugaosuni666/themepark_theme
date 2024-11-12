<?php
function mytheme_search_options($wp_customize){
		$wp_customize->add_section('mytheme_search_options', array(
       'title'    => __('网站搜索设置', 'mytheme_search'),
        
		'priority' => 100,
    ));


	$wp_customize->add_setting('mytheme_header_icon_color', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_icon_color', array(
        'label'    => __('顶部搜索图标颜色', 'mytheme_header_icon_color'),
         'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_header_icon_color',
	
    )));
	
	

$wp_customize->add_setting('mytheme_search_text', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_search_text', array(
         'label'      => __('搜索提示语', 'mytheme_search_text'),
          'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_text',
         'description' => '如：请搜索',
      ));
	
	
	 $wp_customize->add_setting('mytheme_search_cat1', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_cat($wp_customize, 'mytheme_search_cat1', array(
        'label'    => __('搜索分类1', 'mytheme_search_cat1'),
      'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_cat1',
		'description' => '你可以设置5个分类应用于搜索上，用户可以点击进行切换，【这个选项不选择则是搜索全站】',
     )
    )); 

	
	
		 $wp_customize->add_setting('mytheme_search_cat2', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_cat($wp_customize, 'mytheme_search_cat2', array(
        'label'    => __('搜索分类2', 'mytheme_search_cat2'),
      'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_cat2',
		'description' => '你可以设置5个分类应用于搜索上，用户可以点击进行切换，【这个选项不选择则不显示】',
     )
    )); 

	
		 $wp_customize->add_setting('mytheme_search_cat3', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_cat($wp_customize, 'mytheme_search_cat3', array(
        'label'    => __('搜索分类3', 'mytheme_search_cat3'),
      'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_cat3',
		'description' => '你可以设置5个分类应用于搜索上，用户可以点击进行切换，【这个选项不选择则不显示】',
     )
    )); 

	
	
	
		 $wp_customize->add_setting('mytheme_search_cat4', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_cat($wp_customize, 'mytheme_search_cat4', array(
        'label'    => __('搜索分类4', 'mytheme_search_cat4'),
      'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_cat4',
		'description' => '你可以设置5个分类应用于搜索上，用户可以点击进行切换，【这个选项不选择则不显示】',
     )
    )); 

	
		 $wp_customize->add_setting('mytheme_search_cat5', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_cat($wp_customize, 'mytheme_search_cat5', array(
        'label'    => __('搜索分类5', 'mytheme_search_cat5'),
      'section'  => 'mytheme_search_options',
        'settings' => 'mytheme_search_cat5',
		'description' => '你可以设置5个分类应用于搜索上，用户可以点击进行切换，【这个选项不选择则不显示】',
     )
    )); 
	

		
	
	
};
add_action('customize_register', 'mytheme_search_options');
?>