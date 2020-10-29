import React from "react";
import {Box, Flex, Heading} from '@chakra-ui/core'
import Layout from "../components/layout";
import Container from "../components/container";
import {graphql} from 'gatsby'
import PageTransition from "../components/page-transition";
import { ParseHtml } from "../components/parse-html"

const WpContentNode = ({data}) => {

    const { wpContentNode: { title, content } } = data;

    return (
        <Layout>
            <Container>
                <Flex>
                    <div style={{flex: 1}}>
                        <Box pt={3} px={5} mt="0" mx="auto" maxW="48rem" minH="80vh">
                            <PageTransition>
                                <Heading as="h1" fontSize={`4xl`}>{title}.</Heading>
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

export default WpContentNode
