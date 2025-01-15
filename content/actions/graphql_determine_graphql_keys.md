---
title: "graphql_determine_graphql_keys"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 280
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_analyzer | `\WPGraphQL\Utils\QueryAnalyzer` | The instance of the query analyzer |
| query | `string` | The query string being executed |


## Source

This action is defined in [src/Utils/QueryAnalyzer.php:280](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L280)


## Examples

```php
add_action('graphql_determine_graphql_keys', function($query_analyzer, $query) {
    // Add your code here
});
```