---
title: "graphql_query_analyzer_get_runtime_nodes"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 311
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| runtime_nodes | `string[]\|int[]` | Nodes that were resolved during execution |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:311](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L311)


## Examples

```php
add_filter('graphql_query_analyzer_get_runtime_nodes', function($value, $runtime_nodes) {
    // Modify $value here
    return $value;
});
```