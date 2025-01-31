---
title: "graphql_query_id_hash_algorithm"
since: "Unknown"
sourceFile: "src/Utils/Utils.php"
sourceLine: 23
---


Filter the hash algorithm to allow different algorithms.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Utils/Utils.php:23](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/Utils.php#L23)


## Examples

```php
add_filter('graphql_query_id_hash_algorithm', function($value) {
    // Modify $value here
    return $value;
});
```