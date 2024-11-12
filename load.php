<?php

 function wptuts_add_color_picker( $hook ) {
        if( is_admin() ) { 
		    wp_enqueue_media();
            wp_enqueue_style( 'wp-color-picker' ); 
            wp_enqueue_script( 'custom-script-handle', get_template_directory_uri().'/js/custom-script.js', array( 'wp-color-picker' ), false, true ); 
			

        };

    };
add_filter( 'sidebar_admin_page', 'wptuts_add_color_picker' );
add_filter( 'customize_controls_print_scripts', 'wptuts_add_color_picker' );

add_filter( 'admin_head-nav-menus.php', 'menu_image_edit_nav_menu_walker_filter', 10, 2 );
 function menu_image_edit_nav_menu_walker_filter() {
			wp_enqueue_media();
			wp_enqueue_script( 'menu-image-admin', get_template_directory_uri() ."/js/widget_upload.js" );
	};
function themepark_init_css() {
	 $id =get_the_ID();

if ( !is_admin()) {
	   wp_deregister_script('jquery');
	   wp_register_script( 'jquery', get_template_directory_uri() ."/js/jquery-2.1.1.min.js",false, '', true  );
	   wp_enqueue_script('jquery');
	
	 wp_deregister_script('loading');
	   wp_register_script( 'loading',get_template_directory_uri() ."/js/load.js",false, '', true );
	   wp_enqueue_script('loading');
	
	     wp_deregister_script('swiper2');
	   wp_register_script( 'swiper2',get_template_directory_uri() ."/js/swiper4.min.js",false, '', true);
	   wp_enqueue_script('swiper2');
	
	  wp_deregister_script('lazyload');
	   wp_register_script( 'lazyload',get_template_directory_uri() ."/js/lazyload.min.js",false, '', true );
	   wp_enqueue_script('lazyload'); 
	
	 
	
wp_deregister_script('swipebox');
	   wp_register_script( 'swipebox',get_template_directory_uri() ."/js/jquery.swipebox.min.js",false, '', true);
	   wp_enqueue_script('swipebox');
	
  
	  
	   wp_deregister_script('cookies');
	   wp_register_script( 'cookies',get_template_directory_uri() ."/js/jquery.cookie.js",false, '', true );
	   wp_enqueue_script('cookies');
	  
      wp_deregister_script('form');
	   wp_register_script( 'form',get_template_directory_uri() ."/js/jquery.form.js",false, '', true );
	   wp_enqueue_script('form');
	
	wp_deregister_script('extend');
	   wp_register_script( 'extend',get_template_directory_uri() ."/js/extend.js",false, '', true );
	   wp_enqueue_script('extend');
	

	wp_deregister_script('script-fun');
	   wp_register_script( 'script-fun',get_template_directory_uri() ."/js/script_fun.js",false, '', true );
	   wp_enqueue_script('script-fun');
	
	
	   wp_deregister_script('script');
	   wp_register_script( 'script',get_template_directory_uri() ."/js/script.js",false, '', true );
	   wp_enqueue_script('script');
	

	  wp_deregister_style('-library');
	   wp_register_style( '-library', includes_url() .'/css/dist/-library/style.min.css');
	   wp_enqueue_style('-library');
	   
	   wp_deregister_style('stylesheet');
	   wp_register_style( 'stylesheet', get_template_directory_uri() .'/style.css');
	   wp_enqueue_style('stylesheet');
	   
	   wp_deregister_style('swiper');
	   wp_register_style( 'swiper', get_template_directory_uri() .'/css/swiper.min.css');
	   wp_enqueue_style('swiper');
	     

	      wp_deregister_style('pages');
	   wp_register_style( 'pages', get_template_directory_uri() .'/css/pages.css');
	   wp_enqueue_style('pages');
	
	  wp_deregister_style('s');
	   wp_register_style( 's', get_template_directory_uri() .'/css/s.css');
	   wp_enqueue_style('s');
	
	
	  wp_deregister_style('swipebox');
	   wp_register_style( 'swipebox', get_template_directory_uri() .'/css/swipebox.min.css');
	   wp_enqueue_style('swipebox');
	
   if (!function_exists( 'font_awesome_ded' ) ) {	
    wp_enqueue_style( 'font-awesome',  '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	}
   

	}}

add_action('wp_print_styles', 'themepark_init_css',0,10);

