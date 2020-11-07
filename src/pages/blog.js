import React from 'react'
import { graphql } from 'gatsby'
import {Box, Flex, Heading, Stack} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Container from "../components/Container";
import BlogPreview from '../components/BlogPreview'
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const Blog = ({ data }) => {
  const posts = data.allWpPost.nodes
  const crumbs = [
    {
      title: `Blog`,
      path: `/blog`,
      isCurrentPage: true,
    }
  ];

  return (
    <Layout>
        <Container>
            <Flex>
                <div style={{flex: 1}}>
                    <Box pt={3} px={5} mt="0" mx="auto" maxW="25rem|32rem|48rem" minH="80vh">
                        <PageTransition>
                            <Breadcrumb crumbs={crumbs} />
                            <Heading as={`h1`} m="0" mb="3" size="4xl">
                                Blog
                            </Heading>
                            <Stack mt={5} spacing={8}>
                                {posts.map(post => (
                                  <BlogPreview
                                    key={post.id}
                                    title={post.title}
                                    path={post.uri}
                                    content={post.excerpt}
                                    author={post.author.node.name}
                                    authorPath={post.author.node.uri}
                                    date={post.date}
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
    allWpPost(sort: {order: DESC, fields: date}) {
      nodes {
        title
        id
        excerpt
        date(formatString: "MMMM Do, YYYY")
        uri
        author {
          node {
            name
            uri
          }
        }
      }
    }
  }
`

export default Blog;
