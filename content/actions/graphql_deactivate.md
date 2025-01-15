---
title: "graphql_deactivate"
since: "Unknown"
sourceFile: "deactivation.php"
sourceLine: 16
---


Runs when WPGraphQL is de-activated
This cleans up data that WPGraphQL stores

## Parameters

This action has no parameters.


## Source

This action is defined in [deactivation.php:16](https://github.com/wp-graphql/wp-graphql/blob/develop/deactivation.php#L16)


## Examples

```php
add_action('graphql_deactivate', function() {
    // Add your code here
});
```