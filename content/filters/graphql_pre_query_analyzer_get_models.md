---
title: "graphql_pre_query_analyzer_get_models"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 603
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| null | `string[]\|null` | Default value for the filter |
| schema | `\GraphQL\Type\Schema` | The WPGraphQL Schema for the current request |
| query | `string` | The query string being requested |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:603](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L603)


## Examples

```php
add_filter('graphql_pre_query_analyzer_get_models', function($value, $null, $schema, $query) {
    // Modify $value here
    return $value;
});
```