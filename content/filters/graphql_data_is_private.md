---
title: "graphql_data_is_private"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 254
---


Filter to determine if the data should be considered private or not

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_private | `bool` | Whether the model is private |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string\|null` | The visibility that has currently been set for the data at this point |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `bool` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:254](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L254)


## Examples

```php
add_filter('graphql_data_is_private', function($value, $is_private, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```