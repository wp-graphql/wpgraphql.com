---
title: "graphql_wp_interface_type_config"
since: "Unknown"
sourceFile: "src/Type/WPInterfaceType.php"
sourceLine: 73
---


Filter the config of WPInterfaceType

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPInterfaceType when instantiating a new type |
| wp_interface_type | `\WPGraphQL\Type\WPInterfaceType` | The instance of the WPInterfaceType class |




## Source

This filter is defined in [src/Type/WPInterfaceType.php:73](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPInterfaceType.php#L73)


## Examples

```php
add_filter('graphql_wp_interface_type_config', function($value, $config, $wp_interface_type) {
    // Modify $value here
    return $value;
});
```