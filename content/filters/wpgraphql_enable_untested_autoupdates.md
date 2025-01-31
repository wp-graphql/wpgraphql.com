---
title: "wpgraphql_enable_untested_autoupdates"
since: "Unknown"
sourceFile: "src/Admin/Updates/UpdateChecker.php"
sourceLine: 337
---


Filter whether to allow autoupdates with untested plugins.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| should_allow | `bool` | Whether to allow autoupdates with untested plugins. |
| release_type | `string` | The release type of the current version of WPGraphQL. Either 'major', 'minor', 'patch', or 'prerelease'. |
| new_version | `string` | The new WPGraphQL version number. |
| current_version | `string` | The current WPGraphQL version number. |
| plugin_data | `object` | The plugin data object. |




## Source

This filter is defined in [src/Admin/Updates/UpdateChecker.php:337](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Updates/UpdateChecker.php#L337)


## Examples

```php
add_filter('wpgraphql_enable_untested_autoupdates', function($value, $should_allow, $release_type, $new_version, $current_version, $plugin_data) {
    // Modify $value here
    return $value;
});
```