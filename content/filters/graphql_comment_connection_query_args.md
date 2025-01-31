---
title: "graphql_comment_connection_query_args"
since: "0.0.6"
sourceFile: "src/Data/Connection/CommentConnectionResolver.php"
sourceLine: 135
---


Filters the query args used by the connection.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | array of query_args being passed to the |
| source | `mixed` | source passed down from the resolve tree |
| args | `array<string,mixed>` | array of arguments input in the field as part of the GraphQL query |
| context | `\WPGraphQL\AppContext` | object passed down the resolve tree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | info about fields passed down the resolve tree |




## Source

This filter is defined in [src/Data/Connection/CommentConnectionResolver.php:135](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/CommentConnectionResolver.php#L135)


## Examples

```php
add_filter('graphql_comment_connection_query_args', function($value, $query_args, $source, $args, $context, $info) {
    // Modify $value here
    return $value;
});
```