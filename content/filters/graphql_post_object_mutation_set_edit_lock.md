---
title: "graphql_post_object_mutation_set_edit_lock"
since: "Unknown"
sourceFile: "src/Data/PostObjectMutation.php"
sourceLine: 210
---


Sets the post lock

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_locked | `bool` | Whether the post is locked. |
| post_id | `int` | The ID of the postObject being mutated |
| input | `array<string,mixed>` | The input for the mutation |
| post_type_object | `\WP_Post_Type` | The Post Type Object for the type of post being mutated |
| mutation_name | `string` | The name of the mutation (ex: create, update, delete) |
| context | `\WPGraphQL\AppContext` | The AppContext passed down to all resolvers |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down to all resolvers |
| intended_post_status | `string` | The intended post_status the post should have according to the mutation input |
| default_post_status | `string` | The default status posts should use if an intended status wasn't set |



## Return Value

| Type | Description |
|------|-------------|
| `bool` | No description available. |



## Source

This filter is defined in [src/Data/PostObjectMutation.php:210](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/PostObjectMutation.php#L210)


## Examples

```php
add_filter('graphql_post_object_mutation_set_edit_lock', function($value, $is_locked, $post_id, $input, $post_type_object, $mutation_name, $context, $info, $intended_post_status, $default_post_status) {
    // Modify $value here
    return $value;
});
```