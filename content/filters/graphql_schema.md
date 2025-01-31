---
title: "graphql_schema"
since: "Unknown"
sourceFile: "src/Registry/SchemaRegistry.php"
sourceLine: 57
---


Filter the Schema

## Parameters

| Name | Type | Description |
|------|------|-------------|
| schema | `\WPGraphQL\WPSchema` | The generated Schema |
| registry | `\WPGraphQL\Registry\SchemaRegistry` | The Schema Registry Instance |




## Source

This filter is defined in [src/Registry/SchemaRegistry.php:57](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Registry/SchemaRegistry.php#L57)


## Examples

```php
add_filter('graphql_schema', function($value, $schema, $registry) {
    // Modify $value here
    return $value;
});
```