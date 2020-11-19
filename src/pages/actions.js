import React from "react"
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/core"
import { graphql, Link as GatsbyLink } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar"

const Filters = ({ data }) => {
  const crumbs = [
    {
      title: `Developer Reference`,
      path: `/developer-reference/`,
    },
    {
      title: "Filters",
      path: "/filters/",
      isCurrentPage: true,
    },
  ]

  return (
    <Layout>
      <Container>
        <Flex>
          <DeveloperReferenceSidebar />
          <Box style={{ flex: 1 }}>
            <Box pt={3} pl={10} pr={0} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Breadcrumb crumbs={crumbs} />
                <Heading as={"h1"}>Actions</Heading>
                <Text my={5}>
                  WordPress provides an API called "actions" which allow
                  functions to be executed at specific times during a request.
                </Text>
                {data.allWpAction.nodes.map((filter) => {
                  return (
                    <Box mb={5}>
                      <Link
                        as={GatsbyLink}
                        wordBreak="break-all"
                        to={filter.uri}
                      >
                        {filter.title}
                      </Link>
                    </Box>
                  )
                })}
              </PageTransition>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    allWpAction(sort: { order: ASC, fields: title }) {
      nodes {
        title
        id
        content
        date
        uri
      }
    }
  }
`

export default Filters
