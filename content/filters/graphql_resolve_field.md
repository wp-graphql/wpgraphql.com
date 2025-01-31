---
title: "graphql_resolve_field"
since: "Unknown"
sourceFile: "src/Utils/InstrumentSchema.php"
sourceLine: 162
---


Fire an action before the field resolves

## Parameters

| Name | Type | Description |
|------|------|-------------|
| result | `mixed` | The result of the field resolution |
| source | `mixed` | The source passed down the Resolve Tree |
| args | `array<string,mixed>` | The args for the field |
| context | `\WPGraphQL\AppContext` | The AppContext passed down the ResolveTree |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo passed down the ResolveTree |
| type_name | `string` | The name of the type the fields belong to |
| field_key | `string` | The name of the field |
| field | `\GraphQL\Type\Definition\FieldDefinition` | The Field Definition for the resolving field |
| field_resolver | `callable` | The default field resolver |




## Source

This filter is defined in [src/Utils/InstrumentSchema.php:162](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/InstrumentSchema.php#L162)


## Examples

```php
add_filter('graphql_resolve_field', function($value, $result, $source, $args, $context, $info, $type_name, $field_key, $field, $field_resolver) {
    // Modify $value here
    return $value;
});
```