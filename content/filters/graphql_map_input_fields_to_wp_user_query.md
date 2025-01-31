---
title: "graphql_map_input_fields_to_wp_user_query"
since: "0.0.5"
sourceFile: "src/Data/Connection/UserConnectionResolver.php"
sourceLine: 260
---


Filter the input fields
This allows plugins/themes to hook in and alter what $args should be allowed to be passed
from a GraphQL Query to the WP_User_Query

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | The mapped query args |
| args | `array<string,mixed>` | The query "where" args |
| source | `mixed` | The query results of the query calling this relation |
| all_args | `array<string,mixed>` | Array of all the query args (not just the "where" args) |
| context | `\WPGraphQL\AppContext` | The AppContext object |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object |




## Source

This filter is defined in [src/Data/Connection/UserConnectionResolver.php:260](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/UserConnectionResolver.php#L260)


## Examples

```php
add_filter('graphql_map_input_fields_to_wp_user_query', function($value, $query_args, $args, $source, $all_args, $context, $info) {
    // Modify $value here
    return $value;
});
```