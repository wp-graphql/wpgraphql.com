---
title: "graphql_connection_query"
since: "Unknown"
sourceFile: "src/Data/Connection/AbstractConnectionResolver.php"
sourceLine: 1092
---


Set the query for the resolver, for use as reference in filters, etc
Filter the query. For core data, the query is typically an instance of:
WP_Query
WP_Comment_Query
WP_User_Query
WP_Term_Query
...
But in some cases, the actual mechanism for querying data should be overridden. For
example, perhaps you're using ElasticSearch or Solr (hypothetical) and want to offload
the query to that instead of a native WP_Query class. You could override this with a
query to that datasource instead.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| query | `mixed` | Instance of the Query for the resolver |
| connection_resolver | `\WPGraphQL\Data\Connection\AbstractConnectionResolver` | Instance of the Connection Resolver |




## Source

This filter is defined in [src/Data/Connection/AbstractConnectionResolver.php:1092](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/AbstractConnectionResolver.php#L1092)


## Examples

```php
add_filter('graphql_connection_query', function($value, $query, $connection_resolver) {
    // Modify $value here
    return $value;
});
```