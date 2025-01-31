---
title: "query_vars"
since: "1.5.0"
sourceFile: "src/Data/NodeResolver.php"
sourceLine: 514
---


Filters the query variables allowed before processing.
Allows (publicly allowed) query vars to be added, removed, or changed prior
to executing the query. Needed to allow custom rewrite rules using your own arguments
to work, or any other custom query variables you want to be publicly available.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| public_query_vars | `string[]` | The array of allowed query variable names. |




## Source

This filter is defined in [src/Data/NodeResolver.php:514](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/NodeResolver.php#L514)


## Examples

```php
add_filter('query_vars', function($value, $public_query_vars) {
    // Modify $value here
    return $value;
});
```