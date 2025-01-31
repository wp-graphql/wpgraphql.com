---
title: "graphql_do_update_routine"
since: "Unknown"
sourceFile: "src/WPGraphQL.php"
sourceLine: 476
---


Fires the update routine.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| stored_version | `string` | The version number currently stored in the database. |
| new_version | `string` | The version number of the current plugin. |


## Source

This action is defined in [src/WPGraphQL.php:476](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L476)


## Examples

```php
add_action('graphql_do_update_routine', function($stored_version, $new_version) {
    // Add your code here
});
```