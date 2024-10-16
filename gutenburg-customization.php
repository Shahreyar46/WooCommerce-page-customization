<?php
/**
 * Plugin Name:      Gutenburg Customization
 * Plugin URI:       https://echorewards.pro
 * Description:       Customize Woocommerce cart and checkout pages
 * Version:           1.0.0
 * Author:            WPPOOL
 * Author URI:        https://echorewards.pro/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       gutenburg-customization
 * Domain Path: /languages/
 * Requires at least: 5.0
 * Tested up to:      6.5
 *
 */

 function register_block_editor_scripts() {
	$script_path       = '/build/index.js';
	$script_url        = plugins_url( 'gutenburg-customization' . $script_path, __FILE__ );

	wp_register_script(
		'gutenburg-custom-block-editor',
		$script_url,
		array( 'wc-blocks-checkout', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n' ),
		'1.0.0',
		true
	);

	wp_enqueue_script( 'gutenburg-custom-block-editor' );
}

function register_block_frontend_scripts() {
	$script_path = '/build/frontend.js';
	$script_url  = plugins_url( 'gutenburg-customization' . $script_path, __FILE__ );

	wp_register_script(
		'gutenburg-custom-frontend',
		$script_url,
		array( 'wc-blocks-checkout', 'wp-element', 'wp-i18n' ),
		'1.0.0',
		true
	);

	wp_enqueue_script( 'gutenburg-custom-frontend' );
}


add_action( 'enqueue_block_editor_assets', 'register_block_editor_scripts' );
add_action( 'wp_enqueue_scripts', 'register_block_frontend_scripts' );
