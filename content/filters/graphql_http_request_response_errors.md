---
title: "graphql_http_request_response_errors"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 488
---


Filter thrown GraphQL errors

## Parameters

| Name | Type | Description |
|------|------|-------------|
| errors | `mixed[]` | Formatted errors object. |
| error | `\Throwable` | Thrown error. |
| request | `\WPGraphQL\Request` | WPGraphQL Request object. |




## Source

This filter is defined in [src/Router.php:488](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L488)


## Examples

```php
add_filter('graphql_http_request_response_errors', function($value, $errors, $error, $request) {
    // Modify $value here
    return $value;
});
```