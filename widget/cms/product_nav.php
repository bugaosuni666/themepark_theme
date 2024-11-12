<?php 
class product_nav extends WP_Widget {

	function __construct()
	{
		$widget_ops = array('classname'=>'product_nav','description' => get_bloginfo('template_url').'/images/xuanxiang/14.gif');
		$control_ops = array('width' => 200, 'height' => 300);
		parent::__construct($id_base="product_nav",$name='文章多重筛选调用[通用]',$widget_ops,$control_ops);  

	}

	function form($instance) { 
	
        
		 $detects=esc_attr($instance['detects']);
		
	?>




 

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
	   
	
		
		$detects=apply_filters('detects', empty($instance['detects']) ? __('') : $instance['detects']);
	 
	
		
		
	 if($detects){$detects2= 'id="'.$detects.'"';}	
		
echo '<div class=" index_boxs" '.$detects.'>';
 Multiplescreening(); 
echo '</div>';		
       
	}
}
register_widget('product_nav');
