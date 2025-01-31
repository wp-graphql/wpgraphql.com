---
title: "graphql_query_analyzer_get_headers"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 814
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| headers | `array<string,mixed>` | The array of headers being returned |
| query_analyzer | `\WPGraphQL\Utils\QueryAnalyzer` | The instance of the query analyzer |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:814](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L814)


## Examples

```php
add_filter('graphql_query_analyzer_get_headers', function($value, $headers, $query_analyzer) {
    // Modify $value here
    return $value;
});
```