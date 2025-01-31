---
title: "graphql_connection_pre_should_execute"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 887
---


Filters whether or not the query should execute, BEFORE any data is fetched or altered.
This is evaluated based solely on the values passed to the constructor, before any data is fetched or altered, and is useful for shortcircuiting the Connection Resolver before any heavy logic is executed.
For more in-depth checks, use the `graphql_connection_should_execute` filter instead.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_execute | `bool` | Whether or not the query should execute. |
| source | `mixed` | The source that's passed down the GraphQL queries. |
| args | `array` | The inputArgs on the field. |
| context | `\WPGraphQL\AppContext` | The AppContext passed down the GraphQL tree. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down the GraphQL tree. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:887](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L887)


## Examples

```php
add_filter('graphql_connection_pre_should_execute', function($value, $should_execute, $source, $args, $context, $info) {
    // Modify $value here
    return $value;
});
```