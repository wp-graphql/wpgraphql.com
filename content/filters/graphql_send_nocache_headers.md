---
title: "graphql_send_nocache_headers"
since: "0.0.5"
sourceFile: "src/Router.php"
sourceLine: 343
---


Send nocache headers on authenticated requests.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| rest_send_nocache_headers | `bool` | Whether to send no-cache headers. |




## Source

This filter is defined in [src/Router.php:343](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L343)


## Examples

```php
add_filter('graphql_send_nocache_headers', function($value, $rest_send_nocache_headers) {
    // Modify $value here
    return $value;
});
```