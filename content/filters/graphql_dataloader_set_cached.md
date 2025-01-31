---
title: "graphql_dataloader_set_cached"
since: "Unknown"
sourceFile: "src/Data/Loader/AbstractDataLoader.php"
sourceLine: 471
---


Use this filter to store entry in a third-party caching system.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| value | `mixed` | Value to be cached. |
| key | `mixed` | Key identifying object. |
| loader_class | `string` | Loader class name. |
| loader | `mixed` | Loader instance. |




## Source

This filter is defined in [src/Data/Loader/AbstractDataLoader.php:471](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Loader/AbstractDataLoader.php#L471)


## Examples

```php
add_filter('graphql_dataloader_set_cached', function($value, $value, $key, $loader_class, $loader) {
    // Modify $value here
    return $value;
});
```