import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    Image,
    useColorModeValue,
} from '@chakra-ui/core'
import {Link} from 'gatsby'
import {FaArrowRight, FaWordpress} from 'react-icons/fa'
import Layout from '../components/Layout'
import Container from "../components/Container";
import Testimonials from "./HomePage/Testimonials"
import WhosUsing from "./HomePage/WhosUsing"
import queryPosts from '../img/query-posts.png'
import multipleRootResources from '../img/query-multiple-root-resources.png'


const Home = () => {

    return (
        <Layout>
            <Box width={`100%`} background={useColorModeValue(`gray.50`, `gray.700`)}
                 borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`30`}>
                            <Heading as={`h1`} m="0" mb="3" size="4xl">
                                GraphQL API for
                            </Heading>
                            <Heading as={`h1`} m="0" mb="3" size="4xl">
                                WordPress
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                WPGraphQL is a free, open-source WordPress plugin that provides an
                                extendable GraphQL schema and API for any WordPress site.
                            </Text>

                            <Stack
                                mt="10"
                                spacing="0"
                                justify="center"
                                direction={{base: "column", sm: "row"}}
                            >
                                <a href="/docs/introduction">
                                    <Button as="span" colorScheme="blue" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`20`}
                                            rightIcon={<FaArrowRight fontSize="0.8em"/>}>
                                        Read the Docs
                                    </Button>
                                </a>
                                <a href="https://wordpress.org/plugins/wp-graphql">
                                    <Button as="span" colorScheme="orange" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`20`}
                                            rightIcon={<FaWordpress fontSize="0.8em"/>}>
                                        Download the Plugin
                                    </Button>
                                </a>
                            </Stack>

                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box width={`100%`} background={useColorModeValue(`gray.100`, `gray.600`)}
                 borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Query what you need. Get exactly that.
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                With GraphQL, the client makes declarative queries, asking for the
                                exact data needed, and in exactly what was asked for is given in
                                response, nothing more. This allows the client have control over
                                their application, and allows the GraphQL server to perform more
                                efficiently by only fetching the resources requested.
                            </Text>
                        </Box>
                    </Flex>
                    <Image
                        src={queryPosts}
                        h="40|56|80"
                        mt="12|14|16"
                        roundedTop="xl"
                        overflow="hidden"
                        boxShadow="0px -10px 8px 0px rgba(0, 0, 0, .125)"
                    />
                </Container>
            </Box>
            <Box width={`100%`} background={useColorModeValue(`gray.50`, `gray.700`)}
                 borderBottomWidth="1px">
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Fetch many resources in a single request.
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                GraphQL queries allow access to multiple root resources, and also
                                smoothly follow references between connected resources. While
                                typical a REST API would require round-trip requests to many
                                endpoints, GraphQL APIs can get all the data your app needs in a
                                single request. Apps using GraphQL can be quick even on slow mobile
                                network connections.
                            </Text>
                        </Box>
                    </Flex>
                    <Image
                        src={multipleRootResources}
                        h="40|56|80"
                        mt="12|14|16"
                        roundedTop="xl"
                        overflow="hidden"
                        boxShadow="0px -10px 8px 0px rgba(0, 0, 0, .125)"
                    />
                </Container>
            </Box>
            <Box width={`100%`} background={useColorModeValue(`white`, `gray.600`)} >
                <Container mt="0" pt="20" pb="20">
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Who's Using WPGraphQL?
                            </Heading>
                            <Text fontSize="2xl" mt="10">
                                Digital agencies, product teams and freelancers around the world
                                trust
                                WPGraphQL in production to bridge modern front-end stacks with
                                content
                                managed in WordPress.
                            </Text>
                            <WhosUsing />
                        </Box>
                    </Flex>

                </Container>
            </Box>
            <Box
                width={`100%`}
                background={useColorModeValue(`gray.50`, `gray.700`)}
            >
                <Container mt="0">
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`20`}>
                            <Heading as={`h2`} m="0" mb="3" size="2xl">
                                Loved by developers, like you.
                            </Heading>
                            <Testimonials/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box
                width={`100%`}
                background={useColorModeValue(`white`, `gray.600`)}
                borderBottomWidth="1px"
            >
                <Container mt="0" mb="10" minHeight={0}>
                    <Flex flexDirection="column" textAlign="center" align="center"
                          justify="space-between">
                        <Box maxW="900px" mt={`10`} mb={`10`}>
                            <Heading as={`h2`} fontSize={`5xl`}>Start using WPGraphQL today!</Heading>
                            <Stack
                                mt="10"
                                spacing="0"
                                justify="center"
                                direction={{base: "column", sm: "row"}}
                            >
                                <Link to="/docs/introduction">
                                    <Button as="span" colorScheme="blue" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`5`}
                                            rightIcon={<FaArrowRight fontSize="0.8em"/>}>
                                        Read the Docs
                                    </Button>
                                </Link>
                                <a href="https://wordpress.org/plugins/wp-graphql">
                                    <Button as="span" colorScheme="orange" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`5`}
                                            rightIcon={<FaWordpress fontSize="0.8em"/>}>
                                        Download the Plugin
                                    </Button>
                                </a>
                            </Stack>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Layout>
    );
}

export default Home;
