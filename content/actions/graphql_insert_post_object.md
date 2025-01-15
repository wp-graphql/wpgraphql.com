---
title: "graphql_insert_post_object"
since: "Unknown"
sourceFile: "src/Mutation/PostObjectUpdate.php"
sourceLine: 193
---


Fires after a single term is created or updated via a GraphQL mutation
The dynamic portion of the hook name, `$taxonomy->name` refers to the taxonomy of the term being mutated

## Parameters

| Name | Type | Description |
|------|------|-------------|
| post_id | `int` | Inserted post ID |
| post_type_object | `\WP_Post_Type` | The Post Type object for the post being mutated |
| args | `array<string,mixed>` | The args used to insert the term |
| mutation_name | `string` | The name of the mutation being performed |


## Source

This action is defined in [src/Mutation/PostObjectUpdate.php:193](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/PostObjectUpdate.php#L193)


## Examples

```php
add_action('graphql_insert_post_object', function($post_id, $post_type_object, $args, $mutation_name) {
    // Add your code here
});
```