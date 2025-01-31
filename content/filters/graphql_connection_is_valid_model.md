---
title: "graphql_connection_is_valid_model"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1334
---


Filters whether or not the model is valid.
This is useful when the dataloader is overridden and uses a different model than expected by default.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_valid | `bool` | Whether or not the model is valid. |
| model | `mixed` | The model being validated |
| resolver | `self` | The connection resolver instance |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1334](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1334)


## Examples

```php
add_filter('graphql_connection_is_valid_model', function($value, $is_valid, $model, $resolver) {
    // Modify $value here
    return $value;
});
```