---
title: "graphql_connection_should_execute"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1065
---


Check if the connection should execute. If conditions are met that should prevent
the execution, we can bail from resolving early, before the query is executed.
Filter whether the connection should execute.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_execute | `bool` | Whether the connection should execute |
| connection_resolver | `\WPGraphQL\Data\Connection\AbstractConnectionResolver` | Instance of the Connection Resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1065](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1065)


## Examples

```php
add_filter('graphql_connection_should_execute', function($value, $should_execute, $connection_resolver) {
    // Modify $value here
    return $value;
});
```