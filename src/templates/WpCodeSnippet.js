import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from "gatsby"
import PageTransition from "../components/PageTransition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import RecipeSidebar from "../components/RecipeSidebar"
import {getPagination} from "../utils";
import Pagination from "../components/Pagination";

const WpCodeSnippet = ({ data }) => {
  const {
    wpContentNode: { title, content, uri },
      allWpCodeSnippet
  } = data
  const crumbs = [
    {
      title: `Developer Reference`,
      path: `/developer-reference/`,
    },
    {
      title: `Recipes`,
      path: `/recipes/`,
    },
    {
      title: title,
      path: uri,
      isCurrentPage: true,
    },
  ]

    const pagination = getPagination(uri, allWpCodeSnippet.nodes)

  return (
    <Layout>
      <Container>
        <Flex>
          <RecipeSidebar />
          <Box style={{ flex: 1 }}>
            <Box pt={3} px={[0, 0, 10]} pr={0} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Box
                  className="content"
                  pt={3}
                  mt="0"
                  mx="auto"
                  maxWidth={[`20rem`, "30rem", "100%"]}
                  minH="80vh"
                >
                  <Breadcrumb crumbs={crumbs} />
                  <Heading as="h1" fontSize={`4xl`}>
                    {title}
                  </Heading>
                  {ParseHtml(content)}
                    <Pagination
                        sx={{ ".pagination-link": { wordBreak: "break-word" } }}
                        next={pagination.next}
                        previous={pagination.previous}
                    />
                </Box>
              </PageTransition>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpContentNode(id: { eq: $id }) {
      __typename
      id
      uri
      ... on WpNodeWithTitle {
        title
      }
      ... on WpNodeWithContentEditor {
        content
      }
    }
    allWpCodeSnippet(sort: { order: DESC, fields: date }) {
      nodes {
        id
        uri
        title
      }
    }
  }
`

export default WpCodeSnippet
