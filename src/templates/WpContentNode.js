import React from "react";
import {Box, Flex, Heading} from '@chakra-ui/core'
import Layout from "../components/Layout";
import Container from "../components/Container";
import {graphql} from 'gatsby'
import PageTransition from "../components/PageTransition";
import { ParseHtml } from "../components/parse-html"

const WpContentNode = ({data}) => {

    const { wpContentNode: { title, content } } = data;

    return (
        <Layout>
            <Container>
                <Flex>
                    <div style={{flex: 1}}>
                        <Box pt={3} mt="0" mx="auto" maxWidth={[ `20rem`, '30rem', '100%' ]} minH="80vh">
                            <PageTransition>
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

export default WpContentNode
