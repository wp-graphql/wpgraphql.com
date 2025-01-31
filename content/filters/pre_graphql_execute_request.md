---
title: "pre_graphql_execute_request"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 695
---


Get the response.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Request.php:695](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L695)


## Examples

```php
add_filter('pre_graphql_execute_request', function($value) {
    // Modify $value here
    return $value;
});
```