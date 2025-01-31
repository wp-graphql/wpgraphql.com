---
title: "graphql_access_control_allow_headers"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 303
---


Filtered list of access control headers.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| access_control_headers | `string[]` | Array of headers to allow. |




## Source

This filter is defined in [src/Router.php:303](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L303)


## Examples

```php
add_filter('graphql_access_control_allow_headers', function($value, $access_control_headers) {
    // Modify $value here
    return $value;
});
```