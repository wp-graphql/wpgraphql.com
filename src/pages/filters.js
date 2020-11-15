import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
} from "@chakra-ui/react"
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar";

const Filters = ({data}) => {

    const crumbs = [
        {
            title: `Developer Reference`,
            path: `/developer-reference/`,
        },
        {
            title: 'Filters',
            path: '/filters/',
            isCurrentPage: true,
        }
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <DeveloperReferenceSidebar/>
                    <Box style={{flex: 1}}>
                        <Box pt={3} pl={10} pr={0} mt="0" mx="auto" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs} />
                                <Heading wordBreak="break-all" as={'h1'}>Filters</Heading>
                                <Text my={5}>WordPress provides an API called "filters" which allow functions to modify data of other functions. WPGraphQL applies many filters throughout its codebase allowing developers to customize the Schema and other parts of the GraphQL server. Below are the filters provided by WPGraphQL that are available for developers to hook into.</Text>
                                {data.allWpFilter.nodes.map( filter => {
                                    return (
                                        <Box mb={5}>
                                            <Link wordBreak="break-all" as={GatsbyLink} to={filter.uri}>{filter.title}</Link>
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
    allWpFilter(sort: {order: ASC, fields: title}) {
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

export default Filters;
