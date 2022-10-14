import { gql } from "@apollo/client"

export default function Index(props) {
  return (
    <>
      <h1>INDEX...</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
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
