---
title: "graphql_resolve_node_type"
since: "0.0.6"
sourceFile: "src/Data/DataSource.php"
sourceLine: 635
---


Add a filter to allow externally registered node types to return the proper type
based on the node_object that's returned

## Parameters

| Name | Type | Description |
|------|------|-------------|
| type | `mixed\|object\|array` | The type definition the node should resolve to. |
| node | `mixed\|object\|array` | The $node that is being resolved |




## Source

This filter is defined in [src/Data/DataSource.php:635](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/DataSource.php#L635)


## Examples

```php
add_filter('graphql_resolve_node_type', function($value, $type, $node) {
    // Modify $value here
    return $value;
});
```