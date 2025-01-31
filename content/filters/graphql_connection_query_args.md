---
title: "graphql_connection_query_args"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 239
---


Filters the query args before they are used in the query.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_args | `array<string,mixed>` | The query args to be used with the executable query to get data. |
| connection_resolver | `\WPGraphQL\Data\Connection\AbstractConnectionResolver` | Instance of the ConnectionResolver |
| unfiltered_args | `array<string,mixed>` | Array of arguments input in the field as part of the GraphQL query. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:239](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L239)


## Examples

```php
add_filter('graphql_connection_query_args', function($value, $query_args, $connection_resolver, $unfiltered_args) {
    // Modify $value here
    return $value;
});
```