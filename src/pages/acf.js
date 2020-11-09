import React from 'react'
import Container from "../components/Container";
import {
    Box,
    useColorModeValue,
    Heading,
    Flex,
    Text,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/core";
import Layout from "../components/Layout";

const Hero = () => (
    <Box
        width={`100%`}
        background={useColorModeValue(`#00e4bc`, `#00e4bc`)}
        borderBottomWidth="1px"
        color="white"
        textAlign="center"
    >
        <Container
            backgroundColor={`#00e4bc`}
            pt={100}
            pb={150}
        >
            <Heading
                as="h1"
            >WPGraphQL for Advanced Custom Fields</Heading>
            <Flex justifyContent="center">
                <Box
                    textAlign="right"
                    p={50}
                    pr={0}
                    maxWidth={[ '40%' ]}
                >
                    <Text fontSize="3xl">Interact with your Advanced Custom Field data using GraphQL Queries</Text>
                    <Button colorScheme="blue">Download the Plugin</Button>
                </Box>
                <Box
                    textAlign="right"
                    p={50}
                    pr={0}
                    maxWidth={[ '40%' ]}
                >
                    @todo: Put screenshot that plays video here
                </Box>
            </Flex>
    </Container>
    </Box>
);

const HowItWorks = () => (
    <Box mb={50}>
        <Heading as="h2">How It Works</Heading>
    </Box>
);

const SupportedFields = () => (
    <Box mb={50}>
        <Heading as="h2">Supported ACF Fields</Heading>
    </Box>
);

const Why = () => (
    <Box mb={50}>
     <Heading as="h2">Why WPGraphQL for ACF?</Heading>
    </Box>
);

const WorksWithJS = () => (
    <Box mb={50}>
        <Heading as="h2">Works Great with Popular JavaScript Libraries</Heading>
    </Box>
);

const Pricing = () => (
    <Box mb={50}>
        <Heading as="h2">Pricing & Support</Heading>
    </Box>
);

const FAQ = () => (
    <Box mb={50}>
        <Heading as="h2" mb={30}>FAQ</Heading>
        <Box mb={50} px={100}>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                            Section 1 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left" fontSize={'2xl'}>
                            Section 2 title
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    </Box>
);

const Acf = () => {
    return (
        <Layout>
            <Hero/>
            <Container mt="0" pt="0">
            <Box
                as="div"
                backgroundColor="white"
                mt="-100"
                boxShadow="lg"
                p={50}
                textAlign="center"
            >

                    <HowItWorks/>
                    <SupportedFields/>
                    <Why/>
                    <WorksWithJS/>
                    <Pricing/>
                <FAQ/>
                </Box>
            </Container>
        </Layout>
    );
}

export default Acf;
