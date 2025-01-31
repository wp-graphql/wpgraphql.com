---
title: "the_title"
since: "Unknown"
sourceFile: "src/Model/Post.php"
sourceLine: 487
---


{@inheritDoc}

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Model/Post.php:487](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Post.php#L487)


## Examples

```php
add_filter('the_title', function($value) {
    // Modify $value here
    return $value;
});
```