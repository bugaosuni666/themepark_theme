<?php
/* 初始化设置*/

function language_option_function(){

	if($_POST['Submit']) {
	
	$language_th1  = trim($_POST['language_th1']);
	$language_th2  = trim($_POST['language_th2']);
	$language_th3  = trim($_POST['language_th3']);
	$language_th4  = trim($_POST['language_th4']);
    $language_th5  = trim($_POST['language_th5']);
	$language_th6  = trim($_POST['language_th6']);
	$language_th7  = trim($_POST['language_th7']);
			
	
	$language_t1  = trim($_POST['language_t1']);
	$language_t2  = trim($_POST['language_t2']);
	$language_t3  = trim($_POST['language_t3']);
	$language_t4  = trim($_POST['language_t4']);
	$language_t5  = trim($_POST['language_t5']);
	
	$language_c1  = trim($_POST['language_c1']);
	$language_c2  = trim($_POST['language_c2']);
	$language_c3  = trim($_POST['language_c3']);
	$language_c4  = trim($_POST['language_c4']);
	$language_c5  = trim($_POST['language_c5']);
	$language_c6  = trim($_POST['language_c6']);
	$language_c7  = trim($_POST['language_c7']);
	
	$language_s1  = trim($_POST['language_s1']);
	$language_s2  = trim($_POST['language_s2']);
	$language_s3  = trim($_POST['language_s3']);
	$language_s4  = trim($_POST['language_s4']);
	$language_s5  = trim($_POST['language_s5']);
	
	$language_i1  = trim($_POST['language_i1']);
	$language_i2  = trim($_POST['language_i2']);
	$language_i3  = trim($_POST['language_i3']);
	$language_i4  = trim($_POST['language_i4']);
	$language_i5  = trim($_POST['language_i5']);
	$language_i6  = trim($_POST['language_i6']);
	
	
	$language_pl1  = trim($_POST['language_pl1']);
	$language_pl2  = trim($_POST['language_pl2']);
	$language_pl3  = trim($_POST['language_pl3']);
	$language_pl4  = trim($_POST['language_pl4']);
	$language_pl5  = trim($_POST['language_pl5']);
	$language_pl6  = trim($_POST['language_pl6']);
	$language_pl7  = trim($_POST['language_pl7']);
	$language_pl8  = trim($_POST['language_pl8']);
	$language_pl9  = trim($_POST['language_pl9']);
	$language_pl0  = trim($_POST['language_pl0']);
	$language_pl11  = trim($_POST['language_pl11']);
	$language_pl12  = trim($_POST['language_pl12']);
	$language_pl13 = trim($_POST['language_pl13']);
	$language_pl14  = trim($_POST['language_pl14']);
		
	$update_main_queries = array();
	$update_main_text    = array();
	 $update_main_queries[] = update_option('language_th1', $language_th1);
	 $update_main_queries[] = update_option('language_th2', $language_th2);
	 $update_main_queries[] = update_option('language_th3', $language_th3);
	 $update_main_queries[] = update_option('language_th4', $language_th4);
	 $update_main_queries[] = update_option('language_th5', $language_th5);
	 $update_main_queries[] = update_option('language_th6', $language_th6);
	 $update_main_queries[] = update_option('language_th7', $language_th7);
	
	
	
	 $update_main_queries[] = update_option('language_t1', $language_t1);
	 $update_main_queries[] = update_option('language_t2', $language_t2);
	 $update_main_queries[] = update_option('language_t3', $language_t3);
	 $update_main_queries[] = update_option('language_t4', $language_t4);
	 $update_main_queries[] = update_option('language_t5', $language_t5);
	 
	 $update_main_queries[] = update_option('language_c1', $language_c1);
	 $update_main_queries[] = update_option('language_c2', $language_c2);
	 $update_main_queries[] = update_option('language_c3', $language_c3);
	 $update_main_queries[] = update_option('language_c4', $language_c4);
	 $update_main_queries[] = update_option('language_c5', $language_c5);
	 $update_main_queries[] = update_option('language_c6', $language_c6);
	 $update_main_queries[] = update_option('language_c7', $language_c7);
	 
	 $update_main_queries[] = update_option('language_s1', $language_s1);
	 $update_main_queries[] = update_option('language_s2', $language_s2);
	 $update_main_queries[] = update_option('language_s3', $language_s3);
	 $update_main_queries[] = update_option('language_s4', $language_s4);
	 $update_main_queries[] = update_option('language_s5', $language_s5);
	 
	 $update_main_queries[] = update_option('language_i1', $language_i1);
	 $update_main_queries[] = update_option('language_i2', $language_i2);
	 $update_main_queries[] = update_option('language_i3', $language_i3);
	 $update_main_queries[] = update_option('language_i4', $language_i4);
	  $update_main_queries[] = update_option('language_i5', $language_i5);
	  $update_main_queries[] = update_option('language_i6', $language_i6);
	  
	  $update_main_queries[] = update_option('language_pl1', $language_pl1);
	  $update_main_queries[] = update_option('language_pl2', $language_pl2);
	  $update_main_queries[] = update_option('language_pl3', $language_pl3);
	  $update_main_queries[] = update_option('language_pl4', $language_pl4);
	  $update_main_queries[] = update_option('language_pl5', $language_pl5);
	  $update_main_queries[] = update_option('language_pl6', $language_pl6);
	  $update_main_queries[] = update_option('language_pl7', $language_pl7);
	  $update_main_queries[] = update_option('language_pl8', $language_pl8);
	  $update_main_queries[] = update_option('language_pl9', $language_pl9);
	  $update_main_queries[] = update_option('language_pl0', $language_pl0);
	  $update_main_queries[] = update_option('language_pl11', $language_pl11);
	  $update_main_queries[] = update_option('language_pl12', $language_pl12);
	  $update_main_queries[] = update_option('language_pl13', $language_pl13);
		  $update_main_queries[] = update_option('language_pl14', $language_pl14);
	 
	
	 
	 
	 foreach($update_main_queries as $update_main_query) {
		if($update_main_query) {
			$text= '<font color="green"> 更新成功！</font><br />';
		}
	
	}
	if(empty($text)) {
		$text = '<font color="red">您对设置没有做出任何改动...</font>';
	}
	
}
$language_t1 = get_option('language_t1');
$language_t2 = get_option('language_t2');
$language_t3 = get_option('language_t3');
$language_t4 = get_option('language_t4');
$language_t5 = get_option('language_t5');

$language_th1 = get_option('language_th1');
$language_th2 = get_option('language_th2');
$language_th3 = get_option('language_th3');
$language_th4 = get_option('language_th4');
$language_th5 = get_option('language_th5');
$language_th6 = get_option('language_th6');
$language_th7 = get_option('language_th7');

$language_c1 = get_option('language_c1');
$language_c2 = get_option('language_c2');
$language_c3 = get_option('language_c3');
$language_c4 = get_option('language_c4');
$language_c5 = get_option('language_c5');
$language_c6 = get_option('language_c6');
$language_c7 = get_option('language_c7');


$language_s1 = get_option('language_s1');
$language_s2 = get_option('language_s2');
$language_s3 = get_option('language_s3');
$language_s4 = get_option('language_s4');
$language_s5 = get_option('language_s5');

$language_i1 = get_option('language_i1');
$language_i2 = get_option('language_i2');
$language_i3 = get_option('language_i3');
$language_i4 = get_option('language_i4');
$language_i5 = get_option('language_i5');
$language_i6 = get_option('language_i6');

$language_pl1 = get_option('language_pl1');
$language_pl2 = get_option('language_pl2');
$language_pl3 = get_option('language_pl3');
$language_pl4 = get_option('language_pl4');
$language_pl5 = get_option('language_pl5');
$language_pl6 = get_option('language_pl6');
$language_pl7 = get_option('language_pl7');
$language_pl8 = get_option('language_pl8');
$language_pl9 = get_option('language_pl9');
$language_pl0 = get_option('language_pl0');
$language_pl11 = get_option('language_pl11');
$language_pl12 = get_option('language_pl12');
	$language_pl13 = get_option('language_pl13');
	$language_pl14 = get_option('language_pl14');

theme_themepark_video('一些固定的文字可以在此处更改，若你想要让网站显示为其他语言，那么在此处可以对这些文字进行替换，woocommerce的一些语言需要使用语言包才能更改，这里只提供主题的一些固定文字，并有区域提示，对照区域进行替换或者翻译吧。');		
?>
<h3>文章系统多语言替换</h3>
 
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=language_option'); ?>"class="xuanxiangka">
  
  
  <table class="form-table">
      <tbody>
       <!-------------------------------title---------------------------------------------------------------->  
      <tr id="title">
               <th scope="row"><h2>【title自动调用】</h2>
                </th>
                <td>
               
                </td>
            </tr>
      <tr>
       <th scope="row"><label for="language_th1">找到标签</label>
                </th>
                <td>
               <input data="Find the tag"  type="text" size="60"  name="language_th1" id="language_th1" value="<?php echo $language_th1; ?>"/>  <br />

                 <p>title中的文字，比如点击标签“红色”，网站标题会显示“找到标签-红色”</p>
                </td>
            </tr>
            
          <tr>  
        <th scope="row"><label for="language_th2">搜索结果</label>
                </th>
                <td>
               <input data="Search result"  type="text" size="60"  name="language_th2" id="language_th2" value="<?php echo $language_th2; ?>"/>  <br />

                 <p>title中的文字，比如搜索“红色”，网站标题会显示“搜索结果-红色”</p>
                </td>
            </tr>
            <tr>
             <th scope="row"><label for="language_th3">很遗憾，没有找到您的信息</label>
                </th>
                <td>
               <input data="Unfortunately, the information you searched was not found"  type="text" size="60"  name="language_th3" id="language_th3" value="<?php echo $language_th3; ?>"/>  <br />

                 <p>title中的文字，当404页面时，网站标题会显示“很遗憾，没有找到您的信息”</p>
                </td>
            </tr>
            
             <tr>
             <th scope="row"><label for="language_th4">首页</label>
                </th>
                <td>
               <input data="Home"   type="text" size="60"  name="language_th4" id="language_th4" value="<?php echo $language_th4; ?>"/>  <br />

                 <p>文章系统的面包屑显示的“首页”</p>
                </td>
            </tr>
            
            <tr>
             <th scope="row"><label for="language_th5">全站搜索</label>
                </th>
                <td>
               <input data="Search the whole station"   type="text" size="60"  name="language_th5" id="language_th5" value="<?php echo $language_th5; ?>"/>  <br />

                 <p>文章系统的面包屑显示的“首页”</p>
                </td>
            </tr>
              
           
            
           
            
      
    <!-------------------------------header---------------------------------------------------------------->  
      
       <tr id="header">
               <th scope="row"><h2>【网站顶部文字】</h2>
                </th>
                <td>
               
                </td>
            </tr>
      
       
 
 
           
      
    <!-------------------------------category---------------------------------------------------------------->  
      
       <tr id="category">
               <th scope="row"><h2>【文章分类】</h2>
                </th>
                <td>
                <p>文章分类区域，注意是文章分类不是商品分类</p>
                </td>
            </tr>
      
       <tr>
         <th scope="row"><label for="language_c1">文章检索</label>
                </th>
                <td>
               <input data="Article search"  type="text" size="60"  name="language_c1" id="language_c1" value="<?php echo $language_c1; ?>"/>  <br />

                 <p>文章筛选的标题，注意是文章筛选不是商品筛选</p>
                </td>
            </tr>
            
            
  
 
            
            
            
            
      <tr>
            <th scope="row"><label for="language_c2">文章检索副标题</label>
                </th>
                <td>
               <input data="You can select the following criteria and enter keywords. Click start search to filter articles"  type="text" size="60"  name="language_c2" id="language_c2" value="<?php echo $language_c2; ?>"/>  <br />

                 <p>默认为：你可以选择下面的条件并可以输入关键词点击开始搜索进行筛选文章</p>
                </td>
            </tr>
            
            
                       <tr>
  <th scope="row"><label for="language_c5">搜索</label>
                </th>
                <td>
               <input data="Search"   type="text" size="60"  name="language_c5" id="language_c5" value="<?php echo $language_c5; ?>"/>  <br />

                 <p>文章筛选的搜索按钮</p>
                </td>
            </tr>
            
            
 <tr>
         <th scope="row"><label for="language_c3">发布时间</label>
                </th>
                <td>
               <input data="Time of release"  type="text" size="60"  name="language_c3" id="language_c3" value="<?php echo $language_c3; ?>"/>  <br />

                 <p>分类目录和文章内页中的图文模板显示的发布时间</p>
                </td>
            </tr>
            
              <tr>
               <th scope="row"><label for="language_c4">浏览次数</label>
                </th>
                <td>
               <input data="Number of views"  type="text" size="60"  name="language_c4" id="language_c4" value="<?php echo $language_c4; ?>"/>  <br />

                 <p>分类目录和文章内页中的图文模板显示的浏览次数</p>
                </td>
            </tr>
            
              
 
 
          
          
          
            <!-------------------------------single---------------------------------------------------------------->  
      
       <tr id="category">
               <th scope="row"><h2>【文章内页】</h2>
                </th>
                <td>
                <p>文章内页，注意是文章内页不是产品内页</p>
                </td>
            </tr>
          
          
          
          
            <tr>
               <th scope="row"><label for="language_s1">分类</label>
                </th>
                <td>
               <input  data="Category"   type="text" size="60"  name="language_s1" id="language_s1" value="<?php echo $language_s1; ?>"/>  <br />

                 <p>文章标题的顶部会显示所属分类，分类标题</p>
                </td>
            </tr>
          
           <tr>
               <th scope="row"><label for="language_s2">相关推荐</label>
                </th>
                <td>
               <input data="Related recommendations"    type="text" size="60"  name="language_s2" id="language_s2" value="<?php echo $language_s2; ?>"/>  <br />

                 <p>文章会显示相关文章，可以修改此标题</p>
                </td>
            </tr>
          
           <tr>
               <th scope="row"><label for="language_s3">上一篇</label>
                </th>
                <td>
               <input data="The prev"   type="text" size="60"  name="language_s3" id="language_s3" value="<?php echo $language_s3; ?>"/>  <br />

                 <p>文章上一篇按钮文字</p>
                </td>
            </tr>
          
          
            <tr>
               <th scope="row"><label for="language_s4">下一篇</label>
                </th>
                <td>
               <input  data="The next" type="text" size="60"  name="language_s4" id="language_s4" value="<?php echo $language_s4; ?>"/>  <br />

                 <p>文章下一篇按钮文字</p>
                </td>
            </tr>
          
          
             
            <tr>
               <th scope="row"><label for="language_s5">标签</label>
                </th>
                <td>
               <input data="Tag"  type="text" size="60"  name="language_s5" id="language_s5" value="<?php echo $language_s5; ?>"/>  <br />

                 <p>文章底部会显示当前文章所带的标签</p>
                </td>
            </tr>
         <!-------------------------------index---------------------------------------------------------------->   
              <tr id="index">
               <th scope="row"><h2>【首页模块 】</h2>
                </th>
                <td>
                <p>首页模块中的一些固定文字</p>
                </td>
            </tr>
          
            <tr>
               <th scope="row"><label for="language_i1">详细信息</label>
                </th>
                <td>
               <input data="View details"  type="text" size="60"  name="language_i1" id="language_i1" value="<?php echo $language_i1; ?>"/>  <br />

                 <p>产品调用滚动模块中的详细信息按钮</p>
                </td>
            </tr>
            
            
       
       
    
         
          
          
          
          
          
            <tr id="index">
               <th scope="row"><h2>【文章评论 】</h2>
                </th>
                <td>
                <p>文章评论的一些文字替换</p>
                </td>
            </tr>
          
            <tr>
               <th scope="row"><label for="language_pl1">您好！</label>
                </th>
                <td>
               <input data="Hello"   type="text" size="60"  name="language_pl1" id="language_pl1" value="<?php echo $language_pl1; ?>"/>  <br />

                 <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
          
          
          <tr>
               <th scope="row"><label for="language_pl2">请登录后评论</label>
                </th>
                <td>
               <input  data="Please log in and comment"  type="text" size="60"  name="language_pl2" id="language_pl2" value="<?php echo $language_pl2; ?>"/>  <br />

                 <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
          
           <tr>
               <th scope="row"><label for="language_pl3">请登录</label>
                </th>
                <td>
               <input data="Please log in"  type="text" size="60"  name="language_pl3" id="language_pl3" value="<?php echo $language_pl3; ?>"/>  <br />

                 <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
          
           <tr>
               <th scope="row"><label for="language_pl4">点击取消回复</label>
                </th>
                <td>
               <input  data="Click Cancel to reply"   type="text" size="60"  name="language_pl4" id="language_pl4" value="<?php echo $language_pl4; ?>"/>  <br />

                 <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
            
            <tr>
               <th scope="row"><label for="language_pl5">称呼</label>
                </th>
                <td>
               <input data="Name"   type="text" size="60"  name="language_pl5" id="language_pl5" value="<?php echo $language_pl5; ?>"/>  <br />

                 <p>未登录状态评论填写称呼</p>
                </td>
            </tr>
            
            
              <tr>
               <th scope="row"><label for="language_pl6">邮箱</label>
                </th>
                <td>
               <input  data="E-mail"  type="text" size="60"  name="language_pl6" id="language_pl6" value="<?php echo $language_pl6; ?>"/>  <br />

                 <p>未登录状态评论填写邮箱</p>
                </td>
            </tr>
            
            
            
            
              <tr>
               <th scope="row"><label for="language_pl8">发布评论</label>
                </th>
                <td>
               <input data="Submit comments" type="text" size="60"  name="language_pl8" id="language_pl8" value="<?php echo $language_pl8; ?>"/>  <br />

                  <p>评论发布按钮</p>
                </td>
            </tr>
            
            
            
              <tr>
               <th scope="row"><label for="language_pl9">评论审核中</label>
                </th>
                <td>
               <input data="Comments under review"  type="text" size="60"  name="language_pl9" id="language_pl9" value="<?php echo $language_pl9; ?>"/>  <br />

                   <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
            
            
                 <tr>
               <th scope="row"><label for="language_pl9">回复</label>
                </th>
                <td>
               <input  data="Reply"   type="text" size="60"  name="language_pl0" id="language_pl0" value="<?php echo $language_pl0; ?>"/>  <br />

                   <p>文章评论中的一些文字替换</p>
                </td>
            </tr>
          
      
                 <tr>
               <th scope="row"><label for="language_pl11">管理员</label>
                </th>
                <td>
               <input data="Admin"  type="text" size="60"  name="language_pl11" id="language_pl11" value="<?php echo $language_pl11; ?>"/>  <br />

                   <p>如果是管理员回复，那么会显示管理员的文字提示</p>
                </td>
            </tr>
            
            
            
                 <tr>
               <th scope="row"><label for="language_pl12">查看全部</label>
                </th>
                <td>
               <input  data="View all"  type="text" size="60"  name="language_pl12" id="language_pl12" value="<?php echo $language_pl12; ?>"/>  <br />

                   <p>文章内页插入的列表，如果是分类或者标签的话，会有一个查看全部的按钮，可在此修改文字</p>
                </td>
            </tr>
          
		  
		       <tr>
               <th scope="row"><label for="language_pl13">提交成功！</label>
                </th>
                <td>
               <input data="Submitted successfully!"  type="text" size="60"  name="language_pl13" id="language_pl13" value="<?php echo $language_pl13; ?>"/>  <br />

                   <p>表单提交成功提示。</p>
                </td>
            </tr>
		   <tr>
               <th scope="row"><label for="language_pl14">提交失败！请稍后再试！</label>
                </th>
                <td>
               <input data="Failed to submit! Please try again later!"  type="text" size="60"  name="language_pl14" id="language_pl14" value="<?php echo $language_pl14; ?>"/>  <br />

                   <p>表单提交失败时提示。</p>
                </td>
            </tr>
		  
      </tbody>
      </table>
     <table> <tr>
        <td><p class="submit">
      
            <input type="submit" name="Submit" value="提交" class="button-primary"/>
		     <span class="button" id="translate">一键翻译为英文自动填写</span>
              <span class="button" id="clear">清空所有</span>
            </p>
        </td>

        </tr> </table>
  
  
  
  
  </form>
<script>
$("#translate").click(function() {
	$(".xuanxiangka tbody tr td").children(":text").each(function() {
		
		if($(this).attr("data")!=''){
			
			$(this).val($(this).attr("data"));
		}
		
		
	});
	
	
});
	
$("#clear").click(function() {
	$(".xuanxiangka tbody tr td").children(":text").each(function() {
		
	
			
			$(this).val("");
		
		
		
	});
	
	
});	
	
</script>

<?php }?>