---
title: "graphql_request_data"
since: "Unknown"
sourceFile: "src/Server/WPHelper.php"
sourceLine: 60
---


Allow the request data to be filtered. Previously this filter was only
applied to non-HTTP requests. Since 0.2.0, we will apply it to all
requests.
This is a great place to hook if you are interested in implementing
persisted queries (and ends up being a bit more flexible than
graphql-php's built-in persistentQueryLoader).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| data | `mixed[]` | An array containing the pieces of the data of the GraphQL request |
| request_context | `mixed[]` | An array containing the both body and query params |




## Source

This filter is defined in [src/Server/WPHelper.php:60](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Server/WPHelper.php#L60)


## Examples

```php
add_filter('graphql_request_data', function($value, $data, $request_context) {
    // Modify $value here
    return $value;
});
```