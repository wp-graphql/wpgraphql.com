import React from "react"
import { Box, Flex, Heading, Stack, Text, Tag } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from "gatsby"
import PageTransition from "../components/PageTransition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import PluginSidebar from "../components/extensionplugin/PluginSidebar"
import TableOfContents from "../components/TableOfContents"
import { getPagination } from "../utils"
import Pagination from "../components/Pagination"

const WpExtensionPlugin = ({ data }) => {
  const {
    wpExtensionPlugin: {
      title,
      content,
      uri,
      readmeContent,
      extensionFields: { pluginHost, pluginLink, pluginType },
    },
    allWpExtensionPlugin,
  } = data

  const pagination = getPagination(uri, allWpExtensionPlugin.nodes)

  const crumbs = [
    {
      title: `Extensions`,
      path: `/extensions/`,
    },
    {
      title: title,
      path: uri,
      isCurrentPage: true,
    },
  ]

  console.log({
    readmeContent,
    parsed: ParseHtml(readmeContent, null, true)
  })

  return (
    <Layout>
      <Container>
        <Flex>
          <Box style={{ flex: 1 }}>
            <Box pt={3} px={[5]} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Flex>
                  <Box
                    className="content"
                    pt={3}
                    mt="0"
                    mx="auto"
                    maxWidth={[`20rem`, "40rem", "30rem", "50rem"]}
                    minH="80vh"
                  >
                    <Breadcrumb crumbs={crumbs} />
                    <Heading as="h1" fontSize={`4xl`}>
                      {title}
                    </Heading>
                    <Text mt={4}>{ParseHtml(content)}</Text>
                    <Stack spacing={4} mt={8}>
                      <PluginSidebar
                        pluginType={pluginType}
                        pluginHost={pluginHost}
                        pluginLink={pluginLink}
                      />

                      <Box
                        position="relative"
                        p={5}
                        mr={[0, 0, 5]}
                        borderWidth="1px"
                      >
                        <Tag
                          size="sm"
                          position="absolute"
                          textTransform="uppercase"
                          colorScheme="gray"
                          fontSize="s"
                          height="30px"
                          top={0}
                          zIndex="1"
                          right="0"
                        >
                          Plugin README
                        </Tag>
                        <Text mt={4}>
                          {ParseHtml(readmeContent, null, true)}
                        </Text>
                      </Box>
                    </Stack>
                    <Pagination
                      sx={{ ".pagination-link": { wordBreak: "break-word" } }}
                      next={pagination.next}
                      previous={pagination.previous}
                    />
                  </Box>
                  <Stack spacing={4} mt={8}>
                    <TableOfContents content={readmeContent} reduceHeadings />
                  </Stack>
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
  query ($id: String) {
    wpExtensionPlugin(id: { eq: $id }) {
      __typename
      id
      uri
      title
      content
      readmeContent: readmeContentParsed
      extensionFields {
        pluginReadmeLink
        pluginHost
        pluginLink
        pluginType
      }
    }
    allWpExtensionPlugin(sort: { fields: menuOrder }) {
      nodes {
        id
        uri
        title
      }
    }
  }
`

export default WpExtensionPlugin
