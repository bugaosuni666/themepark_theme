<?php
/**
 * 主题选项副菜单-初始化设置
 * 初始化设置，包括seO设置、网站安全设置等。

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/themeoption
 * @version     1.o
 */

function bq_404_option_function(){

	if($_POST['Submit']) {
	
	
	$mytheme_error_404_pc   = trim($_POST['mytheme_error_404_pc']);
	$mytheme_error_404_move = trim($_POST['mytheme_error_404_move']);
	$mytheme_fenxiang = trim($_POST['mytheme_fenxiang']);
	$mytheme_fenxiang_show = $_POST['mytheme_fenxiang_show'];
	$mytheme_show_code = $_POST['mytheme_show_code'];	

	if($mytheme_fenxiang_show){foreach ($mytheme_fenxiang_show as $mytheme_fenxiang_shows)  {  $mytheme_fenxiang_show_list.= $mytheme_fenxiang_shows.',';  }  }	
	
	
	
	$update_main_queries = array();
	$update_main_text    = array();
	
	
	 $update_main_queries[] = update_option('mytheme_error_404_pc', $mytheme_error_404_pc);
	 $update_main_queries[] = update_option('mytheme_error_404_move', $mytheme_error_404_move);
	 
	 $update_main_queries[] = update_option('mytheme_fenxiang', $mytheme_fenxiang);
	 $update_main_queries[] = update_option('mytheme_fenxiang_show', $mytheme_fenxiang_show_list);
	 $update_main_queries[] = update_option('mytheme_show_code', $mytheme_show_code);

	 
	 $update_main_text[] = '404(pc)';
	 $update_main_text[] = '404(移动)';
	 $update_main_text[] = '文章版权';
	 $update_main_text[] = '文章版权显示区域';
	 $update_main_text[] = '文章分享代码';
	
	 
	 $i = 0;
	 $text = '';
	 
	 
	 foreach($update_main_queries as $update_main_query) {
		if($update_main_query) {
			$text .= '<font color="green">'.$update_main_text[$i].' 更新成功！</font><br />';
		}
		$i++;
	}
	if(empty($text)) {
		$text = '<font color="red">您对设置没有做出任何改动...</font>';
	}
	
}
$mytheme_error_404_pc = get_option('mytheme_error_404_pc');
$mytheme_error_404_move = get_option('mytheme_error_404_move');
$mytheme_fenxiang = get_option('mytheme_fenxiang');
$mytheme_fenxiang_show = substr(get_option('mytheme_fenxiang_show'), 0, -1);
$mytheme_fenxiang_show_away=explode(',',$mytheme_fenxiang_show);
$mytheme_show_code = get_option('mytheme_show_code');
	
theme_themepark_video('这个选项集成了一些需要编辑器进行编辑的内容，404定义页面和文章底部版权设置')
?>

<h3>404和文章底部版权设置</h3>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=bq_404_option'); ?>"class="xuanxiangka">
  
   <table class="form-table">
      <tbody>
 
          
          
            <tr>
               <th scope="row"><h2>404页面编辑</h2>
                </th>
                <td>
               
                </td>
            </tr>
      
          
            <tr>
               <th scope="row"><label for="error_404_pc">404页面</label>
                </th>
                <td>
                 
					
				<select name="mytheme_error_404_pc" id="mytheme_error_404_pc">
	     
			<option value="mo"<?php if(!$mytheme_error_404_pc ){echo 'selected="selected"';} ?>>未挂载区块模板</option>
			<?php echo _temp_option($mytheme_error_404_pc ); ?>
			 
			 </select>	
					
					

                 <p>404页面是指找不到资源，这个页面将会用于url更改或者页面被删除之后再次访问时所出现的界面，你可以在新增一个区块模板中放入图片、文字、链接等等内容提示用户，并挂载。</p>
                </td>
            </tr>
            
       
          
            <tr>
               <th scope="row"><h2>文章内页的底部版权说明</h2>
                </th>
                <td>
               
                </td>
            </tr>
            
             <tr>
               <th scope="row"><label for="mytheme_fenxiang">文章正文底部区块模板挂载</label>
                </th>
                <td>	
			<select name="mytheme_fenxiang" id="mytheme_fenxiang">
	     
			<option value="mo"<?php if(!$mytheme_fenxiang ){echo 'selected="selected"';} ?>>未挂载区块模板</option>
			<?php echo _temp_option($mytheme_fenxiang ); ?>
			 
			 </select>	
              <p>每一篇文章、页面的正文结尾处有时候需要会显示一条版权页面，你可以放入二维码，版权信息，以及本文地址，本文地址使用短代码  [this_post_url]  ,即可调用当前文章地址，当然你也可以放入其余的内容，比如联系信息、采访表单等等<br>
					<strong style="color:red">注意:文章和页面如果开启了区块模式，则不会显示哦！</strong></p>
                </td>
            </tr>
            
            
             <tr>
               <th scope="row"><label for="mytheme_fenxiang_show">文章正文底部区块模板显示区域</label>
                </th>
                <td>
              
                 <input type="checkbox" id="mytheme_fenxiang_show" name="mytheme_fenxiang_show[]"<?php if(in_array("page", $mytheme_fenxiang_show_away)){echo'checked="checked" '; } ?>  value="page"/>在页面中显示
                 <input type="checkbox" id="mytheme_fenxiang_show" name="mytheme_fenxiang_show[]" <?php if(in_array("single", $mytheme_fenxiang_show_away)){echo'checked="checked" '; } ?> value="single"/>在文章显示
                
                </td>
            </tr>
            
            
             <tr>
               <th scope="row"><label for="mytheme_show_code">文章底部的分享代码</label>
                </th>
                <td>
                <textarea name="mytheme_show_code" rows="10" cols="50" id="mytheme_show_code" class="code"><?php echo stripslashes($mytheme_show_code) ; ?></textarea> <br />

                 <p>你可以找到一些社交媒体分享的代码粘贴在这里，这里支持html、js代码，将会显示在文章正文的底部。</p><br>
<strong style="color:red">注意:文章和页面如果开启了区块模式，则不会显示哦！</strong></p>
                </td>
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
