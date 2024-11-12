<?php get_header();
if($_GET["cat"]){$term_id = $_GET["cat"];}

cat_html($term_id,'search');
get_footer(); ?>
