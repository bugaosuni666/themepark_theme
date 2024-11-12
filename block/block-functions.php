<?php

include_once("dynamic-/themepark-post.php");
function custom_admin_css() {

 echo '<style type="text/css">'.$hiddeng.'
 .update-messages{display:none;}
.-editor-url-input input[type="text"]{width:90%;border: 1px solid #000;}
.components-popover {width: 200px;margin-top: -47px;margin-left: -25px;}
.edit-post-visual-editor__post-title-wrapper{margin-top:0;}
.components-range-control__wrapper{width:150px!important;}
.edit-post-visual-editor__post-title-wrapper .editor-post-title { margin: 0 auto 0; padding: 15px;}
.menu-item-settings p.hidden-field{display:;}
.form-field.term-description-wrap{display:none;}
 .field-description span.description::after{content: "点击上传图片"; display: ; width: 100%; margin:5px 0; padding:10px 0; text-align: center; background: #135e96;color:#fff;font-size:16px;}
 
p.field-css-classes::after{content: "你可以在css类输入 PcOnly 只显示在PC端;输入 MovePnly  只显示在移动端；以此设置导航项目在什么设备显示";font-size:12px;}
 
 .field-description span.description{font-size:0;}
 .field-description span.description::before{content: "如果字体图标无法满足你的要求的话，你可以在此上传一个图片小图标，图片的地址会在上面显示，删除图片的地址即可删除图片";font-size:12px;}
  .field-description label::after{content: "如果单击上传无效，请先保存一下菜单！";font-size:12px;}
.ds_img_show{width: 100%; padding: 2px; background:#f6f7f7; border: 1px solid #ccc; box-sizing: border-box; text-align: center;position: relative;cursor: pointer;}
 .field-description label{font-size:0;}
  .field-description label::before{content: "图片地址";font-size:14px;}
.ds_img_show::after{content: "清除图片"; font-size: 16px; line-height: 2; position: absolute; top: 0; left: 0; display: ; width: 100%;height: 100%;background: rgba(0,0,0,0.7);color:#fff; font-weight: bold;opacity: 0}
.ds_img_show:hover::after{opacity: 1}
.content_tab_title a.themecolor1 span{color:'.$themecolor1.';}
.content_tab_title a.themecolor2 span{color:'.$themecolor2.';}
.content_tab_title a.bthemecolor1.active{background-color:'.$themecolor1.'!important;}
.content_tab_title a.bthemecolor2.active{background-color:'.$themecolor2.'!important;}

.editor-styles-wrapper{width: 100%;}
.locale-zh-cn #local-time, .locale-zh-cn #utc-time, .locale-zh-cn .form-wrap p, .locale-zh-cn .howto, .locale-zh-cn .inline-edit-row fieldset span.checkbox-title, .locale-zh-cn .inline-edit-row fieldset span.title, .locale-zh-cn .js .input-with-default-title, .locale-zh-cn .link-to-original, .locale-zh-cn .tablenav .displaying-num, .locale-zh-cn p.description, .locale-zh-cn p.help, .locale-zh-cn p.install-help, .locale-zh-cn span.description {
    background: none;
}

.-editor--list__{margin:0;}
.wp- { max-width:100%;width:100%; z-index: 10;position: relative;}
.-editor-writing-flow{margin:0 auto;}
.editor-styles-wrapper h2{font-size: 18px;}
.edit-post-visual-editor__post-title-wrapper .editor-post-title{background: #fff;}
.is-root-container_bac{width: 100%; height: 100%;position:absolute; top: 0; left: 0;z-index: 1}
.edit-post-visual-editor .components-button{background: #fff;}
 .wp--columns .wp--column:not(:first-child) {
    margin-left: 15px!important;
  }
 .column-ts-ets-option img{max-width:100%; height:auto;} 
 
 #ipad-h{width:1024px;height:768px;margin: 0 auto;margin: 0 auto;overflow-y: scroll;background:rgb(245, 245, 245);}
  #ipad-s{width:768px;height:1024px;margin: 0 auto;margin: 0 auto;overflow-y: scroll;background:rgb(245, 245, 245);}
  #iphone-x{width:375px;height:812px;margin: 0 auto;margin: 0 auto;overflow-y: scroll;background:rgb(245, 245, 245);}
   #iphone-8{width:375px;height:667px;margin: 0 auto;margin: 0 auto;overflow-y: scroll;background:rgb(245, 245, 245);}
    #iphone-plus{width:414px;height:736px;margin: 0 auto;margin: 0 auto;overflow-y: scroll;background:rgb(245, 245, 245);}
	
	.-editor--list__.wp-.is-reusable{border: solid 3px red;}
	.-editor--list__.wp-.is-reusable::before{content:"  这是一个可重用区块,单独使用请转换成正常区块"; width:100%;display:;padding:10px 1%;background: red;color: #fff;box-sizing: border-box;}
	.-editor-inserter__preview-container .wp-.is-reusable::before{display:none;}
	.-editor-inserter__preview-container {width:900px;}
	.widefat td{background:none!important;}
</style>'	;
}
add_action('admin_head', 'custom_admin_css');



function themepark_tab_(){
if(is_admin()){
	wp_register_script( 'jquery211', get_template_directory_uri().'/js/jquery-2.1.1.min.js',array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n') );
	 wp_enqueue_script( 'jquery211' );
	
	
	
	wp_register_script( 'settingjs', get_template_directory_uri().'//setting/set.js',array('jquery211') );
    wp_enqueue_script( 'settingjs' );
	 if(get_option("mytheme_logo")){$logo=chact_url_http(get_option("mytheme_logo"));}else{$logo=get_bloginfo('template_url').'/images/logo.png';}
	
	
	$translation_array = array( 'templateUrl' => get_stylesheet_directory_uri(),'homeurl' =>get_option("home"),'sticky_posts'=>get_option( 'sticky_posts' ),'logo'=>$logo ,"cattree"=>hierarchical_cat_tree(0,''));
	
	wp_localize_script( 'settingjs', 'object_name', $translation_array );
	
	
	
	
	wp_register_script( 'themepark-tab-js', get_template_directory_uri() . '//src/themepark-tab.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	
	
	wp_register_script( 'themepark-swiper', get_template_directory_uri() . '//src/themepark-swiper.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	wp_register_script( 'themepark-accordion', get_template_directory_uri() . '//src/themepark-accordion.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	

	
	wp_register_script( 'themepark-btn', get_template_directory_uri() . '//src/themepark-btn.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-post-js', get_template_directory_uri() . '//src/themepark-post.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	

	
	wp_register_script( 'themepark-area-js', get_template_directory_uri() . '//src/themepark-area.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-imgtext-js', get_template_directory_uri() . '//src/themepark-imgtext.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-listbox-js', get_template_directory_uri() . '//src/themepark-listbox.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-lists-js', get_template_directory_uri() . '//src/themepark-lists.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-imgbox-js', get_template_directory_uri() . '//src/themepark-imgbox.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-slide-js', get_template_directory_uri() . '//theme/themepark-slide.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-listul-js', get_template_directory_uri() . '//theme/themepark-listul.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	
	wp_register_script( 'themepark-wright-js', get_template_directory_uri() . '//src/themepark-wright.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	
	wp_register_script( 'themepark-header-js', get_template_directory_uri() . '//src/themepark-header.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
		
	wp_register_script( 'themepark-icon-js', get_template_directory_uri() . '//theme/themepark-icon.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
	
	wp_register_script( 'themepark-slidearea-js', get_template_directory_uri() . '//src/themepark-slidearea.js', array('wp-s', 'wp-element', 'wp-editor', 'wp-i18n'), '1.0.0' );
    wp_register_style( 'themepark-tab-css', get_stylesheet_directory_uri().'//src/themepark-tab.css',array( 'wp-edit-s' ) );
	
		if(function_exists('font_awesome_ded')){
	wp_register_style( 'font_awesome',content_url().'/plugins/font-awesome-local/5.0/css/all.css',array( 'wp-edit-s' ) );
	register__type( 'themepark-/themepark-product-head', array('editor_script' => 'themepark-product-head','editor_style'  => 'font_awesome',) );
}
	
	register__type( 'themepark-/themepark-tab', array('editor_script' => 'themepark-tab-js','editor_style'  => 'themepark-tab-css',) );
	
	register__type( 'themepark-/themepark-swiper', array('editor_script' => 'themepark-swiper') );
	
	register__type( 'themepark-/themepark-accordion', array('editor_script' => 'themepark-accordion') );
	register__type( 'themepark-/themepark-btn', array('editor_script' => 'themepark-btn') );

	register__type( 'themepark-/themepark-area', array('editor_script' => 'themepark-area-js') );
		register__type( 'themepark-/themepark-slidearea', array('editor_script' => 'themepark-slidearea-js') );
	
	
	register__type( 'themepark-/themepark-imgtext', array('editor_script' => 'themepark-imgtext-js') );
	register__type( 'themepark-/themepark-listbox', array('editor_script' => 'themepark-listbox-js') );
	register__type( 'themepark-/themepark-lists', array('editor_script' => 'themepark-lists-js') );
	register__type( 'themepark-/themepark-imgbox', array('editor_script' => 'themepark-imgbox-js') );
	register__type( 'themepark-/themepark-wright', array('editor_script' => 'themepark-wright-js') );
	//register__type( 'themepark-/themepark-videotext', array('editor_script' => 'themepark-videotext-js') );
	
	register__type( 'themepark-/themepark-slide', array('editor_script' => 'themepark-slide-js') );
	register__type( 'themepark-/themepark-listul', array('editor_script' => 'themepark-listul-js') );
	register__type( 'themepark-/themepark-icon', array('editor_script' => 'themepark-icon-js') );
	

	


	
		
	
}	
	
register__type( 'themepark-/themepark-post', array(
		'editor_script' => 'themepark-post-js',
		'render_callback' => 'themepark_post_render_callback',) );

	
	
register__type( 'themepark-/themepark-header', array(
		'editor_script' => 'themepark-header-js',
		'render_callback' => 'themepark_header_render_callback',) );		
	
	
}




add_action( 'init', 'themepark_tab_' );


add_filter( '_categories', 'themepark__categories', 10, 2 );
function themepark__categories( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'themepark--b1',
				'title' =>'THEMEPARk-',
			),
			array(
				'slug' => 'themepark--b2',
				'title' =>'THEMEPARk-2',
			),
			
			
		)
	);
}



register_rest_field( 'post', 'metadata', array('get_callback' => function ( $data ) {return get_post_meta( $data['id'], '', '' );}, ));
add_action('admin_print_styles', function(){
	wp_deregister_style('wp-editor-font');
	wp_register_style('wp-editor-font', '');
});


add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post'),
        'medium_url',
        array(
            'get_callback'    => 'get_rest_medium_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
	
	register_rest_field( array('post'),
        'thumbnail_url',
        array(
            'get_callback'    => 'get_rest_thumbnail_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
	
	register_rest_field( array('post'),
        'full_url',
        array(
            'get_callback'    => 'get_rest_full_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_medium_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'medium' );
        return $img[0];
    }
    return false;
}

function get_rest_thumbnail_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'thumbnail' );
        return $img[0];
    }
    return false;
}

function get_rest_full_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'full' );
        return $img[0];
    }
    return false;
}

add_filter('body_class','add_themepark_classes');
    function add_themepark_classes($classes) {
		if(!$id){$id=get_the_ID();}
		 
		$newheader_id=echo__temp_id(get_option("mytheme_header"));
		 $temp2 = get_post_meta($id,"temp2", true);
		if($temp2){$newheader_id=echo__temp_id($temp2);}
		if($temp2=="mo"){$newheader_id='';}
		
		if($newheader_id){
			$header_info=get_post_meta($newheader_id, "_headinfo",true);
			$headinfotop=get_post_meta($newheader_id, "_headinfotop",true);
			if(is_array($header_info) &&$header_info[0]["module"]==3&&$headinfotop==1){$classes[] = 'notxf';}
			if(is_array($header_info) &&$header_info[0]["module"]==5&&$headinfotop==1){$classes[] = 'notxf';}
			if(is_array($header_info) &&$header_info[0]["module"]==3&&$headinfotop==0){$classes[] = 'notxf2';}
		}
		
       if(is_page()||is_single()||is_front_page()||is_404()){
		   
		   if(!$id){$id=get_the_ID();}
		   
		
		   
		   
		   if(is_404()){$temp = get_option('mytheme_error_404_pc');	
$id=echo__temp_id($temp);}
$themepark_post_width=get_post_meta($id,"themepark_post_width",true);
		  
	if($themepark_post_width=="swiper"){
		$classes[] = 'swiperbody drop';
		
	}else if($themepark_post_width=='100%'||$themepark_post_width=='100% dong'){
		if(!is_home()&&!is_front_page()){$classes[] = 'body drop';}else{
		$classes[] = 'body';}
	} else{  	
		if(!is_home()&&!is_front_page()){$classes[] = 'nomorebody drop';}else{
		$classes[] = 'nomorebody';}
		}	   
	   }if(is_archive()&&!is_search()&&!is_home()){$classes[] = 'drop';}
        
       
        return $classes;
    }
