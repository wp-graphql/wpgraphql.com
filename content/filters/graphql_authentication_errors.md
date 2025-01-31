---
title: "graphql_authentication_errors"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 399
---


If false, there are no authentication errors. If true, execution of the
GraphQL request will be prevented and an error will be thrown.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| authentication_errors | `bool` | Whether there are authentication errors with the request |
| request | `\WPGraphQL\Request` | Instance of the Request |




## Source

This filter is defined in [src/Request.php:399](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L399)


## Examples

```php
add_filter('graphql_authentication_errors', function($value, $authentication_errors, $request) {
    // Modify $value here
    return $value;
});
```