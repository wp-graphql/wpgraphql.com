---
title: "graphql_user_can_see_trace_data"
since: "Unknown"
sourceFile: "src/Utils/Tracing.php"
sourceLine: 329
---


Filter whether the logs can be seen in the request results or not

## Parameters

| Name | Type | Description |
|------|------|-------------|
| can_see | `bool` | Whether the requester can see the logs or not |




## Source

This filter is defined in [src/Utils/Tracing.php:329](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/Tracing.php#L329)


## Examples

```php
add_filter('graphql_user_can_see_trace_data', function($value, $can_see) {
    // Modify $value here
    return $value;
});
```