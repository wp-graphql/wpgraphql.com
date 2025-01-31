---
title: "graphql_connection_edge"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1363
---


Filter the edge within the connection.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| edge | `array<string,mixed>` | The edge within the connection |
| resolver | `self` | Instance of the connection resolver class |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1363](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1363)


## Examples

```php
add_filter('graphql_connection_edge', function($value, $edge, $resolver) {
    // Modify $value here
    return $value;
});
```