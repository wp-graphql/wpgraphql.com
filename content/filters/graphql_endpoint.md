---
title: "graphql_endpoint"
since: "Unknown"
sourceFile: "src/Admin/Settings/Settings.php"
sourceLine: 94
---


Registers the initial settings for WPGraphQL

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `void` | No description available. |



## Source

This filter is defined in [src/Admin/Settings/Settings.php:94](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Settings/Settings.php#L94)


## Examples

```php
add_filter('graphql_endpoint', function($value) {
    // Modify $value here
    return $value;
});
```