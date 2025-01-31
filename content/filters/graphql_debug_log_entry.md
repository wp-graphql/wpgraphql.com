---
title: "graphql_debug_log_entry"
since: "Unknown"
sourceFile: "src/Utils/DebugLog.php"
sourceLine: 95
---


Filter the log entry for the debug log

## Parameters

| Name | Type | Description |
|------|------|-------------|
| log | `array<string,mixed>` | The log entry |
| config | `array<string,mixed>` | The config passed in with the log entry |




## Source

This filter is defined in [src/Utils/DebugLog.php:95](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/DebugLog.php#L95)


## Examples

```php
add_filter('graphql_debug_log_entry', function($value, $log, $config) {
    // Modify $value here
    return $value;
});
```