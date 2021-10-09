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
    add_action(
        'rest_api_init',
        function() {
        $field = 'description';
        register_rest_field( 'post', $field, array(
            'get_callback'    => function ( $object ) use ( $field ) {
                                // Get field as single value from post meta.
                                return get_post_meta( $object['id'], $field, true );
                            },
            'update_callback' => null,
            'schema'          => null,
        ) );

        $field = 'priority';
                register_rest_field( 'post', $field, array(
                    'get_callback'    => function ( $object ) use ( $field ) {
                                        // Get field as single value from post meta.
                                        return get_post_meta( $object['id'], $field, true );
                                    },
            'update_callback' => null,
            'schema'          => null,
        ) );

        $field = 'completed';
                register_rest_field( 'post', $field, array(
                    'get_callback'    => function ( $object ) use ( $field ) {
                                        // Get field as single value from post meta.
                                        return get_post_meta( $object['id'], $field, true );
                                    },
            'update_callback' => null,
            'schema'          => null,
        ) );
    });
?>