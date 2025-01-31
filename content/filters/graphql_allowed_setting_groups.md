---
title: "graphql_allowed_setting_groups"
since: "Unknown"
sourceFile: "src/Data/DataSource.php"
sourceLine: 530
---


Filter the $allowed_settings to allow some to be enabled or disabled from showing in
the GraphQL Schema.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allowed_settings | `array<string,array<string,mixed>>` |  |




## Source

This filter is defined in [src/Data/DataSource.php:530](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/DataSource.php#L530)


## Examples

```php
add_filter('graphql_allowed_setting_groups', function($value, $allowed_settings) {
    // Modify $value here
    return $value;
});
```