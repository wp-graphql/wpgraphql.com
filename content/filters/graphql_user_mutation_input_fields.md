---
title: "graphql_user_mutation_input_fields"
since: "Unknown"
sourceFile: "src/Data/UserMutation.php"
sourceLine: 103
---


Filters all of the fields available for input

## Parameters

| Name | Type | Description |
|------|------|-------------|
| input_fields | `array<string,array<string,mixed>>` |  |




## Source

This filter is defined in [src/Data/UserMutation.php:103](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Data/UserMutation.php#L103)


## Examples

```php
add_filter('graphql_user_mutation_input_fields', function($value, $input_fields) {
    // Modify $value here
    return $value;
});
```