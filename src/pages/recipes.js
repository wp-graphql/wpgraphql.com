import React from 'react'
import {graphql} from 'gatsby'
import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Container from "../components/Container";
import RecipePreview from '../components/RecipePreview'
import RecipeSidebar from "../components/RecipeSidebar"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const Snippets = ({data}) => {
    const snippets = data.allWpCodeSnippet.nodes
    const crumbs = [
        {
            title: `Developer Reference`,
            path: `/developer-reference`,
            isCurrentPage: false,
        },
        {
            title: `Recipes`,
            path: `/recipes`,
            isCurrentPage: true,
        }
    ];

    return (
        <Layout>
            <Container>
                <Flex>
                    <RecipeSidebar/>
                    <Box style={{flex: 1}}>
                        <Box pt={3} px={[ 0, 0, 10 ]} pr={0} mt="0" maxWidth={[ `20rem`, '30rem', '100%' ]} mx="auto" minH="80vh">
                            <PageTransition>
                                <Breadcrumb crumbs={crumbs}/>
                                <Heading wordBreak="break-word" as="h1" fontSize={`4xl`}>Recipes</Heading>
                                <Text mt={5}>WPGraphQL Recipes are bite-size morsels that can help
                                    satisfy your craving for a productivity boost when working with
                                    WPGraphQL. Here you will find helpful tips and tricks for
                                    extending the WPGraphQL Schema, or otherwise modifying the
                                    WPGraphQL API.</Text>
                                <Stack mt={5} spacing={8}>
                                    {snippets.map(snippet => (
                                        <RecipePreview
                                            key={snippet.id}
                                            title={snippet.title}
                                            path={snippet.uri}
                                            content={snippet.content}
                                            tags={snippet.codeSnippetTags.nodes}
                                        />
                                    ))}
                                </Stack>
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
    allWpCodeSnippet(sort: {order: DESC, fields: date}) {
      nodes {
        title
        id
        content
        date
        uri
        codeSnippetTags {
          nodes {
            name
            id
            uri
            snippetTagFields {
              color
            }
          }
        }
      }
    }
  }
`

export default Snippets;
