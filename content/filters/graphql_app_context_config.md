---
title: "graphql_app_context_config"
since: "Unknown"
sourceFile: "src/AppContext.php"
sourceLine: 152
---


This filters the config for the AppContext.
This can be used to store additional context config, which is available to resolvers
throughout the resolution of a GraphQL request.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/AppContext.php:152](https://github.com/wp-graphql/wp-graphql/blob/develop/src/AppContext.php#L152)


## Examples

```php
add_filter('graphql_app_context_config', function($value) {
    // Modify $value here
    return $value;
});
```