---
title: "graphql_connection_query_class"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 683
---


Filters the `$query_class` that will be used to execute the query.
This is useful for replacing the default query (e.g `WP_Query` ) with a custom one (E.g. `WP_Term_Query` or WooCommerce's `WC_Query`).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query_class | `class-string<TQueryClass>` | The query class to be used with the executable query to get data. `null` if the AbstractConnectionResolver does not use a query class. |
| resolver | `self` | Instance of the AbstractConnectionResolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:683](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L683)


## Examples

```php
add_filter('graphql_connection_query_class', function($value, $query_class, $resolver) {
    // Modify $value here
    return $value;
});
```