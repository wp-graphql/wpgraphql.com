# Template Hierarchy

The template hierarchy determines which template is used to display a WordPress page based on the content type and specific attributes of the requested content. Templates are checked in a specific order, from most specific to least specific, until a matching template is found.

## Template Resolution Order

### Front Page
1. `frontPage`

### Posts Page (Blog)
1. `home`

### Single Posts
1. `single-post-{slug}` (specific post by slug)
2. `single-post` (any single post)
3. `single` (any single post/custom post type)
4. `singular` (any single content)
5. `index` (fallback)

### Pages
1. `page-{slug}` (specific page by slug)
2. `page-{id}` (specific page by ID)
3. `page` (any page)
4. `singular` (any single content)
5. `index` (fallback)

### Category Archives
1. `category-{slug}` (specific category by slug)
2. `category-{id}` (specific category by ID)
3. `category` (any category)
4. `archive` (any archive)
5. `index` (fallback)

### Tag Archives
1. `tag-{slug}` (specific tag by slug)
2. `tag-{id}` (specific tag by ID)
3. `tag` (any tag)
4. `archive` (any archive)
5. `index` (fallback)

### Post Type Archives
1. `archive-{post_type}` (specific post type archive)
2. `archive` (any archive)
3. `index` (fallback)

### Custom Post Types
1. `single-{post_type}-{slug}` (specific custom post by slug)
2. `single-{post_type}` (any single custom post type)
3. `single` (any single post/custom post type)
4. `singular` (any single content)
5. `index` (fallback)

### Author Archives
1. `author-{nicename}` (specific author by nickname)
2. `author-{id}` (specific author by ID)
3. `author` (any author archive)
4. `archive` (any archive)
5. `index` (fallback)

## Implementation Details

The template hierarchy is implemented in the `getPossibleTemplates` function, which analyzes the WordPress node data and returns an array of possible templates in order of specificity. The `resolveTemplate` function then attempts to match these templates against the available template components in your application.

Each template in your application should be registered as a React component in your template configuration:

```tsx
// Example template configuration
const templates = {
    'front-page': FrontPage,
    'home': HomePage,
    'single-post': SinglePost,
    'page': Page,
    'archive': Archive,
    'index': Index,
    // Add more templates as needed
};
```

This configuration allows the `resolveTemplate` function to dynamically select the most appropriate template based on the current WordPress node being rendered.