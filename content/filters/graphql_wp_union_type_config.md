---
title: "graphql_wp_union_type_config"
since: "0.0.30"
sourceFile: "src/Type/WPUnionType.php"
sourceLine: 95
---


Filter the config of WPUnionType

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPUnionType when instantiating a new type |
| wp_union_type | `\WPGraphQL\Type\WPUnionType` | The instance of the WPUnionType class |




## Source

This filter is defined in [src/Type/WPUnionType.php:95](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPUnionType.php#L95)


## Examples

```php
add_filter('graphql_wp_union_type_config', function($value, $config, $wp_union_type) {
    // Modify $value here
    return $value;
});
```