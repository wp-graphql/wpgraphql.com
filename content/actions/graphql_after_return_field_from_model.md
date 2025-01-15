---
title: "graphql_after_return_field_from_model"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 422
---


Hook that fires after the data is returned for the field

## Parameters

| Name | Type | Description |
|------|------|-------------|
| result | `string` | The returned data for the field |
| key | `string` | The name of the field on the type |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string` | The visibility setting for this piece of data |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |


## Source

This action is defined in [src/Model/Model.php:422](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L422)


## Examples

```php
add_action('graphql_after_return_field_from_model', function($result, $key, $model_name, $data, $visibility, $owner, $current_user) {
    // Add your code here
});
```