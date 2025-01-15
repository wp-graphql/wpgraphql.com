---
title: "graphql_post_object_mutation_set_object_terms"
since: "Unknown"
sourceFile: "src/Data/PostObjectMutation.php"
sourceLine: 241
---


Fire an action before setting object terms during a GraphQL Post Object Mutation.
One example use for this hook would be to create terms from the input that may not exist yet, so that they can be set as a relation below.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| post_id | `int` | The ID of the postObject being mutated |
| input | `array<string,mixed>` | The input for the mutation |
| post_type_object | `\WP_Post_Type` | The Post Type Object for the type of post being mutated |
| mutation_name | `string` | The name of the mutation (ex: create, update, delete) |


## Source

This action is defined in [src/Data/PostObjectMutation.php:241](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/PostObjectMutation.php#L241)


## Examples

```php
add_action('graphql_post_object_mutation_set_object_terms', function($post_id, $input, $post_type_object, $mutation_name) {
    // Add your code here
});
```