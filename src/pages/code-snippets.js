import React from 'react'
import {Box, Flex, Heading, Stack} from '@chakra-ui/core'
import Layout from '../components/layout'
import Container from "../components/container";
import SnippetPreview from '../components/snippetPreview'
import PageTransition from "../components/page-transition";

const Snippets = ({ data }) => {
  const snippets = data.allWpCodeSnippet.nodes
    return (
      <Layout>
          <Container>
              <Flex>
                  <div style={{flex: 1}}>
                      <Box pt={3} px={5} mt="0" mx="auto" maxW="48rem" minH="80vh">
                          <PageTransition>
                              <Heading as="h1" fontSize={`4xl`}>Snippets</Heading>
                              <Stack spacing={8}>
                              {snippets.map(snippet => (
                                <SnippetPreview
                                  key={snippet.id}
                                  title={snippet.title}
                                  path={snippet.uri}
                                  content={snippet.content}
                                />
                              ))}
                              </Stack>
                          </PageTransition>
                      </Box>
                  </div>
              </Flex>
          </Container>
      </Layout>
    );
}

export const data = graphql`
  {
    allWpCodeSnippet(sort: {order: DESC, fields: date}) {
      nodes {
        title
        id
        content
        date
        uri
        tags {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`

export default Snippets;