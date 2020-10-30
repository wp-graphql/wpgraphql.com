import React from 'react'
import { graphql } from 'gatsby'
import {Box, Flex, Heading, Stack} from '@chakra-ui/core'
import Layout from '../components/layout'
import Container from "../components/container";
import SnippetPreview from '../components/snippetPreview'
import SnippetSidebar from "../components/snippets-sidebar"
import PageTransition from "../components/page-transition";
import { graphql } from 'gatsby'

const Snippets = ({ data }) => {
  const snippets = data.allWpCodeSnippet.nodes
    return (
      <Layout>
          <Container>
              <Flex>
                  <SnippetSidebar />
                  <div style={{flex: 1}}>
                      <Box pt={3} px={5} mt="0" mx="auto" maxW="48rem" minH="80vh">
                          <PageTransition>
                              <Heading as="h1" fontSize={`4xl`}>Code Snippets</Heading>
                              <Stack mt={5} spacing={8}>
                              {snippets.map(snippet => (
                                <SnippetPreview
                                  key={snippet.id}
                                  title={snippet.title}
                                  path={snippet.uri}
                                  content={snippet.content}
                                  tags={snippet.codeSnippetTags.nodes}
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
        codeSnippetTags {
          nodes {
            name
            id
            uri
            snippetTagFields {
              color
            }
          }
        }
      }
    }
  }
`

export default Snippets;
