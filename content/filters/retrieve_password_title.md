---
title: "retrieve_password_title"
since: "Unknown"
sourceFile: "src/Mutation/SendPasswordResetEmail.php"
sourceLine: 204
---


Filters the subject of the password reset email.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| title | `string` | Default email title. |
| user_login | `string` | The username for the user. |
| user_data | `\WP_User` | WP_User object. |




## Source

This filter is defined in [src/Mutation/SendPasswordResetEmail.php:204](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/SendPasswordResetEmail.php#L204)


## Examples

```php
add_filter('retrieve_password_title', function($value, $title, $user_login, $user_data) {
    // Modify $value here
    return $value;
});
```