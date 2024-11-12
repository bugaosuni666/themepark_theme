	
<?php 
include("options/data_cache.php");
$shop_profile=$ajax_no_login='';
 $current_user = wp_get_current_user();
       $user_id =$current_user->ID;
	   $id=get_the_ID(); 
	  
	  $author_name= get_user_meta($user_id,'nickname');


 if (is_user_logged_in()) { $post_url_go= get_bloginfo('url').'/wp-comments-post.php'; 
						   $hellos=$language_pl1.'<a target="_blank"> '. $current_user->display_name.' </a>';
 
  }else{
	  if(!get_option('comment_registration')){  $post_url_go= get_bloginfo("url").'/wp-comments-post.php';}else{ $ajax_no_login='<div class="ajax_no_login  bbs_no">'.$language_pl2 .'</div>';}
	  
	   $hellos='您好！<a target="_blank" >'.$language_pl3.'</a>';}

 
?>
	<div class="ajax_comment_from" id="comments">
    <div class="ajax_title"><p> <?php echo $hellos; ; ?></p> 
      
        
        </div>
    <a style="display:none" id="url_ajax" href="<?php echo get_permalink($id) ?>"></a>
    <div id="commentform_out">
    
    <form action="<?php echo $post_url_go; ?>" method="post" id="commentform" >
      <div class="caser_reply"><?php echo $language_pl4; ?></div>
      
    
        <div class="ajax_commont">
                <div class="smiley_kuang">
                <span> <a class="smiley_close_btn"></a></span>
                
                </div>
           <div class="tutle">
           <a class="avatar_comment"> <?php $default=''; echo get_avatar(  $current_user->ID, 60, $default, $current_user->display_name ); ?></a>
         
           </div>
           <div id="ajax_commont_tex">
           
             <?php echo  $ajax_no_login;  if (is_user_logged_in()) {  ?>
				<input  type="hidden" name="author" id="author" value="<?php echo get_user_meta($user_id,'nickname'); ?>" size="28" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?> />
				<input type="hidden" name="email" id="email" value="<?php echo $current_user->user_email; ?>" size="28" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?> />
		<?php }else{ if(!get_option('comment_registration')){ ?>
        
            <label for="author"><?php echo $language_pl5; ?>： <input  type="text" name="author" id="author" value="" size="28" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?> /></label>
			<label for="email"><?php echo $language_pl6 ;?>：	<input type="text" name="email" id="email" value="" size="28" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?> />  </label>     
        
        <?php } };
		
		 if (function_exists('themepark_comment_post_form') ) {	 themepark_comment_post_form();}
		
		?>
          
           
           <textarea name="comment"  id="comment_ajax" cols="58" rows="4" tabindex="4"></textarea>
          
             <div class="bottom_ajax">
              <a class="smiley_btn" title="<?php echo $language_pl7 ; ?>"></a>
            
              <input name="submit" type="submit" id="submit_bbs" tabindex="5" value="<?php echo $language_pl8 ; ?>" />
                
              <div class="ajax_loading"></div>
              </div> 	
           </div>
       
		</div>

		<?php comment_id_fields(); ?>
		<?php cancel_comment_reply_link(); ?>
		
		
		

	</form>
  
</div>
	
 <?php echo '<ol class="commentlist">';
 wp_list_comments('type=comment&callback=ajax_themepark_comment');
echo '</ol>';
 ?>
  
 <div id="previous_ajax"><div class="previous_ajax"><?php paginate_comments_links( array('show_all' => true,'prev_next' =>false )); ?></div></div>
   
</div>
