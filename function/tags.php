<?php

/**
 *  标签SEO

 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/functions
 * @version     1.o
 */


function add_tags_seo_format(){  

   echo '

	<h3>标签SEO选项</h3>
	<div class="form-field">  
            <label for="cat_title">标题替换</label>  
            <input name="cat_title" id="cat_title" type="text" value="" size="40">  
            <p>填写这个选项，将会替换默认调用的标题</p>  
          </div>     
         <div class="form-field">  
            <label for="cat_keword">关键词</label>  
            <input name="cat_keword" id="cat_keword" type="text" value="" size="40">  
            <p>使用英文输入法的逗号分隔，一般不超过80个字符</p>  
          </div>
		   <div class="form-field">  
            <label for="cat_description">描述</label>   
			<textarea id="cat_description" cols="40" rows="5" name="cat_description"></textarea>
            <p>一般不超过200个字符</p>  
          </div>

		  ';            
            
}  
add_action('post_tag_add_form_fields','add_tags_seo_format',10,2);  

function edit_tags_seo_format($tag){  
    ?>
	
	
	
	<tr class="form-field">  
            <th scope="row"><label for="cat_title">标题替换</label></th>  
            <td>  
                <input name="cat_title" id="cat_title" type="text" value="<?php echo get_option('cat_title_'.$tag->term_id) ;?>" size="40"/><br>  
              
            </td>  
        </tr>    
    <tr class="form-field">  
            <th scope="row"><label for="cat_keword">关键词</label></th>  
            <td>  
                <input name="cat_keword" id="cat_keword" type="text" value="<?php echo get_option('cat_keword_'.$tag->term_id);?>" size="40"/><br>  
               
            </td>  
        </tr>
		  <tr class="form-field">  
            <th scope="row"><label for="cat_description">描述</label></th>  
            <td>  
                
                 
              <textarea id="cat_description" cols="40" rows="5" name="cat_description"><?php echo get_option('cat_description_'.$tag->term_id);?></textarea>
            </td>  
        </tr>
		        
       
		
	<?php   
          
}  
add_action('post_tag_edit_form_fields','edit_tags_seo_format',10,2);  



function tag_metadate_seo_format($term_id){  
if(isset($_POST['cat_title']) || isset($_POST['cat_keword'])|| isset($_POST['cat_description'])||isset($_POST['cat_title_p']) || isset($_POST['cat_keword_p'])|| isset($_POST['cat_description_p'])|| isset($_POST['navm'])){  
      
        if(!current_user_can('manage_categories')){  
            return $term_id;  
        }
	
	 $cat_title = 'cat_title_'.$term_id; 
        $title_value = $_POST['cat_title'];
        $cat_keword = 'cat_keword_'.$term_id;  
        $keword_value = $_POST['cat_keword'];   
        $cat_description = 'cat_description_'.$term_id;  
        $description_value = $_POST['cat_description']; 
	 update_option( $cat_title, $title_value );   
        update_option( $cat_keword, $keword_value );  
		 update_option( $cat_description, $description_value );  
}
}

add_action('created_post_tag','tag_metadate_seo_format',10,1);  
add_action('edited_post_tag','tag_metadate_seo_format',10,1);  