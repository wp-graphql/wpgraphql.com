---
title: "graphql_union_resolve_type"
since: "Unknown"
sourceFile: "src/Type/WPUnionType.php"
sourceLine: 73
---


Filter the resolve type method for all unions

## Parameters

| Name | Type | Description |
|------|------|-------------|
| type | `mixed` | The Type to resolve to, based on the object being resolved |
| obj | `mixed` | The Object being resolved |
| wp_union_type | `\WPGraphQL\Type\WPUnionType` | The WPUnionType instance |




## Source

This filter is defined in [src/Type/WPUnionType.php:73](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPUnionType.php#L73)


## Examples

```php
add_filter('graphql_union_resolve_type', function($value, $type, $obj, $wp_union_type) {
    // Modify $value here
    return $value;
});
```