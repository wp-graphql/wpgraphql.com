---
title: "graphql_html_entity_decoding_enabled"
since: "Unknown"
sourceFile: "src/Model/Model.php"
sourceLine: 510
---


Determine whether html_entity_decode should be applied to the string

## Parameters

| Name | Type | Description |
|------|------|-------------|
| enabled | `bool` | Whether decoding is enabled by default for the string passed in |
| str | `string` | The string to decode |
| field_name | `string` | The name of the field being encoded |
| model | `\WPGraphQL\Model\Model` | The Model the field is being decoded on |




## Source

This filter is defined in [src/Model/Model.php:510](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Model/Model.php#L510)


## Examples

```php
add_filter('graphql_html_entity_decoding_enabled', function($value, $enabled, $str, $field_name, $model) {
    // Modify $value here
    return $value;
});
```