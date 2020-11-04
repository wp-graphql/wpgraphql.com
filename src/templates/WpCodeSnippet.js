import React from "react"
import {Box, Flex, Heading} from '@chakra-ui/core'
import Layout from "../components/Layout"
import Container from "../components/Container"
import { graphql } from 'gatsby'
import PageTransition from "../components/PageTransition"
import { ParseHtml } from "../components/parse-html"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import RecipeSidebar from "../components/RecipeSidebar"

const WpCodeSnippet = ({data}) => {

    const { wpContentNode: { title, content, uri } } = data;
    const crumbs = [
      {
        title: `Recipes`,
        path: `/recipes`,
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
                    <RecipeSidebar />
                    <div style={{flex: 1}}>
                        <Box pt={3} px={5} mt="0" mx="auto" maxW="60rem" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs} />
                                <Heading as="h1" fontSize={`4xl`}>{title}</Heading>
                                <div>{ParseHtml(content)}</div>
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
  wpContentNode(id: { eq: $id }) {
    __typename
    id
    uri
    ...on WpNodeWithTitle {
      title
    }
    ...on WpNodeWithContentEditor {
      content
    }
  }
}
`;

export default WpCodeSnippet
