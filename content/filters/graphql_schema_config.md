---
title: "graphql_schema_config"
since: "0.0.9"
sourceFile: "src/WPSchema.php"
sourceLine: 51
---


Set the $filterable_config as the $config that was passed to the WPSchema when instantiated

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `\GraphQL\Type\SchemaConfig` | The config for the Schema. |
| type_registry | `\WPGraphQL\Registry\TypeRegistry` | The WPGraphQL type registry. |




## Source

This filter is defined in [src/WPSchema.php:51](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPSchema.php#L51)


## Examples

```php
add_filter('graphql_schema_config', function($value, $config, $type_registry) {
    // Modify $value here
    return $value;
});
```