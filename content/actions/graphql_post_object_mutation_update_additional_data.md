---
title: "graphql_post_object_mutation_update_additional_data"
since: "Unknown"
sourceFile: "src/Data/PostObjectMutation.php"
sourceLine: 193
---


Run an action after the additional data has been updated. This is a great spot to hook into to
update additional data related to postObjects, such as setting relationships, updating additional postmeta,
or sending emails to Kevin. . .whatever you need to do with the postObject.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| post_id | `int` | The ID of the postObject being mutated |
| input | `array<string,mixed>` | The input for the mutation |
| post_type_object | `\WP_Post_Type` | The Post Type Object for the type of post being mutated |
| mutation_name | `string` | The name of the mutation (ex: create, update, delete) |
| context | `\WPGraphQL\AppContext` | The AppContext passed down to all resolvers |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down to all resolvers |
| intended_post_status | `string` | The intended post_status the post should have according to the mutation input |
| default_post_status | `string` | The default status posts should use if an intended status wasn't set |


## Source

This action is defined in [src/Data/PostObjectMutation.php:193](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/PostObjectMutation.php#L193)


## Examples

```php
add_action('graphql_post_object_mutation_update_additional_data', function($post_id, $input, $post_type_object, $mutation_name, $context, $info, $intended_post_status, $default_post_status) {
    // Add your code here
});
```