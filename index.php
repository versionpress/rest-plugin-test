<?php
defined('ABSPATH') or die("Direct access not allowed");

$apiConfig = array(
  'root' => get_site_url(),
  'urlPrefix' => rest_get_url_prefix(),
  'nonce' => wp_create_nonce('wp_rest')
);
?>

<div id="app"></div>

<script>
    var API_Config = <?php echo json_encode($apiConfig); ?>
</script>

<?php
wp_enqueue_script('rest_plugin_script', plugins_url('public/bundle.js', __FILE__));
?>
