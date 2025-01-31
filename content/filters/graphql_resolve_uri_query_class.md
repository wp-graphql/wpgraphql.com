---
title: "graphql_resolve_uri_query_class"
since: "Unknown"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 164
---


Filter the query class used to resolve the URI. By default this is WP_Query.
This can be used by Extensions which use a different query class to resolve data.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_class | `class-string` | The query class used to resolve the URI. Defaults to WP_Query. |
| uri | `string` | The uri being searched. |
| content | `\WPGraphQL\AppContext` | The app context. |
| wp | `\WP` | WP object. |
| extra_query_vars | `array<string,mixed>\|string` | Any extra query vars to consider. |




## Source

This filter is defined in [src/Data/NodeResolver.php:164](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L164)


## Examples

```php
add_filter('graphql_resolve_uri_query_class', function($value, $query_class, $uri, $content, $wp, $extra_query_vars) {
    // Modify $value here
    return $value;
});
```