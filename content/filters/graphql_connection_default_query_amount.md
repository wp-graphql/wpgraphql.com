---
title: "graphql_connection_default_query_amount"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 922
---


Filters the default query amount for a connection, if no `first` or `last` GraphQL argument is supplied.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| amount_requested | `int` | The default query amount for a connection. |
| resolver | `self` | Instance of the Connection Resolver. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:922](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L922)


## Examples

```php
add_filter('graphql_connection_default_query_amount', function($value, $amount_requested, $resolver) {
    // Modify $value here
    return $value;
});
```