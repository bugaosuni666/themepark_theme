<?php
/**
 * 主题选项副菜单-初始化设置
 * 初始化设置，包括seO设置、网站安全设置等。

 * @see 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	theme/themeoption
 * @version     1.o
 */

function fontAwesome_jr(){
	
	$fontAwesomebb= get_option('fontAwesomebb');
	if($fontAwesomebb=="yes"){
	$fontAwesome_jr='
	body{ font-family:arial,"Hiragino Sans GB", sans-serif,"Font Awesome 5 Free";}
	.menu_header li.menu-item-has-children::after,.menu_header li.xiala::after,#waper_drog_nav li.menu-item-has-children::after,.index_nav_ul li.menu-item-has-children i::before, .index_nav_ul li.menu-item-has-children .sub-menu li.menu-item-has-children i::before,.twotab .case_title_lists a.active::after, .twotab .case_title_lists .mantitle::after,.menu_header li.menu-item-has-children i::after,#waper_drog_nav li.menu-item-has-children i::after,.xlicon::after{font-family: "Font Awesome 5 Free";font-weight: 900;}';
 }
	return $fontAwesome_jr;
}


function theme_main_opting(){

if($_GET["themeinfo"]){$themeinfo="yes";}else{$themeinfo='';}

	if($_POST['Submit']) {
	
	$replaseur   = trim($_POST['replaseur']);
		$fontAwesomebb   = trim($_POST['fontAwesomebb']);
	$safe_search_key_word   = trim($_POST['safe_search_key_word']);
	$safe_login_key = trim($_POST['safe_login_key']);
	$mytheme_title = trim($_POST['mytheme_title']);
    $mytheme_keywords  =trim($_POST['mytheme_keywords']);
    $mytheme_description  = trim($_POST['mytheme_description']);
	$code_in_head= trim($_POST['code_in_head']);
	$code_in_foot= trim($_POST['code_in_foot']);
	$mytheme_eso_jr= trim($_POST['mytheme_eso_jr']);

	$themeinfo_hidden= trim($_POST['themeinfo_hidden']);
	
	$update_main_queries = array();
	$update_main_text    = array();
	$update_main_queries[] = update_option('mytheme_eso_jr', $mytheme_eso_jr);
	$update_main_queries[] = update_option('replaseur', $replaseur);
		$update_main_queries[] = update_option('fontAwesomebb', $fontAwesomebb);
	 $update_main_queries[] = update_option('safe_search_key_word', $safe_search_key_word);
	 $update_main_queries[] = update_option('safe_login_key', $safe_login_key);
	 
	 $update_main_queries[] = update_option('mytheme_title', $mytheme_title);
	 $update_main_queries[] = update_option('mytheme_keywords', $mytheme_keywords);
	 $update_main_queries[] = update_option('mytheme_description', $mytheme_description);
	 $update_main_queries[] = update_option('code_in_head', $code_in_head);
	 $update_main_queries[] = update_option('code_in_foot', $code_in_foot);
	 

	  $update_main_queries[] = update_option('themeinfo_hidden', $themeinfo_hidden);
		 $update_main_text[] = '主题seo meta标签关闭';
	  $update_main_text[] = '自动url关闭';
		$update_main_text[] = 'fontAwesome版本';
	 $update_main_text[] = '首页标题替换';
	 $update_main_text[] = '首页关键词';
	  $update_main_text[] = '首页描述';
	 
	 $update_main_text[] = '搜索敏感字';
	 $update_main_text[] = '登录地址修改';
	 $update_main_text[] = '顶部代码';
	 $update_main_text[] = '底部代码';
	 

	   $update_main_text[] = '版权';
	 
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
$replaseur= get_option('replaseur');
$fontAwesomebb= get_option('fontAwesomebb');	
$mytheme_eso_jr = get_option('mytheme_eso_jr');	
$safe_search_key_word = get_option('safe_search_key_word');
$safe_login_key = get_option('safe_login_key');
$mytheme_title = get_option('mytheme_title');
$mytheme_keywords  = get_option('mytheme_keywords');
$mytheme_description  = get_option('mytheme_description');
	$code_in_head= stripslashes(get_option('code_in_head'));
	$code_in_foot= stripslashes(get_option('code_in_foot'));
	$themeinfo_hidden= get_option('themeinfo_hidden');	
	
if($fontAwesomebb=''){update_option("fontAwesomebb","yes");}
theme_themepark_video('这个选集成了一些主题的附加功能选项，在开始进行主题设置之前，你可以首先阅读一下这个选项中的内容，以确保一些设置能够被找到。')

?>
<h3>主题初始化设置</h3>
 
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=themepark_theme'); ?>"class="xuanxiangka">
  
  
  <table class="form-table">
      <tbody>
      
      <tr>
               <th scope="row"><h2>fontAwesome版本切换</h2>
                </th>
                <td>
               
                </td>
            </tr>
      

      
       <tr>
               <th scope="row"><h2>自动替换url功能</h2>
                </th>
                <td>
               
                </td>
            </tr>
      
      
         
       <tr>
         <th scope="row"><label for="replaseur">关闭自动替换URL功能</label>
                </th>
                <td>
               <input type="checkbox"<?php if($replaseur){echo 'checked="checked" ';}; ?> name="replaseur" id="replaseur" value="yes"/>  <br />

                 <p>主题默认检查<b>小工具</b>、<b>菜单</b>、<b>主题选项</b>等主题提供的图片、视频、附件等选项url替换为当前网站的站点地址（如导入数据时。导入的数据URL均为http://localhost/woo，需要一个步骤改为自己的站点地址才能显示图片）<br>
此功能可以让你在导入数据、网站搬家、增加ssl加密（全站HTPPS）等情况时省略更换全站URL的步骤，全站图片不会因为导入的数据图片附件等url不同而造成不显示的情况出现，如果你的网站搬家更换了域名，这个功能也不需要再更换url了，直接可以使用<br>
<b>如果你在使用CDN等加速时，这个功能影响到了你的加速，你可以在此关闭这个选项。<br>
	ps. 原理：通过检测url是否含有WordPress的附件文件夹“uploads”判断是否为媒体库文件而进行替换，<font color="red">若使用的是外链请避免外链含有uploads文件夹目录，否则也会被一同转换。</font><br>
若需要修改此替换函数，函数名为chact_url_http，可在子主题或者插件进行直接的替换。</b>
</p>
                </td>
            </tr>
      
      
       
      
      
       <tr>
               <th scope="row"><h2>网站安全</h2>
                </th>
                <td>
               
                </td>
            </tr>
      
      
        <tr>
               <th scope="row"><label for="safe_search_key_word">【搜索安全】搜索敏感字</label>
                </th>
                <td>
                <textarea name="safe_search_key_word" rows="10" cols="50" id="safe_search_key_word" class="code"><?php echo $safe_search_key_word ; ?></textarea> <br />

                 <p>网站的搜索会产生一些动态页面，并且以搜索为title造成一些垃圾页面的存在，在此填写搜索敏感词，一行一个，敏感词如：博彩、成人、制作假证等等，以你的网站为主。<br />
此外为了避免搜索引擎收录这些垃圾页面，建议您使用robots屏蔽搜索结果页面（*/?s=）,使用静态缓存时，不要缓存动态页面（带有?=的页面）</p>
                </td>
            </tr>
            
            
            
             <tr>
               <th scope="row"><label for="safe_login_key">【登录安全】管理员登录链接</label>
                </th>
                <td>
               <input  type="text" size="60"  name="safe_login_key" id="safe_login_key" value="<?php echo $safe_login_key; ?>"/>  <br />

                 <p>网站的后台登录链接一般为<?php bloginfo('url') ?>/wp-adimin,或者<?php bloginfo('url') ?>/wp-login.php，你可以在此设置一个key，只有输入正确的key才能从WP默认的登录地址登录。<br />
                 
                 <br />
<?php if($safe_login_key){ echo '<strong>当前管理员登录地址为： '.get_bloginfo('url').'/wp-login.php?safer='.$safe_login_key.'</strong><br />
ps.注意，现在woocommerce的默认登录会被拦截，因此请务必将上面的登录地址保存好(密码错误不会提示，直接跳转，以防止暴力破解)，否则将无法登录管理员和编辑';} ?>
</p>
                </td>
            </tr>
            
          
          
              <tr>
               <th scope="row"><h2>第三方代码添加选项</h2>
                </th>
                <td>
               
                </td>
            </tr>
          
          
            
        <tr>
               <th scope="row"><label for="code_in_head">头部加载的第三方代码</label>
                </th>
                <td>
                <textarea name="code_in_head" rows="10" cols="50" id="code_in_head" class="code"><?php echo $code_in_head ; ?></textarea> <br />

                 <p>如果你需要使用第三方代码，比如百度统计代码，或者其他的一些监控代码，可以在此输出。这个选项是输出在网站头部的，也就是在head中，需要你参考第三方代码规范填写。<br />
请注意，这些选项的代码只支持前端代码（html/js/css）,请勿填写php代码</p>
                </td>
            </tr>
            
            
                    
        <tr>
               <th scope="row"><label for="code_in_foot">底部加载的第三方代码</label>
                </th>
                <td>
                <textarea name="code_in_foot" rows="10" cols="50" id="code_in_foot" class="code"><?php echo $code_in_foot ; ?></textarea> <br />

                 <p>这个选项输出的代码将会在底部，也就是在body标签最后</p>
                </td>
            </tr>
        <?php if($themeinfo=="yes"){ ?>
   
            
             <th scope="row"><label for="themeinfo_hidden">隐藏WEB主题公园信息，如WEB主题公园的教程、资源等标志</label>
                </th>
                <td>
               <input type="checkbox"size="60" <?php if($themeinfo_hidden=='yes'){echo'checked="checked" ';} ?> name="themeinfo_hidden" id="themeinfo_hidden" value="yes"/>  <br />

                 <p>隐藏所有WEB主题公园在后台的信息和文字，主题作者和作者URL需要去style.css中修改Author、Author URI和Description参数</p>
                </td>
            </tr>
        
        
      <?php } ?>
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