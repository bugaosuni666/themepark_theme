<?php
function mytheme_header_options($wp_customize){
		$wp_customize->add_section('mytheme_header_options', array(
        'title'    => __('PC网站顶部设置', 'mytheme'),
        'description' => 'PC端网站整个顶部的风格和内容设置',
        'priority' => 60,
    ));

	class Ari_Customize_Textarea_Control extends WP_Customize_Control {
  public $type = 'textarea';
  public function render_content() {

 ?>
  <label>
    <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
    <textarea rows="5" style="width:100%;" <?php $this->link(); ?>><?php echo esc_textarea( $this->value()); ?></textarea>
  </label>
  <p><?php echo esc_html( $this->description); ?></p>
<?php 
  }
}



class Ari_Customize_select_nav_Control extends WP_Customize_Control {
  public $type = 'select_nav';
  public function render_content() {

 ?>
  <label>
    <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
   
    
    <select style="width:100%;" <?php $this->link(); ?>>
			<option value="0">请选择一个菜单</option>
			<option value="improt">导入数据</option>
		<?php
		$big_pic_nav= $this->value();
		$menus = wp_get_nav_menus( array( 'orderby' => 'name' ) );
			foreach ( $menus as $menu ) {
				echo '<option value="' . $menu->term_id . '"'
					. selected( $big_pic_nav, $menu->term_id, false )
					. '>'. esc_html( $menu->name ) . '</option>';
			}
		?>
			</select> 
    
    
    
  </label>
  <p><?php 
  if(!$big_pic_nav){$big_pic_nav=0;};
  $url='href="'.admin_url().'/nav-menus.php?action=edit&menu='.$big_pic_nav.'"';
  echo esc_html( $this->description); echo'<br><a  target="_blank"  '.$url.' class="button" >进入菜单进行编辑或者创建</a>';?></p>
<?php 
  }
}

	
class Ari_Customize_select_cat extends WP_Customize_Control {
  public $type = 'select_cat';
  public function render_content() {
$cat_ids=esc_textarea( $this->value()); 
 ?>
  <label>
    <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
   

             <select <?php $this->link(); ?> >
              <option value=''<?php if ($cat_ids == "" ) {echo "selected='selected'";}?> >请选择</option>
             <?php 
			
		$cats = get_terms( array(
    'taxonomy' => 'category',
    'hide_empty' => false,
));
		foreach( $cats AS $catr ) { 
		 $cat_id=$catr->term_id;
		  $cat_name=get_term($cat_id)->name;
		?>
       
			<option 
				value='<?php echo  $cat_id; ?>'
				<?php
					if ( $cat_ids == $cat_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $cat_name; ?></option>
		<?php } 
				 
				 	$cats2 = get_terms( array(
    'taxonomy' => 'product_cat',
    'hide_empty' => false,
));
		foreach( $cats2 AS $catr ) { 
		 $cat_id=$catr->term_id;
		  $cat_name=get_term($cat_id)->name;
		?>
       
			<option 
				value='<?php echo  $cat_id; ?>'
				<?php
					if ( $cat_ids == $cat_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $cat_name; ?></option>
		<?php } ?>
				 
			
		
		
		
   
	</select></label>
  <p><?php echo esc_html( $this->description); ?></p>
<?php 
  }
}
		
	
	
	
class Ari_Customize_select_pages extends WP_Customize_Control {
  public $type = 'select_pages';
  public function render_content() {
$page_ids=esc_textarea( $this->value()); 
 ?>
  <label>
    <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
   

             <select <?php $this->link(); ?> >
              <option value=''<?php if ($page_ids == "" ) {echo "selected='selected'";}?> >请选择</option>
             <?php 
			
		$pages = get_pages();
		foreach( $pages AS $page ) { 
		 $page_id=$page->ID;
		  $page_name=$page->post_title;
		?>
       
			<option 
				value='<?php echo  $page_id; ?>'
				<?php
					if ( $page_ids == $page_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $page_name; ?></option>
		<?php } ?>
   
	</select></label>
  <p><?php echo esc_html( $this->description); ?></p>
<?php 
  }
}

	class Ari_Customize_select_s extends WP_Customize_Control {
  public $type = 'select_pages';
  public function render_content() {
$page_ids=esc_textarea( $this->value()); 
 ?>
  <label>
    <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
   

             <select <?php $this->link(); ?> >
                <option <?php  if(!$temp){echo 'selected="selected"';}; ?>  value="">无挂载区块</option>
	       <option value="mo"<?php  if($temp=="mo"){echo 'selected="selected"';}; ?> >强制不挂载</option>
			<?php echo _temp_option($meta_box_value3); ?>
   
	</select></label>
    <p><?php echo esc_html( $this->description); ?></p>

<?php 
	if($page_ids){echo '<a class="button"target="_blank" href="'.admin_url().'post.php?post='.echo__temp_id($page_ids).'&action=edit">点击编辑区块</a>';} 
	  
  }
}


class Ari_Customize_fengexian_Control extends WP_Customize_Control {
  public $type = 'fengexian';
  public function render_content() {

 ?>
 <div style="width:100%; background:#333; margin:15px 0; height:1px;"></div>
  
<?php 
  }
}

	
	$wp_customize->add_setting('mytheme_header', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
$wp_customize->add_control( new Ari_Customize_select_s($wp_customize, 'mytheme_header', array(
        'label'    => __('网站顶部挂载区块模板', 'mytheme_header'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header',
	    'description' => '使用区块模板创建一个顶部区块，挂载到这里将替换下面的默认设置内容，区块模板定义顶部风格和结构更加灵活，可以设置不同的结构',
     )
    )); 
	
	
	
	
$wp_customize->add_setting('mytheme_header_nms', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_header_nms', array(
        'label'      => __('顶部模式', 'mytheme_header_nms'),
          'section'  => 'mytheme_header_options',
        'settings'   => 'mytheme_header_nms',
		 'description' => '不同模式下排列和下拉菜单的表现是不同的',
		'type'    => 'select',
		 'choices'    => array(
            '' => '默认等宽',
            'newhead' => '全宽居中',
	        
			
          
        ),
    )); 	
	
	
	
	

  $wp_customize->add_setting('mytheme_logo', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new WP_Customize_Image_Control($wp_customize, 'mytheme_logo', array(
        'label'    => __('电脑版本logo上传[尺寸高度：400*133]', 'mytheme_logo'),
        'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_logo',
     )
    )); 
	
	
 
//----------------------------logo------------------------------------------------	
	
 
	
	$wp_customize->add_setting('mytheme_top_tels', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_top_tels', array(
         'label'      => __('语言按钮', 'mytheme_top_tels'),
          'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_top_tels',
       
      ));
	
	
 

	$wp_customize->add_setting('mytheme_top_tels2', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_top_tels2', array(
         'label'      => __('语言按钮图标', 'mytheme_top_tels2'),
          'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_top_tels2',
       
      ));
	
	
	$wp_customize->add_setting('mytheme_top_languge_nav2', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( new Ari_Customize_select_nav_Control($wp_customize, 'mytheme_top_languge_nav2', array(
        'label'    => __('右侧下拉菜单', 'mytheme_top_languge_nav2'),
      'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_top_languge_nav2',
		'description' => '选择一个单层菜单，会在鼠标右侧按钮时触发下拉',
     )
    )); 
	
	

		
	$wp_customize->add_setting('mytheme_header_top_bac_c2', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_top_bac_c2', array(
        'label'    => __('顶部导航区域背景颜色（pc）', 'mytheme_header_top_bac_c2'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_top_bac_c2',
	
    )));
	
	
 
	  
	$wp_customize->add_setting('mytheme_header_top_bac_op', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_header_top_bac_op', array(
         'label'      => __('背景透明度(贴顶部)', 'mytheme_header_top_bac_op'),
          'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_top_bac_op',
         'description' => '填写1为100%，0.9为90%，0.5为50% 透明度',
      ));
	
	
	
	$wp_customize->add_setting('mytheme_header_top_bac_op2', array(
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
 
    $wp_customize->add_control( 'mytheme_header_top_bac_op2', array(
         'label'      => __('背景透明度(悬浮时)', 'mytheme_header_top_bac_op2'),
          'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_top_bac_op2',
         'description' => '你可以设置悬浮时的透明度和贴顶时不一样',
      ));
	
	
$wp_customize->add_setting('mytheme_header_matop', array(
        'default'        => '',
        'capability'     => 'edit_theme_options',
        'type'           => 'option',
 
    ));	
 $wp_customize->add_control('mytheme_header_matop', array(
        'label'      => __('顶部位置', 'mytheme_header_matop'),
          'section'  => 'mytheme_header_options',
        'settings'   => 'mytheme_header_matop',
		 'description' => '如果你设置了透明度，你可以让顶部覆盖悬浮，而非留出空间,覆盖悬浮只对区块化的文章和页面有效。普通文章和分类无效',
		'type'    => 'select',
		 'choices'    => array(
            '' => '默认留出空间',
            'closed' => '覆盖悬浮',
	        
			
          
        ),
    )); 
	
	

	
//----------------------------header------------------------------------------------		

	
	
   
//----------------------------pc header------------------------------------------------	
	 


//----------------------------pc nav------------------------------------------------	


	
$wp_customize->add_setting('mytheme_header_title', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_title', array(
        'label'    => __('导航标题颜色', 'mytheme_header_title'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_title',
	
    )));	
	
	
	
	
$wp_customize->add_setting('mytheme_header_title_hover', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_title_hover', array(
        'label'    => __('导航鼠标经过颜色', 'mytheme_header_title_hover'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_title_hover',
	
    )));	
	
	
$wp_customize->add_setting('mytheme_header_li_hover', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_li_hover', array(
        'label'    => __('导航鼠标经过背景颜色', 'mytheme_header_li_hover'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_li_hover',
	
    )));	
		

$wp_customize->add_setting('mytheme_header_li_hover2', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_li_hover2', array(
        'label'    => __('导航右侧按钮颜色', 'mytheme_header_li_hover2'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_li_hover2',
	
    )));	
		

$wp_customize->add_setting('mytheme_header_li_hover3', array(
        'default'        => '',
        'sanitize_callback' => 'sanitize_hex_color',
        'capability'        => 'edit_theme_options',
        'type'           => 'option',
 
    ));
$wp_customize->add_control( new WP_Customize_Color_Control($wp_customize, 'mytheme_header_li_hover3', array(
        'label'    => __('导航右侧按钮文字颜色', 'mytheme_header_li_hover3'),
         'section'  => 'mytheme_header_options',
        'settings' => 'mytheme_header_li_hover3',
	
    )));		
	
	
	

	
	




	 
	
 //----------------------------pc text------------------------------------------------	  
};
add_action('customize_register', 'mytheme_header_options');
?>
