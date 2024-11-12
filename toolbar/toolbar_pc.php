<?php 
add_action('wp_footer','toolbar_pc');
function toolbar_pc(){
$mytheme_toolbar_PC_zx=get_option("mytheme_toolbar_PC_zx")	;
	$mytheme_toolbar_PC_zx1=get_option("mytheme_toolbar_PC_zx1")	;
	$mytheme_toolbar_nav2=get_option("mytheme_toolbar_nav2")	;
$mytheme_toolbar_nav=get_option("mytheme_toolbar_nav");
	$mytheme_toolbar_navwz=get_option("mytheme_toolbar_navwz");
	if($mytheme_toolbar_nav){
		if($mytheme_toolbar_nav2){$nav_bon='<div class="toolbar_btn PcOnly '.$mytheme_toolbar_nav2.' "><div class="nbts">1</div><i class="'.$mytheme_toolbar_PC_zx1.'"></i><span>'.$mytheme_toolbar_PC_zx.'</span></div>';$closebtn='<li class="toolbar-qq close_li"><a class="out ico_2"><i class="out fas fa-times"></i></a></li>';
								 
								 }else{$nav_bon='';$closebtn='';}
		
echo'<div class="toolbar_pc PcOnly '.$mytheme_toolbar_nav2.' '.$mytheme_toolbar_navwz.'"><ul class="toolbar_pc_ul">';	
 wp_nav_menu(array( 'walker' => new toobar_menu(),'container' => false,'menu' => $mytheme_toolbar_nav,'items_wrap' => '%3$s'  ) );	
echo $closebtn.'<ul></div>'.$nav_bon;	
 
	}	
};

