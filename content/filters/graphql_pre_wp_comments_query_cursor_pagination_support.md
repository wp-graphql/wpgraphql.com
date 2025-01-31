---
title: "graphql_pre_wp_comments_query_cursor_pagination_support"
since: "Unknown"
sourceFile: "src/Data/Config.php"
sourceLine: 465
---


If pre-filter hooked, return $pre_pieces.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_pieces | `array<string,mixed>` | The pre-filtered comment query clauses. |
| pieces | `array<string,mixed>` | A compacted array of comment query clauses. |
| query | `\WP_Comment_Query` | Current instance of WP_Comment_Query, passed by reference. |




## Source

This filter is defined in [src/Data/Config.php:465](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Config.php#L465)


## Examples

```php
add_filter('graphql_pre_wp_comments_query_cursor_pagination_support', function($value, $pre_pieces, $pieces, $query) {
    // Modify $value here
    return $value;
});
```