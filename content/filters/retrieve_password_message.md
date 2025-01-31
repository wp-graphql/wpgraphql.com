---
title: "retrieve_password_message"
since: "Unknown"
sourceFile: "src/Mutation/SendPasswordResetEmail.php"
sourceLine: 256
---


Filters the message body of the password reset mail.
If the filtered message is empty, the password reset email will not be sent.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| message | `string` | Default mail message. |
| key | `string` | The activation key. |
| user_login | `string` | The username for the user. |
| user_data | `\WP_User` | WP_User object. |




## Source

This filter is defined in [src/Mutation/SendPasswordResetEmail.php:256](https://github.com/wp-graphql/wp-graphql/blob/develop/src/Mutation/SendPasswordResetEmail.php#L256)


## Examples

```php
add_filter('retrieve_password_message', function($value, $message, $key, $user_login, $user_data) {
    // Modify $value here
    return $value;
});
```