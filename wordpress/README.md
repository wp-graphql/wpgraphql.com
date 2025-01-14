# WordPress

This directory contains the WordPress site for the website.

This uses WordPress Playground to generate a WordPress install in the browser. The WordPress site is populated with the content from the ./content directory. Any changes to the content in the ./content directory are then saved back to files in the ./content directory.

The WordPress content is then fetched from the WordPress site using WPGraphQL Queries and rendered in the Next.js app.

