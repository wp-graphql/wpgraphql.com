---
title: "graphql_object_fields"
since: "Unknown"
sourceFile: "src/Type/WPObjectType.php"
sourceLine: 159
---


Filter all object fields, passing the $typename as a param
This is useful when several different types need to be easily filtered at once. . .for example,
if ALL types with a field of a certain name needed to be adjusted, or something to that tune

## Parameters

| Name | Type | Description |
|------|------|-------------|
| fields | `array<string,mixed>` | The array of fields for the object config |
| type_name | `string` | The name of the object type |
| wp_object_type | `\WPGraphQL\Type\WPObjectType` | The WPObjectType Class |
| type_registry | `\WPGraphQL\Registry\TypeRegistry` | The Type Registry |




## Source

This filter is defined in [src/Type/WPObjectType.php:159](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPObjectType.php#L159)


## Examples

```php
add_filter('graphql_object_fields', function($value, $fields, $type_name, $wp_object_type, $type_registry) {
    // Modify $value here
    return $value;
});
```