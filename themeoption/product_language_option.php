<?php
/* 初始化设置*/

function product_language_option_function(){





	if($_POST['Submit']) {
	
	$product_l1  = trim($_POST['product_l1']);
	$product_l2  = trim($_POST['product_l2']);
	$product_l3  = trim($_POST['product_l3']);
    $product_l4  = trim($_POST['product_l4']);
	$product_l5  = trim($_POST['product_l5']);
	$product_l6  = trim($_POST['product_l6']);
	$product_l7  = trim($_POST['product_l7']);
	$product_l8  = trim($_POST['product_l8']);
	$product_l9  = trim($_POST['product_l9']);
	$product_l0  = trim($_POST['product_l0']);
	$product_l11  = trim($_POST['product_l11']);
	$product_l12  = trim($_POST['product_l12']);
	$product_l13  = trim($_POST['product_l13']);
	$product_l14  = trim($_POST['product_l14']);
	$product_l15  = trim($_POST['product_l15']);
	$product_l16  = trim($_POST['product_l16']);
	$product_l17  = trim($_POST['product_l17']);
	$product_l18  = trim($_POST['product_l18']);
	$product_l19  = trim($_POST['product_l19']);
	$product_lkkb  = trim($_POST['product_lkkb']);
	$product_lkkb2  = trim($_POST['product_lkkb2']);
	$product_lkkb3  = trim($_POST['product_lkkb3']);
$product_d1  = trim($_POST['product_d1']);
$product_d2  = trim($_POST['product_d2']);
$product_d3  = trim($_POST['product_d3']);
$product_d4  = trim($_POST['product_d4']);
$product_d5  = trim($_POST['product_d5']);
$product_d6 = trim($_POST['product_d6']);
$product_d7 = trim($_POST['product_d7']);


	
	$update_main_queries = array();
	$update_main_text    = array();
	$update_main_queries[] = update_option('product_l1', $product_l1);
	$update_main_queries[] = update_option('product_l2', $product_l2);
	$update_main_queries[] = update_option('product_l3', $product_l3);
	$update_main_queries[] = update_option('product_l4', $product_l4);
	$update_main_queries[] = update_option('product_l5', $product_l5);
	$update_main_queries[] = update_option('product_l6', $product_l6);
	$update_main_queries[] = update_option('product_l7', $product_l7);
	$update_main_queries[] = update_option('product_l8', $product_l8);
	$update_main_queries[] = update_option('product_l9', $product_l9);
	$update_main_queries[] = update_option('product_l0', $product_l0);
	$update_main_queries[] = update_option('product_l11', $product_l11);
	$update_main_queries[] = update_option('product_l12', $product_l12);
	$update_main_queries[] = update_option('product_l13', $product_l13);
	$update_main_queries[] = update_option('product_l14', $product_l14);
	$update_main_queries[] = update_option('product_l15', $product_l15);
	$update_main_queries[] = update_option('product_l16', $product_l16);
	$update_main_queries[] = update_option('product_l17', $product_l17);
	$update_main_queries[] = update_option('product_l18', $product_l18);
	$update_main_queries[] = update_option('product_l19', $product_l19);
	
	$update_main_queries[] = update_option('product_d1', $product_d1);
	$update_main_queries[] = update_option('product_d2', $product_d2);
	$update_main_queries[] = update_option('product_d3', $product_d3);
	$update_main_queries[] = update_option('product_d4', $product_d4);
	$update_main_queries[] = update_option('product_d5', $product_d5);
	$update_main_queries[] = update_option('product_d6', $product_d6);
	$update_main_queries[] = update_option('product_d7', $product_d7);	 
		
	$update_main_queries[] = update_option('product_lkkb', $product_lkkb);	 
	$update_main_queries[] = update_option('product_lkkb2', $product_lkkb2);	 
	 	$update_main_queries[] = update_option('product_lkkb3', $product_lkkb3);	
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
$product_l1 = get_option('product_l1');
$product_l2 = get_option('product_l2');
$product_l3 = get_option('product_l3');
$product_l4 = get_option('product_l4');
$product_l5 = get_option('product_l5');
$product_l6 = get_option('product_l6');
$product_l7 = get_option('product_l7');
$product_l8 = get_option('product_l8');
$product_l9 = get_option('product_l9');
$product_l0 = get_option('product_l0');
$product_l11 = get_option('product_l11');
$product_l12 = get_option('product_l12');
$product_l13 = get_option('product_l13');
$product_l14 = get_option('product_l14');
$product_l15 = get_option('product_l15');
$product_l16 = get_option('product_l16');
$product_l17 = get_option('product_l17');
$product_l18 = get_option('product_l18');
$product_l19 = get_option('product_l19');

$product_d1 = get_option('product_d1');
$product_d2 = get_option('product_d2');
$product_d3 = get_option('product_d3');
$product_d4 = get_option('product_d4');
$product_d5 = get_option('product_d5');
$product_d6 = get_option('product_d6');
$product_d7 = get_option('product_d7');
$product_lkkb= get_option('product_lkkb');	
$product_lkkb2= get_option('product_lkkb2');
	$product_lkkb3= get_option('product_lkkb3');
		
theme_themepark_video('这个选项是woocommerce产品相关的语言替换，这些语言都是主题所提供的固定文字，从而比默认的woocommerce更加友好，你可以更改这些文字，或者你需要使用其他语言的话，可以使用此选项翻译文字');		

?>
<h3>woocommerce产品系统多语言替换</h3>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=product_language_option'); ?>"class="xuanxiangka">
  
  
  <table class="form-table">
      <tbody>
       <!-------------------------------title---------------------------------------------------------------->  
      <tr id="title">
               <th scope="row"><h2>产品目录（包括商店、产品分类、以及搜索结果页面）</h2>
                </th>
                <td>
               
                </td>
            </tr>
      <tr>
       <th scope="row"><label for="product_l1">返回</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l1" id="product_l1" value="<?php echo $product_l1; ?>"/>  <br />

                 <p>移动版中的返回按钮</p>
                </td>
            </tr>
            
          <tr>  
          
          
          <th scope="row"><label for="product_l2">筛选</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l2" id="product_l2" value="<?php echo $product_l2; ?>"/>  <br />

                 <p>移动版中的筛选按钮，点击按钮展开多重筛选的界面</p>
                </td>
            </tr>
            
          <tr>  
           <th scope="row"><label for="product_l3">点击筛选</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l3" id="product_l3" value="<?php echo $product_l3; ?>"/>  <br />

                 <p>多重筛选按钮（pc版本中是价格区间的按钮）</p>
                </td>
            </tr>
            
            
            
               <tr>  
           <th scope="row"><label for="product_lkkb">下属分类：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_lkkb" id="product_lkkb" value="<?php echo $product_lkkb; ?>"/>  <br />

                 <p>筛选中的二级分类标题</p>
                </td>
            </tr>
            
            
            
               <tr>  
           <th scope="row"><label for="product_lkkb2">下属分类：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_lkkb2" id="product_lkkb2" value="<?php echo $product_lkkb2; ?>"/>  <br />

                 <p>筛选中的三级分类标题</p>
                </td>
            </tr>
            
                <tr>  
           <th scope="row"><label for="product_lkkb3">已选条件：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_lkkb3" id="product_lkkb3" value="<?php echo $product_lkkb3; ?>"/>  <br />

                 <p>筛选中，若选择了选项，会出现已选条件，这是标题。</p>
                </td>
            </tr>
            
               <tr>  
           <th scope="row"><label for="product_lxx1">已选条件</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_lxx1" id="product_lxx1" value="<?php echo $product_lxx1; ?>"/>  <br />

                 <p>产品筛选中提示“已选条件”文字</p>
                </td>
            </tr>
            
          <tr>  
          
          
           <tr id="title">
               <th scope="row"><h2>产品筛选</h2>
                </th>
                <td>
               
                </td>
            </tr>
          
          
          
            <tr>  
           <th scope="row"><label for="product_d1">产品对比</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d1" id="product_d1" value="<?php echo $product_d1; ?>"/>  <br />

                 <p>开启产品对比功能之后，在产品分类或者商店页面加入对比产品时出现的对比框标题</p>
                </td>
            </tr>
            
              
            <tr>  
           <th scope="row"><label for="product_d2">隐藏</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d2" id="product_d2" value="<?php echo $product_d2; ?>"/>  <br />

                 <p>隐藏按钮</p>
                </td>
            </tr>
            
            
                 
            <tr>  
           <th scope="row"><label for="product_d3">最多对比4个</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d3" id="product_d3" value="<?php echo $product_d3; ?>"/>  <br />

                 <p>当超过4个对比产品时的提示，原文为：“最多添加进入4个对比项目”</p>
                </td>
            </tr>
            
            
              <tr>  
           <th scope="row"><label for="product_d4">至少添加2个</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d4" id="product_d4" value="<?php echo $product_d4; ?>"/>  <br />

                 <p>当对比产品不足2个时的提示，原文为“至少添加2个对比项目”</p>
                </td>
            </tr>
            
            
            
              <tr>  
           <th scope="row"><label for="product_d5">开始对比</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d5" id="product_d5" value="<?php echo $product_d5; ?>"/>  <br />

                 <p>开始对比按钮</p>
                </td>
            </tr>
            
            
             
              <tr>  
           <th scope="row"><label for="product_d6">清除全部</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d6" id="product_d6" value="<?php echo $product_d6; ?>"/>  <br />

                 <p>清除全部对比项目按钮</p>
                </td>
            </tr>
            
            
               
              <tr>  
           <th scope="row"><label for="product_d7">展开全部</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_d7" id="product_d7" value="<?php echo $product_d7; ?>"/>  <br />

                 <p>在pc上访问时，你可以隐藏一些属性，并让用户点击展开可以看到全部，点击展开的按钮文字替换在此处</p>
                </td>
            </tr>
            
            
            
          <tr>  
          
          
          
          <tr id="title">
               <th scope="row"><h2>产品详细</h2>
                </th>
                <td>
               
                </td>
            </tr>
            
            
            
             <tr>  
           <th scope="row"><label for="product_l4">专柜价：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l4" id="product_l4" value="<?php echo $product_l4; ?>"/>  <br />

                 <p>如果你启用了促销价格，你可以定义原价为“专柜价”或者“市场价”等等文字</p>
                </td>
            </tr>
            
            
              <tr>  
           <th scope="row"><label for="product_l5">折扣价：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l5" id="product_l5" value="<?php echo $product_l5; ?>"/>  <br />

                 <p>如果你启用了促销价格，你可以定义促销价格文字为“折扣价”、“优惠价”等等</p>
                </td>
            </tr>
            
            
              <tr>  
           <th scope="row"><label for="product_l6">累计销量：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l6" id="product_16" value="<?php echo $product_l6; ?>"/>  <br />

                 <p>累计销量文字</p>
                </td>
            </tr>
            
      
      
              <tr>  
           <th scope="row"><label for="product_l7">累计评价：</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l7" id="product_17" value="<?php echo $product_l7; ?>"/>  <br />

                 <p>累计评价文字</p>
                </td>
            </tr>
            
            
            
              <tr>  
           <th scope="row"><label for="product_l8">立即购买</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l8" id="product_18" value="<?php echo $product_l8; ?>"/>  <br />

                 <p>立即购买按钮</p>
                </td>
            </tr>
            
            
              
              <tr>  
           <th scope="row"><label for="product_l9">放入购物车</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l9" id="product_19" value="<?php echo $product_l9; ?>"/>  <br />

                 <p>放入购物车按钮</p>
                </td>
            </tr>
            
            
               <tr>  
           <th scope="row"><label for="product_l0">推荐搭配</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l0" id="product_10" value="<?php echo $product_l0; ?>"/>  <br />

                 <p>woocommerce后台的连锁产品-推荐销售中添加的商品列表</p>
                </td>
            </tr>
            
            
            
              <tr>  
           <th scope="row"><label for="product_l11">你可能还喜欢</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l11" id="product_111" value="<?php echo $product_l11; ?>"/>  <br />

                 <p>woocommerce后台的连锁产品-交叉销售中添加的商品列表</p>
                </td>
            </tr>
            
            
               <tr>  
           <th scope="row"><label for="product_l12">购买商品</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l12" id="product_112" value="<?php echo $product_l12; ?>"/>  <br />

                 <p>商品详细切换按钮右侧有一个购买商品按钮，点击将会弹回顶部</p>
                </td>
            </tr>
            
               <tr>  
           <th scope="row"><label for="product_l12">购买商品</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l12" id="product_112" value="<?php echo $product_l12; ?>"/>  <br />

                 <p>商品详细切换按钮右侧有一个购买商品按钮，点击将会弹回顶部</p>
                </td>
            </tr>
            
            
             <tr>  
           <th scope="row"><label for="product_l13">分类信息</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l13" id="product_113" value="<?php echo $product_l13; ?>"/>  <br />

                 <p>商品参数切换选项中的分类信息标题</p>
                </td>
            </tr>
            
            
              <tr>  
           <th scope="row"><label for="product_l14">商品参数</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l14" id="product_114" value="<?php echo $product_l14; ?>"/>  <br />

                 <p>商品参数切换选项中的分详细参数标题</p>
                </td>
            </tr>
            
            
              <tr>  
           <th scope="row"><label for="product_l15">商品描述</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l15" id="product_115" value="<?php echo $product_l15; ?>"/>  <br />

                 <p>商品切换标题</p>
                </td>
            </tr>
            
            
             <tr>  
           <th scope="row"><label for="product_l16">商品评价</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l16" id="product_116" value="<?php echo $product_l16; ?>"/>  <br />

                 <p>商品切换标题</p>
                </td>
            </tr>
            
              
             <tr>  
           <th scope="row"><label for="product_l17">购买商品</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l17" id="product_117" value="<?php echo $product_l17; ?>"/>  <br />

                 <p>购买商品按钮,点击回到商品购买信息区域</p>
                </td>
            </tr>
            
              <tr>  
           <th scope="row"><label for="product_l18">配送到</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l18" id="product_118" value="<?php echo $product_l18; ?>"/>  <br />

                 <p>商品配送选项替换</p>
                </td>
            </tr>
            
            
               <tr>  
           <th scope="row"><label for="product_l19">包邮</label>
                </th>
                <td>
               <input  type="text" size="60"  name="product_l19" id="product_119" value="<?php echo $product_l19; ?>"/>  <br />

                 <p>若配送费用为0显示包邮</p>
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