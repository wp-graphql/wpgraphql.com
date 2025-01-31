---
title: "graphql_get_setting_section_field_value"
since: "Unknown"
sourceFile: "access-functions.php"
sourceLine: 844
---


Filter the value before returning it

## Parameters

| Name | Type | Description |
|------|------|-------------|
| value | `mixed` | The value of the field |
| default_value | `mixed` | The default value if there is no value set |
| option_name | `string` | The name of the option |
| section_fields | `array<string,mixed>` | The setting values within the section |
| section_name | `string` | The name of the section the setting belongs to |




## Source

This filter is defined in [access-functions.php:844](https://github.com/wp-graphql/wp-graphql/blob/develop/access-functions.php#L844)


## Examples

```php
add_filter('graphql_get_setting_section_field_value', function($value, $value, $default_value, $option_name, $section_fields, $section_name) {
    // Modify $value here
    return $value;
});
```