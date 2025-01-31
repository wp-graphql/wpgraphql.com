---
title: "graphql_type_name"
since: "Unknown"
sourceFile: "src/Type/WPUnionType.php"
sourceLine: 39
---


Set the Types to start with capitals

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Type/WPUnionType.php:39](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPUnionType.php#L39)


## Examples

```php
add_filter('graphql_type_name', function($value) {
    // Modify $value here
    return $value;
});
```