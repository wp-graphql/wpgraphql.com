---
title: "graphql_map_input_fields_to_wp_comment_query"
since: "0.0.5"
sourceFile: "src/Data/Connection/CommentConnectionResolver.php"
sourceLine: 294
---


Filter the input fields
This allows plugins/themes to hook in and alter what $args should be allowed to be passed
from a GraphQL Query to the get_terms query

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Data/Connection/CommentConnectionResolver.php:294](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/CommentConnectionResolver.php#L294)


## Examples

```php
add_filter('graphql_map_input_fields_to_wp_comment_query', function($value) {
    // Modify $value here
    return $value;
});
```