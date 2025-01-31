---
title: "graphql_should_show_query_analyzer_in_extensions"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 839
---


No description available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should | `bool` | Whether the query analyzer output should be displayed in the Extensions output. Defaults to true if the query analyzer is enabled for the request and WPGraphQL Debugging is enabled. |
| response | `mixed` | The response of the WPGraphQL Request being executed |
| schema | `\WPGraphQL\WPSchema` | The WPGraphQL Schema |
| operation_name | `string\|null` | The operation name being executed |
| request | `string\|null` | The GraphQL Request being made |
| variables | `array<string,mixed>\|null` | The variables sent with the request |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:839](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L839)


## Examples

```php
add_filter('graphql_should_show_query_analyzer_in_extensions', function($value, $should, $response, $schema, $operation_name, $request, $variables) {
    // Modify $value here
    return $value;
});
```