---
title: "show_network_active_plugins"
since: "Unknown"
sourceFile: "src/Data/Connection/PluginConnectionResolver.php"
sourceLine: 76
---


{@inheritDoc}

## Parameters

This filter has no parameters.



## Return Value

| Type | Description |
|------|-------------|
| `array<string,array<string,mixed>>` | No description available. |



## Source

This filter is defined in [src/Data/Connection/PluginConnectionResolver.php:76](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/PluginConnectionResolver.php#L76)


## Examples

```php
add_filter('show_network_active_plugins', function($value) {
    // Modify $value here
    return $value;
});
```