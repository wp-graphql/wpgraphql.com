---
title: "graphql_post_entities_allowed_post_types"
since: "0.0.2"
sourceFile: "src/WPGraphQL.php"
sourceLine: 706
---


Pass through a filter to allow the post_types to be modified.
For example if a certain post_type should not be exposed to the GraphQL API.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| post_type_names | `string[]` | Array of post type names. |
| post_type_objects | `\WP_Post_Type[]` | Array of post type objects. |




## Source

This filter is defined in [src/WPGraphQL.php:706](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L706)


## Examples

```php
add_filter('graphql_post_entities_allowed_post_types', function($value, $post_type_names, $post_type_objects) {
    // Modify $value here
    return $value;
});
```