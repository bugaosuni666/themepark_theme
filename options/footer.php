<?php
function mytheme_new_footer_options($wp_customize){
		$wp_customize->add_section('mytheme_new_footer_options', array(
       'title'    => __('网站底部设置', 'mytheme_footer'),
        
		'priority' => 100,
    ));








//----------------------------top_nav------------------------------------------------	


$wp_customize->add_setting('mytheme_footer', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
$wp_customize->add_control( new Ari_Customize_select_s($wp_customize, 'mytheme_footer', array(
        'label'    => __('底部挂载区块模板', 'mytheme_footer'),
         'section'  => 'mytheme_new_footer_options',
        'settings' => 'mytheme_footer',
	
     )
    )); 	

 
	
	
		
	$wp_customize->add_setting('mytheme_newfooter_14', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_newfooter_14', array(
         'label'      => __('版权', 'mytheme_newfooter_14'),
         'section'  => 'mytheme_new_footer_options',
         'settings'   => 'mytheme_newfooter_14',
         
      ));
	
	
		$wp_customize->add_setting('mytheme_newfooter_15', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_newfooter_15', array(
         'label'      => __('备案号', 'mytheme_newfooter_15'),
         'section'  => 'mytheme_new_footer_options',
         'settings'   => 'mytheme_newfooter_15',
         
      ));
	
	
			$wp_customize->add_setting('mytheme_newfooter_16', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_newfooter_16', array(
         'label'      => __('公安备案号', 'mytheme_newfooter_16'),
         'section'  => 'mytheme_new_footer_options',
         'settings'   => 'mytheme_newfooter_16',
         
      ));
	
	
				$wp_customize->add_setting('mytheme_newfooter_17', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_newfooter_17', array(
         'label'      => __('公安备案号链接', 'mytheme_newfooter_17'),
         'section'  => 'mytheme_new_footer_options',
         'settings'   => 'mytheme_newfooter_17',
         
      ));
	
	
	
 $wp_customize->add_setting('mytheme_footer_bqba_ts5', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_footer_bqba_ts5', array(
        'label'      => __('技术支持是否显示', 'mytheme_footer_bqba_ts5'),
        'section'  => 'mytheme_new_footer_options',
        'settings'   => 'mytheme_footer_bqba_ts5',
		'type'    => 'select',
		 'choices'    => array(
            '' => '显示:wordpress主题 ',
			'' => '不显示[付费版解锁]',
          
        ),
    )); 

	




	$wp_customize->add_setting('mytheme_footer_sever_yl', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
$wp_customize->add_control( new Ari_Customize_select_nav_Control($wp_customize, 'mytheme_footer_sever_yl', array(
        'label'    => __('友情链接', 'mytheme_footer_sever_yl'),
          'section'  => 'mytheme_new_footer_options',
        'settings' => 'mytheme_footer_sever_yl',
		'description' => '选择友情链接',
     )
    )); 
	
	
	
	
	
	$wp_customize->add_setting('mytheme_footer_color_2', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_footer_color_2', array(
        'label'    => __('底部背景颜色', 'mytheme_footer_color_2'),
         'section'  => 'mytheme_new_footer_options',
        'settings' => 'mytheme_footer_color_2',
	
    )));
	
	
	
	$wp_customize->add_setting('mytheme_footer_color_4', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_footer_color_4', array(
        'label'    => __('底部普通文字颜色', 'mytheme_footer_color_4'),
         'section'  => 'mytheme_new_footer_options',
        'settings' => 'mytheme_footer_color_4',
	
    )));
	
		
	
	
};
add_action('customize_register', 'mytheme_new_footer_options');
?>
