---
title: "wpgraphql_untested_release_type"
since: "Unknown"
sourceFile: "src/Admin/Updates/UpdateChecker.php"
sourceLine: 352
---


Filter the release type to use when checking for untested plugins.
This is used to prevent autoupdates when a plugin is untested with the specified channel. I.e. major > minor > patch > prerelease.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| release_type | `'major'\|'minor'\|'patch'\|'prerelease'` | The release type to use when checking for untested plugins. Defaults to 'major'. |




## Source

This filter is defined in [src/Admin/Updates/UpdateChecker.php:352](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/Updates/UpdateChecker.php#L352)


## Examples

```php
add_filter('wpgraphql_untested_release_type', function($value, $release_type) {
    // Modify $value here
    return $value;
});
```