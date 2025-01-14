# WPGraphQL Toolkit

A framework-agnostic toolkit for building headless WordPress applications with WPGraphQL. This toolkit provides core functionality for GraphQL query execution that can be used with any JavaScript framework.

## Features

- 🔄 **Multi-client support**: Configure and use multiple WPGraphQL endpoints
- 🌐 **Flexible HTTP methods**: Supports both GET and POST requests
- 🔌 **Extensible**: Uses `@wordpress/hooks` for plugin-style modifications
- 🎨 **Framework agnostic**: Use with Next.js, Astro, Remix, or any other framework
- 📦 **TypeScript support**: Built with TypeScript for better developer experience
- 📚 **Documentation**: Built with TypeScript for better developer experience
- 📚 **Templates**: Route templates based on the path of the request (matches WordPress template hierarchy, with some enhanced functionality)

## Installation

```bash
npm install wpgraphql-toolkit @wordpress/hooks
```

## Quick Start

```typescript
import { WPGraphQLToolkit } from 'wpgraphql-toolkit'

// Configure your clients
const toolkit = new WPGraphQLToolkit({
  clients: {
    main: {
      url: 'https://example.com/graphql',
    },
    docs: {
      url: 'https://docs.example.com/graphql',
      headers: {
        Authorization: 'Bearer token'
      },
      templates: {
        'page': './templates/page.tsx',
        'post': './templates/post.tsx',
        'category': './templates/category.tsx',
        'tag': './templates/tag.tsx',
        'author': './templates/author.tsx',
        'archive': './templates/archive.tsx',
        '404': './templates/404.tsx',
      },
    }
  },
  default: 'main'
})

// Make a request
const data = await toolkit.fetch(
  `query GetPost($id: ID!) {
    post(id: $id) {
      title
      content
    }
  }`,
  {
    client: 'main',
    variables: { id: '123' }
  }
)
```

## Configuration

Configure multiple WPGraphQL clients with their own endpoints and headers:

```typescript
{
  clients: {
    main: {
      url: 'https://example.com/graphql',
      headers: {
        Authorization: 'Bearer token'
      }
    },
    docs: {
      url: 'https://docs.example.com/graphql'
    }
  },
  default: 'main',
  headers: {
    // Global headers for all clients
    'User-Agent': 'My App'
  }
}
```

## Making Requests

### GET Requests (Default)
```typescript
// Query parameters will be properly encoded in the URL
const data = await toolkit.fetch(query, {
  client: 'docs',
  variables: { id: '123' }
})
```

### POST Requests
```typescript
// Query and variables will be sent in the request body
const data = await toolkit.fetch(query, {
  client: 'docs',
  method: 'POST',
  variables: { id: '123' }
})
```

### With Extensions
```typescript
const data = await toolkit.fetch(query, {
  client: 'docs',
  variables: { id: '123' },
  extensions: {
    persistedQuery: {
      version: 1,
      sha256Hash: 'hash'
    }
  }
})
```

### Custom Headers
```typescript
const data = await toolkit.fetch(query, {
  client: 'docs',
  headers: {
    'Cache-Control': 'no-cache'
  }
})
```

## Extension Points

The toolkit uses WordPress-style hooks for extensibility:

```typescript
import { addFilter } from '@wordpress/hooks'

// Modify requests before they're sent
addFilter(
  'wpgraphql.request',
  'my-plugin',
  (request) => {
    return {
      ...request,
      headers: {
        ...request.headers,
        'X-Custom-Header': 'value'
      }
    }
  }
)
```

## Framework Integration Examples

### Next.js
```typescript
// app/[...path]/page.tsx
import { WPGraphQLToolkit } from 'wpgraphql-toolkit'

const toolkit = new WPGraphQLToolkit({
  clients: {
    main: { url: process.env.WORDPRESS_URL }
  }
})

export default async function Page() {
  const data = await toolkit.fetch(YOUR_QUERY)
  return <YourTemplate data={data} />
}
```

### Astro
```typescript
// src/pages/[...path].astro
import { WPGraphQLToolkit } from 'wpgraphql-toolkit'

const toolkit = new WPGraphQLToolkit({
  clients: {
    main: { url: import.meta.env.WORDPRESS_URL }
  }
})

const data = await toolkit.fetch(YOUR_QUERY)
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

MIT

## Development Roadmap

- [ ] Query batching
- [ ] Automatic persisted queries
- [ ] Request caching
- [ ] Response error handling
- [ ] Framework-specific adapters