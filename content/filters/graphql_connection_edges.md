---
title: "graphql_connection_edges"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1014
---


Filters the edges in the connection.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| edges | `array<string,mixed>` | The edges in the connection |
| resolver | `self` | Instance of the Connection Resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1014](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1014)


## Examples

```php
add_filter('graphql_connection_edges', function($value, $edges, $resolver) {
    // Modify $value here
    return $value;
});
```