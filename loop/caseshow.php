<?php 


function case_page_loops($modlie,$titleseo3,$seo_out2,$lazy,$li,$ii,$i='',$cat_cs=''){

					 $tit= get_the_title();
		             $id =get_the_ID(); 
	                 $content= get_the_content();
					 
	          $cs=get_post_meta($id,"_canshu", true);
	             $description=   get_post_meta($id, "themepark_seo_description",true);
	if(  $description){$excer=mb_strimwidth(strip_tags($description),0,150,"...",'utf-8');}else{$excer=mb_strimwidth(strip_tags(apply_filters('the_excerp',get_the_content($id))),0,200,"...",'utf-8');}
	if($cat_cs&&$cat_cs!='no'){
						 for($i=0;$i<$cat_cs;$i++)  {
		 
	if($cs){
		if($cs[$i]["f2"]){$f2s='color:'.$cs[$i]["f2"].';';}else{$f2s=$cf5s;}	
			if($cs[$i]["f3"]){$f3s='font-weight: bold;';}else{$f3s='';}	
		$csli.='<li ><span >'.$cs[$i]["title"].'</span><span '.styleecho($f2s.$f3s).'>'.$cs[$i]["text"].'</span></li>';
	}else{$csli.='<li ><span ></span><span></span></li>';}
		
	} $caul='<ul class="csbox_pt ov_'.$cat_cs.'">'.$csli.'</ul>';	
						 
					 }
	
	
	
					
		            $links1=  get_permalink();; 
					if(get_post_meta($id ,"links_p", true)){ $contact_btn_url=get_post_meta($id ,"links_p", true);}else{$contact_btn_url=get_option('mytheme_btn_url');}
					  if( $modlie=='like'){$show=40;}else{$show=100;}
	if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}
	                     
	if($li==2){$liclass='class="first_show"';$post_contet_nb=200;}else{$post_contet_nb=200;}
	if($i==1&&$lazy=="swiper-lazy"){$lazy='';}
					  ?>          
                              <li <?php echo $liclass; ?>>
                          <?php if($seo_out2){echo '<article>';}if($li!=3){if($li=="time"){echo ' <div class="case_time"> <time class="mouth">'.get_the_time('d').'</time> <time class="day">'.get_the_time('Y-m').'</time></div>';}else{ ?>   
                    <div class="case_pic"> 
						<a <?php if(!$vedio||$modlie=='like'){ echo 'href="'.$links1.'"target="_blank" ' ;}else{echo 'id="vedio_link"';}; ?>  >
						 <figure>
						<?php if($ii==1&&$li==2){?>
                     <?php   themepark_thumbnails('full',$lazy);?>
                          
                      <?php }else{ themepark_thumbnails($modlie,$lazy);} ?>
                       
                        
                         </figure>
                         <?php if($lazy=="swiper-lazy") {?> <div class="swiper-lazy-preloader"></div><?php } ?>
                        </a>
							<?php  if($vedio&&$modlie!='like'){echo '<div class="vedio_code"><noscript>'.stripslashes($vedio).'</noscript></div>
							';} ?>
							
                            </div>
                            <?php } }?>
                     <div class="case_text post_text">
                       <?php if($titleseo3){echo '<'.$titleseo3.'  class="posts_title">';}else{echo '<div  class="posts_title">';} ?>
                        <a href="<?php echo $links1 ; ?>"target="_blank"><?php  the_title(); ?></a>
                         <?php if($titleseo3){echo '</'.$titleseo3.'>';}else{echo '</div>';} ?>
						 <?php if($li!="time"){ ?>
						  <span>
						
						 <time><i class="fa fa-calendar"></i><?php echo get_the_time('Y/m/d') ; ?></time>
						 <span><i class="fa fa-eye"></i><?php echo $getPostViews; ?></span>
                        <?php } ?>
                     </span>
						 <?php echo $caul; ?>
                <?php if($li=="time"||$li==2&&$ii==1||$li==3||!$li){ ?>
						 
						 <p>
						 <?php echo $excer; ?></p>
                     
          <?php  if($li!="time"){  echo '<a href="'.$links1.'"target="_blank" class="vedio_url">'.get_themepark_option("language_i1","查看全文").'</a>'; }}?>
                       
                  </div>
                <?php if($seo_out2){echo '</article>';} ?>    
                </li>
<?php }


function case_innews_loops($modlie,$titleseo3,$seo_out2,$lazy,$li,$ii,$i=''){

					 $tit= get_the_title();
		             $id =get_the_ID(); 
	                 $content= get_the_content();
					 $linkss=get_post_meta($id,"hoturl", true); 
					 $vedio=get_post_meta($id,"vedios", true); 
		             if($linkss !=""){ $links1=  $linkss;}else{$links1=  get_permalink();}; 
					if(get_post_meta($id ,"links_p", true)){ $contact_btn_url=get_post_meta($id ,"links_p", true);}else{$contact_btn_url=get_option('mytheme_btn_url');}
					  if( $modlie=='like'){$show=40;}else{$show=100;}
	if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}
	                   if(!get_post_meta($id,"hot_img", true)){$hot_img=get_bloginfo('template_url').'/thumbnails/hot_img.jpg';;}else{$hot_img = get_post_meta($id,"hot_img", true); }     
	$liclass='class="first_show"';if($ii==1){$post_contet_nb=200;}else{$post_contet_nb=100;}
	if($i==1&&$lazy=="swiper-lazy"){$lazy='';}
					  ?>          
                              <li <?php echo $liclass; ?>>
                          <?php if($seo_out2){echo '<article>';} ?>   
                    <div class="case_pic"> 
                    <?php if($ii>1&&$li==2){
						  ?>
						       
					 <div class="new_left">
					 	
						 <time class="mouth"><?php echo get_the_time('M') ; ?></time>
						 <time class="day"><?php echo get_the_time('d') ; ?></time>
					 		
					 </div>
						 <?php 
					  }else{ ?>
						<a <?php echo 'href="'.$links1.'"target="_blank" ' ; ?>  >
						 <figure>
						<?php if($ii==1){?>
                     <?php   if(!get_post_meta($id,"hot_img", true)){themepark_thumbnails('full',$lazy);}else{?>
                        <img class="<?php if($lazy){echo "swiper-move-lazy swiper-lazy";} ?>  lazyload"src="<?php echo get_bloginfo('template_url').'/images/loading3.png'; ?>" data-src="<?php echo $hot_img; ?>" alt="<?php  the_title(); ?>">  
                        <?php if($lazy=="swiper-lazy") {?> <div class="swiper-lazy-preloader"></div><?php } ?> 
                      <?php }}else{ themepark_thumbnails($modlie,$lazy);} ?>
                       
                        
                         </figure>
                         <?php if($lazy=="swiper-lazy") {?> <div class="swiper-lazy-preloader"></div><?php } ?>
                       
                        </a>
						 <?php if($li==2&&$ii==1){ ?> <time><span><?php echo get_the_time('d') ; ?></span><span><?php echo get_the_time('Y-m') ; ?></span></time>
                      <?php } }?>
							
                            </div>
                           
                     <div class="case_text post_text">
                       <?php if($titleseo3){echo '<'.$titleseo3.'  class="posts_title">';}else{echo '<div  class="posts_title">';} ?>
                        <a href="<?php echo $links1 ; ?>"target="_blank"><?php  the_title(); ?></a>
                         <?php if($titleseo3){echo '</'.$titleseo3.'>';}else{echo '</div>';} ?>
						 <?php if($li!=2){ ?>
						  <span>
						
						 <time><i class="fa fa-calendar"></i><?php echo get_the_time('Y/m/d') ; ?></time>
						 <span><i class="fa fa-eye"></i><?php echo $getPostViews; ?></span>
                       
                     </span> <?php } ?>
                    <p><?php echo mb_strimwidth(strip_tags(apply_filters('the_content',get_the_content($id))),0,$post_contet_nb,"...",'utf-8'); ?></p>
                     
    
                       
                  </div>
                <?php if($seo_out2){echo '</article>';} ?>    
                </li>
<?php }






function case_page_loops_inpost($modlie){

					 $tit= get_the_title();
		             $id =get_the_ID(); 
	                 $content= get_the_content();
					 
 $con.='<li>';
	
 $con.='<div class="case_pic">  <a href="'. get_permalink().'"target="_blank"><figure> '.get_themepark_thumbnails($modlie,$lazy).'</figure></a></div>';
 $con.='<div class="case_text post_text"> 
 <h4  class="posts_title">   <a href="'. get_permalink().'"target="_blank">'.$tit.'</a></h4>
 <p>'.mb_strimwidth(strip_tags(apply_filters('the_content',get_the_content($id))),0,$post_contet_nb,"...",'utf-8').'</p>
 </div>';	
	
	
	
$con.='</li>';	
	
	return	 $con;			
}





function cat_loops($modlie,$titleseo3,$seo_out2,$lazy,$i='',$cat_n ){

	$lazy='';
					
  $arraylist=explode("\n",$cat_n); 
foreach ($arraylist as $a)
                     {
	$a1=preg_replace("/(\r\n|\n|\r|\t)/i", '', $a);
	$cat_id= no_cat_id($a1);
	$xq_t1=get_option('xq_t1_'.$cat_id);
	$xq_t3=get_option('xq_t3_'.$cat_id);

?>          
                              <li>
                          <?php if($seo_out2){echo '<article>';} ?>   
                    <div class="case_pic"> 
						<a href="<?php echo get_category_link($cat_id) ; ?>"target="_blank"  >
						 <figure>
						<img class="lazy lazyload" alt="<?php echo $a;?>" title="<?php echo $a;?>" src="<?php echo get_bloginfo('template_url');?>/images/loading.png" data-src="<?php echo $xq_t1; ?>">
                       
                        
							 <figcaption><span><?php echo mb_strimwidth(strip_tags(apply_filters('the_excerp',$xq_t3)),0,100,"...",'utf-8'); ?></span></figcaption>
                       
                         </figure>
                        
                        </a>

                            </div>
                     <div class="case_text post_text">
                       <?php if($titleseo3){echo '<'.$titleseo3.'  class="posts_title">';}else{echo '<div  class="posts_title">';} ?>
                        <a href="<?php echo get_category_link($cat_id) ; ?>"target="_blank"><?php echo $a1;?></a>
                         <?php if($titleseo3){echo '</'.$titleseo3.'>';}else{echo '</div>';} ?>
                     
          <?php  echo '<a href="'.get_category_link($cat_id).'"target="_blank" class="vedio_url">'.get_themepark_option("language_i1","详细信息").'</a>'; ?>
                       
                  </div>
                <?php if($seo_out2){echo '</article>';} ?>    
                </li>
<?php }  }



