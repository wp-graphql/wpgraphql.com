---
title: "graphql_interface_resolve_type"
since: "Unknown"
sourceFile: "src/Type/WPInterfaceType.php"
sourceLine: 64
---


Filter the resolve type method for all interfaces

## Parameters

| Name | Type | Description |
|------|------|-------------|
| type | `mixed` | The Type to resolve to, based on the object being resolved. |
| obj | `mixed` | The Object being resolved. |
| wp_interface_type | `\WPGraphQL\Type\WPInterfaceType` | The WPInterfaceType instance. |




## Source

This filter is defined in [src/Type/WPInterfaceType.php:64](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPInterfaceType.php#L64)


## Examples

```php
add_filter('graphql_interface_resolve_type', function($value, $type, $obj, $wp_interface_type) {
    // Modify $value here
    return $value;
});
```