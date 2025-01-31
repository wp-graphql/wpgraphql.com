---
title: "graphql_user_insert_post_args"
since: "Unknown"
sourceFile: "src/Data/UserMutation.php"
sourceLine: 200
---


Filters the mappings for input to arguments

## Parameters

| Name | Type | Description |
|------|------|-------------|
| insert_user_args | `array<string,mixed>` | The arguments to ultimately be passed to the WordPress function |
| input | `array<string,mixed>` | Input data from the GraphQL mutation |
| mutation_name | `string` | What user mutation is being performed for context |




## Source

This filter is defined in [src/Data/UserMutation.php:200](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/UserMutation.php#L200)


## Examples

```php
add_filter('graphql_user_insert_post_args', function($value, $insert_user_args, $input, $mutation_name) {
    // Modify $value here
    return $value;
});
```