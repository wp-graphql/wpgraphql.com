import React from 'react'
import Layout from "../components/Layout";
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/core'
import Container from '../components/Container'
import { Link as GatsbyLink } from 'gatsby'
import PageTransition from '../components/PageTransition'

const NotFound = () => {
    return (
        <Layout>
            <Container>
                <Flex>
                    <div style={{flex: 1}}>
                        <Box pt={20} px={5} mt="0" mx="auto" maxWidth={[ `20rem`, '30rem', '100%' ]} minH="80vh">
                            <PageTransition>
                                <Heading fontSize="4xl">Page not found</Heading>
                                <Text fontSize="3xl">Sorry 😔—we couldn’t find what you were looking for.</Text>
                                <Button mt={10} as={GatsbyLink} to="/">Take me to the WPGraphQL.com homepage</Button>
                            </PageTransition>
                        </Box>
                    </div>
                </Flex>
            </Container>
        </Layout>
    )
}

export default NotFound
