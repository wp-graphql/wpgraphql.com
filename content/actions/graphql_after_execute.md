---
title: "graphql_after_execute"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 462
---


Run an action after GraphQL Execution

## Parameters

| Name | Type | Description |
|------|------|-------------|
| filtered_response | `mixed[]` | The response of the entire operation. Could be a single operation or a batch operation |
| request | `\WPGraphQL\Request` | Instance of the Request being executed |


## Source

This action is defined in [src/Request.php:462](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L462)


## Examples

```php
add_action('graphql_after_execute', function($filtered_response, $request) {
    // Add your code here
});
```