---
title: "graphql_register_types_late"
since: "Unknown"
sourceFile: "src/Registry/TypeRegistry.php"
sourceLine: 613
---


Fire an action as the type registry is initialized. This executes
during the `graphql_register_types` action to allow for earlier hooking

## Parameters

| Name | Type | Description |
|------|------|-------------|
| registry | `\WPGraphQL\Registry\TypeRegistry` | Instance of the TypeRegistry |


## Source

This action is defined in [src/Registry/TypeRegistry.php:613](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/TypeRegistry.php#L613)


## Examples

```php
add_action('graphql_register_types_late', function($registry) {
    // Add your code here
});
```