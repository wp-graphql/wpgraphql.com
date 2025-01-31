---
title: "graphql_pre_restrict_endpoint"
since: "Unknown"
sourceFile: "src/Server/ValidationRules/RequireAuthentication.php"
sourceLine: 33
---


Allows overriding the default graphql_restrict_endpoint behavior. Returning anything other
than null will skip the default restrict checks.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| restrict_endpoint | `bool\|null` | Whether to restrict the endpoint. Defaults to null |




## Source

This filter is defined in [src/Server/ValidationRules/RequireAuthentication.php:33](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Server/ValidationRules/RequireAuthentication.php#L33)


## Examples

```php
add_filter('graphql_pre_restrict_endpoint', function($value, $restrict_endpoint) {
    // Modify $value here
    return $value;
});
```