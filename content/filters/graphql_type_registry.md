---
title: "graphql_type_registry"
since: "0.0.5"
sourceFile: "src/WPGraphQL.php"
sourceLine: 922
---


Generate & Filter the schema.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| type_registry | `\WPGraphQL\Registry\TypeRegistry` | The TypeRegistry for the API |
| app_context | `\WPGraphQL\AppContext` | Object The AppContext object containing all of the |




## Source

This filter is defined in [src/WPGraphQL.php:922](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L922)


## Examples

```php
add_filter('graphql_type_registry', function($value, $type_registry, $app_context) {
    // Modify $value here
    return $value;
});
```