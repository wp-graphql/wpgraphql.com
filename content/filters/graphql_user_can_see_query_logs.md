---
title: "graphql_user_can_see_query_logs"
since: "Unknown"
sourceFile: "src/Utils/QueryLog.php"
sourceLine: 90
---


Filter whether the logs can be seen in the request results or not

## Parameters

| Name | Type | Description |
|------|------|-------------|
| can_see | `bool` | Whether the requester can see the logs or not |




## Source

This filter is defined in [src/Utils/QueryLog.php:90](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/QueryLog.php#L90)


## Examples

```php
add_filter('graphql_user_can_see_query_logs', function($value, $can_see) {
    // Modify $value here
    return $value;
});
```