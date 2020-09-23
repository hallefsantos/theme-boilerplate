<?php 

function m_theme_styles() {

    /* CSS  FILES ========================================= */
    wp_enqueue_style('bootstrap-grid-css', 'https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css');
    wp_enqueue_style('swiper-js', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css');
    wp_enqueue_style('custom-css', get_template_directory_uri().'/assets/css/custom.css', array('bootstrap-grid-css'));
    
    /* JAVASCRIPT  FILES ========================================= */
    wp_enqueue_script('swiper-js', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js', array(), false, true);
    wp_enqueue_script('scripts-js', get_template_directory_uri().'/assets/js/scripts.js', array(), false, true);
}

function m_after_setup() {
    add_theme_support('menus'); //nas versoes novas não precisa deste código, só o de baixo.

    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    
    register_nav_menu('primary', 'Menu Primário');
}
?>