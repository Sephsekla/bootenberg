<?php
/**
 * Plugin Name: Bootenberg
 * Plugin URI: https://github.com/sephsekla/bootenberg
 * Description: Bringing the power of Bootstrap 4 to the Gutenberg Editor
 * Author: Joe Bailey-Roberts
 * Author URI: https://jbr.digital
 * Version: 1.2.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package bootenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
