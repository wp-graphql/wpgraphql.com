---
title: "graphql_pre_return_field_from_model"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 382
---


Filter to short circuit the callback for any field on a type. Returning anything
other than null will stop the callback for the field from executing, and will
return your data or execute your callback instead.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| result | `string` | The data returned from the callback. Null by default. |
| key | `string` | The name of the field on the type |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string` | The visibility setting for this piece of data |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `callable\|int\|string\|mixed[]\|mixed\|null` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:382](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L382)


## Examples

```php
add_filter('graphql_pre_return_field_from_model', function($value, $result, $key, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```