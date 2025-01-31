---
title: "graphql_pre_post_cursor_node"
since: "Unknown"
sourceFile: "src/Data/Cursor/PostObjectCursor.php"
sourceLine: 62
---


If pre-hooked, return filtered node.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_post | `\WP_Post\|null` | The pre-filtered post node. |
| offset | `int` | The cursor offset. |
| node | `\WPGraphQL\Data\Cursor\PostObjectCursor` | The cursor instance. |



## Return Value

| Type | Description |
|------|-------------|
| `\WP_Post\|null` | No description available. |



## Source

This filter is defined in [src/Data/Cursor/PostObjectCursor.php:62](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/PostObjectCursor.php#L62)


## Examples

```php
add_filter('graphql_pre_post_cursor_node', function($value, $pre_post, $offset, $node) {
    // Modify $value here
    return $value;
});
```