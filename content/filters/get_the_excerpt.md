---
title: "get_the_excerpt"
since: "Unknown"
sourceFile: "src/Model/Post.php"
sourceLine: 783
---


{@inheritDoc}

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Model/Post.php:783](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Post.php#L783)


## Examples

```php
add_filter('get_the_excerpt', function($value) {
    // Modify $value here
    return $value;
});
```