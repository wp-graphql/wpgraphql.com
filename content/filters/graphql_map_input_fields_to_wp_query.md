---
title: "graphql_map_input_fields_to_wp_query"
since: "0.0.5"
sourceFile: "src/Data/Connection/PostObjectConnectionResolver.php"
sourceLine: 431
---


Filter the input fields
This allows plugins/themes to hook in and alter what $args should be allowed to be passed
from a GraphQL Query to the WP_Query

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | The mapped query arguments |
| args | `array<string,mixed>` | Query "where" args |
| source | `mixed` | The query results for a query calling this |
| all_args | `array<string,mixed>` | All of the arguments for the query (not just the "where" args) |
| context | `\WPGraphQL\AppContext` | The AppContext object |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object |
| post_type | `mixed\|string\|string[]` | The post type for the query |




## Source

This filter is defined in [src/Data/Connection/PostObjectConnectionResolver.php:431](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/PostObjectConnectionResolver.php#L431)


## Examples

```php
add_filter('graphql_map_input_fields_to_wp_query', function($value, $query_args, $args, $source, $all_args, $context, $info, $post_type) {
    // Modify $value here
    return $value;
});
```