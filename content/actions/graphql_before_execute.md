---
title: "graphql_before_execute"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 300
---


This action runs before execution of a GraphQL request (regardless if it's a single or batch request)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| request | `\WPGraphQL\Request` | The instance of the Request being executed |


## Source

This action is defined in [src/Request.php:300](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L300)


## Examples

```php
add_action('graphql_before_execute', function($request) {
    // Add your code here
});
```