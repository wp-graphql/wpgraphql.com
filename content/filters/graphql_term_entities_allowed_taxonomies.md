---
title: "graphql_term_entities_allowed_taxonomies"
since: "0.0.2"
sourceFile: "src/WPGraphQL.php"
sourceLine: 790
---


Pass through a filter to allow the taxonomies to be modified.
For example if a certain taxonomy should not be exposed to the GraphQL API.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| tax_names | `string[]` | Array of taxonomy names |
| tax_objects | `\WP_Taxonomy[]` | Array of taxonomy objects. |




## Source

This filter is defined in [src/WPGraphQL.php:790](https://github.com/wp-graphql/wp-graphql/blob/develop/src/WPGraphQL.php#L790)


## Examples

```php
add_filter('graphql_term_entities_allowed_taxonomies', function($value, $tax_names, $tax_objects) {
    // Modify $value here
    return $value;
});
```