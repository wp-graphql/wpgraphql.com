---
title: "graphql_post_object_cursor_meta_key"
since: "Unknown"
sourceFile: "src/Data/Cursor/PostObjectCursor.php"
sourceLine: 261
---


Allow filtering the meta key used for cursor based pagination

## Parameters

| Name | Type | Description |
|------|------|-------------|
| key | `string` | The meta key to use for cursor based pagination |
| meta_key | `string` | The original meta key |
| meta_type | `string` | The meta type |
| order | `string` | The order direction |
| cursor | `object` | The PostObjectCursor instance |




## Source

This filter is defined in [src/Data/Cursor/PostObjectCursor.php:261](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/PostObjectCursor.php#L261)


## Examples

```php
add_filter('graphql_post_object_cursor_meta_key', function($value, $key, $meta_key, $meta_type, $order, $cursor) {
    // Modify $value here
    return $value;
});
```