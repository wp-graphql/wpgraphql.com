---
title: "graphql_menu_item_connection_args"
since: "1.11.0"
sourceFile: "src/Data/Connection/MenuItemConnectionResolver.php"
sourceLine: 107
---


Filters the GraphQL args before they are used in get_query_args().

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The GraphQL args passed to the resolver. |
| unfiltered_args | `array<string,mixed>` | Array of arguments input in the field as part of the GraphQL query. |




## Source

This filter is defined in [src/Data/Connection/MenuItemConnectionResolver.php:107](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/MenuItemConnectionResolver.php#L107)


## Examples

```php
add_filter('graphql_menu_item_connection_args', function($value, $args, $unfiltered_args) {
    // Modify $value here
    return $value;
});
```