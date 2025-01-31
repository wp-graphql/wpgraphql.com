---
title: "graphql_pre_comment_cursor_node"
since: "Unknown"
sourceFile: "src/Data/Cursor/CommentObjectCursor.php"
sourceLine: 60
---


If pre-hooked, return filtered node.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_comment | `\WP_Comment\|null` | The pre-filtered comment node. |
| offset | `int` | The cursor offset. |
| node | `\WPGraphQL\Data\Cursor\CommentObjectCursor` | The cursor instance. |



## Return Value

| Type | Description |
|------|-------------|
| `\WP_Comment\|null` | No description available. |



## Source

This filter is defined in [src/Data/Cursor/CommentObjectCursor.php:60](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/CommentObjectCursor.php#L60)


## Examples

```php
add_filter('graphql_pre_comment_cursor_node', function($value, $pre_comment, $offset, $node) {
    // Modify $value here
    return $value;
});
```