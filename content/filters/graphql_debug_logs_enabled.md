---
title: "graphql_debug_logs_enabled"
since: "Unknown"
sourceFile: "src/Utils/DebugLog.php"
sourceLine: 42
---


Filters whether GraphQL Debug is enabled enabled. Serves as the default state for enabling debug logs.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| enabled | `bool` | Whether logs are enabled or not |
| debug_log | `\WPGraphQL\Utils\DebugLog` | The DebugLog class instance |




## Source

This filter is defined in [src/Utils/DebugLog.php:42](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/DebugLog.php#L42)


## Examples

```php
add_filter('graphql_debug_logs_enabled', function($value, $enabled, $debug_log) {
    // Modify $value here
    return $value;
});
```