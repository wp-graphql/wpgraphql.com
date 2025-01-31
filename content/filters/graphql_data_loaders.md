---
title: "graphql_data_loaders"
since: "Unknown"
sourceFile: "src/AppContext.php"
sourceLine: 135
---


This filters the data loaders, allowing for additional loaders to be
added to the AppContext or for existing loaders to be replaced if
needed.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/AppContext.php:135](https://github.com/wp-graphql/wp-graphql/blob/develop/src/AppContext.php#L135)


## Examples

```php
add_filter('graphql_data_loaders', function($value) {
    // Modify $value here
    return $value;
});
```