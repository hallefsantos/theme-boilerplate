<?php 
// Incluir outros arquivos/functions
require get_template_directory().'/include/setup.php';


// Hooks
add_action('wp_enqueue_scripts', 'm_theme_styles');
add_action('after_setup_theme', 'm_after_setup');


// Translate
load_theme_textdomain( 'nutrin', get_template_directory().'/languages' );