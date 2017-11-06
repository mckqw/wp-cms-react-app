<?php
   /*
   Plugin Name: Tasks
   Plugin URI:
   Description: Create your tasks directly in WordPress
   Version: 1.0
   Author: Matthew Clark
   Author URI:
   License: MIT
   */
    function task_add_json() {
        register_rest_field( 'post', 'description', array(
            'get_callback' => function( $post ) {
                return get_field('description');
            }
        ) );

        register_rest_field( 'post', 'priority ', array(
            'get_callback' => function( $post ) {
                return get_field('priority');
            }
        ) );

        register_rest_field( 'post', 'completed', array(
            'get_callback' => function( $post ) {
                return get_field('completed');
            }
        ) );
    }

    add_action( 'rest_api_init', 'task_add_json' );
?>