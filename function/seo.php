<?php
/**
 * 主题文章系统相关函数
 * 主题文章系统的先关函数：小工具、特色图片，分类目录设置、分类父级获取
 * 函数清单：
 *  自定义添加小工具位置获取id函数
 *  清除函数
 *  注册菜单位置
 *  略缩图获取以及默认图片
 *  get略缩图函数
 *  分类目录的设置输出和保存
 *  关键词设置和输出
 *  描述设置和输出
 *  去除wordpress头部输出的一些样式和脚本
 *  滑块锚点
 *  获取父级分类
 *  分页函数
 *  获取略缩图url
 *  增强编辑器开始
 *  获取附件图片链接
 *  阅读量统计   
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/functions
 * @version     1.o
 */

function add_category_seo_format(){  
	wp_enqueue_media();
	wp_enqueue_script( 'menu-image-admin', get_template_directory_uri() ."/js/images.js" );
   echo '
   	<style>
	.cat_modle3{width:100%; height:auto;overflow: hidden;}
.imggas_s{float:left;display: ;width:200px; height: 120px; overflow: hidden;text-align: center; border:1px solid #e3e3e3; padding: 5px; margin: 0 5px 0 0; }
	.imggas_s span{color: #666; padding: 5px 0; width: 100%;}
	.imggas_s a.left_right_upload_button{ display: ;width: 100%; height: auto;}
	.imggas_s img{max-width: 200px; max-height: 80px; }
</style>
      <h3显示文章数量</h3>
   <div class="form-field">  
            <label for="cat_nummber">这个分类显示多少数量？</label>  
            <input name="cat_nummber" id="cat_nummber" type="text" value="" size="10">  
            <p>若填写了这个数量，那么就会按照这个数量显示文章数量，若不填写则显示后台--设置--阅读中设置的文章显示数量</p>  
          </div>  
		  
		  <div class="stiky">  
             <input readonly type="checkbox" value="show" name="stiky" id="stiky"  />
			 <label for="stiky">排除置顶的文章【付费版解锁】</label>
			 <p>你如果想要将置顶的文章显示在分类最上面，可以挂载区块模板，放入调用文章区块，选择只显示置顶的文章</p>
          </div>    
   
   <h3>顶部挂载区块模板【付费版解锁】</h3>
   <div class="form-field">  
            <select  disabled="disabled" name="temp" id="temp">
	        
			 <option value="">默认</option>
			
			
			 
			 </select>		
  <p>你可以创建一个区块模板在此选中挂载，区块模板将会显示在分类列表的顶部（面包屑下方），挂载的默认继承顺序：当前设置 > 父级分类设置 > 默认设置</p>
          </div>   

   
   
   
   
   <h3>侧栏小工具挂载选择【付费版解锁】</h3>
   <div class="form-field">  
            <select disabled="disabled" name="catce" id="catce">
	        
			 <option value="">默认的侧边栏目</option>
			
			 </select>
	<p>你可以创建并选择小工具区域在此选中挂载，小工具仅在两栏模式下显示，挂载的默认继承顺序：当前设置 > 父级分类设置 > 默认设置</p> 
          </div>   

     <h3>布局框架模式选择【付费版】</h3>

   <div class="cat_modle">  
            <select disabled="disabled" name="cat_modle" id="cat_modle">
	        <option  value="mo">默认</option>
			 
			 </select>
		<p>设置的默认继承顺序：当前设置 > 父级分类设置 > 默认设置,不做选择则默认为<strong>两栏结构</strong></p>
          </div>   
  
	 <h3>显示选项【付费版解锁】</h3>
   <div class="cat_modle2">  
            <select disabled="disabled" name="cat_modle2" id="cat_modle2">
	         <option  value="mo">默认</option>
			
			 </select>
                <p>媒体库中输出的图片尺寸：[默认图文结构:略缩图]、[图片并排模式:中等图片]</p>
           <p>设置的默认继承顺序：当前设置 > 父级分类设置 > 默认设置，不做选择则默认为<strong>图文结构</strong></p>
		  </div> 
	 <h3>显示列数【付费版解锁】</h3>
   <div class="cat_modle3">  
            <select disabled="disabled" name="cat_modle3" id="cat_modle3">
	         <option  value="mo">默认</option>
			 <option value="">一行显示4个</option>
			  <option value="3">一行显示3个</option>
			 <option value="5">一行显示5个</option>
			 <option value="6">一行显示6个</option>
		
			 </select>
      
		  </div> 	
		  
<tr class="form-field">  
          <th scope="row"><label for="images">显示参数【付费版解锁】</label></th>  
            <td> 
		   <select disabled="disabled" name="cat_cs" id="cat_cs">
	        
			 <option   value="">不显示参数</option>
			 <option  value="1">显示1个</option>
			 <option  value="2">显示2个</option>
			 <option   value="3">显示3个</option>
			 <option   value="4">显示4个</option>
			 <option   value="6">显示6个</option>
			 </select>
			
  
            </td>  
		 <p>如果你的文章使用了参数模块，并想要将参数显示在列表上面，那么你可以选择显示多少条参数（最多6个）</p>
        </tr>   




 
	<h3>分类目录SEO选项</h3>
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
add_action('category_add_form_fields','add_category_seo_format',10,2);  
  
  
function edit_category_seo_format($tag){ 
	
		wp_enqueue_media();
	wp_enqueue_script( 'menu-image-admin', get_template_directory_uri() ."/js/images.js" );
    ?>
	<style>
.imggas_s{float:left;display: ;width:200px; height: 120px; overflow: hidden;text-align: center; border:1px solid #e3e3e3; padding: 5px; margin: 0 5px 0 0; }
	.imggas_s span{color: #666; padding: 5px 0; width: 100%;}
	.imggas_s a.left_right_upload_button{ display: ;width: 100%; height: auto;}
	.imggas_s img{max-width: 200px; max-height: 80px; }
		.out_wap{width:100%;padding:10px 0; display:;overflow: hidden;}
	.elects{float:left; width:600px; margin-left: 15px;}
	.elects2{float:left; width:100%; margin-bottom: 15px;display: ;}
	
	.gally{display: ; width: 100%; list-style: none; overflow: hidden; border:1px solid #e3e3e3;}
	.gally p{ display: ; line-height: 80px; text-align: center; width: 100%; font-size: 18px; color: #DBDBDB}
	.gally li{display: ; float: left; width: 80px; height: 80px; margin: 5px; position: relative;}
	.gally li img{max-width: 100% ; height: auto;}
	.gally li a{display: ; width: 12px;height: 12px; background: red; color: #fff; font-size: 12px; padding: 2px;position: absolute; top: -3px; right: -3px;line-height: 8px; text-align: center; border-radius: 100%;cursor: pointer;}
</style>
	<h3>显示文章数量</h3>
   <div class="form-field">  
            
           
           
          </div>   
          
          	<tr class="form-field">  
          <th scope="row"><label for="cat_nummber">这个分类显示多少数量？</label>  </th>  
            <td> 
		 <input name="cat_nummber" id="cat_nummber" type="text" value="<?php echo get_option('cat_nummber_'.$tag->term_id) ?>" size="10">  <br />

			
   <p>若填写了这个数量，那么就会按照这个数量显示文章数量，若不填写则显示后台--设置--阅读中设置的文章显示数量</p>  
            </td>  
        </tr>   


<tr class="form-field">  
          <th scope="row"><label for="navm">排除置顶的文章【付费版解锁】</label></th>  
            <td> 
		  
             <input readonly type="checkbox" value="show" name="stiky" id="stiky" <?php if(get_option('stiky_'.$tag->term_id)){echo  "checked='checked'";} ?> />
			 排除置顶
             
       <p>你如果想要将置顶的文章显示在分类最上面，可以挂载区块模板，放入调用文章区块，选择只显示置顶的文章</p>
			
  
            </td>  
        </tr>   
	
          
	<tr class="form-field">  
          <th scope="row"><label for="temp">顶部挂载区块模板【付费版解锁】</label></th>  
            <td> 
		 <select name="temp" disabled="disabled"id="temp">
	        <option value=""<?php if(!get_option('temp_'.$tag->term_id)){echo 'selected="selected"';} ?>>默认</option>
			<option value="mo"<?php if(get_option('temp_'.$tag->term_id)=='mo'){echo 'selected="selected"';} ?>>强制不挂载</option>
		
			 
			 </select>		
  <p>你可以创建一个区块模板在此选中挂载，区块模板将会显示在分类列表的顶部（面包屑下方），挂载的默认继承顺序：当前设置 > 父级分类设置 > 默认设置</p>
            </td>  
        </tr>         


<tr class="form-field">  
          <th scope="row"><label for="navm">文章多重筛选【付费版解锁】</label></th>  
            <td> 
		  
             <input disabled="disabled" type="checkbox" value="show" name="navm" id="navm" <?php if(get_option('navm_'.$tag->term_id)){echo  "checked='checked'";} ?> />
			 显示文章多重筛选
             
       <p>这个多重筛选是针对普通文章的，请和woocommerce的产品筛选区分开</p>
			
  
            </td>  
        </tr>   


	<tr class="form-field">  
          <th scope="row"><label for="images">侧栏小工具挂载选择【付费版解锁】</label></th>  
            <td> 
		 <select disabled="disabled" name="catce" id="catce">
	        <option value=""<?php if(!get_option('catce_'.$tag->term_id)){echo 'selected="selected"';} ?>>默认的侧边栏小工具</option>
			
			 
			 </select>
<p>你可以创建并选择小工具区域在此选中挂载，小工具仅在两栏模式下显示，挂载的默认继承顺序：当前设置 > 父级分类设置 > 默认设置</p>
            </td>  
        </tr>   
	

      
    
    
		<tr class="form-field">  
          <th scope="row"><label for="images">模式选择【付费版解锁】</label></th>  
            <td> 
		   <select disabled="disabled" name="cat_modle" id="cat_modle">
	        <option <?php  if(!get_option('cat_modle_'.$tag->term_id)){echo 'selected="selected"';}; ?>  value="">默认</option>
			
			
			
			 </select>
			 <br />
             <p>设置的默认继承顺序：当前设置 > 父级分类设置 > 默认设置,不做选择则默认为<strong>两栏结构</strong></p>
            </td>  
        </tr>   

            
            
		<tr class="form-field">  
          <th scope="row"><label for="images">显示结构选项【付费版解锁】</label></th>  
            <td> 
		   <select name="cat_modle2"disabled="disabled" id="cat_modle2">
	        <option <?php  if(!get_option('cat_modle2_'.$tag->term_id)){echo 'selected="selected"';}; ?>  value="">默认</option>
			
			
			 </select>
			 <br />
                <p>媒体库中输出的图片尺寸：[默认图文结构:略缩图]、[图片并排模式:中等图片]</p>
           <p>设置的默认继承顺序：当前设置 > 父级分类设置 > 默认设置，不做选择则默认为<strong>图文结构</strong></p>
            </td>  
        </tr>   
	
	<tr class="form-field">  
          <th scope="row"><label for="images">显示列数【付费版解锁】</label></th>  
            <td> 
		   <select disabled="disabled" name="cat_modle3" id="cat_modle3">
	         <?php $cat_modle3= get_option('cat_modle3_'.$tag->term_id); ?> 
			 
			 </select>
			
  
            </td>  
		 <p>设置的默认继承顺序：当前设置 > 父级分类设置 > 默认设置，不做选择则默认为<strong>一行显示4个产品</strong></p>
        </tr>   


<tr class="form-field">  
          <th scope="row"><label for="images">显示参数【付费版解锁】</label></th>  
            <td> 
		   <select disabled="disabled" name="cat_cs" id="cat_cs">
	         <?php $cat_cs= get_option('cat_cs_'.$tag->term_id); ?> 
			 <option  <?php  if(!$cat_cs){echo 'selected="selected"';}; ?> value="">默认上级设置</option>
			  <option  <?php  if(!$cat_cs){echo 'selected="selected"';}; ?> value="no">强制不显示</option> 
			
			 </select>
			
  
            </td>  
		 <p>如果你的文章使用了参数模块，并想要将参数显示在列表上面，那么你可以选择显示多少条参数（最多6个）</p>
        </tr>   





	
	
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
add_action('category_edit_form_fields','edit_category_seo_format',10,2);  
  
  
function taxonomy_metadate_seo_format($term_id){  
    if(isset($_POST['cat_title']) || isset($_POST['cat_keword'])|| isset($_POST['cat_description'])||isset($_POST['cat_title_p']) || isset($_POST['cat_keword_p'])|| isset($_POST['cat_description_p'])|| isset($_POST['stiky'])){  
      
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
  
add_action('created_category','taxonomy_metadate_seo_format',10,1);  
add_action('edited_category','taxonomy_metadate_seo_format',10,1);  
//关键词设置和输出

function theme_keyworeds(){
	global $wp_query;
	
	$id =get_the_ID(); 
	
  
           
  
    if(is_front_page() || is_home()) { 
	
		 if(get_post_meta($id, "themepark_seo_keyword",true)){  $theme_keword= get_post_meta($id, "themepark_seo_keyword",true);}
		
		 }
		 
	  elseif( is_page()||is_single() ) {
			
			 if(get_post_meta($id, "themepark_seo_keyword",true)){  $theme_keword= get_post_meta($id, "themepark_seo_keyword",true);}
				 
	} 	
	elseif(is_category()||is_tag()){
		 $cat_obj = $wp_query->get_queried_object();
			 $term_id = $cat_obj->term_id;
             $cat_keword=get_option('cat_keword_'.$term_id);
			 if($cat_keword){  $theme_keword= $cat_keword;}
				 	
	} else{ if(get_post_meta(get_option('page_on_front'), "themepark_seo_keyword",true)){  $theme_keword= get_post_meta(get_option('page_on_front'), "themepark_seo_keyword",true);}} 
	echo $theme_keword;
	}
//描述设置和输出	
function theme_description(){
   global $wp_query;
    
	$id =get_the_ID(); 
	
  
   $cat_obj = $wp_query->get_queried_object();
	$term_id = $cat_obj->term_id;
   $cat_description=get_option('cat_description_'.$term_id);
   $cat_description_p=get_option('cat_description_p_'.$term_id);
	
      if(is_front_page() || is_home()) { 
if(get_post_meta($id, "themepark_seo_description",true)){  $theme_description= get_post_meta($id, "themepark_seo_description",true);}}
		
		 
		 
	  elseif( is_page()||is_single()||class_exists('Woocommerce')&&is_shop()) {

		  
		 $excerps=mb_strimwidth(strip_tags(apply_filters('the_excerp', get_post($id)->post_content)),0,200,"。",'utf-8');
	
	  $excerpk=DeleteHtml($excerps) ;
	  $excerp= preg_replace('/\[.*?\]/', '', $excerpk);
	
			
			 if(get_post_meta($id, "themepark_seo_description",true)){  $theme_description= get_post_meta($id, "themepark_seo_description",true);}elseif($excerp){$theme_description=$excerp;}else{  $theme_description= get_option('mytheme_description');}
				 
	} 	
	elseif(is_category()||is_tag()){
	
			 if($cat_description){  $theme_description= $cat_description;}else{  $theme_description= get_option('mytheme_description');}
				 	
	} else{if(get_post_meta($id, "themepark_seo_description",true)){  $theme_description= get_post_meta($id, "themepark_seo_description",true);}} 
	echo $theme_description;
}	



function theme_titles(){
	 global $wp_query,$post,$s;
	$language_th2=get_themepark_option('language_th2','搜索结果');
	$language_th3=get_themepark_option('language_th3','很遗憾，没有找到您的信息');
	
	 
			 $singletitle =get_post_meta($post->ID, "themepark_seo_title",true);
			
             $cat_obj = $wp_query->get_queried_object_id();
			 $term_id = $cat_obj;
			 $term_info= get_term($term_id);
             $cat_title=get_option('cat_title_'.$term_id);
             $cat_title_p=get_option('cat_title_p_'.$term_id);
		     
		     if (is_category()||is_tag()) {
				
		        if( $cat_title){
					echo  $cat_title;
				
				}else{echo $term_info->name;}; echo '-'.get_bloginfo('name');
					 
				 }
		      elseif (is_search()) {
		         echo $language_th2.'-'.wp_specialchars($s).'-',get_bloginfo('name'); }
	            elseif (is_404()) {
		         echo $language_th3.'-',get_bloginfo('name'); }
		      elseif (is_single() || is_page()) {
		      if(!is_front_page()){
		        if( $singletitle){echo  $singletitle;}else{ wp_title(''); echo '-'.get_bloginfo('name');; }
				}	 
			    }  
	
		     
		      if (is_home()||is_front_page()) {

		        if($singletitle){echo $singletitle;}else{  bloginfo('name'); echo '-'; bloginfo('description'); }
					 
		        }else{}
		      if ($paged>1) {
		         echo '-'. $paged; }
	if(is_author()){
		  wp_safe_redirect(get_bloginfo('url'));
	}
}


?>
