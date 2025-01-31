---
title: "graphql_connection_amount_requested"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 629
---


This filter allows to modify the number of nodes the connection should return.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| amount | `int` | the requested amount |
| resolver | `self` | Instance of the connection resolver class |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:629](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L629)


## Examples

```php
add_filter('graphql_connection_amount_requested', function($value, $amount, $resolver) {
    // Modify $value here
    return $value;
});
```