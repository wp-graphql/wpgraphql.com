---
title: "graphql_connection_page_info"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 812
---


Filter the pageInfo that is returned to the connection.
This filter allows for additional fields to be filtered into the pageInfo
of a connection, such as "totalCount", etc, because the filter has enough
context of the query, args, request, etc to be able to calcuate and return
that information.
example:
You would want to register a "total" field to the PageInfo type, then filter
the pageInfo to return the total for the query, something to this tune:
add_filter( 'graphql_connection_page_info', function( $page_info, $connection ) {
$page_info['total'] = null;
if ( $connection->query instanceof WP_Query ) {
if ( isset( $connection->query->found_posts ) {
$page_info['total'] = (int) $connection->query->found_posts;
}
}
return $page_info;
});

## Parameters

This filter has no parameters.




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:812](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L812)


## Examples

```php
add_filter('graphql_connection_page_info', function($value) {
    // Modify $value here
    return $value;
});
```