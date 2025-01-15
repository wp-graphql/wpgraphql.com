---
title: "graphql_update_term"
since: "Unknown"
sourceFile: "src/Mutation/TermObjectUpdate.php"
sourceLine: 161
---


Fires an action when a term is updated via a GraphQL Mutation

## Parameters

| Name | Type | Description |
|------|------|-------------|
| term_id | `int` | The ID of the term object that was mutated |
| taxonomy | `\WP_Taxonomy` | The taxonomy of the term being updated |
| args | `array<string,mixed>` | The args used to update the term |
| mutation_name | `string` | The name of the mutation being performed (create, update, delete, etc) |
| context | `\WPGraphQL\AppContext` | The AppContext passed down the resolve tree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down the resolve tree |


## Source

This action is defined in [src/Mutation/TermObjectUpdate.php:161](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/TermObjectUpdate.php#L161)


## Examples

```php
add_action('graphql_update_term', function($term_id, $taxonomy, $args, $mutation_name, $context, $info) {
    // Add your code here
});
```