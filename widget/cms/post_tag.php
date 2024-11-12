<?php 

class post_tag extends WP_Widget {

	function __construct()
	{
		$widget_ops = array('classname'=>'post_tag','description' => get_bloginfo('template_url').'/images/xuanxiang/12.gif');
		$control_ops = array('width' => 200, 'height' => 300);
		parent::__construct($id_base="post_tag",$name='调用标签下文章[两栏]',$widget_ops,$control_ops);  

	}

	function form($instance) { 
	
	    	
    $title = esc_attr($instance['title']);
	$title2 = esc_attr($instance['title2']);
	$title3 = esc_attr($instance['title3']);
	$cat_n = esc_attr($instance['cat_n']);
		if(!$cat_n){$cat_n=1;}
	for ($x=0; $x<=($cat_n-1); $x++) {	
	${'w_cat'.$x} = esc_attr($instance['w_cat'.$x]);
	}

	 $zhiding = esc_attr($instance['zhiding']);
	  $zhiding2 = esc_attr($instance['zhiding2']);
	 $titleseo= esc_attr($instance['titleseo']);

	 $titleseo3= esc_attr($instance['titleseo3']);

 $nnmber = esc_attr($instance['nnmber']);
	 $color=esc_attr($instance['color']);
	 $detects=esc_attr($instance['detects']);
	    $bac_color=esc_attr($instance['bac_color']);
		 $bac_imgage=esc_attr($instance['bac_imgage']);
		
		 $bac_color2=esc_attr($instance['bac_color2']);
		 $bac_imgage2=esc_attr($instance['bac_imgage2']);
		
		  $li=esc_attr($instance['li']);
		 $thumails=esc_attr($instance['thumails']);
		 
		  $seo_out1=esc_attr($instance['seo_out1']);
		   $seo_out2=esc_attr($instance['seo_out2']);
		   $margin_up=esc_attr($instance['margin_up']);
		 $margin_dwon=esc_attr($instance['margin_dwon']);
	 $fixed=esc_attr($instance['fixed']);  
	?>
	
<p style="display:; width:100%; border-bottom:1px #333333 solid; padding:5px; margin:5px;"><strong>模块属性设置</strong></p>

 <p>
 <label  for="<?php echo $this->get_field_id('title'); ?>">标题（带有颜色）:</label>
 <input type="text" size="40" value="<?php echo $title ; ?>" name="<?php echo $this->get_field_name('title'); ?>" id="<?php echo $this->get_field_id('title'); ?>"/>
 </p>
<p>
 <label  for="<?php echo $this->get_field_id('title3'); ?>">标题（黑色）:</label>
 <input type="text" size="40" value="<?php echo $title3 ; ?>" name="<?php echo $this->get_field_name('title3'); ?>" id="<?php echo $this->get_field_id('title3'); ?>"/>
</p>
 



   <label for="<?php echo $this->get_field_id('li'); ?>">显示模式</label>
			<select id="<?php echo $this->get_field_id('li'); ?>" name="<?php echo $this->get_field_name('li'); ?>">
		
            <option value=''<?php if ($li == "" ) {echo "selected='selected'";}?> >默认一行一个</option>
            <option value='2'<?php if ($li == "2" ) {echo "selected='selected'";}?> >第一篇高亮</option>
            <option value='3'<?php if ($li == "3" ) {echo "selected='selected'";}?> >无图片模式</option>
          
          
			</select>

<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">一行显示的数量，如果显示的数量超过了5个，那么就不支持略缩图切换了（太小无法显示）</em>



<p>

 <p>
 <label  for="<?php echo $this->get_field_id('cat_n'); ?>">需要调用多少个标签下的文章组？:</label>
 <input type="text" size="40" value="<?php echo $cat_n ; ?>" name="<?php echo $this->get_field_name('cat_n'); ?>" id="<?php echo $this->get_field_id('cat_n'); ?>"/>
 
 <em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">默认只调用一个标签下的文章，如果调用多个，请填写数量，最多请不要超过5个</em>
 </p>

<?php
	if(!$cat_n){$cat_n=1;}
	for ($x=0; $x<=($cat_n-1); $x++) {	

	
	
	?>
<label  for="<?php echo $this->get_field_id('w_cat'.$x); ?>">调用文章标签(<?php echo $x; ?>):</label><br />
             <select id="<?php echo $this->get_field_id('w_cat'.$x); ?>" name="<?php echo $this->get_field_name('w_cat'.$x); ?>" >
              <option value=''>不显示</option>
<?php 
		 $categorys = get_tags();
		
		foreach( $categorys AS $category ) { 
		 $category_id= $category->term_id;
		 $category_name=$category->name;
		?>
       
			<option 
				value='<?php echo  $category_name; ?>'
				<?php
					if (  ${'w_cat'.$x} == $category_name ) {
						echo "selected='selected'";
					}
				?>><?php echo  $category_name; ?></option>
		<?php } ?>
	</select>
</p>

<?php } ?>
 
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">注意！标签请确认标签的别名为英文名称，可以再标签--快速编辑中修改</em>


<p><label for="<?php echo $this->get_field_id('nnmber'); ?>"><?php esc_attr_e('显示数量(默认6):'); ?> <input class="widefat" id="<?php echo $this->get_field_id('nnmber'); ?>" name="<?php echo $this->get_field_name('nnmber'); ?>" type="text" value="<?php echo $nnmber; ?>" /></label></p>








<b>seo标签设置</b><br />
   
    <label  for="<?php echo $this->get_field_id('titleseo'); ?>">模块标题seo标签</label><br />
             <select id="<?php echo $this->get_field_id('titleseo'); ?>" name="<?php echo $this->get_field_name('titleseo'); ?>" >
                <option value=''<?php if ($titleseo == "" ) {echo "selected='selected'";}?> > div标签</option>
              <option value='h2'<?php if ($titleseo == "h2" ) {echo "selected='selected'";}?> > 	H2标签</option>
              <option value='h3'<?php if ($titleseo == "h3" ) {echo "selected='selected'";}?> > H3标签</option>
               <option value='h4'<?php if ($titleseo == "h4" ) {echo "selected='selected'";}?> > H4标签</option>
                  <option value='h5'<?php if ($titleseo == "h5" ) {echo "selected='selected'";}?> > H5标签</option>
                <option value='strong'<?php if ($titleseo == "strong" ) {echo "selected='selected'";}?> > strong标签</option>
	          
	</select>

</p>




<p>

    <label  for="<?php echo $this->get_field_id('titleseo3'); ?>">文章标题seo标签</label><br />
             <select id="<?php echo $this->get_field_id('titleseo3'); ?>" name="<?php echo $this->get_field_name('titleseo3'); ?>" >
               <option value=''<?php if ($titleseo3 == "" ) {echo "selected='selected'";}?> > div标签</option>
              <option value='h2'<?php if ($titleseo3 == "h2" ) {echo "selected='selected'";}?> > 	H2标签</option>
              <option value='h3'<?php if ($titleseo3 == "h3" ) {echo "selected='selected'";}?> > H3标签</option>
               <option value='h4'<?php if ($titleseo3 == "h4" ) {echo "selected='selected'";}?> > H4标签</option>
                  <option value='h5'<?php if ($titleseo3 == "h5" ) {echo "selected='selected'";}?> > H5标签</option>
                <option value='strong'<?php if ($titleseo3 == "strong" ) {echo "selected='selected'";}?> > strong标签</option>
              
             
             
           
                 
	          
	</select>
</p>

 <p>
 <label  for="<?php echo $this->get_field_id('seo_out1'); ?>">外层标签使用section</label>
 <input type="checkbox" <?php if($seo_out1=="yes"){echo 'checked="checked"';} ?>size="40" value="yes" name="<?php echo $this->get_field_name('seo_out1'); ?>" id="<?php echo $this->get_field_id('seo_out1'); ?>"/>
 </p>

 <p>
 <label  for="<?php echo $this->get_field_id('seo_out2'); ?>">文章使用article包裹（使用之后，文章标题建议选择h2）</label>
 <input type="checkbox" <?php if($seo_out2=="yes"){echo 'checked="checked"';} ?>size="40" value="yes" name="<?php echo $this->get_field_name('seo_out2'); ?>" id="<?php echo $this->get_field_id('seo_out2'); ?>"/>
 </p>
 



<p>
  <label  for="<?php echo $this->get_field_id('margin_up'); ?>">模块上边距：</label><br />
 <input type="text" size="40" value="<?php echo $margin_up ; ?>" name="<?php echo $this->get_field_name('margin_up'); ?>" id="<?php echo $this->get_field_id('margin_up'); ?>"/>
 </p>
<p>
 <label  for="<?php echo $this->get_field_id('margin_dwon'); ?>">模块下边距:</label><br />
 <input type="text" size="40" value="<?php echo $margin_dwon; ?>" name="<?php echo $this->get_field_name('margin_dwon'); ?>" id="<?php echo $this->get_field_id('margin_dwon'); ?>"/>
 </p>
<p>
<label for="<?php echo $this->get_field_id('detects'); ?>">设备识别</label>
			<select id="<?php echo $this->get_field_id('detects'); ?>" name="<?php echo $this->get_field_name('detects'); ?>">
				<option <?php if($detects==''){echo 'selected="selected"';} ?>value="">移动端和PC端都显示</option>
                <option <?php if($detects=='PcOnly'){echo 'selected="selected"';} ?>value="PcOnly">只显示在PC端</option>
                <option <?php if($detects=='MovePnly'){echo 'selected="selected"';} ?> value="MovePnly">只显示在移动端</option>

</select>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">通过这个选项，你可以让某些模块只显示在某一个设备类型上，或者都显示，你可以在自定义--初始化中，设置输出的技术规则，响应式适配或者是代码适配</em>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">略缩图尺寸【文章 ：中等大小】</em>
</p>

<p>
 <label  for="<?php echo $this->get_field_id('fixed'); ?>">滚动到底部悬浮</label>
 <input type="checkbox" <?php if($fixed=="xf_div_box"){echo 'checked="checked"';} ?>size="40" value="xf_div_box" name="<?php echo $this->get_field_name('fixed'); ?>" id="<?php echo $this->get_field_id('fixed'); ?>"/>
 </p>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">侧栏可设置滚动超出悬浮,勾选这个选项模块顺序将会沉降到最后，请勿设置太多内容，否则显示不全</em>


	<?php
    }
	function update($new_instance, $old_instance) { // 更新保存
		return $new_instance;
	}
	function widget($args, $instance) { // 输出显示在页面上
	extract( $args );
	   
	    $title  = apply_filters('widget_title', empty($instance['title']) ? __('') : $instance['title']);
		$title2  = apply_filters('title2', empty($instance['title2']) ? __('') : $instance['title2']);
		$title3  = apply_filters('title3', empty($instance['title3']) ? __('') : $instance['title3']);
	$cat_n = apply_filters('cat_n', empty($instance['cat_n']) ? __('') : $instance['cat_n']);
		
		if(!$cat_n){$cat_n=1;}
	for ($x=0; $x<=($cat_n-1); $x++) {	
	${'w_cat'.$x} = apply_filters('w_cat'.$x, empty($instance['w_cat'.$x]) ? __('') : $instance['w_cat'.$x]);
	}
		
       $nnmber = apply_filters('nnmber', empty($instance['nnmber']) ? __('6') : $instance['nnmber']);
	   $zhiding2  = apply_filters('zhiding2', empty($instance['zhiding2']) ? __('') : $instance['zhiding2']);
	
		$zhiding  = apply_filters('zhiding', empty($instance['zhiding']) ? __('') : $instance['zhiding']);
		$titleseo=  apply_filters('titleseo', empty($instance['titleseo']) ? __('0') : $instance['titleseo']);
		$titleseo3=  apply_filters('titleseo3', empty($instance['titleseo3']) ? __('0') : $instance['titleseo3']);
		
		$detects= apply_filters('detects', empty($instance['detects']) ? __('') : $instance['detects']); 
		$bac_imgage=apply_filters('bac_imgage', empty($instance['bac_imgage']) ? __('') : $instance['bac_imgage']);
	    $bac_color=apply_filters('bac_color', empty($instance['bac_color']) ? __('') : $instance['bac_color']);
		$bac_imgage2=apply_filters('bac_imgage2', empty($instance['bac_imgage2']) ? __('') : $instance['bac_imgage2']);
	    $bac_color2=apply_filters('bac_color2', empty($instance['bac_color2']) ? __('') : $instance['bac_color2']);
		
		$color=apply_filters('color', empty($instance['color']) ? __('') : $instance['color']);
		$li=apply_filters('li', empty($instance['li']) ? __('') : $instance['li']);
		$thumails=apply_filters('thumails', empty($instance['thumails']) ? __('') : $instance['thumails']);
		 $seo_out1=apply_filters('seo_out1', empty($instance['seo_out1']) ? __('') : $instance['seo_out1']);
		   $seo_out2=apply_filters('seo_out2', empty($instance['seo_out2']) ? __('') : $instance['seo_out2']);
		$margin_up=apply_filters('margin_up', empty($instance['margin_up']) ? __('') : $instance['margin_up']);
		 $margin_dwon=apply_filters('margin_dwon', empty($instance['margin_dwon']) ? __('') : $instance['margin_dwon']);
		$fixed=apply_filters('show', empty($instance['fixed']) ? __('') : $instance['fixed']);
		 $nnmber = apply_filters('widget_title', empty($instance['nnmber']) ? __('4') : $instance['nnmber']);
			$oder=$bac_imgages=$bac_colors=$sticky='';
		if($margin_up||$margin_dwon){$marginss ='padding:'.$margin_up.' 0 '.$margin_dwon.' 0;';}
		
		if($bac_color){$bac_colors='background-color:'.$bac_color.';';}
		if($bac_imgage){$bac_imgage2s='background-image: url('.get_bloginfo('template_url').'/images/loading2.png'.');';$bac_imgage3s='  data-src="'.chact_url_http($bac_imgage).'"';$lazy="  lazyload";}
		
		
		if($bac_color2){$bac_colors2='background-color:'.$bac_color2.';';}
		if($bac_imgage2){$bac_imgage2s2='background-image: url('.get_bloginfo('template_url').'/images/loading2.png'.');';$bac_imgage3s2='  data-src="'.chact_url_http($bac_imgage2).'"';$lazy2="  lazyload";}
		if($margin_dwon){$marginss22 ='padding:0 0 '.$margin_dwon.' 0 ;';}
		if($bac_color2||$bac_imgage2||$margin_dwon){$bac_loop='style="'.$bac_colors2.$bac_imgage2s2.$marginss22.';"';}
		
		
		if($margin_up){$marginss ='padding:'.$margin_up.' 0 0 0;';}
		
		if($margin_up||$margin_dwo||$bac_colors||$bac_imgage){
			$margins ='style="'.$marginss.$bac_colors.$bac_imgage2s.'"';}
		
		
if( $zhiding =="1" ){  $sticky = get_option( 'sticky_posts' );}
if( $zhiding =="2" ){ $oder="rand";}else{ $oder="DESC";}	
	
	if(!$cat_n){$cat_n=1;}
	for ($x=0; $x<=($cat_n-1); $x++) {	
	if(${'w_cat'.$x} ){
	 ${'args'.$x}= array( 'tag' => no_tag_id(${'w_cat'.$x},''), 'showposts' => $nnmber ,'post__in' => $sticky,'orderby' => $oder); 

		${'query'.$x}= new WP_Query(  ${'args'.$x} );
		}else{${'ding'.$x}='';
		${'query'.$x}= '';}
	}	

 
	 
     $stickys= get_option('mytheme_stickys');
	 if(${'w_cat0'}){$w_cat_link= get_category_link(no_tag_id(${'w_cat0'}));}

$widget_ids=preg_replace('/[^\d]*/', '', $this->id);
if(!$cat_n){$cat_n=1;}
 ?>

<div id="case_page" <?php echo 'class="twotabpost index_boxs  '.$fixed.'   '.$lazy.' '.$detects.'"' ; echo $margins.$bac_imgage3s;?> >
<?php if($seo_out1){echo '<section>';} ?>

<div class="modle_box_title">

	<?php if($title||$title2){ ?>
<div  class="list_nav_title">
	<?php if($titleseo){echo '<'.$titleseo.'  class="list_nav_ts">';}else{echo '<div  class="list_nav_ts">';} ?>
	
	<?php if($title) {echo '<font>'.$title.'</font>' ;} if($title3) {echo $title3 ;} ?> <i class="fas fa-align-left"></i>
	<?php if($titleseo){echo '</'.$titleseo.'>';}else{echo '</div>';} ?>

		<div class="xian_o"><div class="xo"></div></div>
	
</div>	
<?php } ?>

</div>
	


	<div class="case_title_lists postmor_title_lists<?php echo $widget_ids; ?>">
	<?php  ?>
	<?php for ($x=0; $x<=($cat_n-1); $x++) { 
	 if($cat_n>1){	if( ${'w_cat'.$x}){?>
		<a href="<?php echo get_category_link(no_cat_id(${'w_cat'.$x})); ?>" target="_blank"<?php if($x==0){echo 'class="active"';} ?>  ><?php echo ${'w_cat'.$x} ;?></a>
	     	     <?php }}
	     	 	
		    } ?>
		    
		    
		    
		      
		      
	</div>
         
      
      
         
               
	<div class="loop_part <?php echo $lazy2; ?>" <?php echo $bac_loop.$bac_imgage3s2; ?>>
      <div class="case_page_show_in box_in"> 
	<div class="swiper-container post_tag<?php echo $widget_ids; ?>">
        <div class="swiper-wrapper"> 
          
          <?php 	
		if($cat_n>1){ $lazy="swiper-lazy";}else{$lazy='';}
	for ($x=0; $x<=($cat_n-1); $x++) {if(${'w_cat'.$x} ){	?>
          <div class="swiper-slide">
           <ul class="case_loop loop_list" >
                    <?php 
							
							 if(${'query'.$x}->have_posts()) :         
					 $ii=0;while ( ${'query'.$x}->have_posts() ) :${'query'.$x}->the_post(); $ii++;
							case_page_loops('medium',$titleseo3,$seo_out2,$lazy,$li,$ii,($x+1));
							
						 endwhile;  wp_reset_query();endif;	
						  
							
							
						?>
                     
                    </ul>
	              </div>
                <?php }} ?>
                 </div>
                 </div>
                 <?php if($cat_n>1){ ?>

         <?php
	    $loads= new 	load_script_in_footer();
		$loads->name='post_tag';
		$loads->name2='postmor_title_lists';
		$loads->id=$widget_ids;;
		$loads->id=$widget_ids;;
		 	
		$loads->cat1=no_cat_id(${'w_cat1'});
        $loads->loads_script_onfoot();
								   }
	?>
                      
                
               </div> 
                </div> 
<?php if($seo_out1){echo '</section>';}?>
</div>

 
        <?php
 if(is_user_logged_in()){echo '<p class="no_in_none">此模式不支持此模块，若需要使用此模块，请切换到2栏模式排版</p>';} 
	}
}
register_widget('post_tag');
?>
