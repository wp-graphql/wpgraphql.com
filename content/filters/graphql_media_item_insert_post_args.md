---
title: "graphql_media_item_insert_post_args"
since: "Unknown"
sourceFile: "src/Data/MediaItemMutation.php"
sourceLine: 103
---


Filter the $insert_post_args

## Parameters

| Name | Type | Description |
|------|------|-------------|
| insert_post_args | `array<string,mixed>` | The array of $input_post_args that will be passed to wp_insert_attachment |
| input | `array<string,mixed>` | The data that was entered as input for the mutation |
| post_type_object | `\WP_Post_Type` | The post_type_object that the mutation is affecting |
| mutation_type | `string` | The type of mutation being performed (create, update, delete) |




## Source

This filter is defined in [src/Data/MediaItemMutation.php:103](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/MediaItemMutation.php#L103)


## Examples

```php
add_filter('graphql_media_item_insert_post_args', function($value, $insert_post_args, $input, $post_type_object, $mutation_type) {
    // Modify $value here
    return $value;
});
```