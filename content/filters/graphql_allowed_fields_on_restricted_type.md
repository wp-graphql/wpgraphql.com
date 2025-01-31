---
title: "graphql_allowed_fields_on_restricted_type"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 323
---


Filter for the allowed restricted fields

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allowed_restricted_fields | `string[]` | The fields to allow when the data is designated as restricted to the current user |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string\|null` | The visibility that has currently been set for the data at this point |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |




## Source

This filter is defined in [src/Model/Model.php:323](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L323)


## Examples

```php
add_filter('graphql_allowed_fields_on_restricted_type', function($value, $allowed_restricted_fields, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```