---
title: "graphql_get_extensions"
since: "Unknown"
sourceFile: "src/Admin/Extensions/Extensions.php"
sourceLine: 353
---


Filter the list of extensions, allowing other plugins to add or remove extensions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| extensions | `array<string,mixed>` | The list of extensions. |




## Source

This filter is defined in [src/Admin/Extensions/Extensions.php:353](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Extensions/Extensions.php#L353)


## Examples

```php
add_filter('graphql_get_extensions', function($value, $extensions) {
    // Modify $value here
    return $value;
});
```