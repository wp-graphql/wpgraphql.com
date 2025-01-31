---
title: "graphql_post_object_create_default_post_status"
since: "Unknown"
sourceFile: "src/Mutation/PostObjectCreate.php"
sourceLine: 256
---


Filter the default post status to use when the post is initially created. Pass through a filter to
allow other plugins to override the default (for example, Edit Flow, which provides control over
customizing stati or various E-commerce plugins that make heavy use of custom stati)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| default_status | `string` | The default status to be used when the post is initially inserted |
| post_type_object | `\WP_Post_Type` | The Post Type that is being inserted |
| mutation_name | `string` | The name of the mutation currently in progress |




## Source

This filter is defined in [src/Mutation/PostObjectCreate.php:256](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/PostObjectCreate.php#L256)


## Examples

```php
add_filter('graphql_post_object_create_default_post_status', function($value, $default_status, $post_type_object, $mutation_name) {
    // Modify $value here
    return $value;
});
```