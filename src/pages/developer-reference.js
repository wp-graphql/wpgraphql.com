import React from 'react'
import {
    Box,
    Flex,
    Heading,
} from "@chakra-ui/core"
import Layout from '../components/Layout'
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import DeveloperReferenceSidebar from "../components/DeveloperReferenceSidebar";

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
                                    <Box pt={3} mt="0" mx="auto" maxW="48rem" minH="80vh">
                                        <Breadcrumb crumbs={crumbs}/>
                                        <Heading wordBreak="break-word" as='h1'>Developer Reference</Heading>
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
