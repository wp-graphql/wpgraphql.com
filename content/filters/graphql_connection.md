---
title: "graphql_connection"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1039
---


Filter the connection. In some cases, connections will want to provide
additional information other than edges, nodes, and pageInfo
This filter allows additional fields to be returned to the connection resolver

## Parameters

| Name | Type | Description |
|------|------|-------------|
| connection | `array<string,mixed>` | The connection data being returned. A single edge or null if the connection is one-to-one. |
| resolver | `self` | The instance of the connection resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1039](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1039)


## Examples

```php
add_filter('graphql_connection', function($value, $connection, $resolver) {
    // Modify $value here
    return $value;
});
```