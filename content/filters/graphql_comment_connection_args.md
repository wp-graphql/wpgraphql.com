---
title: "graphql_comment_connection_args"
since: "1.11.0"
sourceFile: "src/Data/Connection/CommentConnectionResolver.php"
sourceLine: 238
---


Filters the GraphQL args before they are used in get_query_args().

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The GraphQL args passed to the resolver. |
| resolver | `self` | Instance of the ConnectionResolver |




## Source

This filter is defined in [src/Data/Connection/CommentConnectionResolver.php:238](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/CommentConnectionResolver.php#L238)


## Examples

```php
add_filter('graphql_comment_connection_args', function($value, $args, $resolver) {
    // Modify $value here
    return $value;
});
```