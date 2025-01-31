---
title: "graphql_should_analyze_query"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 182
---


Filters whether to analyze queries or for a specific GraphQL request.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_analyze_queries | `bool` | Whether to analyze queries for the current request. Defaults to the value of `graphql_query_analyzer_enabled` filter. |
| request | `\WPGraphQL\Request` | The GraphQL request being executed |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:182](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L182)


## Examples

```php
add_filter('graphql_should_analyze_query', function($value, $should_analyze_queries, $request) {
    // Modify $value here
    return $value;
});
```