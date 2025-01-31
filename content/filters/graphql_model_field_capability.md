---
title: "graphql_model_field_capability"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 357
---


Capability to check required for the field

## Parameters

| Name | Type | Description |
|------|------|-------------|
| capability | `string` | The capability to check against to return the field |
| key | `string` | The name of the field on the type |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string` | The visibility setting for this piece of data |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `string` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:357](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L357)


## Examples

```php
add_filter('graphql_model_field_capability', function($value, $capability, $key, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```