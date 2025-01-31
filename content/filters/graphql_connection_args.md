---
title: "graphql_connection_args"
since: "1.11.0"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 225
---


Filters the GraphQL args before they are used in get_query_args().

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The GraphQL args passed to the resolver. |
| connection_resolver | `\WPGraphQL\Data\Connection\AbstractConnectionResolver` | Instance of the ConnectionResolver. |
| unfiltered_args | `array<string,mixed>` | Array of arguments input in the field as part of the GraphQL query. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:225](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L225)


## Examples

```php
add_filter('graphql_connection_args', function($value, $args, $connection_resolver, $unfiltered_args) {
    // Modify $value here
    return $value;
});
```