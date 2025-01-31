---
title: "graphql_resolve_uri"
since: "Unknown"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 207
---


When this filter return anything other than null, it will be used as a resolved node
and the execution will be skipped.
This is to be used in extensions to resolve their own nodes which might not use
WordPress permalink structure.
It differs from 'graphql_pre_resolve_uri' in that it has been called after the query has been run using the query vars.

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

This filter is defined in [src/Data/NodeResolver.php:207](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L207)


## Examples

```php
add_filter('graphql_resolve_uri', function($value, $node, $uri, $queried_object, $query, $content, $wp, $extra_query_vars) {
    // Modify $value here
    return $value;
});
```