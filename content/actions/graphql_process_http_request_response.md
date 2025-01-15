---
title: "graphql_process_http_request_response"
since: "0.0.5"
sourceFile: "src/Router.php"
sourceLine: 518
---


Run an action after the HTTP Response is ready to be sent back. This might be a good place for tools
to hook in to track metrics, such as how long the process took from `graphql_process_http_request`
to here, etc.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| response | `array<string,mixed>` | The GraphQL response |
| result | `array<string,mixed>` | The result of the GraphQL Query |
| operation_name | `string` | The name of the operation |
| query | `string` | The request that GraphQL executed |
| variables | `array` | Variables to passed to your GraphQL query |
| status_code | `int\|string` | The status code for the response |


## Source

This action is defined in [src/Router.php:518](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L518)


## Examples

```php
add_action('graphql_process_http_request_response', function($response, $result, $operation_name, $query, $variables, $status_code) {
    // Add your code here
});
```