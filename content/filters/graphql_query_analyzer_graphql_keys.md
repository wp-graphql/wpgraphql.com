---
title: "graphql_query_analyzer_graphql_keys"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 775
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| graphql_keys | `array<string,mixed>` | Information about the keys and skipped keys returned by the Query Analyzer |
| return_keys | `string` | The keys returned to the X-GraphQL-Keys header |
| skipped_keys | `string` | The Keys that were skipped (truncated due to size limit) from the X-GraphQL-Keys header |
| return_keys_array | `string[]` | The keys returned to the X-GraphQL-Keys header, in array instead of string |
| skipped_keys_array | `string[]` | The keys skipped, in array instead of string |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:775](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L775)


## Examples

```php
add_filter('graphql_query_analyzer_graphql_keys', function($value, $graphql_keys, $return_keys, $skipped_keys, $return_keys_array, $skipped_keys_array) {
    // Modify $value here
    return $value;
});
```