<?php 
function caseloop($modle,$btn,$btnicon,$seo2,$wtitlesize,$wtitlecolor,$wtitlehight,$btncolor,$first,$b2,$b1,$ii,$row,$cat_cs,$wtitlecolor2){
if($modle=="post_in_list2"){$ex_n=100;}else{$ex_n=200;}	

$tt1=styleinto($wtitlesize,"font-size","px").styleinto($wtitlecolor,"color");	
$tt2=styleinto($wtitlecolor2,"color");		
$btnstyle=styleinto($btncolor,"color").'border:1px solid'.$btncolor;	
$id =get_the_ID(); 	
$tit= get_the_title($id);
$post_thumbnail_id = get_post_thumbnail_id($id );
$tit= get_the_title($id);
 $cs=get_post_meta($id,"_canshu", true);

if($cat_cs&&$cat_cs!='0'){
						 for($i=0;$i<$cat_cs;$i++)  {
		 
	if($cs){
		if($cs[$i]["f2"]){$f2s='color:'.$cs[$i]["f2"].';';}else{$f2s=$cf5s;}	
			if($cs[$i]["f3"]){$f3s='font-weight: bold;';}else{$f3s='';}	
		$csli.='<li ><span >'.$cs[$i]["title"].'</span><span '.styleecho($f2s.$f3s).'>'.$cs[$i]["text"].'</span></li>';
	}else{$csli.='<li ><span >参数标题</span><span>参数内容</span></li>';}
		
	} $caul='<ul class="csbox_pt ov_'.$cat_cs.'">'.$csli.'</ul>';	
						 
					 }
	
	
if($b2){$b2s=styleecho(styleinto($b2,"background").'border:none');}	
if($b1){$b1s='style="max-height:'.$b1.'px;"';}		
if(get_post_meta($id, 'views', true) ){$getPostViews=get_post_meta($id, 'views', true); }else{$getPostViews='0';}	
	
 $des=   get_post_meta($id, "themepark_seo_description",true);
if(  $des){$excerp=mb_strimwidth(strip_tags($des),0,250,"...",'utf-8');}else{$excerp=mb_strimwidth(strip_tags(get_the_content($id)),0,250,"...",'utf-8');}	
	

	
$time='<time '.styleecho($tt2).'><i class="fa fa-calendar"></i>'.get_the_time('Y/m/d').'</time>';	

foreach((get_the_category()) as $category) { $cas.= '<a '.styleecho($tt2).' href="'. get_category_link($category->cat_ID).'">' .$category->cat_name .'</a> ';} 

$veiw=' <span '.styleecho($tt2).'><i class="fa fa-eye"></i>'.$getPostViews.'</span>';	
if($modle=="post_in_list3")	{$veiw='';}

$description='<div class="description"'.styleecho($color5).'>'.$time.$veiw.'</div>';	
if($modle=="post_in_list2")	{$description='';}		
	
if($first==true&&$ii==1){
	
	if($modle=="post_in_list1"){
			if($row==2||$row==4){$firsts='class="firstclass"';
								
								$wtitlehight=129;
								$b1s='style="max-height:318px;"';;
								}
		

		
		
			
		}else if($modle=="post_in_list2"){
				if($row<5){$firsts='class="firstclass"';}
	}else{$firsts='';}


}	else{$firsts='';}	
	
	
	
	
if($modle=="post_in_list2"){$excerp2='<figcaption><span>'.$excerp.'</span></figcaption>';}		
	if($modle!="post_in_list3"){
	if($modle=="post_in_list1"){
		 if($row<5){$src = wp_get_attachment_image_src( $post_thumbnail_id ,'thumbnail');}else{$src = wp_get_attachment_image_src( $post_thumbnail_id ,'medium');}
		
	}else if($modle=="post_in_list2"){
		
		if($row<5){$src = wp_get_attachment_image_src( $post_thumbnail_id ,'full');}elseif($row<6){$src = wp_get_attachment_image_src( $post_thumbnail_id ,'medium');}else{$src = wp_get_attachment_image_src( $post_thumbnail_id ,"thumbnail");}
		
	}
		
		else{$src = wp_get_attachment_image_src( $post_thumbnail_id ,"thumbnail");  }
	
if($row<5){if($first==true){if($ii==1){$src = wp_get_attachment_image_src( $post_thumbnail_id ,'full');}}}
if($src[0]){$srcsc=$src[0];}else{$srcsc=get_bloginfo('template_url').'/images/loading.png';}
$imgs='<div class="case_pic"title="'.$tit.'"'.$b1s.'>
<a href="'.get_permalink().'"target="_blank">
<figure '.$b1s.'>
<img class=" lazyload"  src="'.get_bloginfo('template_url').'/images/loading.png'.'"  data-src="'.$srcsc.'" alt='.$tit.'      />
'.$excerp2.'
</figure>
</a>
</div>';	
}
if($btn){
	if($btnicon){$btnicon='<i class="fa fa-'.$btnicon.'"></i>';}
	$btn='<a '.styleecho($btnstyle).'  href="'.get_permalink().'"target="_blank" class="btn_url">'.$btnicon.$btn.'</a>';
}	


	
$html.="<li ".$b2s." ".$firsts.">";	
$html.=$imgs;
$html.='<div class="case_text" title="'.$tit.'" '.styleecho(styleinto($wtitlehight,"height","px")).'>';	
$html.='<'.$seo2.' class="posts_titles" >
<a '.styleecho($tt1).' href="'.get_permalink().'"target="_blank">'.$tit.'</a>
</'.$seo2.'>'.$description.$caul;
if($modle!="post_in_list3"){$html.='<p '.styleecho($tt2).'>'.$excerp.'</p></div>';}	
$html.=$btn;
$html.="</li>";	
return $html;
}
