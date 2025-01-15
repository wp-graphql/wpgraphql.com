---
title: "init_graphql_request"
since: "Unknown"
sourceFile: "src/Request.php"
sourceLine: 143
---


Action – intentionally with no context – to indicate a GraphQL Request has started.
This is a great place for plugins to hook in and modify things that should only
occur in the context of a GraphQL Request. The base class hooks into this action to
kick off the schema creation, so types are not set up until this action has run!

## Parameters

This action has no parameters.


## Source

This action is defined in [src/Request.php:143](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Request.php#L143)


## Examples

```php
add_action('init_graphql_request', function() {
    // Add your code here
});
```