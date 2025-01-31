---
title: "graphql_enable_graphiql"
since: "Unknown"
sourceFile: "src/Admin/Admin.php"
sourceLine: 50
---


Initialize Admin functionality for WPGraphQL

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `void` | No description available. |



## Source

This filter is defined in [src/Admin/Admin.php:50](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Admin.php#L50)


## Examples

```php
add_filter('graphql_enable_graphiql', function($value) {
    // Modify $value here
    return $value;
});
```