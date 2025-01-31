---
title: "graphql_field_definition"
since: "Unknown"
sourceFile: "src/Utils/InstrumentSchema.php"
sourceLine: 62
---


Filter the field definition

## Parameters

| Name | Type | Description |
|------|------|-------------|
| field | `\GraphQL\Type\Definition\FieldDefinition` | The field definition |
| type_name | `string` | The name of the Type the field belongs to |




## Source

This filter is defined in [src/Utils/InstrumentSchema.php:62](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/InstrumentSchema.php#L62)


## Examples

```php
add_filter('graphql_field_definition', function($value, $field, $type_name) {
    // Modify $value here
    return $value;
});
```