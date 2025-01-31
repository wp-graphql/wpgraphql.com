---
title: "graphql_render_admin_page"
since: "Unknown"
sourceFile: "src/Admin/GraphiQL/GraphiQL.php"
sourceLine: 134
---


Render the markup to load GraphiQL to.

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `void` | No description available. |



## Source

This filter is defined in [src/Admin/GraphiQL/GraphiQL.php:134](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/GraphiQL/GraphiQL.php#L134)


## Examples

```php
add_filter('graphql_render_admin_page', function($value) {
    // Modify $value here
    return $value;
});
```