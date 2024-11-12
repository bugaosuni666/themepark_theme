<?php




function  salespromotion_tishi(){
	
	$order_total= preg_replace('/\D/s', '', WC()->cart->get_total());
    $order_total=substr($order_total,0,strlen($order_total)-2);
	

		
$salespromotion1=get_option('salespromotion1');	
$salespromotion_t1=get_option('salespromotion_t1');	

$salespromotion2=get_option('salespromotion2');	
$salespromotion_t2=get_option('salespromotion_t2');	

$salespromotion3=get_option('salespromotion3');	
$salespromotion_t3=get_option('salespromotion_t3');	

$salespromotion4=get_option('salespromotion4');	
$salespromotion_t4=get_option('salespromotion_t4');	

$salespromotion5=get_option('salespromotion5');	
$salespromotion_t5=get_option('salespromotion_t5');	

$salespromotionq=get_option('salespromotionq');	
$salespromotion_tq=get_option('salespromotion_tq');	

$salespromotion6=get_option('salespromotion6');	
$salespromotion7=get_option('salespromotion7');	
$salespromotion8=get_option('salespromotion8');		
$salespromotion9=get_option('salespromotion9');
$salespromotion0=get_option('salespromotion0');	
$salespromotion11=get_option('salespromotion11');	
$salespromotion12=get_option('salespromotion12');	
$salespromotion13=get_option('salespromotion13');	
		
		if($salespromotion1){
		$chajia1=$salespromotion1-$order_total;	
		if($chajia1>0){$chajias1='<strong>'.$salespromotion8.$chajia1.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajias1='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotion1){$class1='class="salespromotion"';}else{$class1='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$class1.'>'.$salespromotion_t1.$chajias1.' </p>'; 
			}
			
			if($salespromotion2){
		$chajia2=$salespromotion2-$order_total;	
		if($chajia2>0){$chajias2='<strong>'.$salespromotion8.$chajia2.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajias2='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotion2){$class2='class="salespromotion"';}else{$class2='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$class2.'>'.$salespromotion_t2.$chajias2.' </p>'; 
			}
			if($salespromotion3){
		$chajia3=$salespromotion3-$order_total;	
		if($chajia3>0){$chajias3='<strong>'.$salespromotion8.$chajia3.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajias3='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotion3){$class3='class="salespromotion"';}else{$class3='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$class3.'>'.$salespromotion_t3.$chajias3.' </p>'; 
			}
			
				if($salespromotion4){
		$chajia4=$salespromotion4-$order_total;	
		if($chajia4>0){$chajias4='<strong>'.$salespromotion8.$chajia4.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajias4='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotion4){$class4='class="salespromotion"';}else{$class4='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$class4.'>'.$salespromotion_t4.$chajias4.' </p>'; 
			}
			
			
				if($salespromotion5){
		$chajia5=$salespromotion5-$order_total;	
		if($chajia5>0){$chajias5='<strong>'.$salespromotion8.$chajia5.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajias5='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotion5){$class5='class="salespromotion"';}else{$class5='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$class5.'>'.$salespromotion_t5.$chajias5.' </p>'; 
			}
			
			
			
				if($salespromotionq){
		$chajiaq=$salespromotionq-$order_total;	
		if($chajiaq>0){$chajiasq='<strong>'.$salespromotion8.$chajiaq.'</strong><a href="'.$salespromotion7.'">'.$salespromotion6.'</a>';}else{$chajiasq='<strong>'.$salespromotion11.'</strong>';}
		if($order_total<$salespromotionq){$classq='class="salespromotion"';}else{$classq='class="salespromotion_yes '.$salespromotion13.'"';}
			
			$sale_on.='<p '.$classq.'>'.$salespromotion_tq.$chajiasq.' </p>'; 
			}
			
		if($salespromotion9||$salespromotion1||$salespromotion2||$salespromotion3||$salespromotion4||$salespromotion5)	{
			if($salespromotion12){$out_id='id="salespromotion_line_one"';}else{$out_id='';}
			echo'<div '.$out_id.' class="salespromotion_out"><h2>'.$salespromotion9.'</h2>';
			echo '<p>'.$salespromotion0 .'</p>';
			echo ''.$sale_on.'</div>';
		}
	
	}





function salespromotion(){

		
	if($_POST['Submit']) {
	$salespromotion1 = trim($_POST['salespromotion1']);
   $salespromotion_t1 = trim($_POST['salespromotion_t1']);
	
	$salespromotion2 = trim($_POST['salespromotion2']);
   $salespromotion_t2 = trim($_POST['salespromotion_t2']);
   
   $salespromotion3 = trim($_POST['salespromotion3']);
   $salespromotion_t3 = trim($_POST['salespromotion_t3']);
   
   
   $salespromotion4 = trim($_POST['salespromotion4']);
   $salespromotion_t4 = trim($_POST['salespromotion_t4']);
   
   
   $salespromotion5 = trim($_POST['salespromotion5']);
   $salespromotion_t5 = trim($_POST['salespromotion_t5']);	
   
    $salespromotionq = trim($_POST['salespromotionq']);
   $salespromotion_tq = trim($_POST['salespromotion_tq']);	
   
    $salespromotion6 = trim($_POST['salespromotion6']);	
	
	$salespromotion7 = trim($_POST['salespromotion7']);	
	$salespromotion8 = trim($_POST['salespromotion8']);	
	
		$salespromotion9 = trim($_POST['salespromotion9']);	
	$salespromotion0 = trim($_POST['salespromotion0']);	
	$salespromotion11 = trim($_POST['salespromotion11']);	
	
	$salespromotion12 = trim($_POST['salespromotion12']);	
	$salespromotion13 = trim($_POST['salespromotion13']);	
	$salespromotion14= trim($_POST['salespromotion14']);	
		
		$update_main_queries = array();
	$update_main_text    = array();
	
	
		$update_main_queries[] = update_option('salespromotion1', $salespromotion1);	
		$update_main_queries[] = update_option('salespromotion_t1', $salespromotion_t1);	
		
		$update_main_queries[] = update_option('salespromotion2', $salespromotion2);	
		$update_main_queries[] = update_option('salespromotion_t2', $salespromotion_t2);	
		
		$update_main_queries[] = update_option('salespromotion3', $salespromotion3);	
		$update_main_queries[] = update_option('salespromotion_t3', $salespromotion_t3);	
		
		$update_main_queries[] = update_option('salespromotion4', $salespromotion4);	
		$update_main_queries[] = update_option('salespromotion_t4', $salespromotion_t4);	
		
		$update_main_queries[] = update_option('salespromotion5', $salespromotion5);	
		$update_main_queries[] = update_option('salespromotion_t5', $salespromotion_t5);	
		
			$update_main_queries[] = update_option('salespromotionq', $salespromotionq);	
		$update_main_queries[] = update_option('salespromotion_tq', $salespromotion_tq);	
		
		$update_main_queries[] = update_option('salespromotion6', $salespromotion6);
		
		$update_main_queries[] = update_option('salespromotion7', $salespromotion7);
		$update_main_queries[] = update_option('salespromotion8', $salespromotion8);
		
		$update_main_queries[] = update_option('salespromotion9', $salespromotion9);
		$update_main_queries[] = update_option('salespromotion0', $salespromotion0);
		$update_main_queries[] = update_option('salespromotion11', $salespromotion11);
		$update_main_queries[] = update_option('salespromotion12', $salespromotion12);
		$update_main_queries[] = update_option('salespromotion13', $salespromotion13);
		$update_main_queries[] = update_option('salespromotion14', $salespromotion14);
		
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



$salespromotion1=get_option('salespromotion1');	
$salespromotion_t1=get_option('salespromotion_t1');	

$salespromotion2=get_option('salespromotion2');	
$salespromotion_t2=get_option('salespromotion_t2');	

$salespromotion3=get_option('salespromotion3');	
$salespromotion_t3=get_option('salespromotion_t3');	

$salespromotion4=get_option('salespromotion4');	
$salespromotion_t4=get_option('salespromotion_t4');	

$salespromotion5=get_option('salespromotion5');	
$salespromotion_t5=get_option('salespromotion_t5');	

$salespromotionq=get_option('salespromotionq');	
$salespromotion_tq=get_option('salespromotion_tq');	


$salespromotion6=get_option('salespromotion6');	
$salespromotion7=get_option('salespromotion7');	
$salespromotion8=get_option('salespromotion8');	

$salespromotion9=get_option('salespromotion9');	
$salespromotion0=get_option('salespromotion0');	
$salespromotion11=get_option('salespromotion11');	

$salespromotion12=get_option('salespromotion12');
$salespromotion13=get_option('salespromotion13');
$salespromotion14=get_option('salespromotion14');

theme_themepark_video('主题对woocommerce smart coupons优惠券插件进行的一些优化设置，需要安装woocommerce-smart-coupons才能使用');		

?>
<h3>智能优惠券凑单活动设置</h3>
<div style="width:90%; padding:5px 2.5%; background:#FFF4EE;"><p>说明：凑单的形式是WEB主题公园为了适应国内优惠券使用习惯而提供的，在使用此提示功能时，凑单优惠券的数量和使用限制不要设置，否则用户可能受到提示而看不到优惠券。<br />
 <a target="_blank" href="https://www.themepark.com.cn/woocommercesmartcouponsznyhqspja.html">【智能优惠券插件介绍和视频教程 -- 点击进入】</a> </p></div>
<?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade"><p>'.$text.'</p></div>'; } ?>

  <form method="post" action="<?php echo admin_url('admin.php?page=salespromotion'); ?>"class="xuanxiangka">
  <input type="hidden" size="60"  name="post_velue" value="yes"/>
  
  
  
  
  <table class="form-table">
      <tbody>
      
         <tr id="login">
               <th scope="row"><h2>购物车凑单文字提示</h2>
                </th>
                <td>
               
                </td>
            </tr>
    <tr>
            <th scope="row"><label for="salespromotiont9">提示标题</label>
                </th>
                <td>
                
                 <input  type="text" size="60"  name="salespromotion9" id="salespromotion9" value="<?php echo $salespromotion9; ?>"/>  <br />
     
                 <p>填写如：满就送折扣优惠</p>
                </td>
            </tr>
            
            
            <tr>
            <th scope="row"><label for="salespromotiont0">提示语</label>
                </th>
                <td>
                
                  <textarea rows="2" style="width:100%;" name="salespromotion0" id="salespromotion0"><?php echo $salespromotion0 ?></textarea>
     
                 <p>填写如：提示语，比如优惠券的使用是否可以多个优惠券同时使用？还是单独使用的？ 这些文字将帮助用户明白你的规则</p>
                </td>
            </tr>
 


   <tr>
             <th scope="row"><label for="salespromotion6">去凑单？</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion6" id="salespromotion6" value="<?php echo $salespromotion6; ?>"/>  <br /> <p>填写“去凑单”，或者其他文字，这个文有链接，可以连接到你的一个推荐产品地址</p>
   </td>
            </tr>
            
            
              <tr>
               <th scope="row"><label for="salespromotiont7">凑单url</label> </th>
               
                <td>
                
                 <input  type="text" size="60"  name="salespromotion7" id="salespromotion7" value="<?php echo $salespromotion7; ?>"/>  <br />
     
                 <p>凑单的URL</p>
                </td>
            </tr>
            
            
               <tr>
            <th scope="row"><label for="salespromotion8">还差</label>
                </th>
                <td>
                
                 <input  type="text" size="60"  name="salespromotion8" id="salespromotion8" value="<?php echo $salespromotion8; ?>"/>  <br />
     
                 <p>在上面填写完成之后，如果还差会显示还差多少金额可使用优惠，这里填写还差，或者还需要消费。</p>
                </td>
            </tr>


     <tr>
            <th scope="row"><label for="salespromotion11">可使用</label>
                </th>
                <td>
                
                 <input  type="text" size="60"  name="salespromotion11" id="salespromotion11" value="<?php echo $salespromotion11; ?>"/>  <br />
     
                 <p>如果金额达到要求，那么会提示可使用，你可以这样填写：点击下面优惠券使用！</p>
                </td>
            </tr>

  <tr>
            <th scope="row"><label for="salespromotion12">显示为一行一个</label>
                </th>
                <td>
                
                   <input type="checkbox" <?php if($salespromotion12){echo 'checked="checked" ';}; ?>size="60"  name="salespromotion12" id="salespromotion12" value="yes"/><br />

     
                 <p>显示模式默认为一行2个，如果你的活动提示语较多，或者每一个的活动提示语长度不同，那么一行两个可能会显示错位，你可以勾选这个选项，让提示一行一个。<br />
ps.当你有多个规则的时候，提示语可以尽可能字数一样并且简单，比如“满200送10”，那么显示一行两个较为美观，若提示语较多，那么可以选择一行一个，你可以尝试这个选项，调整到合适的显示方式。</p>
                </td>
            </tr>
            
            
          
  <tr>
            <th scope="row"><label for="salespromotion13">隐藏已达标的提示</label>
                </th>
                <td>
                
                   <input type="checkbox" <?php if($salespromotion13){echo 'checked="checked" ';}; ?>size="60"  name="salespromotion13" id="salespromotion13" value="hidden_dabiao"/><br />

     
                 <p>如果购物车总额已经达标，那么可使用的优惠券就会显示出来，如果你觉得已经显示了优惠券，提示是多余的话，可以勾选此选项隐藏已达标的提示，隐藏之后只显示不达标金额的提示</p>
                </td>
            </tr>
            
            
            <tr>
            <th scope="row"><label for="salespromotion14">隐藏优惠券码</label>
                </th>
                <td>
                
                   <input type="checkbox" <?php if($salespromotion14){echo 'checked="checked" ';}; ?>size="60"  name="salespromotion14" id="salespromotion14" value="hidden_dabiao"/><br />

     
                 <p>woocommerce优惠券是有一串优惠券码的，可以将这个代码发送给其他人使用，如果你的商城不希望用户互相赠送优惠券，或者优惠券码显示出来不美观，那么你可以隐藏优惠券代码，并且隐藏掉在结算页面中发送给其他人的选项。</p>
                </td>
            </tr>
            

       <!-------------------------------title---------------------------------------------------------------->  
      <tr id="login">
               <th scope="row"><h2>活动规则提示设置</h2>
                </th>
                <td>
               <p><strong>特别注意！ 活动金额从小到大的顺序！</strong></p>
                </td>
            </tr>
      <tr>
    
       <th scope="row"><label for="salespromotion1">活动金额1</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion1" id="salespromotion1" value="<?php echo $salespromotion1; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_t1" id="salespromotion_t1"><?php echo $salespromotion_t1 ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
                </td>
            </tr>
              <tr>
            <th scope="row"><label for="salespromotion1">活动金额2</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion2" id="salespromotion2" value="<?php echo $salespromotion2; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_t2" id="salespromotion_t2"><?php echo $salespromotion_t2 ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
                </td>
            </tr> 
             <tr>    
     <th scope="row"><label for="salespromotion3">活动金额3</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion3" id="salespromotion3" value="<?php echo $salespromotion3; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_t3" id="salespromotion_t3"><?php echo $salespromotion_t3 ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
                </td>
            </tr>
             <tr>
             <th scope="row"><label for="salespromotion4">活动金额4</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion4" id="salespromotion4" value="<?php echo $salespromotion4; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_t4" id="salespromotion_t4"><?php echo $salespromotion_t4 ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
                </td>
            </tr>
            
              <tr>
             <th scope="row"><label for="salespromotion5">活动金额5</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotion5" id="salespromotion5" value="<?php echo $salespromotion5; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_t5" id="salespromotion_t5"><?php echo $salespromotion_t5 ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
                </td>
            </tr>
            
            
              <tr>
             <th scope="row"><label for="salespromotionq">活动金额6</label>
                </th>
                <td>
               <input  type="text" size="60"  name="salespromotionq" id="salespromotionq" value="<?php echo $salespromotionq; ?>"/>  <br />

                 <p>购物车达到多少金额可以使用优惠？填写纯数字</p>
                 
                 <textarea rows="2" style="width:100%;" name="salespromotion_tq" id="salespromotion_tq"><?php echo $salespromotion_tq ?></textarea>
                 <p>提示语，例子：店庆全场大促销，满500送100</p>
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