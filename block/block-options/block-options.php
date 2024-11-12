<?php

 function add_metabox(){
	 
	register_meta( 'post', 'themepark_seo_title', array(
 		'type'		=> 'string',
 		'single'	=> true,
 		'show_in_rest'	=> true,
 	) );
 
	register_meta( 'post', 'themepark_seo_description', array(
 		'type'		=> 'string',
 		'single'	=> true,
 		'show_in_rest'	=> true,
 	) );
 
	register_meta( 'post', 'themepark_seo_robots', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
 	) ); 
	 
	 
	register_meta( 'post', 'themepark_post_bcolor', array(
 		'type'		=> 'string', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		'default'=>'#f5f5f5'
 	) );  
	 
	register_meta( 'post', 'themepark_post_width', array(
 		'type'		=> 'string', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		'default'=> '1022px',
 	) ); 
	 
	register_meta( 'post', 'themepark_post_img', array(
 		'type'		=> 'string', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		
 	) );  
	 
	register_meta( 'post', 'themepark_post_img_po', array(
 		'type'		=> 'string', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		'default'=> 'left',
		
 	) );   
	 register_meta( 'post', 'themepark_post_img_re', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		
 	) ); 
	 
	 register_meta( 'post', 'themepark_post_img_cover', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		
 	) );
	 
	 register_meta( 'post', 'themepark_post_img_fixed', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		
 	) );  
	 
	register_meta( 'post', 'themepark_post_hide_title', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		
 	) );   
	 
	register_meta( 'post', 'themepark_post_main_b', array(
 		'type'		=> 'string', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		'default'=> '',
 	) );   
	 
		register_meta( 'post', 'themepark_post_main_p', array(
 		'type'		=> 'integer', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
		'default'=> '100',
 	) );   
	 
	register_meta( 'post', 'themepark_padding', array(
 		'type'		=> 'boolean', 
 		'single'	=> true,
 		'show_in_rest'	=> true,
	
 	) );    
	 
	 
 }

add_action( 'init','add_metabox');

add_action( 'enqueue__editor_assets', function(){
	global $post;
	
	
	
if( $post->post_type != 'wp_' ) {
	wp_enqueue_script(
		'thempark-options',
		get_template_directory_uri() . '//-options/options.js',
		array( 'wp-i18n', 'wp-s', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post' )
		
	);
	
	
	wp_enqueue_script(
		'thempark-equipment',
		get_template_directory_uri() . '//-options/equipment.js',
		array( 'wp-i18n', 'wp-s', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post' )
		
	);
 }
});


function savepostbacg($url){
	
	
	
	
}


