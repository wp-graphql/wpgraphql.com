---
title: "graphql_show_admin"
since: "Unknown"
sourceFile: "src/Admin/Admin.php"
sourceLine: 49
---


Initialize Admin functionality for WPGraphQL

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `void` | No description available. |



## Source

This filter is defined in [src/Admin/Admin.php:49](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Admin.php#L49)


## Examples

```php
add_filter('graphql_show_admin', function($value) {
    // Modify $value here
    return $value;
});
```