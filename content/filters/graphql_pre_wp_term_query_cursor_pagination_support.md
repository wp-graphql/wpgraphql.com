---
title: "graphql_pre_wp_term_query_cursor_pagination_support"
since: "Unknown"
sourceFile: "src/Data/Config.php"
sourceLine: 390
---


If pre-filter hooked, return $pre_pieces.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_pieces | `array<string,mixed>` | The pre-filtered term query SQL clauses. |
| pieces | `array<string,mixed>` | Terms query SQL clauses. |
| taxonomies | `string[]` | An array of taxonomies. |
| args | `array<string,mixed>` | An array of terms query arguments. |




## Source

This filter is defined in [src/Data/Config.php:390](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Config.php#L390)


## Examples

```php
add_filter('graphql_pre_wp_term_query_cursor_pagination_support', function($value, $pre_pieces, $pieces, $taxonomies, $args) {
    // Modify $value here
    return $value;
});
```