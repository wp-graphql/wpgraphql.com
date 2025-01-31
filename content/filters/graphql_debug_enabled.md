---
title: "graphql_debug_enabled"
since: "Unknown"
sourceFile: "src/WPGraphQL.php"
sourceLine: 898
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| enabled | `bool` | Whether GraphQL Debug is enabled or not |




## Source

This filter is defined in [src/WPGraphQL.php:898](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L898)


## Examples

```php
add_filter('graphql_debug_enabled', function($value, $enabled) {
    // Modify $value here
    return $value;
});
```