---
title: "graphql_root_value"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 233
---


Return the filtered root value

## Parameters

| Name | Type | Description |
|------|------|-------------|
| root_value | `mixed` | The root value the Schema should use to resolve with. Default null. |
| request | `\WPGraphQL\Request` | The Request instance |




## Source

This filter is defined in [src/Request.php:233](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L233)


## Examples

```php
add_filter('graphql_root_value', function($value, $root_value, $request) {
    // Modify $value here
    return $value;
});
```