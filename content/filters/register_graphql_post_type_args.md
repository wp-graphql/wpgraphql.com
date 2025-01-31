---
title: "register_graphql_post_type_args"
since: "Unknown"
sourceFile: "src/WPGraphQL.php"
sourceLine: 599
---


Filters the graphql args set on a post type

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The graphql specific args for the post type |
| post_type_name | `string` | The name of the post type being registered |




## Source

This filter is defined in [src/WPGraphQL.php:599](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L599)


## Examples

```php
add_filter('register_graphql_post_type_args', function($value, $args, $post_type_name) {
    // Modify $value here
    return $value;
});
```