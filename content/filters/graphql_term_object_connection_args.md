---
title: "graphql_term_object_connection_args"
since: "1.11.0"
sourceFile: "src/Data/Connection/TermObjectConnectionResolver.php"
sourceLine: 285
---


Filters the GraphQL args before they are used in get_query_args().

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The GraphQL args passed to the resolver. |
| resolver | `self` | Instance of the ConnectionResolver. |
| unfiltered_args | `array<string,mixed>` | Array of arguments input in the field as part of the GraphQL query. |




## Source

This filter is defined in [src/Data/Connection/TermObjectConnectionResolver.php:285](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/Connection/TermObjectConnectionResolver.php#L285)


## Examples

```php
add_filter('graphql_term_object_connection_args', function($value, $args, $resolver, $unfiltered_args) {
    // Modify $value here
    return $value;
});
```