---
title: "graphql_term_object_insert_term_args"
since: "Unknown"
sourceFile: "src/Data/TermObjectMutation.php"
sourceLine: 85
---


Filter the $insert_args

## Parameters

| Name | Type | Description |
|------|------|-------------|
| insert_args | `array<string,mixed>` | The array of input args that will be passed to the functions that insert terms |
| input | `array<string,mixed>` | The data that was entered as input for the mutation |
| taxonomy | `\WP_Taxonomy` | The taxonomy object of the term being mutated |
| mutation_name | `string` | The name of the mutation being performed (create, edit, etc) |




## Source

This filter is defined in [src/Data/TermObjectMutation.php:85](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/TermObjectMutation.php#L85)


## Examples

```php
add_filter('graphql_term_object_insert_term_args', function($value, $insert_args, $input, $taxonomy, $mutation_name) {
    // Modify $value here
    return $value;
});
```