---
title: "graphql_mutation_input"
since: "Unknown"
sourceFile: "src/Type/WPMutationType.php"
sourceLine: 212
---


Filters the mutation input before it's passed to the `mutateAndGetPayload` callback.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| input | `array<string,mixed>` | The mutation input args. |
| context | `\WPGraphQL\AppContext` | The AppContext object. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object. |
| mutation_name | `string` | The name of the mutation field. |




## Source

This filter is defined in [src/Type/WPMutationType.php:212](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPMutationType.php#L212)


## Examples

```php
add_filter('graphql_mutation_input', function($value, $input, $context, $info, $mutation_name) {
    // Modify $value here
    return $value;
});
```