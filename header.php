<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes();?> >
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<title><?php theme_titles(); ?></title>

<meta name="keywords" content="<?php theme_keyworeds() ?>" />
<meta name="description" content="<?php theme_description() ?>" />
<?php if (is_search()) { ?><meta name="robots" content="noindex, nofollow" /> <?php } ;?>

<?php wp_head(); 
echo stripslashes(get_option('code_in_head'));
if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

<!--[if lt IE 9]>
<script> 
(function() {
     if (! 
     /*@cc_on!@*/
     0) return;
     var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
     var i= e.length;
     while (i--){
         document.createElement(e[i])
     } 
})() 
</script>
<![endif]-->
	
</head>

<body <?php body_class(); themepark_meta_inbody();?> >

	<?php themepark_heaer(); ?>



	

	
