---
title: "graphql_mutation_payload"
since: "Unknown"
sourceFile: "src/Type/WPMutationType.php"
sourceLine: 242
---


Filters the payload returned from the default mutateAndGetPayload callback.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| payload | `array<string,mixed>` | The payload returned from the callback. |
| mutation_name | `string` | The name of the mutation field. |
| input | `array<string,mixed>` | The mutation input args. |
| context | `\WPGraphQL\AppContext` | The AppContext object. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object. |




## Source

This filter is defined in [src/Type/WPMutationType.php:242](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPMutationType.php#L242)


## Examples

```php
add_filter('graphql_mutation_payload', function($value, $payload, $mutation_name, $input, $context, $info) {
    // Modify $value here
    return $value;
});
```