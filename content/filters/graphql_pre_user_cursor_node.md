---
title: "graphql_pre_user_cursor_node"
since: "Unknown"
sourceFile: "src/Data/Cursor/UserCursor.php"
sourceLine: 79
---


If pre-hooked, return filtered node.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_user | `\WP_User\|null` | The pre-filtered user node. |
| offset | `int` | The cursor offset. |
| node | `\WPGraphQL\Data\Cursor\UserCursor` | The cursor instance. |



## Return Value

| Type | Description |
|------|-------------|
| `\WP_User\|null` | No description available. |



## Source

This filter is defined in [src/Data/Cursor/UserCursor.php:79](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/UserCursor.php#L79)


## Examples

```php
add_filter('graphql_pre_user_cursor_node', function($value, $pre_user, $offset, $node) {
    // Modify $value here
    return $value;
});
```