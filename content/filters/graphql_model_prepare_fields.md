---
title: "graphql_model_prepare_fields"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 485
---


Filter the array of fields for the Model before the object is hydrated with it

## Parameters

| Name | Type | Description |
|------|------|-------------|
| fields | `array<string,mixed>` | The array of fields for the model |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string` | The visibility setting for this piece of data |
| owner | `int` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |




## Source

This filter is defined in [src/Model/Model.php:485](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L485)


## Examples

```php
add_filter('graphql_model_prepare_fields', function($value, $fields, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```