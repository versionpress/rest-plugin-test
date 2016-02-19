<?php
/*
Plugin Name: REST Plugin Test
*/

defined('ABSPATH') or die("Direct access not allowed");

add_action('admin_menu', 'rest_plugin_admin_menu');
function rest_plugin_admin_menu() {
  add_menu_page(
    'REST Plugin Test',
    'REST Plugin Test',
    'manage_options',
    'rest_plugin_test',
    'rest_plugin_page',
    null,
    1
  );
}

function rest_plugin_page() {
  require_once(__DIR__ . '/index.php');
}