---
title: "graphql_is_batch_queries_enabled"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 753
---


Filter whether batch queries are supported or not

## Parameters

| Name | Type | Description |
|------|------|-------------|
| batch_queries_enabled | `bool` | Whether Batch Queries should be enabled |
| params | `\GraphQL\Server\OperationParams` | Request operation params |




## Source

This filter is defined in [src/Request.php:753](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L753)


## Examples

```php
add_filter('graphql_is_batch_queries_enabled', function($value, $batch_queries_enabled, $params) {
    // Modify $value here
    return $value;
});
```