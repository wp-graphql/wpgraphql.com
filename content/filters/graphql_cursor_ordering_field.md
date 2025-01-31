---
title: "graphql_cursor_ordering_field"
since: "Unknown"
sourceFile: "src/Data/Cursor/CursorBuilder.php"
sourceLine: 58
---


Filters the field used for ordering when cursors are used for pagination

## Parameters

| Name | Type | Description |
|------|------|-------------|
| field | `array<string,mixed>` | The field key, value, type and order |
| cursor_builder | `\WPGraphQL\Data\Cursor\CursorBuilder` | The CursorBuilder class |
| object_cursor | `object` | The Cursor class |




## Source

This filter is defined in [src/Data/Cursor/CursorBuilder.php:58](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Cursor/CursorBuilder.php#L58)


## Examples

```php
add_filter('graphql_cursor_ordering_field', function($value, $field, $cursor_builder, $object_cursor) {
    // Modify $value here
    return $value;
});
```