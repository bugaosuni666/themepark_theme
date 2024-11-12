<footer class="new_footer">
	
	<?php 
	$mytheme_detects=get_option("mytheme_detects");
	$mytheme_detects2=get_option("mytheme_detects2");
	$mytheme_loading_logo=get_option("mytheme_loading_logo");
	$mytheme_footer=get_option("mytheme_footer");
	$mytheme_footer_bqba_ts5=get_option("mytheme_footer_bqba_ts5");
	if(!$mytheme_loading_logo){$mytheme_loading_logo=get_bloginfo('template_url').'/images/logo.png';}
	if(!$id){$id=get_the_ID();}
    $themepark_post_width=get_post_meta($id,"themepark_post_width",true);
	if( $themepark_post_width!="swiper"){
	if($mytheme_footer&&$mytheme_footer!="mo"){
	
	echo echo__temp($mytheme_footer);

		}
		}
	?>
	
	<div class="new_footer_bottm"><p>
	  <?php echo get_option("mytheme_newfooter_14"); ?>      
	<?php if(get_option("mytheme_newfooter_15")){echo '  |<a target="_blank" rel="nofollow" href="http://beian.miit.gov.cn/"> ' .get_option("mytheme_newfooter_15").'</a>'; }?>     
	<?php if(get_option("mytheme_newfooter_16")){?> |  <a target="_blank" href="<?php echo get_option("mytheme_newfooter_17"); ?>"><?php echo get_option("mytheme_newfooter_16"); ?></a><?php } ?>
		

      |  <a class="banquan" target="_blank" href="http://www.themepark.com.cn">wordpress主题</a>
 	
		
		</p>
	
	<?php  
	 if(get_option('mytheme_footer_sever_yl')){ 
		 if(is_home()||is_front_page() ){
	  echo '  <ul class="yl_menu">';
	  wp_nav_menu(array( 'walker' => new  text_nav(),'container' => false,'menu' => get_option('mytheme_footer_sever_yl'),'items_wrap' => '%3$s' ) ); 
	  echo '</ul>';
	  }}?>
	</div>
</footer>
<?php do_action("wp_footer_html"); wp_footer(); 
echo  stripslashes(get_option('code_in_foot'));
if($mytheme_detects){
	if($mytheme_detects=="phone"){$mms='class="MovePnly"';}
	$loadinghtml='<div  id="pageLoad"'.$mms.'</div><div><samp><em><img src="'.$mytheme_loading_logo.'"/></em></samp><span>0</span><p>'.get_option("mytheme_loadingtext").'</p></div></div>';
	

	
	if($mytheme_detects2){
		
		if(is_home()||is_front_page()){ echo $loadinghtml ;}else{}
	}else{ echo $loadinghtml ;}
} ?>
</body>

<!--<?php echo get_num_queries() . ' queries in ' . timer_stop(0) . ' seconds.'; ?>-->	
