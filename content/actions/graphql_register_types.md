---
title: "graphql_register_types"
since: "Unknown"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 603
---


Fire an action as the type registry is initialized. This executes
before the `graphql_register_types` action to allow for earlier hooking

## Parameters

| Name | Type | Description |
|------|------|-------------|
| registry | `\WPGraphQL\Registry\TypeRegistry` | Instance of the TypeRegistry |


## Source

This action is defined in [src/Registry/TypeRegistry.php:603](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L603)


## Examples

```php
add_action('graphql_register_types', function($registry) {
    // Add your code here
});
```