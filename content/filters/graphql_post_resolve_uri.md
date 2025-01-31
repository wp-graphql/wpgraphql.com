---
title: "graphql_post_resolve_uri"
since: "Unknown"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 305
---


This filter provides a fallback for resolving nodes that were unable to be resolved by NodeResolver::resolve_uri.
This can be used by Extensions to resolve edge cases that are not handled by the core NodeResolver.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| node | `mixed\|null` | The node, defaults to nothing. |
| uri | `string` | The uri being searched. |
| queried_object | `\WP_Term\|\WP_Post_Type\|\WP_Post\|\WP_User\|null` | The queried object, if WP_Query returns one. |
| query | `\WP_Query` | The query object. |
| content | `\WPGraphQL\AppContext` | The app context. |
| wp | `\WP` | WP object. |
| extra_query_vars | `array<string,mixed>\|string` | Any extra query vars to consider. |




## Source

This filter is defined in [src/Data/NodeResolver.php:305](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L305)


## Examples

```php
add_filter('graphql_post_resolve_uri', function($value, $node, $uri, $queried_object, $query, $content, $wp, $extra_query_vars) {
    // Modify $value here
    return $value;
});
```