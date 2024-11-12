<?php
/**
 * 主题选项副菜单-侧边栏小工具设置
 * 建立不同的小工具提供给页面、产品、分类和文章进行选择，在此可以增加或者删除小工具。

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/themeoption
 * @version     1.o
 */
function widget_option_function() {


theme_themepark_video('主题的边栏选项，你可以在此创建一些边栏，创建好了之后可以使用在你的文章分类、产品分类、文章、页面、产品等等位置输出，这样你就能够获得完全不同的边栏输');
	
?>


 
 
 <h3>主题边栏设置</h3>
<p><?php



 ?></p>
  
   
  
  
  
    <form method="post" action="<?php echo admin_url('admin.php?page=widget_option'); ?>"class="xuanxiangka">
    
      <table class="form-table">
      <tbody>
        <tr>
               <th scope="row"><label for="themepark_theme_widget">添加侧边栏位置【付费版解锁】</label>
                </th>
                <td>
                <input  type="text" size="60" readonly="readonly"  value=""/> 
               <p >（小工具位置：请填写中文名称，如：全部商品侧边栏）</p>
                </td>
            </tr>
            
            
            <tr>
               <th scope="row"><label for="themepark_theme_widget_id">边栏ID</label>
                </th>
                <td>
                <input  type="text" size="60" readonly="readonly"  value=""/> 
               <p >（对应上面的名称填写id，id为英文字母组成，不可重复,请勿添加特殊字符，可使用拼音，可注意下方已经添加的内容，不要重复）</p>
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


 <table class="form-table">
      <tbody>
        <tr>
               <th scope="row"
                </th>
                <td>
              <p><strong>付费版支持不同的页面、分类（双栏结构）输出不同的边栏小工具内容，升级付费版即可解锁</strong><br> 查看付费版：<a target="_blank" href="https://www.themepark.com.cn/cjqkwordpresszt-bzb.html">超级区块WordPress主题-标准版</a></p>
                </td>
            </tr>
          
            
          
            
      
      </tbody>
      </table>

<?php }?>