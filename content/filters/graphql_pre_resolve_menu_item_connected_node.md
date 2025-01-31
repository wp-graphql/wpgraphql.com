---
title: "graphql_pre_resolve_menu_item_connected_node"
since: "Unknown"
sourceFile: "src/Type/ObjectType/MenuItem.php"
sourceLine: 53
---


When this filter returns anything other than null it will be used as the resolved connection for the menu item's connected node, short-circuiting the default resolution.
This is useful since we often add taxonomy terms to menus but would prefer to represent the menu item in other ways.
E.g., a linked post object (or vice-versa).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| deferred_connection | `\GraphQL\Deferred` | The AbstractConnectionResolver's connection, or null to continue with the default resolution. |
| menu_item | `\WPGraphQL\Model\MenuItem` | The MenuItem model. |
| args | `array<string,mixed>` | The GraphQL args for the connection. |
| context | `\WPGraphQL\AppContext` | The AppContext object. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object. |
| object_id | `int` | The ID of the connected object. |
| object_type | `string` | The type of the connected object. |




## Source

This filter is defined in [src/Type/ObjectType/MenuItem.php:53](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/ObjectType/MenuItem.php#L53)


## Examples

```php
add_filter('graphql_pre_resolve_menu_item_connected_node', function($value, $deferred_connection, $menu_item, $args, $context, $info, $object_id, $object_type) {
    // Modify $value here
    return $value;
});
```