---
title: "graphql_return_response"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 564
---


Run an action after the response has been filtered, as the response is being returned.
This is a good place for debug tools to hook in to log things, etc.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| filtered_response | `mixed\|array<string,mixed>\|object` | The filtered response for the GraphQL request |
| response | `mixed\|array<string,mixed>\|object` | The response for your GraphQL request |
| schema | `\WPGraphQL\WPSchema` | The schema object for the root request |
| operation | `string` | The name of the operation |
| query | `string` | The query that GraphQL executed |
| variables | `mixed[]\|null` | Variables to passed to your GraphQL query |
| request | `\WPGraphQL\Request` | Instance of the Request |
| query_id | `string` | The query id that GraphQL executed |


## Source

This action is defined in [src/Request.php:564](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L564)


## Examples

```php
add_action('graphql_return_response', function($filtered_response, $response, $schema, $operation, $query, $variables, $request, $query_id) {
    // Add your code here
});
```