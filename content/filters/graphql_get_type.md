---
title: "graphql_get_type"
since: "Unknown"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 852
---


Given a type name, returns the type or null if not found

## Parameters

| Name | Type | Description |
|------|------|-------------|
| type_name | `string` | The name of the Type to get from the registry |



## Return Value

| Type | Description |
|------|-------------|
| `mixed\|array<string,mixed>\|\GraphQL\Type\Definition\Type\|null` | No description available. |



## Source

This filter is defined in [src/Registry/TypeRegistry.php:852](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L852)


## Examples

```php
add_filter('graphql_get_type', function($value, $type_name) {
    // Modify $value here
    return $value;
});
```