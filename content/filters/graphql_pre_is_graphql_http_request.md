---
title: "graphql_pre_is_graphql_http_request"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 148
---


Filter whether the request is a GraphQL HTTP Request. Default is null, as the majority
of WordPress requests are NOT GraphQL requests (at least today that's true 😆).
If this filter returns anything other than null, the function will return now and skip the
default checks.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_graphql_http_request | `bool` | Whether the request is a GraphQL HTTP Request. Default false. |




## Source

This filter is defined in [src/Router.php:148](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L148)


## Examples

```php
add_filter('graphql_pre_is_graphql_http_request', function($value, $is_graphql_http_request) {
    // Modify $value here
    return $value;
});
```