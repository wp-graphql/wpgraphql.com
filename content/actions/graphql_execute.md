---
title: "graphql_execute"
since: "0.0.4"
sourceFile: "src/Request.php"
sourceLine: 512
---


Run an action. This is a good place for debug tools to hook in to log things, etc.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| response | `mixed\|array<string,mixed>\|object` | The response your GraphQL request |
| schema | `\WPGraphQL\WPSchema` | The schema object for the root request |
| operation | `mixed\|string\|null` | The name of the operation |
| query | `string` | The query that GraphQL executed |
| variables | `mixed[]\|null` | Variables to passed to your GraphQL query |
| request | `\WPGraphQL\Request` | Instance of the Request |


## Source

This action is defined in [src/Request.php:512](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L512)


## Examples

```php
add_action('graphql_execute', function($response, $schema, $operation, $query, $variables, $request) {
    // Add your code here
});
```