---
title: "graphql_post_object_connection_query_args"
since: "Unknown"
sourceFile: "src/Data/Connection/PostObjectConnectionResolver.php"
sourceLine: 360
---


Filter the $query args to allow folks to customize queries programmatically

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | The args that will be passed to the WP_Query |
| source | `mixed` | The source that's passed down the GraphQL queries |
| args | `array<string,mixed>` | The inputArgs on the field |
| context | `\WPGraphQL\AppContext` | The AppContext passed down the GraphQL tree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down the GraphQL tree |




## Source

This filter is defined in [src/Data/Connection/PostObjectConnectionResolver.php:360](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/PostObjectConnectionResolver.php#L360)


## Examples

```php
add_filter('graphql_post_object_connection_query_args', function($value, $query_args, $source, $args, $context, $info) {
    // Modify $value here
    return $value;
});
```