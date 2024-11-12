<?php 

 class  header_menu extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		global $wp_query;
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$imgclasss=$attributes=$images_full=$imgclass='';
		$class_names = $value = ' ';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
		if(!$item->attr_title){$imgclass='class="imgclass"';$imgclasss=' noft';}
	
		$class_names = ' class="mu-slide  ' . esc_attr( $class_names ) .$imgclasss. '"';
       if($item->object == '_temp'){
		   //$contents=get_content($item->object_id);
		  $output.='<li id="menu-item-'. $item->ID . '"' . $value . $class_names .'><span>升级付费版解锁区块模板挂载在导航菜单上</span></li>'; 
		  
	   }else{
		
		
		$output .= $indent . '<li id="menu-item-'. $item->ID . '"' . $value . $class_names .'>';

		
		if($item->url!='#' ){$attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) .'"' : '';}
			$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
      
		$item_output = $args->before;
		$item_output .= '<a class="mu_a" '. $attributes.'>';
		$item_output .= $args->link_before . $args->link_after;
		 if(! empty( $item->description )){$item_output .= '<figure><img '.$images_full.' src=' .'"' . chact_url_http($item->description) .'"'.'alt="'.  apply_filters( 'the_title', $item->title, $item->ID ) . '"/></figure>';$iibc='class=jzs';}else{$iibc='class=nusw';}
		
		 $item_output .=  '<span '.$iibc.'>'. apply_filters( 'the_title', $item->title, $item->ID ).'</span>';
	
		$item_output .= '</a><i class="mu_i"></i>';
	
		$item_output .= $args->after;
}
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args, $id );
	}
};

class pic_full extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		global $wp_query;
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$item_output='';
		$class_names = $value =	$imgclasss=$attributes=$images_full=$mrfull=$onetitle=$urlss=' ';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
		if($item->title=="1"){ $mrfull="adpic";};
		if(! $item->description&&!$item->attr_title){ $onetitle='onetitle';}
		$class_names = ' class="' . esc_attr( $class_names ) .' '.$mrfull.' '.$onetitle.' "';
        
		$output .= $indent . '<div class="swiper-slide">';
     
		
		if($item->url!="#"){$urlss= ' href="' . esc_attr( $item->url ).'"' ;}
		$attributes .= ! empty( $item->url ) ?  $urlss  : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		
		$item_output = $args->before;
		$bage='style="background:center url('.$item->description.')"';
		$item_output .= '<a'. $attributes.' '.$bage.'>';
		$item_output .= $args->link_before . $args->link_after;
		$imgs_alt= $item->attr_title;
		
		 $item_output .= '<img src=' .'"' . chact_url_http($item->description) .'"'.'alt="'. $imgs_alt . '"/>';
		
		$item_output .= '</a>';
		
		$item_output .= '</div>';

		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args, $id );
	}
};




class text_nav extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		global $wp_query;
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$item_output='';
		$class_names = $value =	$imgclasss=$attributes=$images_full=$mrfull=$onetitle=$urlss=' ';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
		if($item->title=="1"){ $mrfull="adpic";};
		if(! $item->description&&!$item->attr_title){ $onetitle='onetitle';}
		$class_names = ' class="' . esc_attr( $class_names ) .' '.$mrfull.' '.$onetitle.' "';
        
	
     
		
		if($item->url!="#"){$urlss= ' href="' . esc_attr( $item->url ).'"' ;}
		$attributes .= ! empty( $item->url ) ?  $urlss  : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		

		
		$item_output .= '<a'. $attributes.'><i '.$class_names .' ></i>';
		
		$item_output .= apply_filters( 'the_title', $item->title, $item->ID );
		$item_output .= '</a>';
		


		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args, $id );
	}
};



class  toobar_menu extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		global $wp_query;
		$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
		$imgclasss=$attributes=$images_full=$imgclass='';
		$class_names = $value = ' ';

		$classes = empty( $item->classes ) ? array() : (array) $item->classes;

		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
		
	if($item->attr_title){$iconcolr='style="color:'.$item->attr_title.'"';}
		$class_names = ' class="out ' . esc_attr( $class_names ) .$imgclasss. '"';
       if($item->object == '_temp'){
		   //$contents=get_content($item->object_id);
		  $output.='<li>'; 
		   $item_output .='<span>不支持区块挂载</span>';
		   $item_output .= '</li>';
	   }else{
		
		if(! empty( $item->description )){$imglass=" nav_img";}
		$output .= $indent . '<li class="toolbar-qq'.$imglass.'">';

		
		if($item->url!='#' ){$attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) .'"' : '';}
			$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
      
		$item_output = $args->before;
		$item_output .= '<a class="out ico_2" '. $attributes.'>';
		
		$item_output .= $args->link_before . $args->link_after;
		 if(! empty( $item->description )){$item_output .= '<figure><img '.$images_full.' src=' .'"' . chact_url_http($item->description) .'"'.'alt="'.  apply_filters( 'the_title', $item->title, $item->ID ) . '"/></figure>';$iibc='class=jzs';}else{
			 $item_output .='<i  '.$iconcolr.$class_names.'></i>'; 
			  $item_output .=  '<span '.$iibc.'>'. apply_filters( 'the_title', $item->title, $item->ID ).'</span>';
		 }
		
		
	
		$item_output .= '</a>';
	
		$item_output .= $args->after;
}
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args, $id );
	}
};

