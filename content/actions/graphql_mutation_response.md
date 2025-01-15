---
title: "graphql_mutation_response"
since: "Unknown"
sourceFile: "src/Type/WPMutationType.php"
sourceLine: 255
---


Fires after the mutation payload has been returned from the `mutateAndGetPayload` callback.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| payload | `array<string,mixed>` | The Payload returned from the mutation. |
| input | `array<string,mixed>` | The mutation input args, after being filtered by 'graphql_mutation_input'. |
| unfiltered_input | `array<string,mixed>` | The unfiltered input args of the mutation |
| context | `\WPGraphQL\AppContext` | The AppContext object. |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo object. |
| mutation_name | `string` | The name of the mutation field. |


## Source

This action is defined in [src/Type/WPMutationType.php:255](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Type/WPMutationType.php#L255)


## Examples

```php
add_action('graphql_mutation_response', function($payload, $input, $unfiltered_input, $context, $info, $mutation_name) {
    // Add your code here
});
```