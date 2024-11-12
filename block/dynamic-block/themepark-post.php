<?php
/**
 * 动态区块回调函数
 * 处理动态函数的效果输出
 * @author url 	    http://www.themepark.com.cn
 * @author 		themepark
 * @package 	themepark/ callback functions
 * @version     1.0
 */
function themepark_post_render_callback($att) {
$boder="";$tt1='';$tt2='';$titlebodercs="";$titleboders="";$tb="";$tb2="";$titletexts='';$btn='';$scs='';$fs=' nobig';$post_rand='';
	   $post_rand=$att['post_rand'];
   		$boder=styleinto($att['bodycolor'],"background-color").styleinto($att['borderradius'],"border-radius",'px').styleinto($att['marginbottm'],"margin-bottom",'px');
	    $tt1=styleinto($att['title1color'],"color").styleinto($att['title1size'],"font-size","px");
		$tt2=styleinto($att['title2color'],"color").styleinto($att['title2size'],"font-size","px");
		$titlebodercs=stylehasdefault($att['titleboderc'],"#ccc");
		$titleboders="border-bottom:".stylehasdefault($att['titleboder'],0)."px solid ".$titlebodercs.";";
		$titletexts='style="color:'.$att['titlecolor'].';font-size:'.$att['tiletextsize'].'px;"';
		$tb2=$titleboders;
	$sticky=get_option( 'sticky_posts' );
	    $cat= no_cat_id($att['cats']);
        $tag= no_tag_id($att['tags'],'');
	if($att['btn']){
		if($att['btnicon']){$btnicon='<i class="'.$att['btnicon'].'"></i>';}else{$btnicon='';}
		
		if($att['btnc']){
			if($att['btnt']==true){$scs="color:".$att['btnc'].";border:1px solid ".$att['btnc'].";background:none;";  }
			else if($att['btnt2']==true){$scs="color:".$att['btnc'].";padding:2px 0;background:none;";}
			else{$scs="background:".$att['btnc'].";";}
			
		}
		if($att['btnurl']&&!$att['load']){$btnurl='href="'.$att['btnurl'].'"';}
		if($att['load']){$btnclass=' ajaxbtn';}else{$btnclass=' linkbtn';}
		$btn='<a '.$btnurl.' class="bttombtn'.$btnclass.'" style="'.$scs.'">'.$btnicon.$att['btn'].'</a>';
		$btn2=$btn;
		if($att['btnmolde']==true){$btn3=$btn;$btn2='';}else{$btn3='';}
	}
if(!$att['row']){$row=4;}else{$row=$att['row'];}	
if($att['first']==true){	
if(stylehasdefault($att['modle'],"post_in_list1")==="post_in_list1"){
			if($row==2||$row==4){$fs=' firstbig';}
			
		}else if($att['modle']=="post_in_list2"){
				if($row<5){$fs=' firstbig';}
			
		}	}
	
if($att['titletext']){$titletext='<font class="titletext" '.$titletexts.' ><span>'.$att['titletext'].'</span></font>';}	
if($att['title']){
	$head='<div  class="post_in_list_head '.stylehasdefault($att['title1mode'],"modle_title1").'">
	<'.stylehasdefault($att['seo2'],"h3").' class="main-title"'.styleecho($tt1).'>'.$att['title'].'</'.stylehasdefault($att['seo2'],"h3").'>
	<span class="as-title" '.styleecho($tt2).'>'.$att['title2'].'</span>'.$btn3.'<div class="title_boout"><div class="title_bo" '.styleecho($tb2).'></div></div>'.$titletext.'</div>';
	}
	
if($att['load']==2){$loadclass=' swpost ';}elseif($att['load']==1){$loadclass=' adpost ';}else{$loadclass='';}	
$querycs='data-cat="'.$cat.'"data-tag="'.$tag.'"data-nb="'.$att['nb'].'"data-rand="'.$post_rand.'"data-page="2" data-modle="'.$att['modle'].'"data-pbtn="'.$att['pbtn'].'"data-pbtnicon="'.$att['pbtnicon'].'"data-seo2="'.$att['seo2'].'"data-wtitlesize="'.$att['wtitlesize'].'"data-wtitlecolor="'.$att['wtitlecolor'].'"data-wtitlehight="'.$att['wtitlehight'].'"data-btncolor="'.$att['btncolor'].'"data-first="'.$att['first'].'"data-b2="'.$att['b2'].'"data-b1="'.$att['b1'].'"data-row="'.$row.'"data-canshu="'.$att['canshu'].'"';
				
				//,$b2,$b1,$row,$canshu
				
$html.='<div id="'.stylehasdefault($att['modle'],"post_in_list1").'" class="'.$loadclass.'post_in_list_out '.$att['detects'].'" '.styleecho($boder).'>'.$head;	
$html.='<ul class="'.$loadclass.'post_in_list row'.$row.' '.$fs.'" '.$querycs.'>';	
if($cat||$tag){
	if($post_rand=="rand"){
		$args=array( 'cat' =>$cat,'tag'=>$tag, 'showposts' => $att['nb'] ,'orderby' =>'rand'); 
		
	}else if($post_rand=="zhiding"&&$sticky){
		
		$args=array( 'cat' =>$cat,'tag'=>$tag, 'showposts' => $att['nb'] ,'orderby' =>'date','order' =>'DESC','post__in'=>$sticky); 
	}else{
	$args=array( 'cat' =>$cat,'tag'=>$tag, 'showposts' => $att['nb'] ); }
	if(is_single()){
			$postids=get_the_ID();
			if($postids){$args['post__not_in']=array($postids);}
		}
	$query= new WP_Query($args);
	$ii=0;
	 if($query->have_posts()) :         
	while ($query->have_posts() ) :$query->the_post(); $ii++;
  $html.=caseloop(stylehasdefault($att['modle'],"post_in_list1"),$att['pbtn'],$att['pbtnicon'],stylehasdefault($att['seo2'],"h4"),$att['wtitlesize'],$att['wtitlecolor'],$att['wtitlehight'],$att['btncolor'],$att['first'],$att['b2'],$att['b1'],$ii,$row,$att['canshu'],$att['wtitlecolor2']);
	
	endwhile;  wp_reset_query();endif;	
}	

$html.='</ul><p class="lasetpost">'.$postish.'</p></div>'.$btn2.'</div>';






return $html; 
}





function themepark_header_render_callback($att){
	$id=get_the_ID();
	if($att['headinfo']){ update_post_meta($id, "_headinfo", $att['headinfo']);}
	if($att['top_left_txt1']){ update_post_meta($id, "_top_left_txt1", $att['top_left_txt1']);}
	if($att['top_left_txt2']){ update_post_meta($id, "_top_left_txt2", $att['top_left_txt2']);}
	if($att['icontext']){ update_post_meta($id, "_icontext", $att['icontext']);}
	 update_post_meta($id, "_headinfotop", $att['headinfotop']);
	update_post_meta($id, "_logoimg", $att['logoimg']);
	update_post_meta($id, "_hidesearch", $att['hidesearch']);
	$html=$att['logoimg'];
	return $html; 	
}



