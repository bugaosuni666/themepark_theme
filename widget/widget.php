<?php





include_once("cms/nav.php");
include_once("cms/post_more.php");
//include_once("cms/adimg.php");
include_once("cms/tag-nav.php");
//include_once("cms/product_nav.php");
include_once("cms/tag-cloud.php");
//include_once("cms/post_tag.php");
include_once("cms/.php");
if (function_exists('register_sidebar')) {
		
		
		register_sidebar(array(
    		'name' => '默认侧边栏',
    		'id'   => 'sidebar-widgets4',
    		'description'   => '默认两栏内页的侧边栏',
    		'before_widget' => '<div id="%1$s" class="widget %2$s">',
    		'after_widget'  => '</div>',
    		'before_title'  => '<h2>',
    		'after_title'   => '</h2>'
    	));
			

		
    };
function unregister_default_wp_widgets() {
	unregister_widget('WP_Widget_Pages');
	unregister_widget('WP_Widget_Calendar');
	unregister_widget('WP_Widget_Archives');
	unregister_widget('WP_Widget_Links');
	unregister_widget('WP_Widget_Meta');
	unregister_widget('WP_Widget_Search');
	unregister_widget('WP_Widget_Categories');
	unregister_widget('WP_Widget_Recent_Posts');
	unregister_widget('WP_Widget_Recent_Comments');
	unregister_widget('WP_Widget_RSS');
	unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Nav_Menu_Widget'); 
	unregister_widget('WP_Widget_Media_Gallery'); 
	unregister_widget('WP_Widget_Media_Video');
	unregister_widget('WP_Widget_Media_Audio');
	unregister_widget('WP_Widget_Media_Image');
	unregister_widget('WP_Widget_Text');
	unregister_widget('WP_Widget_');
};

add_action('widgets_init', 'unregister_default_wp_widgets');



function my_get_dynamic_sidebar( $sidebar_id ) {
	 
	            	
          ob_start();
          dynamic_sidebar( $sidebar_id );
          $content = ob_get_clean();
			
		
		  $sidebar = $content;
					
	    
	
		return  $sidebar;
};










