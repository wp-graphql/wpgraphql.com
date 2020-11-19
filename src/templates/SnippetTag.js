import React from "react"
import { graphql } from "gatsby"
import { Box, Flex, Heading, Stack } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Container from "../components/Container"
import RecipePreview from "../components/RecipePreview"
import RecipeSidebar from "../components/RecipeSidebar"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const SnippetTag = ({ data }) => {
  const tag = data.wpCodeSnippetTag
  const crumbs = [
    {
      title: `Recipes`,
      path: `/recipes/`,
    },
    {
      title: tag.name,
      path: tag.uri,
      isCurrentPage: true,
    },
  ]

  return (
    <Layout>
      <Container>
        <Flex>
          <RecipeSidebar />
          <div style={{ flex: 1 }}>
            <Box
              className="content"
              pt={3}
              px={5}
              mt="0"
              mx="auto"
              maxWidth={[`20rem`, "30rem", "100%"]}
              minH="80vh"
            >
              <PageTransition>
                <Breadcrumb crumbs={crumbs} />
                <Heading as="h1" fontSize={`4xl`}>
                  Recipes: {tag.name}
                </Heading>
                <Stack mt={5} spacing={8}>
                  {tag.contentNodes.nodes.map((snippet) => (
                    <RecipePreview
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
  )
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
          ... on WpNodeWithTitle {
            title
          }
          ... on WpNodeWithContentEditor {
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
`

export default SnippetTag
