---
title: "graphql_dataloader_get_cached"
since: "Unknown"
sourceFile: "src/Data/Loader/AbstractDataLoader.php"
sourceLine: 439
---


Use this filter to retrieving cached data objects from third-party caching system.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| value | `mixed` | Value to be cached. |
| key | `int\|string` | Key identifying object. |
| loader_class | `string` | Loader class name. |
| loader | `mixed` | Loader instance. |




## Source

This filter is defined in [src/Data/Loader/AbstractDataLoader.php:439](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Loader/AbstractDataLoader.php#L439)


## Examples

```php
add_filter('graphql_dataloader_get_cached', function($value, $value, $key, $loader_class, $loader) {
    // Modify $value here
    return $value;
});
```