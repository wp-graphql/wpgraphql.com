---
title: "graphql_process_http_request"
since: "0.0.4"
sourceFile: "src/Router.php"
sourceLine: 442
---


This action can be hooked to to enable various debug tools,
such as enableValidation from the GraphQL Config.

## Parameters

This action has no parameters.


## Source

This action is defined in [src/Router.php:442](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L442)


## Examples

```php
add_action('graphql_process_http_request', function() {
    // Add your code here
});
```