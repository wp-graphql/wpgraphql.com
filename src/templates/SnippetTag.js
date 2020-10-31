import React from "react"
import { graphql } from 'gatsby'
import {Box, Flex, Heading, Stack} from '@chakra-ui/core'
import Layout from "../components/layout"
import Container from "../components/container"
import SnippetPreview from '../components/snippetPreview'
import SnippetSidebar from "../components/snippets-sidebar"
import PageTransition from "../components/page-transition"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

const SnippetTag = ({data}) => {

    const tag = data.wpCodeSnippetTag;
    const crumbs = [
      {
        title: `Code Snippets`,
        path: `/code-snippets`,
      },
      {
        title: tag.name,
        path: tag.uri,
        isCurrentPage: true,
      }
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <SnippetSidebar />
                    <div style={{flex: 1}}>
                        <Box pt={3} px={5} mt="0" mx="auto" maxW="48rem" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs} />
                                <Heading as="h1" fontSize={`4xl`}>Code Snippets: {tag.name}</Heading>
                                <Stack mt={5} spacing={8}>
                                {tag.contentNodes.nodes.map(snippet => (
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

export const query = graphql`
query($id: String) {
  wpCodeSnippetTag(id: { eq: $id }) {
    __typename
    id
    uri
    name
    snippetTagFields {
      color
    }
    contentNodes {
      nodes {
        id
        uri
        ...on WpNodeWithTitle {
          title
        }
        ...on WpNodeWithContentEditor {
          content
        }
        ... on WpCodeSnippet {
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
  }
}
`;

export default SnippetTag
