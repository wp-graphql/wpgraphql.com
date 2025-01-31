---
title: "graphql_object_visibility"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 278
---


Filter the visibility name to be returned

## Parameters

| Name | Type | Description |
|------|------|-------------|
| visibility | `string\|null` | The visibility that has currently been set for the data at this point |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `string` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:278](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L278)


## Examples

```php
add_filter('graphql_object_visibility', function($value, $visibility, $model_name, $data, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```