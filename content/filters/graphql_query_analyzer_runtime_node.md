---
title: "graphql_query_analyzer_runtime_node"
since: "Unknown"
sourceFile: "src/Utils/QueryAnalyzer.php"
sourceLine: 675
---


Filter the node ID before returning to the list of resolved nodes

## Parameters

| Name | Type | Description |
|------|------|-------------|
| model_id | `int` | The ID of the model (node) being returned |
| model | `object` | The Model object being returned |
| runtime_nodes | `string[]\|int[]` | The runtimes nodes already collected |




## Source

This filter is defined in [src/Utils/QueryAnalyzer.php:675](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryAnalyzer.php#L675)


## Examples

```php
add_filter('graphql_query_analyzer_runtime_node', function($value, $model_id, $model, $runtime_nodes) {
    // Modify $value here
    return $value;
});
```