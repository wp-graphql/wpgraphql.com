---
title: "graphql_get_possible_dependents"
since: "Unknown"
sourceFile: "src/Admin/Updates/UpdateChecker.php"
sourceLine: 428
---


Filters the list of plugins that use WPGraphQL as a dependency.
Can be used to hide false positives or to add additional plugins that may use WPGraphQL as a dependency.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| plugins | `array<string,array<string,mixed>>` | The array of plugins that maybe use WPGraphQL as a dependency. |
| all_plugins | `array<string,array<string,mixed>>` | The array of all plugins. |




## Source

This filter is defined in [src/Admin/Updates/UpdateChecker.php:428](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Updates/UpdateChecker.php#L428)


## Examples

```php
add_filter('graphql_get_possible_dependents', function($value, $plugins, $all_plugins) {
    // Modify $value here
    return $value;
});
```