<?php 
function news_loops($modlie,$titleseo3,$seo_out2,$lazy){

					 $tit= get_the_title();
		             $id =get_the_ID(); 
	                 $content= get_the_content();
					if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}
					
					 
	
					  ?>          
                 <li>
                         
					 <div class="new_left">
					 		<?php if($modlie=="pic"){ themepark_thumbnails('thumbnail',$lazy);} else{ ?>
						 <time class="mouth"><?php echo get_the_time('M') ; ?></time>
						 <time class="day"><?php echo get_the_time('d') ; ?></time>
					 		<?php } ?>
					 </div>
					 <div class="new_right">
					 	  <?php if($titleseo3){echo '<'.$titleseo3.'  class="posts_title">';}else{echo '<div  class="posts_title">';} ?>
                        <a href="<?php echo get_permalink() ; ?>"target="_blank"><?php  echo mb_strimwidth(strip_tags(apply_filters('the_title', $tit)),  0,80,"...",'utf-8'); ?></a>
                         <?php if($titleseo3){echo '</'.$titleseo3.'>';}else{echo '</div>';} ?>
						 <?php if($modlie=="pic"){  ?> <time><i class="fa fa-calendar"></i><?php echo get_the_time('Y/m/d') ; ?></time>
						 <span><i class="fa fa-eye"></i><?php echo $getPostViews; ?></span>
						 <?php } else{ ?>
						 <p><?php echo mb_strimwidth(strip_tags(apply_filters('the_content',get_the_content($id))),0,50,"...",'utf-8'); ?></p>
						 <?php } ?>
					 </div>
                          
                </li>
<?php }

function news_big_loops($modlie,$titleseo3,$seo_out2,$lazy){

					 $tit= get_the_title();
		             $id =get_the_ID(); 
	                 $content= get_the_content();
					if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}
					
					 
	                 if(!get_post_meta($id,"hot_img", true)){$hot_img=get_bloginfo('template_url').'/thumbnails/hot_img.jpg';;}else{$hot_img = get_post_meta($id,"hot_img", true); }
	if($modlie=="nomrol"){
		
		?>
<li>
<a class="pics" href="<?php echo get_permalink() ; ?>"target="_blank">
<?php themepark_thumbnails('medium',$lazy); ?>	
</a>

		
</li>
		
		
		
<?php		
	}else{
	
					  ?>     
                
                   <div class="swiper-slide">
                         <a href="<?php echo get_permalink() ; ?>"target="_blank">   
                        <img class="swiper-move-lazy swiper-lazy  lazyload" data-src="<?php echo $hot_img; ?>" alt="<?php  the_title(); ?>">   
                           </a>         
                          <?php if($titleseo3){echo '<'.$titleseo3.'  class="posts_title">';}else{echo '<div  class="posts_title">';} ?>
                          <a href="<?php echo get_permalink() ; ?>"target="_blank"><?php  the_title(); ?></a>
                         <?php if($titleseo3){echo '</'.$titleseo3.'>';}else{echo '</div>';} ?>               
                    </div>                          
                                                   
                                                        
                                                             
                
<?php }}             