---
title: "graphql_wp_union_type"
since: "Unknown"
sourceFile: "src/Type/WPUnionType.php"
sourceLine: 103
---


Run an action when the WPUnionType is instantiating

## Parameters

| Name | Type | Description |
|------|------|-------------|
| config | `array<string,mixed>` | Array of configuration options passed to the WPUnionType when instantiating a new type |
| wp_union_type | `\WPGraphQL\Type\WPUnionType` | The instance of the WPUnionType class |


## Source

This action is defined in [src/Type/WPUnionType.php:103](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPUnionType.php#L103)


## Examples

```php
add_action('graphql_wp_union_type', function($config, $wp_union_type) {
    // Add your code here
});
```