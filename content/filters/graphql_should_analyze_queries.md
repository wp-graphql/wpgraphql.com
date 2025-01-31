---
title: "graphql_should_analyze_queries"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 143
---


Filters whether to analyze queries for all GraphQL requests.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_track_types | `bool` | Whether to analyze queries or not. Defaults to `true` if GraphQL Debugging is enabled, otherwise `false`. |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:143](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L143)


## Examples

```php
add_filter('graphql_should_analyze_queries', function($value, $should_track_types) {
    // Modify $value here
    return $value;
});
```