---
title: "graphql_pre_wp_user_query_cursor_pagination_support"
since: "Unknown"
sourceFile: "src/Data/Config.php"
sourceLine: 338
---


If pre-filter hooked, return $pre_where.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_where | `string\|null` | The pre-filtered WHERE clause of the query. |
| where | `string` | The WHERE clause of the query. |
| query | `\WP_User_Query` | The WP_Query instance (passed by reference). |



## Return Value

| Type | Description |
|------|-------------|
| `string\|null` | No description available. |



## Source

This filter is defined in [src/Data/Config.php:338](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Config.php#L338)


## Examples

```php
add_filter('graphql_pre_wp_user_query_cursor_pagination_support', function($value, $pre_where, $where, $query) {
    // Modify $value here
    return $value;
});
```