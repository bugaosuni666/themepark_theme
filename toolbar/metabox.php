<?php 
$new_meta_boxes_p2 =
array(

	"catce" => array(
        "name" => "catce",
        "std" => "",
        "title" => "侧栏小工具"),
		
		"temp" => array(
        "name" => "temp",
        "std" => "",
        "title" => "顶部区块模板"),
	
	
	"themepark_seo_title" => array(
        "name" => "themepark_seo_title",
        "std" => "",
        "title" => "themepark_seo_title"),
	
	"themepark_seo_description" => array(
        "name" => "themepark_seo_description",
        "std" => "",
        "title" => "themepark_seo_description"),
	
	"themepark_seo_keyword" => array(
        "name" => "themepark_seo_keyword",
        "std" => "",
        "title" => "themepark_seo_keyword"),
	
	"themepark_seo_robots" => array(
        "name" => "themepark_seo_robots",
        "std" => "",
        "title" => "themepark_seo_robots"),
);
function new_meta_boxes_p2() {
    global $post, $new_meta_boxes_p2;
  

		$temp = get_post_meta($post->ID,"temp", true);
	
	$catce = get_post_meta($post->ID,"catce", true);
	$themepark_seo_title=get_post_meta($post->ID,"themepark_seo_title", true);
	$themepark_seo_description=get_post_meta($post->ID,"themepark_seo_description", true);
	$themepark_seo_keyword=get_post_meta($post->ID,"themepark_seo_keyword", true);
	$themepark_seo_robots=get_post_meta($post->ID,"themepark_seo_robots", true);
        if($meta_box_value == "")
            $meta_box_value = $meta_box['std'];
			
      ?>
		
		
				
			<input type="hidden" name="temp_noncename" id="temp_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />
          	<input type="hidden" name="catce_noncename" id="catce_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />
            	<input type="hidden" name="themepark_seo_title_noncename" id="themepark_seo_title_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />
	<input type="hidden" name="themepark_seo_description_noncename" id="themepark_seo_description_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />

<input type="hidden" name="themepark_seo_keyword_noncename" id="themepark_seo_keyword_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />

<input type="hidden" name="themepark_seo_robots_noncename" id="themepark_seo_robots_noncename" value="<?php echo wp_create_nonce( plugin_basename(__FILE__) );?>" />
	<div class="out_wap">
		
		 <label  class="temp2" style="margin-bottom: 15px;">SEO标题替换
       <textarea name="themepark_seo_title" style="width: 98%;" id="themepark_seo_title"><?PHP echo $themepark_seo_title; ?></textarea>
       </label> 
		
		 <label  class="temp2" style="margin-bottom: 15px;">描述设置：
       <textarea name="themepark_seo_description" style="width: 98%;" id="themepark_seo_description"><?PHP echo $themepark_seo_description; ?></textarea>
			  <p class="tishiwenzi">200个字符~300字符建议区间</p>
       </label> 
		 <label  class="temp2" style="margin-bottom: 15px;">关键词设置：
       <textarea name="themepark_seo_keyword" style="width: 98%;" id="themepark_seo_keyword"><?PHP echo $themepark_seo_keyword; ?></textarea>
			  <p class="tishiwenzi">用英文逗号隔开，建议不要超过100个字符</p>
       </label> 
		
			 <label  class="temp2" style="margin-bottom: 15px; width: 98%;">阻止搜索引擎收录此页面：
  
				<input type="checkbox" name="themepark_seo_robots"  id="themepark_seo_robots" value="yes"<?php if($themepark_seo_robots){echo 'checked="checked"';} ?> />
			  <p class="tishiwenzi">勾选这个选项会输出nofollow标签，阻止搜索引擎收录</p>
       </label> 
		
		

   <label  >网站头部样式区块选择【付费版解锁】：
     <select  disabled="disabled"  readonly="readonly">
	        
		
             <option  value="">默认</option>
	       <option value="" >强制不挂载</option>
			
			 </select>
		  <p class="tishiwenzi">付费版支持不同页面挂载不同风格结构的网站头部，升级付费版即可解锁此项功能。</p>
	   
       </label> 
       
      <label  class="elects">侧栏小工具挂载选择：【付费版解锁】
     <select readonly="readonly"  disabled="disabled" >
	        
		
             <option  value="">默认侧边小工具</option>
	       
			
			
			 </select>
		    <p class="tishiwenzi">付费版支持双栏页面不同页面、文章显示不同小工具，升级付费版解锁</p> 
       </label> 
		
         
      <label  class="temp">文章顶部区块模板挂载：【付费版解锁】
     <select   disabled="disabled">
	        
		
             <option  value="" >无挂载</option>
	      
			
			
			 </select>
		  <p class="tishiwenzi">付费版支持在普通页面模式下（两栏、通栏）挂载一个区块模板在文章顶部，可以是一组幻灯片、广告图片等，升级付费版可解锁</p>
       </label> 
		
	 </div>
	  

      
     
      
      <?php  
	   
 
 }

function create_meta_box_p2() {
    global $theme_name;
  
    if ( function_exists('add_meta_box') ) {
        add_meta_box( 'new-meta-boxes2', 'SEO和挂载选项', 'new_meta_boxes_p2', 'page', 'side' );
		add_meta_box( 'new-meta-boxes2', 'SEO和挂载选项', 'new_meta_boxes_p2', 'post', 'side' );
    }
}

function save_postdata_p2( $post_id ) {
    global $post, $new_meta_boxes_p2;
	
   
	
    foreach($new_meta_boxes_p2 as $meta_box) {
        if ( !wp_verify_nonce( $_POST[$meta_box['name'].'_noncename'], plugin_basename(__FILE__) ))  {
            return $post_id;
        }
  
        if ( 'page' == $_POST['post_type'] ) {
            if ( !current_user_can( 'edit_page', $post_id ))
                return $post_id;
        }
        else {
            if ( !current_user_can( 'edit_post', $post_id ))
                return $post_id;
        }
  
        $data = $_POST[$meta_box['name']];
  
        if(get_post_meta($post_id, $meta_box['name']) == "")
            add_post_meta($post_id, $meta_box['name'], $data, true);
        elseif($data != get_post_meta($post_id, $meta_box['name'], true))
            update_post_meta($post_id, $meta_box['name'], $data);
        elseif($data == "")
            delete_post_meta($post_id, $meta_box['name'], get_post_meta($post_id, $meta_box['name'], true));
    }
	
}
add_action('admin_menu', 'create_meta_box_p2');
add_action('save_post', 'save_postdata_p2');
