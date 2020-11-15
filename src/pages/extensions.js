import React from 'react'
import { graphql } from 'gatsby'
import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Container from "../components/Container";
import ExtensionPreview from '../components/ExtensionPreview'
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const ExtensionPlugins = ({ data }) => {
  const extensions = data.allWpExtensionPlugin.nodes
  const crumbs = [
    {
      title: `Extensions`,
      path: `/extensions/`,
      isCurrentPage: true,
    }
  ];

  return (
    <Layout>
        <Container>
            <Flex>
                <div style={{flex: 1}}>
                    <Box pt={3} px={5} mt="0" mx="auto" maxWidth={[ `20rem`, '30rem', '100%' ]} minH="80vh">
                        <PageTransition>
                            <Breadcrumb crumbs={crumbs} />
                            <Heading wordBreak="break-word" as={`h1`} m="0" mb="3" fontSize={['3xl','4xl']}>
                                WPGraphQL Extensions
                            </Heading>
                            <Text fontSize="2xl" mt="2">
                                WPGraphQL can be extended to integrate with other WordPress plugins. Here is a list of WPGraphQL extension plugins. Many of these plugins are maintained by community contributors.
                            </Text>
                            <Stack mt={5} spacing={8}>
                                {extensions.map(extension => (
                                  <ExtensionPreview
                                    key={extension.id}
                                    title={extension.title}
                                    path={extension.uri}
                                    content={extension.content}
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
    allWpExtensionPlugin(sort: {order: DESC, fields: date}) {
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

export default ExtensionPlugins;
