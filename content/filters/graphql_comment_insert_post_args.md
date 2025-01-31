---
title: "graphql_comment_insert_post_args"
since: "Unknown"
sourceFile: "src/Data/CommentMutation.php"
sourceLine: 110
---


Filter the $insert_post_args

## Parameters

| Name | Type | Description |
|------|------|-------------|
| output_args | `array<string,mixed>` | The array of $input_post_args that will be passed to wp_new_comment |
| input | `array<string,mixed>` | The data that was entered as input for the mutation |
| mutation_type | `string` | The type of mutation being performed ( create, edit, etc ) |




## Source

This filter is defined in [src/Data/CommentMutation.php:110](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/CommentMutation.php#L110)


## Examples

```php
add_filter('graphql_comment_insert_post_args', function($value, $output_args, $input, $mutation_type) {
    // Modify $value here
    return $value;
});
```