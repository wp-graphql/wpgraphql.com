---
title: "graphql_tracing_response"
since: "Unknown"
sourceFile: "src/Utils/Tracing.php"
sourceLine: 356
---


Filter the trace

## Parameters

| Name | Type | Description |
|------|------|-------------|
| trace | `array<string,mixed>` | The trace to return |
| instance | `\WPGraphQL\Utils\Tracing` | The Tracing class instance |




## Source

This filter is defined in [src/Utils/Tracing.php:356](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/Tracing.php#L356)


## Examples

```php
add_filter('graphql_tracing_response', function($value, $trace, $instance) {
    // Modify $value here
    return $value;
});
```