---
title: "graphql_query_analyzer_header_length_limit"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 223
---


Many clients have an 8k (8192 characters) header length cap.
This is the total for ALL headers, not just individual headers.
SEE: https://nodejs.org/en/blog/vulnerability/november-2018-security-releases/#denial-of-service-with-large-http-headers-cve-2018-12121
In order to respect this, we have a default limit of 4000 characters for the X-GraphQL-Keys header
to allow for other headers to total up to 8k.
This value can be filtered to be increased or decreased.
If you see "Parse Error: Header overflow" errors in your client, you might want to decrease this value.
On the other hand, if you've increased your allowed header length in your client
(i.e. https://github.com/wp-graphql/wp-graphql/issues/2535#issuecomment-1262499064) then you might want to increase this so that keys are not truncated.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| header_length_limit | `int` | The max limit in (binary) bytes headers should be. Anything longer will be truncated. |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:223](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L223)


## Examples

```php
add_filter('graphql_query_analyzer_header_length_limit', function($value, $header_length_limit) {
    // Modify $value here
    return $value;
});
```