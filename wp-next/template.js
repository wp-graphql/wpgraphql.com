import { gql, useQuery } from '@apollo/client';
import { addApolloState, initializeApollo } from 'lib/data/apollo'
import Singular from 'templates/Singular/Singular';
import Author from 'templates/Author/Author';
import Category from 'templates/Category/Category';
import Archive from 'templates/Archive/Archive';
import Index from 'templates/Index/Index';
import SingleRecipe from 'templates/SingleRecipe/SingleRecipe';
import { NAV_QUERY } from 'components/SiteHeader/SiteHeader';

export const SEED_QUERY = gql`
query GetNodeByUri($uri: String!) {
    node: nodeByUri(uri: $uri) {
      ...NodeByUri
    }
  }
  
  fragment NodeByUri on UniformResourceIdentifiable {
    __typename
    uri
    id
    ...DatabaseIdentifier
    ...ContentType
    ...User
    ...TermNode
    ...ContentNode
    ...MediaItem
    
  }
  
  fragment DatabaseIdentifier on DatabaseIdentifier {
    databaseId
  }
  
  fragment MediaItem on MediaItem {
    id
    mimeType
  }
  
  fragment ContentType on ContentType {
    name
    isFrontPage
    isPostsPage
  }
  
  fragment TermNode on TermNode {
    isTermNode
    slug
    taxonomyName
  }
  
  fragment ContentNode on ContentNode {
    isContentNode
    slug
    contentType {
      node {
        name
      }
    }
    template {
      templateName
    }
  }
  
  fragment User on User {
    nicename
    databaseId
  }
`

const TEMPLATES = {
  single: {
    name: 'single',
    query: gql`
      {
        single: __typename
      }
    `,
    component: () => <h1>SINGLE...</h1>,
  },
  'singular-832361': {
    name: 'singular-832361',
    query: Singular.query,
    variables: Singular.variables,
    component: Singular.component,
  },
  singular: Singular,
  page: {
    name: 'page',
    query: gql`
      {
        page: __typename
      }
    `,
    component: () => <h1>PAGE...</h1>,
  },
  home: {
    name: 'home',
    query: gql`
      {
        home: __typename
      }
    `,
    component: () => <h1>HOME...</h1>,
  },
  search: {
    name: 'search',
    query: gql`
      {
        search: __typename
      }
    `,
    component: () => <h1>SEARCH...</h1>,
  },
  archive: Archive,
  author: Author,
//   'author-7': {
//     name: 'author-7',
//     query: Author7.query,
//     component: Author7,
//   },
  frontPage: {
    name: 'frontPage',
    query: gql`
      {
        frontPage: __typename
      }
    `,
    component: () => <h1>FRONT PAGE...</h1>,
  },
  category: Category,
  tag: {
    name: 'tag',
    query: gql`
      {
        tag: __typename
      }
    `,
    component: (props) => {
      return (
        <>
          <h1>TAG...</h1>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
      )
    },
  },
  'single-code-snippets': SingleRecipe,
  'single-actions': SingleRecipe,
  'single-filters': SingleRecipe,
  'single-functions': SingleRecipe,
  'tag-43': {
    name: 'tag43',
    query: gql`
      {
        tag43: __typename
      }
    `,
    component: (props) => {
      return (
        <>
          <h1>TAG 43...</h1>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
      )
    },
  },
  term: {
    name: 'term',
    query: gql`
      {
        term: __typename
      }
    `,
    component: (props) => {
      return (
        <>
          <h1>TERM...</h1>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
      )
    },
  },
  index: {
    name: 'index',
    query: Index.query,
    component: Index.component,
  },
}

export const getTemplate = (templateName) => {
  const foundTemplate = Object.keys(TEMPLATES).filter((key) => key === templateName)[0]
  const template = TEMPLATES[foundTemplate] ?? null

    const defaultTemplate = {
        name: 'default',
        query: gql`
            query NodeByUri($uri:String){ 
                default: __typename
                nodeByUri(uri:$uri) {
                    __typename
                    uri
                }
            }`,
        component: props => (
            <>
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </>
            ),
        variables: rootNode => {
            return {
                uri: rootNode.uri,
            }
        }
    }

  return template
}

export const getPageTemplate = (seedNode) => {
  // TODO: Add a filter to allow users to apply their own logic to analyze the seed node
  // and determine which template to use.
  //
  // For example, if the seed node has some custom meta or maybe some combination of fields, like
  // any post in x category, or any author with x last name or whatever
  // could be mapped to a custom template.
  //
  // essentially similar to the `template_redirect` hook in WordPress core

  let template = getTemplate('page')
  const typeName = seedNode?.contentTypeName ?? 'page'

  if (seedNode?.databaseId) {
    template = getTemplate(`${typeName}-${seedNode.databaseId}`)
  }

  if (seedNode?.slug) {
    template = getTemplate(`${typeName}-${seedNode.slug}`)
  }

  if (seedNode?.template?.templateName) {
    template = getTemplate(`${typeName}-${seedNode.template.templateName}`)
  }

  return template
}

export const getTemplateForSeedNode = (seedNode) => {
  let template

  if (!seedNode) {
    return null
  }

  // if user defined a callback to determine the template, use that first, if not, fallback
//   if ((template = whateverConfig.templateResolver(seedNode))) {
//     return template
//   }

  template = getTemplate('index')

  const { uri } = seedNode

  if ('/' === uri || '' === uri) {
    if ('Page' !== seedNode.__typename) {
      if (seedNode.isPostsPage) {
        template = getTemplate('home') ?? template
      }
      template = getTemplate('frontPage') ?? template
    } else {
      template = getTemplate('frontPage') ?? template
    }
  }

  
  if (true === seedNode?.isContentNode) {
    const typeName = seedNode.contentType?.node?.name ?? 'page'
    template = getTemplate('singular') ?? template
    // console.log( { typeName })
    switch (typeName) {
      //@todo: fix this
      case 'code-snippets':
      case 'single-actions':
      case 'single-functions':
      case 'single-filters':
        // console.log( { TEMPLATES })
        template = getTemplate('single-code-snippets') ?? 'goo'
        // console.log( { template })
        break;
      case 'page':
        template = getPageTemplate(seedNode) ?? template
        break
      case 'post':
        break
    }
    template = getTemplate(`${typeName}-${seedNode.databaseId}`) ?? template
  }

  if (true === seedNode?.isTermNode) {
    const typeName = seedNode?.taxonomyName ?? 'category'
    template = getTemplate('archive') ?? template

    switch (seedNode?.__typename) {
      case 'Category':
        template = getTemplate('category') ?? template
        if (seedNode?.databaseId) {
          template = getTemplate(`category-${seedNode.databaseId}`) ?? template
        }
        if (seedNode?.slug) {
          template = getTemplate(`category-${seedNode.slug}`) ?? template
        }
        break
      case 'Tag':
        template = getTemplate('tag') ?? template
        if (seedNode?.databaseId) {
          template = getTemplate(`tag-${seedNode.databaseId}`) ?? template
        }
        if (seedNode?.slug) {
          template = getTemplate(`tag-${seedNode.slug}`) ?? template
        }
        break
    }
  }

  switch (seedNode.__typename) {
    case 'ContentType':
      template = getTemplate('archive') ?? template
      break
    case 'User':
      // fallback for authors
      template = getTemplate('archive') ?? template

      // default for authors
      template = getTemplate('author') ?? template

      // specific for authors, by id
      if (seedNode?.databaseId) {
        template = getTemplate(`author-${seedNode.databaseId}`) ?? template
      }

      // specific for authors, by name
      if (seedNode?.nicename) {
        template = getTemplate(`author-${seedNode.nicename}`) ?? template
      }

      break
  }

  return {
    ...template,
    variables: template?.variables ? template.variables(seedNode) : null,
    error: template?.error ?? <h2>Error...</h2>,
    loading: template?.loading ?? <h2>Loading...</h2>
  }
}

export const wordPressServerSideProps = async (context) => {

  let resolvedUrl = null;
  let params = null;
  let isStatic = false;

  // if there's no resolvedUrl in the context, 
  // then we're using SSG instead of SSR
  if ( context.resolvedUrl ) {
    params = context?.params ?? null;
    resolvedUrl = context?.resolvedUrl ?? null;
    
  } else if ( context?.params?.WordPressNode ) {
    params = context?.params ?? null;
    isStatic = true;
    resolvedUrl = context?.params?.WordPressNode ? context?.params?.WordPressNode.join('/') : null;
  }

  if ( !resolvedUrl ) {
    return {
      notFound: true,
    }
  }
  
  const apolloClient = initializeApollo()
  const root = await apolloClient.query({ query: SEED_QUERY, variables: { uri: resolvedUrl } })
  
  const rootNode = root.data.node ?? null
  
  if (!rootNode) {
      return {
          notFound: true,
      }
  }
  
  const template = getTemplateForSeedNode(rootNode)
  const { query, variables } = template

  await apolloClient.query({
    query,
    variables,
  })
  
  await apolloClient.query({
    query: NAV_QUERY,
    variables: { menu_name: 'Primary Nav' },
  })

  let props = {
    uri: resolvedUrl,
    rootNode,
    params
  }

  let response = {
    props
  }

  // if we're using SSG, we need to determine the revalidate timer
  if ( isStatic ) {
    response = {
      props,
      revalidate: 5 
    }
  }
  
  return addApolloState(apolloClient, response)
}

export const WordPressNode = props => {
  const { rootNode, pageData, templates = {} } = props
  console.log( { props } )
  let template = getTemplateForSeedNode(rootNode)
  console.log( { template, props, templates } )

  if ( ! template || ! template.query || ! template.variables ) {
    return <h2>Error...</h2>
  }

  if ( templates[template.name] ) {
    template = { ...template, ...templates[template.name] }
  }
  console.log( { template })

  const { query, variables } = template
  let Component = template.component ?? <h2>Fallback Template...</h2>
  
  const { data, error, loading, called, client } = useQuery(query, {
    variables,
    ssr: true
  })

  return (
    <>
      <Component error={error} loading={loading} data={data ?? pageData } {...props} />
    </>
  )
}