---
title: "graphql_map_input_fields_to_get_terms"
since: "0.0.5"
sourceFile: "src/Data/Connection/TermObjectConnectionResolver.php"
sourceLine: 237
---


Filter the input fields
This allows plugins/themes to hook in and alter what $args should be allowed to be passed
from a GraphQL Query to the get_terms query

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | Array of mapped query args |
| where_args | `array<string,mixed>` | Array of query "where" args |
| taxonomy | `array<string>\|string` | The name of the taxonomy |
| source | `mixed` | The query results |
| all_args | `array<string,mixed>` | All of the query arguments (not just the "where" args) |
| context | `\WPGraphQL\AppContext` | The AppContext object |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object |




## Source

This filter is defined in [src/Data/Connection/TermObjectConnectionResolver.php:237](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/TermObjectConnectionResolver.php#L237)


## Examples

```php
add_filter('graphql_map_input_fields_to_get_terms', function($value, $query_args, $where_args, $taxonomy, $source, $all_args, $context, $info) {
    // Modify $value here
    return $value;
});
```