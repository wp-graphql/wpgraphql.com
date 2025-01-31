---
title: "graphql_admin_notices_is_allowed_admin_page"
since: "Unknown"
sourceFile: "src/Admin/AdminNotices.php"
sourceLine: 373
---


Filter to determine if the current admin page is within the scope of the plugin's own pages.
This filter can be used to add additional pages to the list of allowed pages.
The filter receives the following arguments:

## Parameters

| Name | Type | Description |
|------|------|-------------|
| is_plugin_scoped_page | `bool` | True if the current page is within scope of the plugin's pages. |
| current_page_id | `string` | The ID of the current admin page. |
| allowed_pages | `array<string>` | The list of allowed pages. |




## Source

This filter is defined in [src/Admin/AdminNotices.php:373](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Admin/AdminNotices.php#L373)


## Examples

```php
add_filter('graphql_admin_notices_is_allowed_admin_page', function($value, $is_plugin_scoped_page, $current_page_id, $allowed_pages) {
    // Modify $value here
    return $value;
});
```