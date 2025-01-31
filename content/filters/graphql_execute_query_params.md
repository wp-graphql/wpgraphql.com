---
title: "graphql_execute_query_params"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 636
---


Allow the query string to be determined by a filter. Ex, when params->queryId is present, query can be retrieved.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Request.php:636](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L636)


## Examples

```php
add_filter('graphql_execute_query_params', function($value) {
    // Modify $value here
    return $value;
});
```