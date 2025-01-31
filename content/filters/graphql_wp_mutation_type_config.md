---
title: "graphql_wp_mutation_type_config"
since: "1.13.0"
sourceFile: "src/Type/WPMutationType.php"
sourceLine: 88
---


Filter the config of WPMutationType

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPMutationType when instantiating a new type |
| wp_mutation_type | `\WPGraphQL\Type\WPMutationType` | The instance of the WPMutationType class |




## Source

This filter is defined in [src/Type/WPMutationType.php:88](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPMutationType.php#L88)


## Examples

```php
add_filter('graphql_wp_mutation_type_config', function($value, $config, $wp_mutation_type) {
    // Modify $value here
    return $value;
});
```