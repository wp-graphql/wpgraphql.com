---
title: "comment_text"
since: "Unknown"
sourceFile: "src/Model/Comment.php"
sourceLine: 174
---


{@inheritDoc}

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Model/Comment.php:174](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Comment.php#L174)


## Examples

```php
add_filter('comment_text', function($value) {
    // Modify $value here
    return $value;
});
```