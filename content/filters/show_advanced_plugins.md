---
title: "show_advanced_plugins"
since: "Unknown"
sourceFile: "src/Data/Loader/PluginLoader.php"
sourceLine: 42
---


{@inheritDoc}

## Parameters

| Name | Type | Description |
|------|------|-------------|
| keys | `string[]` | Array of plugin names to load |



## Return Value

| Type | Description |
|------|-------------|
| `array<string,array<string,mixed>\|null>` | No description available. |



## Source

This filter is defined in [src/Data/Loader/PluginLoader.php:42](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Loader/PluginLoader.php#L42)


## Examples

```php
add_filter('show_advanced_plugins', function($value, $keys) {
    // Modify $value here
    return $value;
});
```