---
title: "graphql_excluded_mutations"
since: "1.14.0"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 1366
---


Filter the list of GraphQL mutations to excluded from the registry.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| excluded_mutations | `string[]` | The names of the GraphQL mutations to exclude. |




## Source

This filter is defined in [src/Registry/TypeRegistry.php:1366](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L1366)


## Examples

```php
add_filter('graphql_excluded_mutations', function($value, $excluded_mutations) {
    // Modify $value here
    return $value;
});
```