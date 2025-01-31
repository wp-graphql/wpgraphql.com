---
title: "graphql_dataloader_get_model"
since: "Unknown"
sourceFile: "src/Data/Loader/AbstractDataLoader.php"
sourceLine: 415
---


Filter the model before returning.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| model | `mixed` | The Model to be returned by the loader |
| entry | `mixed` | The entry loaded by dataloader that was used to create the Model |
| key | `mixed` | The Key that was used to load the entry |
| loader | `\WPGraphQL\Data\Loader\AbstractDataLoader` | The AbstractDataLoader Instance |




## Source

This filter is defined in [src/Data/Loader/AbstractDataLoader.php:415](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Loader/AbstractDataLoader.php#L415)


## Examples

```php
add_filter('graphql_dataloader_get_model', function($value, $model, $entry, $key, $loader) {
    // Modify $value here
    return $value;
});
```