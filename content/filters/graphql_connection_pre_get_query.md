---
title: "graphql_connection_pre_get_query"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 716
---


When this filter returns anything but null, it will be used as the resolved query, and the default query execution will be skipped.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query | `null` | The query to return. Return null to use the default query execution. |
| resolver | `self` | The connection resolver instance. |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:716](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L716)


## Examples

```php
add_filter('graphql_connection_pre_get_query', function($value, $query, $resolver) {
    // Modify $value here
    return $value;
});
```