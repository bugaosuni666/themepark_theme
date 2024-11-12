<?php get_header();
global $wp_query;
$term_id = get_query_var('cat');
cat_html($term_id,'');
get_footer(); ?>
