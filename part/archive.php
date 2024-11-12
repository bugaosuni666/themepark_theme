<?php 
function catoptionecho($value,$term_id,$parentid,$op){
	
	if(!get_option($value.$term_id)){
		
		if($parentid){$echo=get_option($value.$parentid);}else{$echo= get_option($value.$term_id);}	
		
	}else{$echo= get_option($value.$term_id);}
	
	if(!$echo){$echo=get_option($op);}
	
	return $echo;
}
function cat_html($term_id,$m){
	

	
$parentid=get_category_root_id($term_id);
     // get_option('temp_'. $term_id);

$mytheme_leftright=get_option("mytheme_leftright");
$cat_description=get_option('cat_description_'.$term_id);	

if(!$m){$cat_title=get_option('cat_title_'.$term_id);}else if($m=="search"){
global $wp_query,$s;
$language_th2=get_themepark_option('language_th2','搜索结果');
$cat_title=	$language_th2.' '.$s;
}
	


	$aside_sidebar=my_get_dynamic_sidebar('sidebar-widgets4');	
	

		

	    echo '<div class="content cat_content '.$mytheme_leftright.'">';
	
		
		woo_breadcrumbs();
	
	   
	 
		echo'<div class="twotab">';	
		
	echo '<mian class="main_slide cat_content">'; 
	?>
	
<div class="cat_titles">	
	<div class="case_title_lists case_title_lists4">
     <h1 class="mantitle"><?php if (is_search()) {echo $language_th2.': '.wp_specialchars($s).' '; }else{ wp_title('');} ?></h1>	      
	</div>
	<?php if($cat_description){ echo '<p>',$cat_description,'</p>';} ?>
</div>	

<div class="cat_page">

<?php 
	echo '<div class="cat-text"><ul class="case_loop loop_list">';
	
		if (have_posts()) : while (have_posts()) : the_post();
		
		case_page_loops('medium','h2','yes','',$li,'','',$cat_cs);
		
		endwhile;   
        else :
	echo '<p class="Noresult">'.get_themepark_option('language_th3','很遗憾，没有找到您的信息').'</p>';
        endif; 
	echo '</ul></div>';	
		
		
	wp_reset_query();	
	 ?>
<div class="pager">   <?php par_pagenavi(6); ?>  </div>  
	<div class='wp_clear'></div>
</div>
	
	
	<?php
		 
	      echo "<div class='wp_clear'></div></mian>"; echo '<aside class="aside">',$aside_sidebar;	  echo '<div id="boder"></div><div id="fixed"></div>';; echo "</aside><div class='wp_clear'></div></div>";;	
	    echo "</div></div>";		
	
};




