---
title: "graphql_setting_field_config"
since: "Unknown"
sourceFile: "src/Admin/Settings/SettingsRegistry.php"
sourceLine: 137
---


Filter the setting field config

## Parameters

| Name | Type | Description |
|------|------|-------------|
| field_config | `array<string,mixed>` | The field config for the setting |
| field_name | `string` | The name of the field (unfilterable in the config) |
| section | `string` | The slug of the section the field is registered to |




## Source

This filter is defined in [src/Admin/Settings/SettingsRegistry.php:137](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Settings/SettingsRegistry.php#L137)


## Examples

```php
add_filter('graphql_setting_field_config', function($value, $field_config, $field_name, $section) {
    // Modify $value here
    return $value;
});
```