import React from "react"
import {Box, Flex, Heading, Stack, Text, Tag} from '@chakra-ui/react'
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from 'gatsby'
import PageTransition from "../components/PageTransition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import PluginSidebar from "../components/extensionplugin/PluginSidebar"
import TableOfContents from "../components/TableOfContents"

const WpExtensionPlugin = ({data}) => {

    const {
      wpExtensionPlugin: {
        title,
        content,
        uri,
        readmeContent,
        extensionFields: {
          pluginHost,
          pluginLink,
          pluginType,
        }
      }
    } = data;

    const crumbs = [
      {
        title: `Extensions`,
        path: `/extensions/`,
      },
      {
        title: title,
        path: uri,
        isCurrentPage: true,
      }
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <Box style={{flex: 1}}>
                        <Box pt={3} px={5} mt="0" mx="auto" minH="80vh">
                            <PageTransition>
                              <Flex>
                                <Box pt={3} mt="0" mx="auto" maxWidth={[ `20rem`, '30rem', '100%' ]} minH="80vh">
                                  <Breadcrumb crumbs={crumbs} />
                                  <Heading as="h1" fontSize={`4xl`}>{title}</Heading>
                                  <Text mt={4}>{ParseHtml(content)}</Text>
                                  <Stack spacing={4} mt={8}>
                                    <Box position="relative" p={5} borderWidth="1px">
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
                                      >Plugin README</Tag>
                                      <Text mt={4}>{ParseHtml(readmeContent, null, true)}</Text>
                                    </Box>
                                  </Stack>
                                </Box>
                                <Stack spacing={4} mt={8}>
                                  <PluginSidebar pluginType={pluginType} pluginHost={pluginHost} pluginLink={pluginLink} />
                                  <TableOfContents content={readmeContent} reduceHeadings />
                                </Stack>
                              </Flex>
                            </PageTransition>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Layout>
    );
}

export const query = graphql`
query($id: String) {
  wpExtensionPlugin(id: { eq: $id }) {
    __typename
    id
    uri
    title
    content
    readmeContent
    extensionFields {
      pluginReadmeLink
      pluginHost
      pluginLink
      pluginType
    }
  }
}
`;

export default WpExtensionPlugin
