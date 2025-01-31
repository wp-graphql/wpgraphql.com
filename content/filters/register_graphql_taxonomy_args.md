---
title: "register_graphql_taxonomy_args"
since: "Unknown"
sourceFile: "src/WPGraphQL.php"
sourceLine: 628
---


Filters the graphql args set on a taxonomy

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | `array<string,mixed>` | The graphql specific args for the taxonomy |
| taxonomy_name | `string` | The name of the taxonomy being registered |




## Source

This filter is defined in [src/WPGraphQL.php:628](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L628)


## Examples

```php
add_filter('register_graphql_taxonomy_args', function($value, $args, $taxonomy_name) {
    // Modify $value here
    return $value;
});
```