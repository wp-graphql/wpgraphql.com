---
title: "graphql_field_resolver_auth_error_message"
since: "Unknown"
sourceFile: "src/Utils/InstrumentSchema.php"
sourceLine: 216
---


Set the default auth error message

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Utils/InstrumentSchema.php:216](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/InstrumentSchema.php#L216)


## Examples

```php
add_filter('graphql_field_resolver_auth_error_message', function($value) {
    // Modify $value here
    return $value;
});
```