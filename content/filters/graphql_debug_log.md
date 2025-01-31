---
title: "graphql_debug_log"
since: "Unknown"
sourceFile: "src/Utils/DebugLog.php"
sourceLine: 131
---


Return the filtered debug log

## Parameters

| Name | Type | Description |
|------|------|-------------|
| logs | `array<string,mixed>[]` | The logs to be output with the request |
| instance | `\WPGraphQL\Utils\DebugLog` | The Debug Log class |




## Source

This filter is defined in [src/Utils/DebugLog.php:131](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/DebugLog.php#L131)


## Examples

```php
add_filter('graphql_debug_log', function($value, $logs, $instance) {
    // Modify $value here
    return $value;
});
```