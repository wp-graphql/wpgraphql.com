---
title: "graphql_excluded_connections"
since: "1.14.0"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 1340
---


Filter the list of GraphQL connections to excluded from the registry.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| excluded_connections | `string[]` | The names of the GraphQL connections to exclude. |




## Source

This filter is defined in [src/Registry/TypeRegistry.php:1340](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L1340)


## Examples

```php
add_filter('graphql_excluded_connections', function($value, $excluded_connections) {
    // Modify $value here
    return $value;
});
```