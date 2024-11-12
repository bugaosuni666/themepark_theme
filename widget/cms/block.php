<?php 
class  extends WP_Widget {

	function __construct()
	{
		$widget_ops = array('classname'=>'','description' => '输出挂载一个区块模板');
		$control_ops = array('width' => 200, 'height' => 300);
		parent::__construct($id_base="",$name='挂载区块模板工具',$widget_ops,$control_ops);  

	}

	function form($instance) { 
	
         $title= esc_attr($instance['title']);
$title2= esc_attr($instance['title2']);
	     $ = esc_attr($instance['']);
	    
		
	     $bac_color=esc_attr($instance['bac_color']);
		 $bac_imgage=esc_attr($instance['bac_imgage']);
		 $detects=esc_attr($instance['detects']);
		 $titleseo= esc_attr($instance['titleseo']);
		 $text_color=esc_attr($instance['text_color']);
		 $seo_out1=esc_attr($instance['seo_out1']);
		 $fixed=esc_attr($instance['fixed']);  
	?>

<br />

<p>   
 <select name="<?php echo $this->get_field_name(''); ?>" id="<?php echo $this->get_field_id(''); ?>">
	     
			<option value=""<?php if(! $){echo 'selected="selected"';} ?>>不挂载</option>
			<?php echo _temp_option( $); ?>
			 
			 </select>		
</p>

 


 

<p>
<label for="<?php echo $this->get_field_id('detects'); ?>">设备识别</label>
			<select id="<?php echo $this->get_field_id('detects'); ?>" name="<?php echo $this->get_field_name('detects'); ?>">
				<option <?php if($detects==''){echo 'selected="selected"';} ?>value="">移动端和PC端都显示</option>
                <option <?php if($detects=='PcOnly'){echo 'selected="selected"';} ?>value="PcOnly">只显示在PC端</option>
                <option <?php if($detects=='MovePnly'){echo 'selected="selected"';} ?> value="MovePnly">只显示在移动端</option>

</select>
<em style="padding:3px; background:#FCF3E4; border:solid 1px #F0D8BF; display:;">通过这个选项，你可以让某些模块只显示在某一个设备类型上，或者都显示，你可以在自定义--初始化中，设置输出的技术规则，响应式适配或者是代码适配</em>
</p>





 

<?php
    }
	function update($new_instance, $old_instance) { // 更新保存
		return $new_instance;
	}
	function widget($args, $instance) { // 输出显示在页面上
	extract( $args );
	   
	    $bac_imgages=$text_color=$detects2='';
        $ = apply_filters('', empty($instance['']) ? __('') : $instance['']);
		$speed=apply_filters('speed', empty($instance['speed']) ? __('') : $instance['speed']);
	    $bac_color=apply_filters('bac_color', empty($instance['bac_color']) ? __('') : $instance['bac_color']);
		$title=apply_filters('widget_title', empty($instance['title']) ? __('') : $instance['title']);
		$title2=apply_filters('title2', empty($instance['title2']) ? __('') : $instance['title2']);
		$fixed=apply_filters('show', empty($instance['fixed']) ? __('') : $instance['fixed']);
		$detects=apply_filters('detects', empty($instance['detects']) ? __('') : $instance['detects']);
	 
		$seo_out1=apply_filters('seo_out1', empty($instance['seo_out1']) ? __('') : $instance['seo_out1']);
		$titleseo=apply_filters('seo_out1', empty($instance['titleseo']) ? __('') : $instance['titleseo']);
        $fixed=apply_filters('show', empty($instance['fixed']) ? __('0') : $instance['fixed']);
		
		if($detects){$detects2= 'id="'.$detects.'"';}
		
		echo echo__temp(  $);
		?>



        <?php
	}
}
register_widget('');
