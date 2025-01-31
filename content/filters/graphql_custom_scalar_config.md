---
title: "graphql_custom_scalar_config"
since: "Unknown"
sourceFile: "src/Type/WPScalar.php"
sourceLine: 23
---


WPScalar constructor.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` |  |
| type_registry | `\WPGraphQL\Registry\TypeRegistry` |  |




## Source

This filter is defined in [src/Type/WPScalar.php:23](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPScalar.php#L23)


## Examples

```php
add_filter('graphql_custom_scalar_config', function($value, $config, $type_registry) {
    // Modify $value here
    return $value;
});
```