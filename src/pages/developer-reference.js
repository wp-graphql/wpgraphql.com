import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    useColorModeValue,
    Grid,
    Icon,
    Button,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from 'gatsby'
import { AiFillThunderbolt } from "react-icons/ai"
import { FaFilter } from "react-icons/fa"
import { BiCodeCurly } from "react-icons/bi"
import { GoBook } from "react-icons/go"
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar";

const Feature = ({ title, icon, children, link, ...props }) => {
    return (
        <Box
            bg={useColorModeValue("white", "gray.700")}
            rounded="12px"
            shadow="base"
            p="40px"
            {...props}
        >
            <Flex
                rounded="full"
                w="12"
                h="12"
                bg="blue.500"
                align="center"
                justify="center"
            >
                <Icon fontSize="24px" color="white" as={icon} />
            </Flex>
            <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
                {title}
            </Heading>
            <Text fontSize="lg" opacity={0.7}>
                {children}
            </Text>
            <Button mt={5} as={GatsbyLink} to={link} colorScheme="blue">
                View {title}
            </Button>
        </Box>
    )
}


const DeveloperReference = () => {

    const crumbs = [
        {
            title: `Developer Reference`,
            path: `/developer-reference`,
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
                            <PageTransition>
                                <Flex>
                                    <Box pt={3} mt="0" mx="auto" maxWidth={[ `20rem`, '30rem', '100%' ]} minH="80vh">
                                        <Breadcrumb crumbs={crumbs}/>
                                        <Heading wordBreak="break-word" as={`h1`} m="0" mb="3" fontSize={['3xl','4xl']}>
                                            Developer Reference
                                        </Heading>
                                        <Text fontSize="2xl" mt="2">
                                            WPGraphQL was built with customization in mind. In this section, developers can find information about how to interact with WPGraphQL to customize the GraphQL server and Schema.
                                        </Text>
                                        <Box
                                            as="section"
                                        >
                                            <Box py="30px" maxW="100%">
                                                <Grid
                                                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                                                    gap={10}
                                                    px={{ md: 0 }}
                                                >
                                                    <Feature icon={GoBook} title="Recipes" link={"/recipes"}>
                                                        Tasty treats that will boost your productivity. WPGraphQL Recipes are snippets that showcase how to customize WPGraphQL in specific ways using the actions, filters and functions available to WPGraphQL.
                                                    </Feature>
                                                    <Feature icon={BiCodeCurly} title="Functions" link={"/functions"}>
                                                        Need to add a Field or Type to the GraphQL Schema? There's a function for that. Learn more about the functions available to make your WPGraphQL server work for you.
                                                    </Feature>
                                                    <Feature icon={AiFillThunderbolt} title="Actions" link={"/actions"}>
                                                        Actions allow 3rd party code to hook-into WPGraphQL at certain parts of GraphQL execution. Learn about the actions available to hook into.
                                                    </Feature>
                                                    <Feature icon={FaFilter} title="Filters" link={"/filters"}>
                                                        Filters allow 3rd party code to modify data at certain parts of GraphQL execution. Learn about the filters available to hook into.
                                                    </Feature>


                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Flex>
                            </PageTransition>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Layout>
    );
}

export default DeveloperReference;
