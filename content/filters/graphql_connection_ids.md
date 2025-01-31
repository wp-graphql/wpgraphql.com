---
title: "graphql_connection_ids"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1102
---


Filter the connection IDs

## Parameters

| Name | Type | Description |
|------|------|-------------|
| ids | `int[]\|string[]` | Array of IDs this connection will be resolving |
| connection_resolver | `\WPGraphQL\Data\Connection\AbstractConnectionResolver` | Instance of the Connection Resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1102](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1102)


## Examples

```php
add_filter('graphql_connection_ids', function($value, $ids, $connection_resolver) {
    // Modify $value here
    return $value;
});
```