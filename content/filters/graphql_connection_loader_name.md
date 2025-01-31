---
title: "graphql_connection_loader_name"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 559
---


Filters the loader name.
This is the name of the registered DataLoader that will be used to load the data for the connection.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| loader_name | `string` | The name of the loader. |
| resolver | `self` | The AbstractConnectionResolver instance. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:559](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L559)


## Examples

```php
add_filter('graphql_connection_loader_name', function($value, $loader_name, $resolver) {
    // Modify $value here
    return $value;
});
```