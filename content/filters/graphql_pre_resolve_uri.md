---
title: "graphql_pre_resolve_uri"
since: "Unknown"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 117
---


When this filter return anything other than null, it will be used as a resolved node
and the execution will be skipped.
This is to be used in extensions to resolve their own nodes which might not use
WordPress permalink structure.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| node | `mixed\|null` | The node, defaults to nothing. |
| uri | `string` | The uri being searched. |
| content | `\WPGraphQL\AppContext` | The app context. |
| wp | `\WP` | WP object. |
| extra_query_vars | `array<string,mixed>\|string` | Any extra query vars to consider. |




## Source

This filter is defined in [src/Data/NodeResolver.php:117](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L117)


## Examples

```php
add_filter('graphql_pre_resolve_uri', function($value, $node, $uri, $content, $wp, $extra_query_vars) {
    // Modify $value here
    return $value;
});
```