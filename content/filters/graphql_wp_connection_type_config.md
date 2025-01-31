---
title: "graphql_wp_connection_type_config"
since: "Unknown"
sourceFile: "src/Type/WPConnectionType.php"
sourceLine: 148
---


Filter the config of WPConnectionType

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPConnectionType when instantiating a new type |
| wp_connection_type | `\WPGraphQL\Type\WPConnectionType` | The instance of the WPConnectionType class |




## Source

This filter is defined in [src/Type/WPConnectionType.php:148](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPConnectionType.php#L148)


## Examples

```php
add_filter('graphql_wp_connection_type_config', function($value, $config, $wp_connection_type) {
    // Modify $value here
    return $value;
});
```