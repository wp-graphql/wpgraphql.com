---
title: "graphql_post_object_create_should_set_intended_post_status"
since: "Unknown"
sourceFile: "src/Mutation/PostObjectCreate.php"
sourceLine: 337
---


Determine whether the intended status should be set or not.
By filtering to false, the $intended_post_status will not be set at the completion of the mutation.
This allows for side-effect actions to set the status later. For example, if a post
was being created via a GraphQL Mutation, the post had additional required assets, such as images
that needed to be sideloaded or some other semi-time-consuming side effect, those actions could
be deferred (cron or whatever), and when those actions complete they could come back and set
the $intended_status.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_set_intended_status | `bool` | Whether to set the intended post_status or not. Default true. |
| post_type_object | `\WP_Post_Type` | The Post Type Object for the post being mutated |
| mutation_name | `string` | The name of the mutation currently in progress |
| context | `\WPGraphQL\AppContext` | The AppContext passed down to all resolvers |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down to all resolvers |
| intended_post_status | `string` | The intended post_status the post should have according to the mutation input |
| default_post_status | `string` | The default status posts should use if an intended status wasn't set |




## Source

This filter is defined in [src/Mutation/PostObjectCreate.php:337](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/PostObjectCreate.php#L337)


## Examples

```php
add_filter('graphql_post_object_create_should_set_intended_post_status', function($value, $should_set_intended_status, $post_type_object, $mutation_name, $context, $info, $intended_post_status, $default_post_status) {
    // Modify $value here
    return $value;
});
```