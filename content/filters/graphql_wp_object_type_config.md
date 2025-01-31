---
title: "graphql_wp_object_type_config"
since: "Unknown"
sourceFile: "src/Type/WPObjectType.php"
sourceLine: 76
---


Filter the config of WPObjectType

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPObjectType when instantiating a new type |
| wp_object_type | `\WPGraphQL\Type\WPObjectType` | The instance of the WPObjectType class |




## Source

This filter is defined in [src/Type/WPObjectType.php:76](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPObjectType.php#L76)


## Examples

```php
add_filter('graphql_wp_object_type_config', function($value, $config, $wp_object_type) {
    // Modify $value here
    return $value;
});
```