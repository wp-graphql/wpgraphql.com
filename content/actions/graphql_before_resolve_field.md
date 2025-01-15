---
title: "graphql_before_resolve_field"
since: "Unknown"
sourceFile: "src/Utils/InstrumentSchema.php"
sourceLine: 108
---


Fire an action BEFORE the field resolves

## Parameters

| Name | Type | Description |
|------|------|-------------|
| source | `mixed` | The source passed down the Resolve Tree |
| args | `array<string,mixed>` | The args for the field |
| context | `\WPGraphQL\AppContext` | The AppContext passed down the ResolveTree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down the ResolveTree |
| field_resolver | `callable` | The Resolve function for the field |
| type_name | `string` | The name of the type the fields belong to |
| field_key | `string` | The name of the field |
| field | `\GraphQL\Type\Definition\FieldDefinition` | The Field Definition for the resolving field |


## Source

This action is defined in [src/Utils/InstrumentSchema.php:108](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/InstrumentSchema.php#L108)


## Examples

```php
add_action('graphql_before_resolve_field', function($source, $args, $context, $info, $field_resolver, $type_name, $field_key, $field) {
    // Add your code here
});
```