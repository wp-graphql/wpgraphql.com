---
title: "graphql_media_item_create_allowed_protocols"
since: "Unknown"
sourceFile: "src/Mutation/MediaItemCreate.php"
sourceLine: 180
---


Filter the allowed protocols for the mutation

## Parameters

| Name | Type | Description |
|------|------|-------------|
| allowed_protocols | `string[]` | The allowed protocols for filePaths to be submitted |
| protocol | `mixed` | The current protocol of the filePath |
| input | `array<string,mixed>` | The input of the current mutation |
| context | `\WPGraphQL\AppContext` | The context of the current request |
| info | `\GraphQL\Type\Definition\ResolveInfo` | The ResolveInfo of the current field |




## Source

This filter is defined in [src/Mutation/MediaItemCreate.php:180](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/MediaItemCreate.php#L180)


## Examples

```php
add_filter('graphql_media_item_create_allowed_protocols', function($value, $allowed_protocols, $protocol, $input, $context, $info) {
    // Modify $value here
    return $value;
});
```