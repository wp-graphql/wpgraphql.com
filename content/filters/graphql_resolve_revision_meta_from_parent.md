---
title: "graphql_resolve_revision_meta_from_parent"
since: "Unknown"
sourceFile: "src/Utils/Preview.php"
sourceLine: 37
---


Filters whether to resolve revision metadata from the parent node
by default.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should | `bool` | Whether to resolve using the parent object. Default true. |
| object_id | `int` | The ID of the object to resolve meta for |
| meta_key | `string` | The key for the meta to resolve |
| single | `bool` | Whether a single value should be returned |




## Source

This filter is defined in [src/Utils/Preview.php:37](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/Preview.php#L37)


## Examples

```php
add_filter('graphql_resolve_revision_meta_from_parent', function($value, $should, $object_id, $meta_key, $single) {
    // Modify $value here
    return $value;
});
```