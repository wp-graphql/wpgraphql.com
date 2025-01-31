---
title: "graphql_send_header"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 279
---


Sanitize as per RFC2616 (Section 4.2):
Any LWS that occurs between field-content MAY be replaced with a
single SP before interpreting the field value or forwarding the
message downstream.

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Router.php:279](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L279)


## Examples

```php
add_filter('graphql_send_header', function($value) {
    // Modify $value here
    return $value;
});
```