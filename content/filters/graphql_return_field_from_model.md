---
title: "graphql_return_field_from_model"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 408
---


Filter the data returned by the default callback for the field

## Parameters

| Name | Type | Description |
|------|------|-------------|
| field | `string` | The data returned from the callback |
| key | `string` | The name of the field on the type |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string` | The visibility setting for this piece of data |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `mixed` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:408](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L408)


## Examples

```php
add_filter('graphql_return_field_from_model', function($value, $field, $key, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```