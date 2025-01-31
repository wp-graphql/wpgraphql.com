---
title: "graphql_response_headers_to_send"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 353
---


Filter the $headers to send

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Router.php:353](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L353)


## Examples

```php
add_filter('graphql_response_headers_to_send', function($value) {
    // Modify $value here
    return $value;
});
```