import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Link,
} from "@chakra-ui/core"
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const Filters = ({data}) => {

    const crumbs = [
        {
            title: 'Blog',
            path: '/blog',
            isCurrentPage: true,
        }
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <Box style={{flex: 1}}>
                        <Box pt={3} mt="0" mx="auto" maxW="48rem" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs} />
                                <Heading mb={10} as={'h1'}>Blog</Heading>
                                {data.allWpPost.nodes.map( post => {
                                    return (
                                        <Box mb={5}>
                                            <Link as={GatsbyLink} to={post.uri}>{post.title}</Link>
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
    allWpPost(sort: {order: DESC, fields: date}) {
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
