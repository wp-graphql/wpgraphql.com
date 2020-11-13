import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/core"
import { AiFillThunderbolt } from "react-icons/ai"
import { FaFilter } from "react-icons/fa"
import { BiCodeCurly } from "react-icons/bi"
import { GoBook } from "react-icons/go"
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar"
import FeatureGrid from "../components/landingpage/FeatureGrid"

const DeveloperReference = () => {

    const crumbs = [
        {
            title: `Developer Reference`,
            path: `/developer-reference`,
            isCurrentPage: true,
        },
    ];

    const features = [
      {
        icon: GoBook,
        title: "Recipes",
        link: "/recipes",
        content: "Tasty treats that will boost your productivity. WPGraphQL Recipes are snippets that showcase how to customize WPGraphQL in specific ways using the actions, filters and functions available to WPGraphQL.",
      },
      {
        icon: BiCodeCurly,
        title: "Functions",
        link: "/functions",
        content: "Need to add a Field or Type to the GraphQL Schema? There's a function for that. Learn more about the functions available to make your WPGraphQL server work for you.",
      },
      {
        icon: AiFillThunderbolt,
        title: "Actions",
        link: "/actions",
        content: "Actions allow 3rd party code to hook-into WPGraphQL at certain parts of GraphQL execution. Learn about the actions available to hook into.",
      },
      {
        icon: FaFilter,
        title: "Filters",
        link: "/filters",
        content: "Filters allow 3rd party code to modify data at certain parts of GraphQL execution. Learn about the filters available to hook into.",
      },
    ]

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
                                          <FeatureGrid
                                            features={features}
                                            py="30px"
                                            maxW="100%"
                                            align="left"
                                          />
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
