---
title: "graphql_pre_mutate_and_get_payload"
since: "Unknown"
sourceFile: "src/Type/WPMutationType.php"
sourceLine: 226
---


Filter to short circuit the mutateAndGetPayload callback.
Returning anything other than null will stop the callback for the mutation from executing,
and will return your data or execute your callback instead.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| payload | `array<string,mixed>\|callable\|null` |  |
| mutation_name | `string` | The name of the mutation field. |
| mutateAndGetPayload | `callable\|\Closure` | The callback for the mutation. |
| input | `array<string,mixed>` | The mutation input args. |
| context | `\WPGraphQL\AppContext` | The AppContext object. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object. |




## Source

This filter is defined in [src/Type/WPMutationType.php:226](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPMutationType.php#L226)


## Examples

```php
add_filter('graphql_pre_mutate_and_get_payload', function($value, $payload, $mutation_name, $mutateAndGetPayload, $input, $context, $info) {
    // Modify $value here
    return $value;
});
```