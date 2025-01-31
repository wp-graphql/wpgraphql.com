---
title: "graphql_union_possible_types"
since: "Unknown"
sourceFile: "src/Type/WPUnionType.php"
sourceLine: 85
---


Filter the possible_types to allow systems to add to the possible resolveTypes.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| types | `mixed` | The possible types for the Union |
| config | `array<string,mixed>` | The config for the Union Type |
| wp_union_type | `\WPGraphQL\Type\WPUnionType` | The WPUnionType instance |



## Return Value

| Type | Description |
|------|-------------|
| `mixed\|array` | No description available. |



## Source

This filter is defined in [src/Type/WPUnionType.php:85](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPUnionType.php#L85)


## Examples

```php
add_filter('graphql_union_possible_types', function($value, $types, $config, $wp_union_type) {
    // Modify $value here
    return $value;
});
```