---
title: "wpgraphql_enable_major_autoupdates"
since: "Unknown"
sourceFile: "src/Admin/Updates/UpdateChecker.php"
sourceLine: 315
---


Filter whether to allow major autoupdates.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_allow | `bool` | Whether to allow major autoupdates. Defaults to false. |
| new_version | `string` | The new WPGraphQL version number. |
| current_version | `string` | The current WPGraphQL version number. |
| plugin_data | `object` | The plugin data object. |




## Source

This filter is defined in [src/Admin/Updates/UpdateChecker.php:315](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Updates/UpdateChecker.php#L315)


## Examples

```php
add_filter('wpgraphql_enable_major_autoupdates', function($value, $should_allow, $new_version, $current_version, $plugin_data) {
    // Modify $value here
    return $value;
});
```