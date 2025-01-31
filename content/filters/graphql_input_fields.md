---
title: "graphql_input_fields"
since: "Unknown"
sourceFile: "src/Type/WPInputObjectType.php"
sourceLine: 71
---


Filter all object fields, passing the $typename as a param
This is useful when several different types need to be easily filtered at once. . .for example,
if ALL types with a field of a certain name needed to be adjusted, or something to that tune

## Parameters

| Name | Type | Description |
|------|------|-------------|
| fields | `array<string,array<string,mixed>>` | The array of fields for the object config |
| type_name | `string` | The name of the object type |
| config | `array<string,mixed>` | The type config |
| type_registry | `\WPGraphQL\Registry\TypeRegistry` | The TypeRegistry instance |




## Source

This filter is defined in [src/Type/WPInputObjectType.php:71](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPInputObjectType.php#L71)


## Examples

```php
add_filter('graphql_input_fields', function($value, $fields, $type_name, $config, $type_registry) {
    // Modify $value here
    return $value;
});
```