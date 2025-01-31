---
title: "graphql_pre_term_cursor_node"
since: "Unknown"
sourceFile: "src/Data/Cursor/TermObjectCursor.php"
sourceLine: 62
---


If pre-hooked, return filtered node.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_term | `\WP_Term\|null` | The pre-filtered term node. |
| offset | `int` | The cursor offset. |
| node | `\WPGraphQL\Data\Cursor\TermObjectCursor` | The cursor instance. |



## Return Value

| Type | Description |
|------|-------------|
| `\WP_Term\|null` | No description available. |



## Source

This filter is defined in [src/Data/Cursor/TermObjectCursor.php:62](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/TermObjectCursor.php#L62)


## Examples

```php
add_filter('graphql_pre_term_cursor_node', function($value, $pre_term, $offset, $node) {
    // Modify $value here
    return $value;
});
```