---
title: "graphql_is_graphql_http_request"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 198
---


Filter whether the request is a GraphQL HTTP Request. Default is false, as the majority
of WordPress requests are NOT GraphQL requests (at least today that's true 😆).
The request has to "prove" that it is indeed an HTTP request via HTTP for
this to be true.
Different servers _might_ have different needs to determine whether a request
is a GraphQL request.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_graphql_http_request | `bool` | Whether the request is a GraphQL HTTP Request. Default false. |




## Source

This filter is defined in [src/Router.php:198](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L198)


## Examples

```php
add_filter('graphql_is_graphql_http_request', function($value, $is_graphql_http_request) {
    // Modify $value here
    return $value;
});
```