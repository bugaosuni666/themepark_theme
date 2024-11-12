<?php
/**
 * 主题选项副菜单-初始化设置
 * 初始化设置，包括seO设置、网站安全设置等。

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/themeoption
 * @version     1.o
 */

function theme_cat_search_option_function(){



	
	
theme_themepark_video('你可以在此设置默认的文章分类和产品分类的数据，如果在具体的分类中不设置内容，将会继承到这里');
	wp_enqueue_media();
	wp_enqueue_script( 'menu-image-admin', get_template_directory_uri() ."/js/images.js" );
?>

<style>
.imggas_s{float:left;display: ;width:200px; height: 120px; overflow: hidden;text-align: center; border:1px solid #e3e3e3; padding: 5px; margin: 0 5px 0 0; }
	.imggas_s span{color: #666; padding: 5px 0; width: 100%;}
	.imggas_s a.left_right_upload_button{ display: ;width: 100%; height: auto;}
	.imggas_s img{max-width: 200px; max-height: 80px; }
</style>

<h3>文章系统和产品系统分类默认数据设置</h3>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=theme_cat_search_option'); ?>"class="xuanxiangka">
  
  
  <table class="form-table">
      <tbody>
      
      
     
            
          
             <tr>
               <th scope="row"><h2>文章系统多重筛选【付费版解锁】</h2>
                </th>
                <td>
                 <p>文章筛选模块教程请看（这是wordpress文章的筛选系统，和产品筛选不同，请注意）：<a target="_blank" href="http://www.themepark.com.cn/wordpressdzsxgnjs.html">WEB主题公园多筛选功能教程</a> 【解锁付费版即可使用和<a target="_blank" href="http://www.themepark.com.cn/wordpressdzsxgnjs.html">WEB主题公园</a>官网一样的多重筛选】</p>
                </td>
            </tr>
          
          
           <tr>
               <th scope="row"><label  for="mytheme_tags_moshi">多重筛标签筛选模式选项:</label>
                </th>
                <td>
                
                  <select disabled="disabled">
                   <option value=''>并集</option>
                    <option value='jiao'>交集栏</option>
                   
	             </select>
                </td>
            </tr>
            
               <tr>
               <th scope="row"><label  for="mytheme_shaixuancat">多重筛选清空返回分类:</label>
                </th>
                <td>
                
                   
                  <select  disabled="disabled">
                      <option value=''>请选择</option>
                
     
                   
	             </select> <br />
 
<em>当所有筛选结果清空之将会跳转的分类，如果不设置则跳转首页</em>
                </td>
            </tr>
          
		 <tr class="form-field">  
          <th scope="row"><label for="mytheme_top_img">普通文章和页面顶部挂载区块模板</label></th>  
            <td> 
		 <select  disabled="disabled">
	     
			<option >不挂载</option>
			
			 
			 </select>		
  <p>你可以创建一个区块模板在此选中挂载，区块模板将会显示在普通文章和页面（不选择区块化模式）的顶部，挂载的默认继承顺序：文章/页面设置 > 默认设置</p>
            </td>  
        </tr>  
		  
		  
		  
          
               <tr>
               <th scope="row"><h2>文章系统默认列表风格设置【付费版解锁】</h2>
                </th>
                <td>
				<p>【文章的分类目前的免费版只有一个默认的列表模式，升级付费版可以使用多达5种模式的组合，制作出产品展示、案例展示、视频展示、下载等等内容。】</p>
                 <p>文章系统的默认列表指的是默认的分类样式（每个分类可独立设置样式，若在此设置了全局样式，那么没有设置样式的分类将会显示如下设置），<br />
此外，标签结果页面、搜索结果页面以及归档、作者等等其他列表页面的样式也会使用下面的设置。</p>
                </td>
            </tr>
          
            <tr class="form-field">  
          <th scope="row"><label for="temp">分类目录默认顶部挂载区块模板</label></th>  
            <td> 
		 <select  disabled="disabled">
	     
			<option  disabled="disabled">不挂载</option>
		
			 
			 </select>		
  <p>你可以创建一个区块模板在此选中挂载，区块模板将会显示在分类列表的顶部（面包屑下方），挂载的默认继承顺序：分类编辑设置 > 父级分类设置 > 默认设置</p>
            </td>  
        </tr>
            
             <tr>
               <th scope="row"><label  for="cat_mr_modle">分类显示</label>
                </th>
                <td>
              <select  disabled="disabled">
			 <option value="">两栏默认</option>
			 <option  value="tong">通栏</option>
			 </select>
                </td>
            </tr>
            
            
            <tr>
               <th scope="row"><label  for="c_hdp_h">两栏模式排版</label>
                </th>
                <td>
              <select disabled="disabled">
			 <option   value="">默认左主右从</option>
			 <option < value="closed">右主左从(对调)</option>
			 </select>
                </td>
            </tr>
            
            
        <tr>  
          <th scope="row"><label for="cat_mr_modle2">显示结构选项</label></th>  
            <td> 
		   <select  disabled="disabled" name="cat_mr_modle2" id="cat_mr_modle2">
	         
			 <option   value="">默认图文结构（左图右文）</option>
            
			 <option   value="shop_thumbnail">图片并排模式</option>
			 <option  value="no">纯文字结构</option>
			  <option   value="time">带有日期的文字结构</option>
			
			 </select>
			 <br />
            <p>选择图片模式后，若有文章中填写了视频代码，那么则会弹出播放视频，若没有视频，则显示图片排版模式（图上文下，下面的选项可以选择一排显示多少篇文章）</p>
            </td>  
        </tr>   
        
        	<tr class="form-field">  
          <th scope="row"><label for="cat_mr_modle3">显示列数</label></th>  
            <td> 
		   <select  disabled="disabled">

			 <option  value="">一行显示4个产品（默认）</option>
			
			 
			
			 </select>
			
  
            </td>  
        </tr>   
        
 <tr class="form-field">  
          <th scope="row"><label for="images">显示参数</label></th>  
            <td> 
		   <select  disabled="disabled">
	    
			 <option  value="">不显示参数</option>
			
			 </select>
			
  
            </td>  
		 <p>如果你的文章使用了参数模块，并想要将参数显示在列表上面，那么你可以选择显示多少条参数（最多6个）</p>
        </tr>   
        
      
      </tbody>
      </table>
     <table> <tr>
        <td><p class="submit">
      
            <input type="submit" name="Submit" value="提交" class="button-primary"/>
           
            </p>
        </td>

        </tr> </table>
  
  
  
  
  </form>


<?php }?>
