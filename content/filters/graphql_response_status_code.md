---
title: "graphql_response_status_code"
since: "Unknown"
sourceFile: "src/Router.php"
sourceLine: 551
---


Filter the $status_code before setting the headers

## Parameters

| Name | Type | Description |
|------|------|-------------|
| status_code | `int` | The status code to apply to the headers |
| response | `array` | The response of the GraphQL Request |
| graphql_results | `array` | The results of the GraphQL execution |
| query | `string` | The GraphQL query |
| operation_name | `string` | The operation name of the GraphQL Request |
| variables | `mixed[]` | The variables applied to the GraphQL Request |
| user | `\WP_User` | The current user object |




## Source

This filter is defined in [src/Router.php:551](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Router.php#L551)


## Examples

```php
add_filter('graphql_response_status_code', function($value, $status_code, $response, $graphql_results, $query, $operation_name, $variables, $user) {
    // Modify $value here
    return $value;
});
```