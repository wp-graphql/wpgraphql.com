import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from "gatsby"
import PageTransition from "../components/PageTransition"
import DocsSidebar from "../components/DocsSidebar"
import { ParseHtml } from "../components/parse-html"
import TableOfContents from "../components/TableOfContents"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import { getPagination } from "../utils"
import Pagination from "../components/Pagination"

const MarkDownDoc = ({ data }) => {
  const { markdownRemark: post, docPagination } = data

  const pagination = getPagination(post.frontmatter.uri, docPagination.nodes)

  const crumbs = [
    {
      title: "Docs",
      path: "/docs/introduction/",
      isCurrentPage: false,
    },
    {
      title: post.frontmatter.title,
      path: post.frontmatter.uri,
      isCurrentPage: true,
    },
  ]

  return (
    <Layout>
      <Container>
        <Flex>
          <DocsSidebar title={"Docs"} />
          <Box style={{ flex: 1 }}>
            <Box pt={3} pl={[0, 0, 10]} pr={0} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Flex>
                  <Box
                    className="content"
                    pt={3}
                    mt="0"
                    mx="auto"
                    maxWidth={[`20rem`, "30rem", "40rem"]}
                    minH="80vh"
                  >
                    <Breadcrumb crumbs={crumbs} />
                    <Heading as="h1" fontSize={`4xl`}>
                      {post.frontmatter.title}
                    </Heading>
                    {ParseHtml(post.html)}
                    <Pagination
                      sx={{ ".pagination-link": { wordBreak: "break-word" } }}
                      next={pagination.next}
                      previous={pagination.previous}
                    />
                  </Box>
                  <TableOfContents
                    content={post.html}
                    contentRef={ParseHtml(post.html)}
                  />
                </Flex>
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        uri
      }
    }
    docPagination: allWpDocument(sort: { fields: menuOrder }) {
      nodes {
        id
        uri
        title
      }
    }
  }
`

export default MarkDownDoc
