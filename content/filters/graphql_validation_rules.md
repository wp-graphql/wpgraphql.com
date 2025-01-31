---
title: "graphql_validation_rules"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 213
---


Return the validation rules to use in the request

## Parameters

| Name | Type | Description |
|------|------|-------------|
| validation_rules | `array<int\|string,\GraphQL\Validator\Rules\ValidationRule>` | The validation rules to use in the request |
| request | `\WPGraphQL\Request` | The Request instance |




## Source

This filter is defined in [src/Request.php:213](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L213)


## Examples

```php
add_filter('graphql_validation_rules', function($value, $validation_rules, $request) {
    // Modify $value here
    return $value;
});
```