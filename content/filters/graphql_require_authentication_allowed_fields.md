---
title: "graphql_require_authentication_allowed_fields"
since: "Unknown"
sourceFile: "src/Server/ValidationRules/RequireAuthentication.php"
sourceLine: 77
---


Filters the allowed

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allowed_root_fields | `string[]` | The Root fields allowed to be requested without authentication |
| context | `\GraphQL\Validator\ValidationContext` | The Validation context of the field being executed. |




## Source

This filter is defined in [src/Server/ValidationRules/RequireAuthentication.php:77](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Server/ValidationRules/RequireAuthentication.php#L77)


## Examples

```php
add_filter('graphql_require_authentication_allowed_fields', function($value, $allowed_root_fields, $context) {
    // Modify $value here
    return $value;
});
```