<?php
function mytheme_footer_form_options($wp_customize){
		$wp_customize->add_section('mytheme_footer_form_options', array(
        'title'    => __('移动端顶部设置[付费版解锁]', 'mytheme'),
       'description' => '付费版的移动端是单独可以设置风格的，升级到付费版可以解锁兼容移动设备自适应功能<br></br>
	   <a  class="button"  target="_blank" href="https://www.themepark.com.cn/cjqkwordpresszt-bzb.html">[查看付费版详情]</a>',
        'priority' => 60,
    ));

$wp_customize->add_setting('mytheme_logo2', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Image_Control($wp_customize, 'mytheme_logo2', array(
        'label'    => __('移动端LOGO', 'mytheme_logo2'),
        'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_logo2',
		 'description' => '[尺寸高度：400*133]',
     )
    )); 	


$wp_customize->add_setting('mytheme_header_move_ba', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_ba', array(
        'label'    => __('顶部LOGO域背景颜色', 'mytheme_header_move_ba'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_ba',
	
    )));

$wp_customize->add_setting('mytheme_header_move_icon', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_icon', array(
        'label'    => __('顶部icon图标颜色', 'mytheme_header_move_icon'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_icon',
	
    )));
	
	
	
	
	$wp_customize->add_setting('mytheme_header_move_nav', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_nav', array(
        'label'    => __('顶部导航区域颜色', 'mytheme_header_move_nav'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_nav',
	
    )));
	
	

	$wp_customize->add_setting('mytheme_header_move_nav2', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_nav2', array(
        'label'    => __('顶部导航文字颜色', 'mytheme_header_move_nav2'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_nav2',
	
    )));	
	
	
	
	$wp_customize->add_setting('mytheme_header_move_nav3', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_nav3', array(
        'label'    => __('顶部导航当前页面颜色', 'mytheme_header_move_nav3'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_nav3',
	
    )));
	
	
		$wp_customize->add_setting('mytheme_header_move_nav4', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_nav4', array(
        'label'    => __('展开导航按钮背景', 'mytheme_header_move_nav4'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_nav4',
	
    )));
	
	
	
			$wp_customize->add_setting('mytheme_header_move_nav5', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_move_nav5', array(
        'label'    => __('展开导航按钮图标', 'mytheme_header_move_nav5'),
          'section'  => 'mytheme_footer_form_options',
        'settings' => 'mytheme_header_move_nav5',
	
    )));
	
	
	
	
};
add_action('customize_register', 'mytheme_footer_form_options');
?>