import React from "react"
import {Box, Flex, Heading, Stack, Text, Tag} from '@chakra-ui/core'
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql } from 'gatsby'
import PageTransition from "../components/page-transition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/breadcrumb"
import PluginLink from "../components/pluginLink"

const WpExtensionPlugin = ({data}) => {

    const {
      wpExtensionPlugin: {
        title,
        content,
        uri,
        readmeContent,
        extensionFields: {
          pluginHost,
          pluginLink
        }
      }
    } = data;

    const crumbs = [
      {
        title: `Extensions`,
        path: `/extensions`,
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
                    <div style={{flex: 1}}>
                        <Box pt={3} px={5} mt="0" mx="auto" maxW="60rem" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs} />
                                <Heading as="h1" fontSize={`4xl`}>{title}</Heading>
                                <PluginLink pluginHost={pluginHost} pluginLink={pluginLink} />
                                <Text mt={4}>{ParseHtml(content)}</Text>
                                <Stack spacing={4} mt={8}>
                                  <Box position="relative" p={5} shadow="md" borderWidth="1px">
                                    <Tag
                                        size="sm"
                                        position="absolute"
                                        textTransform="uppercase"
                                        colorScheme="teal"
                                        fontSize="s"
                                        height="30px"
                                        top={0}
                                        zIndex="1"
                                        right="1.25em"
                                    >Plugin README</Tag>
                                    <Text mt={4}>{ParseHtml(readmeContent, null, true)}</Text>
                                  </Box>
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
    }
  }
}
`;

export default WpExtensionPlugin
