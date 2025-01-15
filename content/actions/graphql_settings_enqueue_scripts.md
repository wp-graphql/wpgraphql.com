---
title: "graphql_settings_enqueue_scripts"
since: "Unknown"
sourceFile: "src/Admin/Settings/SettingsRegistry.php"
sourceLine: 72
---


Enqueue scripts and styles

## Parameters

| Name | Type | Description |
|------|------|-------------|
| hook_suffix | `string` | The current admin page. |


## Source

This action is defined in [src/Admin/Settings/SettingsRegistry.php:72](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Settings/SettingsRegistry.php#L72)


## Examples

```php
add_action('graphql_settings_enqueue_scripts', function($hook_suffix) {
    // Add your code here
});
```