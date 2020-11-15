import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Link,
    Text,
} from "@chakra-ui/core"
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import {graphql, Link as GatsbyLink} from "gatsby";
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar";

const Functions = ({ data }) => {

    const crumbs = [
        {
            title: `Developer Reference`,
            path: `/developer-reference/`,
            isCurrentPage: false,
        },
        {
            title: `Functions`,
            path: `/functions/`,
            isCurrentPage: true,
        },
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <DeveloperReferenceSidebar/>
                    <Box style={{flex: 1}}>
                        <Box pt={3} pl={10} pr={0} mt="0" mx="auto" minH="80vh">
                            <PageTransition><Breadcrumb crumbs={crumbs} />
                                <Heading wordBreak="break-word" as="h1">Functions</Heading>
                                <Text my={5}>The functions documented below are provided by WPGraphQL to extend the Schema or interact with the GraphQL API.</Text>

                                {data.allWpFunction.nodes.map( func => {
                                    return (
                                        <Box mb={5}>
                                            <Link wordBreak="break-all" as={GatsbyLink} to={func.uri}>{func.title}</Link>
                                        </Box>
                                    );
                                })}
                            </PageTransition>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Layout>
    );
}

export const data = graphql`
  {
    allWpFunction(sort: {order: ASC, fields: title}) {
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

export default Functions;
