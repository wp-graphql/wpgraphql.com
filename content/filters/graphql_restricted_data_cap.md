---
title: "graphql_restricted_data_cap"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 217
---


Filter for the capability to check against for restricted data

## Parameters

| Name | Type | Description |
|------|------|-------------|
| restricted_cap | `string` | The capability to check against |
| model_name | `string` | Name of the model the filter is currently being executed in |
| data | `mixed` | The un-modeled incoming data |
| visibility | `string\|null` | The visibility that has currently been set for the data at this point |
| owner | `int\|null` | The user ID for the owner of this piece of data |
| current_user | `\WP_User` | The current user for the session |



## Return Value

| Type | Description |
|------|-------------|
| `string` | No description available. |



## Source

This filter is defined in [src/Model/Model.php:217](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L217)


## Examples

```php
add_filter('graphql_restricted_data_cap', function($value, $restricted_cap, $model_name, $data, $visibility, $owner, $current_user) {
    // Modify $value here
    return $value;
});
```