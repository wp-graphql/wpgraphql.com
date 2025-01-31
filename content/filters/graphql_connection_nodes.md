---
title: "graphql_connection_nodes"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1004
---


Set the items. These are the "nodes" that make up the connection.
Filters the nodes in the connection

## Parameters

| Name | Type | Description |
|------|------|-------------|
| nodes | `\WPGraphQL\Model\Model[]\|mixed[]\|null` | The nodes in the connection |
| resolver | `self` | Instance of the Connection Resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1004](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1004)


## Examples

```php
add_filter('graphql_connection_nodes', function($value, $nodes, $resolver) {
    // Modify $value here
    return $value;
});
```