<?php get_header();?>
<div class="content">
<?php 
	if("page" != get_option('show_on_front') ){echo '<div>请设置一个静态页面为首页！</div>';}
	?>
</div>

<?php get_footer(); ?>