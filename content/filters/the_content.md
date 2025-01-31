---
title: "the_content"
since: "Unknown"
sourceFile: "src/Model/Post.php"
sourceLine: 797
---


{@inheritDoc}

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Model/Post.php:797](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Post.php#L797)


## Examples

```php
add_filter('the_content', function($value) {
    // Modify $value here
    return $value;
});
```