---
title: "graphql_add_admin_notice"
since: "Unknown"
sourceFile: "src/Admin/AdminNotices.php"
sourceLine: 154
---


Pass the notice through a filter before registering it

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | The config of the admin notice |
| slug | `string` | The slug identifying the admin notice |




## Source

This filter is defined in [src/Admin/AdminNotices.php:154](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/AdminNotices.php#L154)


## Examples

```php
add_filter('graphql_add_admin_notice', function($value, $config, $slug) {
    // Modify $value here
    return $value;
});
```