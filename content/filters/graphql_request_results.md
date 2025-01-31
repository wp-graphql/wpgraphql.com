---
title: "graphql_request_results"
since: "0.0.5"
sourceFile: "src/Request.php"
sourceLine: 549
---


Filter the $response of the GraphQL execution. This allows for the response to be filtered
before it's returned, allowing granular control over the response at the latest point.
POSSIBLE USAGE EXAMPLES:
This could be used to ensure that certain fields never make it to the response if they match
certain criteria, etc. For example, this filter could be used to check if a current user is
allowed to see certain things, and if they are not, the $response could be filtered to remove
the data they should not be allowed to see.
Or, perhaps some systems want the response to always include some additional piece of data in
every response, regardless of the request that was sent to it, this could allow for that
to be hooked in and included in the $response.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| response | `mixed\|array<string,mixed>\|object` | The response for your GraphQL query |
| schema | `\WPGraphQL\WPSchema` | The schema object for the root query |
| operation | `string` | The name of the operation |
| query | `string` | The query that GraphQL executed |
| variables | `mixed[]\|null` | Variables to passed to your GraphQL request |
| request | `\WPGraphQL\Request` | Instance of the Request |
| query_id | `string` | The query id that GraphQL executed |




## Source

This filter is defined in [src/Request.php:549](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L549)


## Examples

```php
add_filter('graphql_request_results', function($value, $response, $schema, $operation, $query, $variables, $request, $query_id) {
    // Modify $value here
    return $value;
});
```