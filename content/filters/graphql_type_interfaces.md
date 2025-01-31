---
title: "graphql_type_interfaces"
since: "Unknown"
sourceFile: "src/Type/WPInterfaceTrait.php"
sourceLine: 36
---


Filters the interfaces applied to an object type

## Parameters

| Name | Type | Description |
|------|------|-------------|
| interfaces | `string[]` | List of interfaces applied to the Object Type |
| config | `array<string,mixed>` | The config for the Object Type |
| type | `mixed\|\WPGraphQL\Type\WPInterfaceType\|\WPGraphQL\Type\WPObjectType` | The Type instance |




## Source

This filter is defined in [src/Type/WPInterfaceTrait.php:36](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPInterfaceTrait.php#L36)


## Examples

```php
add_filter('graphql_type_interfaces', function($value, $interfaces, $config, $type) {
    // Modify $value here
    return $value;
});
```