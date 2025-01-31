---
title: "graphql_pre_model_data_is_private"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 232
---


Filter to short circuit default is_private check for the model. This is expensive in some cases so
this filter lets you prevent this from running by returning a true or false value.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_private | `bool` | Whether the model data is private. Defaults to null. |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string\|null` | The visibility that has currently been set for the data at this point |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `bool\|null` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:232](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L232)


## Examples

```php
add_filter('graphql_pre_model_data_is_private', function($value, $is_private, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```