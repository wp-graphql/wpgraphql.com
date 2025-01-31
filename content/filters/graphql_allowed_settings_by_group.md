---
title: "graphql_allowed_settings_by_group"
since: "Unknown"
sourceFile: "src/Data/DataSource.php"
sourceLine: 474
---


Filter the $allowed_settings_by_group to allow enabling or disabling groups in the GraphQL Schema.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allowed_settings_by_group | `array<string,array<string,mixed>>` |  |




## Source

This filter is defined in [src/Data/DataSource.php:474](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/DataSource.php#L474)


## Examples

```php
add_filter('graphql_allowed_settings_by_group', function($value, $allowed_settings_by_group) {
    // Modify $value here
    return $value;
});
```