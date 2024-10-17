<?php
/**
 * Plugin Name: Checkout Block Example
 */

add_action('init', function () {
    register_block_type(__DIR__);
});

add_action('woocommerce_blocks_checkout_block_registration', function ($integration_registry) {
    $integration_registry->register(new Blocks_Integration());
});

class Blocks_Integration implements \Automattic\WooCommerce\Blocks\Integrations\IntegrationInterface {
    public function get_name() {
        return 'checkout-block-example';
    }

    public function initialize() {}

    public function get_script_handles() {
        return ['checkout-block-frontend'];
    }

    public function get_editor_script_handles() {
        return ['gift-message-block-editor'];
    }

    public function register_block_editor_scripts() {
        wp_register_script(
            'gift-message-block-editor',
            plugins_url('build/index.js', __FILE__),
            include plugin_dir_path(__FILE__) . 'build/index.asset.php',
            true
        );
    }

    public function register_block_frontend_scripts() {
        wp_register_script(
            'checkout-block-frontend',
            plugins_url('build/frontend.js', __FILE__),
            include plugin_dir_path(__FILE__) . 'build/frontend.asset.php',
            true
        );
    }
}


add_action('woocommerce_store_api_checkout_update_order_from_request', function ($order, $request) {
    $data = $request['extensions']['checkout-block-example'] ?? [];
    $order->update_meta_data('Gift Message', $data['gift_message']);
}, 10, 2);
