---
title: "graphql_excluded_types"
since: "1.13.0"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 1313
---


Filter the list of GraphQL types to exclude from the schema.
Note: using this filter directly will NOT remove the type from being referenced as a possible interface or a union type.
To remove a GraphQL from the schema **entirely**, please use deregister_graphql_type();

## Parameters

| Name | Type | Description |
|------|------|-------------|
| excluded_types | `string[]` | The names of the GraphQL Types to exclude. |




## Source

This filter is defined in [src/Registry/TypeRegistry.php:1313](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L1313)


## Examples

```php
add_filter('graphql_excluded_types', function($value, $excluded_types) {
    // Modify $value here
    return $value;
});
```