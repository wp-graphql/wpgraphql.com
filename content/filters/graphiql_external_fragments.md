---
title: "graphiql_external_fragments"
since: "Unknown"
sourceFile: "src/Admin/GraphiQL/GraphiQL.php"
sourceLine: 185
---


Enqueues the stylesheet and js for the WPGraphiQL app

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `void` | No description available. |



## Source

This filter is defined in [src/Admin/GraphiQL/GraphiQL.php:185](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/GraphiQL/GraphiQL.php#L185)


## Examples

```php
add_filter('graphiql_external_fragments', function($value) {
    // Modify $value here
    return $value;
});
```