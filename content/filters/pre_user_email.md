---
title: "pre_user_email"
since: "Unknown"
sourceFile: "src/Data/UserMutation.php"
sourceLine: 168
---


Required fields

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Data/UserMutation.php:168](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/UserMutation.php#L168)


## Examples

```php
add_filter('pre_user_email', function($value) {
    // Modify $value here
    return $value;
});
```