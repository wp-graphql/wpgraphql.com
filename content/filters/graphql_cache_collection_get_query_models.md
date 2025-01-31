---
title: "graphql_cache_collection_get_query_models"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 652
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| null | `string[]\|null` | Default value for the filter |
| schema | `\GraphQL\Type\Schema` | The WPGraphQL Schema for the current request |
| query | `string` | The query string being requested |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:652](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L652)


## Examples

```php
add_filter('graphql_cache_collection_get_query_models', function($value, $null, $schema, $query) {
    // Modify $value here
    return $value;
});
```