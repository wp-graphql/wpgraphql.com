---
title: "graphql_pre_format_name"
since: "Unknown"
sourceFile: "src/Utils/Utils.php"
sourceLine: 137
---


Filter to manually format a GraphQL name according to custom rules.
If anything other than null is returned, the result will be used for the name instead of the standard regex.
Useful for providing custom transliteration rules that will convert non ASCII characters to ASCII.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| formatted_name | `string\|null` | The name to format. If not null, the result will be returned as the formatted name. |
| original_name | `string` | The name to format. |
| replacement | `string` | The replacement character for invalid characters. Defaults to '_'. |
| regex | `string` | The regex to use to match invalid characters. Defaults to '/[^A-Za-z0-9_]/i'. |



## Return Value

| Type | Description |
|------|-------------|
| `string\|null` | No description available. |



## Source

This filter is defined in [src/Utils/Utils.php:137](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Utils/Utils.php#L137)


## Examples

```php
add_filter('graphql_pre_format_name', function($value, $formatted_name, $original_name, $replacement, $regex) {
    // Modify $value here
    return $value;
});
```