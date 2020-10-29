import React from 'react'
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/core'
import Layout from '../components/layout'

const Home = () => {
    return (
        <Layout>
            <Box pt="8|12|16|24">
                <Flex flexDirection="column" textAlign="center" align="center" justify="space-between">
                    <Box maxW="900px" mt={`30`}>
                        <Heading as={`h1`} m="0" mb="3" size="4xl">
                           GraphQL API for
                        </Heading>
                        <Heading as={`h1`} m="0" mb="3" size="4xl">
                            WordPress
                        </Heading>
                        <Text fontSize="2xl" mt="2">
                            WPGraphQL is a free, open-source WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site.
                        </Text>
                        <Button as="a" href="#" variantColor="teal" variant="solid" maxW={`300px`} m={`10`} mb={`10`}>
                            Get started
                        </Button>
                    </Box>
                </Flex>
                <Image
                    src="https://placehold.it/1200x400"
                    h="40|56|80"
                    mt="12|14|16"
                    roundedTop="xl"
                    overflow="hidden"
                />
            </Box>
        </Layout>
    );
}

export default Home;
