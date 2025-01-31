---
title: "init_graphql_type_registry"
since: "Unknown"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 264
---


Fire an action as the Type registry is being initiated

## Parameters

| Name | Type | Description |
|------|------|-------------|
| registry | `\WPGraphQL\Registry\TypeRegistry` | Instance of the TypeRegistry |


## Source

This action is defined in [src/Registry/TypeRegistry.php:264](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L264)


## Examples

```php
add_action('init_graphql_type_registry', function($registry) {
    // Add your code here
});
```