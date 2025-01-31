---
title: "graphql_interface_fields"
since: "Unknown"
sourceFile: "src/Type/WPInterfaceType.php"
sourceLine: 108
---


Filter all interface fields, passing the $typename as a param
This is useful when several different types need to be easily filtered at once. . .for example,
if ALL types with a field of a certain name needed to be adjusted, or something to that tune

## Parameters

| Name | Type | Description |
|------|------|-------------|
| fields | `array<string,array<string,mixed>>` | The array of fields for the object config |
| type_name | `string` | The name of the object type |




## Source

This filter is defined in [src/Type/WPInterfaceType.php:108](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPInterfaceType.php#L108)


## Examples

```php
add_filter('graphql_interface_fields', function($value, $fields, $type_name) {
    // Modify $value here
    return $value;
});
```