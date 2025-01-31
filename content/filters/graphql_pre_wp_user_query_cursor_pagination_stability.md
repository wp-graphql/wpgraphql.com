---
title: "graphql_pre_wp_user_query_cursor_pagination_stability"
since: "Unknown"
sourceFile: "src/Data/Config.php"
sourceLine: 287
---


If pre-filter hooked, return $pre_orderby.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| pre_orderby | `string\|null` | The pre-filtered ORDER BY clause of the query. |
| orderby | `string` | The ORDER BY clause of the query. |
| query | `\WP_User_Query` | The WP_User_Query instance (passed by reference). |



## Return Value

| Type | Description |
|------|-------------|
| `string\|null` | No description available. |



## Source

This filter is defined in [src/Data/Config.php:287](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Config.php#L287)


## Examples

```php
add_filter('graphql_pre_wp_user_query_cursor_pagination_stability', function($value, $pre_orderby, $orderby, $query) {
    // Modify $value here
    return $value;
});
```