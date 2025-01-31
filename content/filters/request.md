---
title: "request"
since: "2.1.0"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 601
---


Filters the array of parsed query variables.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_vars | `array<string,mixed>` | The array of requested query variables. |




## Source

This filter is defined in [src/Data/NodeResolver.php:601](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L601)


## Examples

```php
add_filter('request', function($value, $query_vars) {
    // Modify $value here
    return $value;
});
```