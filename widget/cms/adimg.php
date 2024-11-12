<?php 
class adimg extends WP_Widget {

	function __construct()
	{
		$widget_ops = array('classname'=>'adimg','description' => '这个模块可以让你放置可带链接的图片');
		$control_ops = array('width' => 200, 'height' => 300);
		parent::__construct($id_base="adimg",$name='广告图片[通用]',$widget_ops,$control_ops);  

	}

	function form($instance) { 
	        
		
         $title= esc_attr($instance['title']);
		 $title2= esc_attr($instance['title2']);
		 $title3= esc_attr($instance['title3']);
		 $fixed=esc_attr($instance['fixed']);  
$bac_color=esc_attr($instance['bac_color']);
		
		
		
			 $img_nb= esc_attr($instance['img_nb']);
	for ($x=0; $x<=($img_nb-1); $x++) {
		${'img_pic'.$x}= esc_attr($instance['img_pic'.$x]);
	
		${'img_title_b'.$x}= esc_attr($instance['img_title_b'.$x]);
		${'img_title_s'.$x}= esc_attr($instance['img_title_s'.$x]);
		${'img_title_f'.$x}= esc_attr($instance['img_title_f'.$x]);
	  
		${'img_title_r'.$x}= esc_attr($instance['img_title_r'.$x]);
	}
	 $img_margin= esc_attr($instance['img_margin']);
		 $titleseo= esc_attr($instance['titleseo']);
	   	 $detects=esc_attr($instance['detects']);
		 $margin_up=esc_attr($instance['margin_up']);
		 $margin_dwon=esc_attr($instance['margin_dwon']);
		 $bac_color=esc_attr($instance['bac_color']);
		 $bac_imgage=esc_attr($instance['bac_imgage']);
		 $bac_imgage2=esc_attr($instance['bac_imgage2']);
	     $seo_out1=esc_attr($instance['seo_out1']);
	     $bac_video=esc_attr($instance['bac_video']);
	?>

<br />



<p>
 <label  for="<?php echo $this->get_field_id('title'); ?>">标题（带颜色）:</label><br />
 <input type="text" size="40" value="<?php echo $title ; ?>" name="<?php echo $this->get_field_name('title'); ?>" id="<?php echo $this->get_field_id('title'); ?>"/>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">标题的前半部分，带有颜色</em>
</p>


<p>
 <label  for="<?php echo $this->get_field_id('title2'); ?>">标题（黑色）:</label><br />
 <input type="text" size="40" value="<?php echo $title2 ; ?>" name="<?php echo $this->get_field_name('title2'); ?>" id="<?php echo $this->get_field_id('title2'); ?>"/>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">标题的后半部分，为黑色</em>
</p>





<p>
<label for="<?php echo $this->get_field_id('detects'); ?>">设备识别</label>
			<select id="<?php echo $this->get_field_id('detects'); ?>" name="<?php echo $this->get_field_name('detects'); ?>">
				<option <?php if($detects==''){echo 'selected="selected"';} ?>value="">移动端和PC端都显示</option>
                <option <?php if($detects=='PcOnly'){echo 'selected="selected"';} ?>value="PcOnly">只显示在PC端</option>
                <option <?php if($detects=='MovePnly'){echo 'selected="selected"';} ?> value="MovePnly">只显示在移动端</option>

</select>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">通过这个选项，你可以让某些模块只显示在某一个设备类型上，或者都显示</em>
</p>

<p>
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
 <label  for="<?php echo $this->get_field_id('seo_out1'); ?>">外层标签使用section</label>
 <input type="checkbox" <?php if($seo_out1=="yes"){echo 'checked="checked"';} ?>size="40" value="yes" name="<?php echo $this->get_field_name('seo_out1'); ?>" id="<?php echo $this->get_field_id('seo_out1'); ?>"/>
 </p>
 



 <p>
 <label  for="<?php echo $this->get_field_id('bac_color'); ?>">背景颜色:</label><br />
 <input type="text" size="40" value="<?php echo $bac_color ; ?>" name="<?php echo $this->get_field_name('bac_color'); ?>" id="<?php echo $this->get_field_id('bac_color'); ?>"/>
</p>

 



	
<p>
  <label  for="<?php echo $this->get_field_id('margin_up'); ?>">模块上边距：</label><br />
 <input type="text" size="40" value="<?php echo $margin_up ; ?>" name="<?php echo $this->get_field_name('margin_up'); ?>" id="<?php echo $this->get_field_id('margin_up'); ?>"/>
 </p>
<p>
 <label  for="<?php echo $this->get_field_id('margin_dwon'); ?>">模块下边距:</label><br />
 <input type="text" size="40" value="<?php echo $margin_dwon; ?>" name="<?php echo $this->get_field_name('margin_dwon'); ?>" id="<?php echo $this->get_field_id('margin_dwon'); ?>"/>
 </p>

 <em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">上下默认30px，填写数字带有单位，如 30px</em>



<p>
 <label  for="<?php echo $this->get_field_id('fixed'); ?>">滚动到底部悬浮</label>
 <input type="checkbox" <?php if($fixed=="xf_div_box"){echo 'checked="checked"';} ?>size="40" value="xf_div_box" name="<?php echo $this->get_field_name('fixed'); ?>" id="<?php echo $this->get_field_id('fixed'); ?>"/>
 </p>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">侧栏可设置滚动超出悬浮,勾选这个选项模块顺序将会沉降到最后，请勿设置太多内容，否则显示不全</em>



<p>
 <label  for="<?php echo $this->get_field_id('img_nb'); ?>">图片数量<?php echo  $img_nb;?>:</label><br />
 <input type="text" size="40" value="<?php echo $img_nb; ?>" name="<?php echo $this->get_field_name('img_nb'); ?>" id="<?php echo $this->get_field_id('img_nb'); ?>"/>
 <em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">请输入需要显示的图片数量</em>
 </p>
	
<p>
 <label  for="<?php echo $this->get_field_id('img_margin'); ?>">图片是使用间隙隔开</label>
 <input type="checkbox" <?php if($img_margin=="img_margin"){echo 'checked="checked"';} ?>size="40" value="img_margin" name="<?php echo $this->get_field_name('img_margin'); ?>" id="<?php echo $this->get_field_id('img_margin'); ?>"/>
 </p>	
	
<?php 	for ($x=0; $x<=($img_nb-1); $x++) { ?>
<div  class="btnsss"  style=" padding:10px 2%; background:#f0f0f0; width:95%; border:solid 1px #ccc; margin:10px 0; overflow:hidden; cursor:pointer;">
<img style="max-height: 20px; width: auto; float: left; margin-right: 5px;" src="<?php echo ${'img_pic'.$x} ; ?>" /><strong style="float:left; ">第<?php echo $x+1; ?>张图片</strong>

<span style="float:right;">+展开</span>
</div>	
<div class="searchbox" style="display:none; background:#f0f0f0; width:96%; padding:2%;">

<p>

 <label  for="<?php echo $this->get_field_id('img_pic'.$x); ?>">图片:</label><br />
 <?php if( ${'img_pic'.$x}){?><img style="height: auto; max-width:80%;  margin-right: 5px;" src="<?php echo ${'img_pic'.$x} ; ?>" /><br><?php };?>
 <input type="text" size="40" value="<?php echo ${'img_pic'.$x} ; ?>" name="<?php echo $this->get_field_name('img_pic'.$x); ?>" id="<?php echo $this->get_field_id('img_pic'.$x); ?>"/>
  <a id="ashu_upload" class="left_right_upload_button button" href="#">上传</a>
  <em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">放入通栏模式尺寸为1920px宽度，放入两栏主界面为840px宽度,放入两栏次界面为270px宽度</em>
</p>

<p>
 <label  for="<?php echo $this->get_field_id('img_title_r'.$x); ?>">链接</label><br />
<input type="text" size="40" value="<?php echo ${'img_title_r'.$x} ; ?>" name="<?php echo $this->get_field_name('img_title_r'.$x); ?>" id="<?php echo $this->get_field_id('img_title_r'.$x); ?>"/>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">填写链接，以http开头，不填写则无链接。</em>
</p>

<p>
 <label  for="<?php echo $this->get_field_id('img_title_b'.$x); ?>">图片描述</label><br />
<input type="text" id="<?php echo $this->get_field_id('img_title_b'.$x); ?>" value="<?php echo stripslashes(${'img_title_b'.$x}); ?>" name="<?php echo $this->get_field_name('img_title_b'.$x); ?>" />
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">填写图片描述更利于seo的收录</em>
</p>

</div>





<?php
			 }							  }
		
	function update($new_instance, $old_instance) { // 更新保存
		return $new_instance;
	}
	function widget($args, $instance) { // 输出显示在页面上
	extract( $args );
		$bac_imgages='';
		
	     $title  = apply_filters('widget_title', empty($instance['title']) ? __('') : $instance['title']);
		
		 $title2  = apply_filters('title2', empty($instance['title2']) ? __('') : $instance['title2']);
		 $title3  = apply_filters('title2', empty($instance['title3']) ? __('') : $instance['title3']);
		 
		 $img_nb  = apply_filters('img_nb', empty($instance['img_nb']) ? __('') : $instance['img_nb']);
		  $fixed=apply_filters('show', empty($instance['fixed']) ? __('0') : $instance['fixed']);
        $bac_color=apply_filters('bac_color', empty($instance['bac_color']) ? __('') : $instance['bac_color']);
		
		 $bac_imgage2=apply_filters('bac_imgage2', empty($instance['bac_imgage2']) ? __('') : $instance['bac_imgage2']);
	   
		 $detects= apply_filters('detects', empty($instance['detects']) ? __('') : $instance['detects']); 
		 $margin_up=apply_filters('margin_up', empty($instance['margin_up']) ? __('') : $instance['margin_up']);
		 $margin_dwon=apply_filters('margin_dwon', empty($instance['margin_dwon']) ? __('') : $instance['margin_dwon']);
		 $seo_out1=apply_filters('seo_out1', empty($instance['seo_out1']) ? __('') : $instance['seo_out1']);
	     $titleseo=  apply_filters('titleseo', empty($instance['titleseo']) ? __('0') : $instance['titleseo']);
		 $img_margin=  apply_filters('img_margin', empty($instance['img_margin']) ? __('0') : $instance['img_margin']);
		
		for ($x=0; $x<=($img_nb-1); $x++) {
		${'img_pic'.$x}=  apply_filters('img_pic'.$x, empty($instance['img_pic'.$x]) ? __('') : $instance['img_pic'.$x]);
		
		${'img_title_b'.$x}=  apply_filters('img_title_b', empty($instance['img_title_b'.$x]) ? __('') : $instance['img_title_b'.$x]);
		

		${'img_title_r'.$x}=  apply_filters('img_title_r', empty($instance['img_title_r'.$x]) ? __('') : $instance['img_title_r'.$x]);
		
		}
if($bac_color){$bac_colors='background-color:'.$bac_color.';';}
		
		if($margin_up||$margin_dwon||$height){$marginss ='padding:'.$margin_up.' 0 '.$margin_dwon.';';}
		
		if($margin_up||$margin_dwo||$bac_color){
			$margins2 ='style="'.$marginss.$bac_colors.'"';}else{$margins2 ='';}
		
		
		
		?>

<?php if($seo_out1){echo '<section id="adimg" class="index_boxs '.$img_margin.' '.$fixed.'  '.$detects.'" '.$margins2.'>';}else{echo ' <div id="adimg" class="index_boxs   '.$fixed.'  '.$img_margin.$detects.' "'.$margins2.'>';} ?>  


	
	
	<?php if($title||$title2){ ?>
<div  class="list_nav_title">
	<?php if($titleseo){echo '<'.$titleseo.'  class="list_nav_ts">';}else{echo '<div  class="list_nav_ts">';} ?>
	
	<?php if($title) {echo '<font>'.$title.'</font>' ;} if($title2) {echo $title2 ;} ?> <i class="fas fa-align-left"></i>
	<?php if($titleseo){echo '</'.$titleseo.'>';}else{echo '</div>';} ?>

		<div class="xian_o"><div class="xo"></div></div>
	
</div>	
<?php } ?>
	
	<?php for ($x=0; $x<=($img_nb-1); $x++) {?>
		
			<a target="_blank" href="<?php echo ${'img_title_r'.$x}; ?>"<?php if(${'img_title_b'.$x}){echo 'rel="'.${'img_title_b'.$x}.'"';} ?>>	
			<img class="lazyload" src="<?php echo get_bloginfo('template_url').'/images/loading4.png'; ?>" data-src="<?php echo chact_url_http(${'img_pic'.$x}); ?>" alt="<?php echo ${'img_title_b'.$x}; ?>" />
</a>
		
		<?php } ?>
		


 <?php if($seo_out1){echo '</section>';}else{echo '</div>';}?>


<?php
	}
}
register_widget('adimg');
?>
