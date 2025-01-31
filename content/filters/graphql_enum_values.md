---
title: "graphql_enum_values"
since: "Unknown"
sourceFile: "src/Type/WPEnumType.php"
sourceLine: 69
---


Filter all object fields, passing the $typename as a param
This is useful when several different types need to be easily filtered at once. . .for example,
if ALL types with a field of a certain name needed to be adjusted, or something to that tune

## Parameters

| Name | Type | Description |
|------|------|-------------|
| values | `array<string,mixed>` |  |




## Source

This filter is defined in [src/Type/WPEnumType.php:69](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPEnumType.php#L69)


## Examples

```php
add_filter('graphql_enum_values', function($value, $values) {
    // Modify $value here
    return $value;
});
```