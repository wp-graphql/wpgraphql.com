---
title: "graphql_get_setting_section_fields"
since: "Unknown"
sourceFile: "access-functions.php"
sourceLine: 825
---


Filter the section fields

## Parameters

| Name | Type | Description |
|------|------|-------------|
| section_fields | `array<string,mixed>` | The values of the fields stored for the section |
| section_name | `string` | The name of the section |
| default_value | `mixed` | The default value for the option being retrieved |




## Source

This filter is defined in [access-functions.php:825](https://github.com/wp-graphql/wp-graphql/blob/develop/access-functions.php#L825)


## Examples

```php
add_filter('graphql_get_setting_section_fields', function($value, $section_fields, $section_name, $default_value) {
    // Modify $value here
    return $value;
});
```