---
title: "graphql_post_object_mutations_allow_term_creation"
since: "Unknown"
sourceFile: "src/Data/PostObjectMutation.php"
sourceLine: 284
---


Filter whether to allow terms to be created during a post mutation.
If a post mutation includes term input for a term that does not already exist,
this will allow terms to be created in order to connect the term to the post object,
but if filtered to false, this will prevent the term that doesn't already exist
from being created during the mutation of the post.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allow_term_creation | `bool` | Whether new terms should be created during the post object mutation |
| tax_object | `\WP_Taxonomy` | The Taxonomy object for the term being added to the Post Object |




## Source

This filter is defined in [src/Data/PostObjectMutation.php:284](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/PostObjectMutation.php#L284)


## Examples

```php
add_filter('graphql_post_object_mutations_allow_term_creation', function($value, $allow_term_creation, $tax_object) {
    // Modify $value here
    return $value;
});
```