---
title: "graphql_connection_max_query_amount"
since: "0.0.6"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 618
---


Filter the maximum number of posts per page that should be queried. This prevents queries from being exceedingly resource intensive.
The default is 100 - unless overloaded by ::max_query_amount() in the child class.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| max_posts | `int` | the maximum number of posts per page. |
| source | `mixed` | source passed down from the resolve tree |
| args | `array<string,mixed>` | array of arguments input in the field as part of the GraphQL query |
| context | `\WPGraphQL\AppContext` | Object containing app context that gets passed down the resolve tree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | Info about fields passed down the resolve tree |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:618](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L618)


## Examples

```php
add_filter('graphql_connection_max_query_amount', function($value, $max_posts, $source, $args, $context, $info) {
    // Modify $value here
    return $value;
});
```