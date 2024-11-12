<?php
/* 初始化设置*/


function plugin_theme_option_function(){






		
	
		
	if($_POST['Submit']) {
	$wp_user_frontend_pro_theme = trim($_POST['wp_user_frontend_pro_theme']);
    $wp_user_dashboard = trim($_POST['wp_user_dashboard']);
	$wp_user_edit_user = trim($_POST['wp_user_edit_user']);
	$wp_user_post_new = trim($_POST['wp_user_post_new']);
	$wps_uesr_can_post = trim($_POST['wps_uesr_can_post']);
	$wps_uesr_can_post_t = trim($_POST['wps_uesr_can_post_t']);
	$wps_uesr_can_post_p = trim($_POST['wps_uesr_can_post_p']);
	
		$woo_language_wh1 = trim($_POST['woo_language_wh1']);
	$woo_language_wh3 = trim($_POST['woo_language_wh3']);
	$woo_language_wh4 = trim($_POST['woo_language_wh4']);
	$woo_language_wh5 = trim($_POST['woo_language_wh5']);
	$mytheme_myaccount_gonggao= trim($_POST['mytheme_myaccount_gonggao']);
	$mytheme_myaccount_kefu= trim($_POST['mytheme_myaccount_kefu']);
	$mytheme_myaccount_kefu_url= trim($_POST['mytheme_myaccount_kefu_url']);
	$mytheme_myaccount_help= trim($_POST['mytheme_myaccount_help']);
	$mytheme_myaccount_help_url= trim($_POST['mytheme_myaccount_help_url']);
	
	$update_main_queries = array();
	$update_main_text    = array();
	
	
	$update_main_queries[] = update_option('wp_user_frontend_pro_theme', $wp_user_frontend_pro_theme);
    $update_main_queries[] = update_option('wp_user_dashboard', $wp_user_dashboard);
	$update_main_queries[] = update_option('wp_user_edit_user', $wp_user_edit_user);
	$update_main_queries[] = update_option('wp_user_post_new', $wp_user_post_new);
	$update_main_queries[] = update_option('woo_language_wh1', $woo_language_wh1);
		$update_main_queries[] = update_option('woo_language_wh3', $woo_language_wh3);
		$update_main_queries[] = update_option('woo_language_wh4', $woo_language_wh4);
		$update_main_queries[] = update_option('woo_language_wh5', $woo_language_wh5);
		$update_main_queries[] = update_option('wps_uesr_can_post', $wps_uesr_can_post);
		$update_main_queries[] = update_option('wps_uesr_can_post_t', $wps_uesr_can_post_t);
		$update_main_queries[] = update_option('wps_uesr_can_post_p', $wps_uesr_can_post_p);
		
		$update_main_queries[] = update_option('mytheme_myaccount_gonggao', $mytheme_myaccount_gonggao);
		$update_main_queries[] = update_option('mytheme_myaccount_kefu', $mytheme_myaccount_kefu);
		$update_main_queries[] = update_option('mytheme_myaccount_kefu_url', $mytheme_myaccount_kefu_url);
		$update_main_queries[] = update_option('mytheme_myaccount_help', $mytheme_myaccount_help);
		$update_main_queries[] = update_option('mytheme_myaccount_help_url', $mytheme_myaccount_help_url);
		
		
	 $i = 0;
	 $text = '';
	 
	 
	 foreach($update_main_queries as $update_main_query) {
		if($update_main_query) {
			$text = '<font color="green"> 更新成功！</font><br />';
		}
		$i++;
	}
	if(empty($text)) {
		$text = '<font color="red">您对设置没有做出任何改动...</font>';
	}
	
}
$mytheme_myaccount_kefu=get_option('mytheme_myaccount_kefu');
$mytheme_myaccount_kefu_url=get_option('mytheme_myaccount_kefu_url');	
$mytheme_myaccount_gonggao=get_option('mytheme_myaccount_gonggao');	
$wps_uesr_can_post=get_option('wps_uesr_can_post');	
$wps_uesr_can_post_t=get_option('wps_uesr_can_post_t');	
$wps_uesr_can_post_p=get_option('wps_uesr_can_post_p');
$mytheme_myaccount_help=get_option('mytheme_myaccount_help');
$mytheme_myaccount_help_url=get_option('mytheme_myaccount_help_url');

$woo_language_wh1 = get_option('woo_language_wh1');
$woo_language_wh3 = get_option('woo_language_wh3');
$woo_language_wh4 = get_option('woo_language_wh4');
$woo_language_wh5 = get_option('woo_language_wh5');

$wp_user_frontend_pro_theme = get_option('wp_user_frontend_pro_theme');
$wp_user_dashboard = get_option('wp_user_dashboard');
$wp_user_edit_user = get_option('wp_user_edit_user');
$wp_user_post_new = get_option('wp_user_post_new');

theme_themepark_video('主题对一些实用的插件进行了兼容，你可以在此开启兼容模式');		

?>
<h3>插件兼容选项</h3>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=plugin_theme_option'); ?>"class="xuanxiangka">
  <input type="hidden" size="60"  name="post_velue" value="yes"/>
  
  
  
  
  <table class="form-table">
      <tbody>
       <!-------------------------------title---------------------------------------------------------------->  
      <tr id="login">
               <th scope="row"><h2>wp_user_frontend_pro_theme[用户前端插件]</h2>
                </th>
                <td>
               
                </td>
            </tr>
      <tr>
       <th scope="row"><label for="wp_user_frontend_pro_theme">开启兼容</label>
                </th>
                <td>
               <input type="checkbox" <?php if($wp_user_frontend_pro_theme){echo 'checked="checked" ';}; ?>size="60"  name="wp_user_frontend_pro_theme" id="wp_user_frontend_pro_theme" value="yes"/>  <br />

                 <p>wp_user_frontend_pro_theme[用户前端插件]可以让你开放注册用户，用户可以在前端登陆、发布文章，插件分为专业版和免费版，这里WEB主题公园带给你福利专业版免费下载（这些在网上都是需要购买的哦）<br />
专业版下载：[<a target="_blank" href="http://pan.baidu.com/s/1c2lhYGK">百度网盘</a>],提取码：a6zh</p>
                </td>
            </tr>
            
            
            
            
           <tr>
       <th scope="row"><label for="wps_uesr_can_post">新增会员申请发布文章审核</label>
                </th>
                <td>
                
                 <select id="wps_uesr_can_post" name="wps_uesr_can_post" >
              <option <?php if($wps_uesr_can_post=="yes"){echo "selected='selected' ";}; ?> value='yes'>默认锁定</option>
                 <option <?php if($wps_uesr_can_post=="no"){echo "selected='selected' ";}; ?> value='no'>默认可发布</option>
                 
					</select>
         <p>wp_user_frontend_pro 可以让你的会员发布文章，开启这个选项，普通注册用户将无法发布文章，需要得到你的审核才能进行发布，申请资格可以使用超级留言板制作一个申请的页面表单，让用户提交申请。</p>
                </td>
            </tr>
            
          <tr>
       <th scope="row"><label for="wps_uesr_can_post_t">普通会员申请提示</label>
                </th>
                <td>
               <input  type="text" size="60"  name="wps_uesr_can_post_t" id="wps_uesr_can_post_t" value="<?php echo $wps_uesr_can_post_t; ?>"/>  <br />

                 <p>可以这样描述： 你好！目前您没有权限发布文章，发布文章需要成为作者，你可以在提交申请页面进行提交申请，通过之后即可获得发文权限。</p>
                </td>
            </tr>
               
           <tr id="wps_uesr_can_post_p">      
       
     <th scope="row"><label for="wps_uesr_can_post_p">申请发文权限表单页面指定</label>
                </th>
                <td>
               
               
               <select id="wps_uesr_can_post_p" name="wps_uesr_can_post_p" >
              <option value=''>请选择</option>
                    <?php 
		               $pages = get_pages();
	                   	foreach( $pages AS $page ) { 
		                $page_id=$page->ID;
		                $page_name=$page->post_title;
		               ?>
			<option 
				value='<?php echo  $page_id; ?>'
				<?php
					if ( $wps_uesr_can_post_p == $page_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $page_name; ?></option>
		<?php } ?>
	</select>

                 <p>使用“<a target="_blank" href="https://www.themepark.com.cn/wordpressbdcjcjlyb.html">超级留言板</a>”建立一个表单申请页面，让用户填写申请表单，然后再这里指定。</p>
                </td>
            </tr>
            
              
            
       <tr id="wp_user_dashboard">      
       
     <th scope="row"><label for="wp_user_dashboard">仪表盘页面指定</label>
                </th>
                <td>
               
               
               <select id="wp_user_dashboard" name="wp_user_dashboard" >
              <option value=''>请选择</option>
                    <?php 
		               $pages = get_pages();
	                   	foreach( $pages AS $page ) { 
		                $page_id=$page->ID;
		                $page_name=$page->post_title;
		               ?>
			<option 
				value='<?php echo  $page_id; ?>'
				<?php
					if ( $wp_user_dashboard == $page_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $page_name; ?></option>
		<?php } ?>
	</select>

                 <p>我们无法从插件数据库中找到仪表盘的数据位置，因此需要你在此指定一下仪表盘的位置，仪表盘是一个页面，在插件安装时会自动生成，你可以将页面名称改为“我的个人中心”</p>
                </td>
            </tr>
            
            
            
            
    
             <tr id="wp_user_dashboard">      
       
     <th scope="row"><label for="wp_user_edit_user">修改资料页面指定</label>
                </th>
                <td>
               
               
               <select id="wp_user_edit_user" name="wp_user_edit_user" >
              <option value=''>请选择</option>
                    <?php 
		               $pages = get_pages();
	                   	foreach( $pages AS $page ) { 
		                $page_id=$page->ID;
		                $page_name=$page->post_title;
		               ?>
			<option 
				value='<?php echo  $page_id; ?>'
				<?php
					if ( $wp_user_edit_user == $page_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $page_name; ?></option>
		<?php } ?>
	</select>

                 <p>修改资料页面需要自己在插件--注册表单中建立一个，然后创建一个页面将短代码放入，在此指定，仪表盘将会显示这个按钮</p>
                </td>
            </tr>     
            
            
            
            
            
            
             <tr id="wp_user_post_new">      
       
     <th scope="row"><label for="wp_user_post_new">用户发布文章页面指定</label>
                </th>
                <td>
               
               
               <select id="wp_user_post_new" name="wp_user_post_new" >
              <option value=''>请选择</option>
                    <?php 
		               $pages = get_pages();
	                   	foreach( $pages AS $page ) { 
		                $page_id=$page->ID;
		                $page_name=$page->post_title;
		               ?>
			<option 
				value='<?php echo  $page_id; ?>'
				<?php
					if ( $wp_user_post_new == $page_id ) {
						echo "selected='selected'";
					}
				?>><?php echo $page_name; ?></option>
		<?php } ?>
	</select>

                 <p>发布文章页面需要在插件--表单中建立一个，然后创建一个页面将短代码放入，在此指定，仪表盘将会显示这个按钮</p>
                </td>
            </tr>     
            
            <tr id="login">
               <th scope="row"><h2>个人中心文字编辑</h2>
                </th>
                <td>
               
                </td>
            </tr>
       <tr>
       <th scope="row"><label for="woo_language_wh1">早上好！</label>
                </th>
                <td>
               <input  type="text" size="60"  name="woo_language_wh1" id="woo_language_wh1" value="<?php echo $woo_language_wh1; ?>"/>  <br />

                 <p>登陆之后个人中心的问候语会根据时间显示不同的问候语</p>
                </td>
            </tr>
            
        
            
             <tr>
       <th scope="row"><label for="woo_language_wh3">中午好！</label>
                </th>
                <td>
               <input  type="text" size="60"  name="woo_language_wh3" id="woo_language_wh3" value="<?php echo $woo_language_wh3; ?>"/>  <br />

               <p>登陆之后个人中心的问候语会根据时间显示不同的问候语</p>
                </td>
            </tr>   
            
            
                 <tr>
       <th scope="row"><label for="woo_language_wh4">下午好！</label>
                </th>
                <td>
               <input  type="text" size="60"  name="woo_language_wh4" id="woo_language_wh4" value="<?php echo $woo_language_wh4; ?>"/>  <br />

                 <p>登陆之后个人中心的问候语会根据时间显示不同的问候语</p>
                </td>
            </tr>  
            
            
            
                 <tr>
       <th scope="row"><label for="woo_language_wh5">晚上好！</label>
                </th>
                <td>
               <input  type="text" size="60"  name="woo_language_wh5" id="woo_language_wh5" value="<?php echo $woo_language_wh5; ?>"/>  <br />

                 <p>登陆之后个人中心的问候语</p>
                </td>
            </tr>  

         <tr>
       <th scope="row"><label for="mytheme_myaccount_gonggao">个人中心公告</label>
                </th>
                <td>
               
                 <textarea rows="10" cols="50" name="mytheme_myaccount_gonggao" id="mytheme_myaccount_gonggao"><?php echo stripslashes(get_option('mytheme_myaccount_gonggao')); ?></textarea><br/>
                 <p>个人中心的公告，换行可以使用<code> < br > </code>(去掉空格)</p>
                </td>
            </tr>  
    
    
      
                 <tr>
       <th scope="row"><label for="mytheme_myaccount_kefu">客服按钮名称</label>
                </th>
                <td>
               <input  type="text" size="60"  name="mytheme_myaccount_kefu" id="mytheme_myaccount_kefu" value="<?php echo $mytheme_myaccount_kefu; ?>"/>  <br />

                 <p>你可以添加一个在线客服按钮在个人中心，也可以是联系我们，并链接到联系我们页面</p>
                </td>
            </tr>  
            
            
                 <tr>
       <th scope="row"><label for="mytheme_myaccount_kefu_url">客服按钮链接</label>
                </th>
                <td>
               <input  type="text" size="60"  name="mytheme_myaccount_kefu_url" id="mytheme_myaccount_kefu_url" value="<?php echo $mytheme_myaccount_kefu_url; ?>"/>  <br />

                 <p>你可以添加一个在线客服按钮在个人中心，也可以是联系我们，并链接到联系我们页面</p>
                </td>
            </tr>  
            
            
                   <tr>
       <th scope="row"><label for="mytheme_myaccount_help">帮助按钮名称</label>
                </th>
                <td>
               <input  type="text" size="60"  name="mytheme_myaccount_help" id="mytheme_myaccount_help" value="<?php echo $mytheme_myaccount_help; ?>"/>  <br />

                 <p>你还可以添加一个帮助按钮，链接到一个页面显示新手手册</p>
                </td>
            </tr>  
            
            
                 <tr>
       <th scope="row"><label for="mytheme_myaccount_help_url">帮助按钮链接</label>
                </th>
                <td>
               <input  type="text" size="60"  name="mytheme_myaccount_help_url" id="mytheme_myaccount_help_url" value="<?php echo $mytheme_myaccount_help_url; ?>"/>  <br />

                  <p>你还可以添加一个帮助按钮，链接到一个页面显示新手手册</p>
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
        
        
        
  </form><?php }?>