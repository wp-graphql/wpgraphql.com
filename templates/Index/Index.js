import { gql } from '@apollo/client'

const Index = {
  name: 'Index',
}

Index.query = gql`
  {
    INDEX: __typename
    posts {
      nodes {
        id
        title
        author {
          node {
            name
            uri
          }
        }
      }
    }
  }
`

Index.component = (props) => (
  <>
    <h1>INDEX...</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </>
)

export default Index
