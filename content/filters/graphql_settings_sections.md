---
title: "graphql_settings_sections"
since: "Unknown"
sourceFile: "src/Admin/Settings/SettingsRegistry.php"
sourceLine: 167
---


Filter the settings sections

## Parameters

| Name | Type | Description |
|------|------|-------------|
| setting_sections | `array<string,array<string,mixed>>` | The registered settings sections |




## Source

This filter is defined in [src/Admin/Settings/SettingsRegistry.php:167](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Settings/SettingsRegistry.php#L167)


## Examples

```php
add_filter('graphql_settings_sections', function($value, $setting_sections) {
    // Modify $value here
    return $value;
});
```