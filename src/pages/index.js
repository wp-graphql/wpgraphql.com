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
    Wrap,
    WrapItem,
    Tooltip,
    Avatar
} from '@chakra-ui/core'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {FaArrowRight, FaWordpress} from 'react-icons/fa'
import Layout from '../components/layout'
import Container from "../components/container";
import queryPosts from '../img/query-posts.png'
import multipleRootResources from '../img/query-multiple-root-resources.png'
import logoDfuzr from '../img/logo-dfuzr.png'
import logoValu from '../img/logo-valu-digital.png'
import logoFunkhaus from '../img/logo-funkhaus.png'
import logoHarness from '../img/logo-harness.png'
import logoTwinCities from '../img/logo-twincities.png'
import logoDenverpost from '../img/logo-denverpost.svg'
import logoQuartz from '../img/logo-quartz.jpg'
import logoHope from '../img/logo-hope-lab.png'
import logoWebDevStudios from '../img/logo-webdev-studios.png'
import logoApollo from '../img/logo-apollo.png'
import logoCreditKarma from '../img/logo-credit-karma.png'
import logoPlayersTribune from '../img/logo-players-tribune.png'
import logoZillow from '../img/logo-zillow.png'
import logoGatsby from '../img/logo-gatsby.png'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    {
      allWpTestimonial {
        nodes {
          id
          title
          content
          testimonialFields {
            avatarurl
            content
            tweeturl
            name
            handle
          }
        }
      }
    }
  `)
    const bg = useColorModeValue("white", "gray.600");

    return (
        <div>
            <Wrap
                maxW="1200px"
                mx="auto"
                justify="space-between"
                align="center"
                spacing="10px"
                mt="20"
            >
            {data.allWpTestimonial.nodes.map((testimonial, idx) => {

                if (!testimonial.testimonialFields) {
                    return null;
                }

                const {testimonialFields: {avatarurl, content, tweeturl, name, handle}} = testimonial;

                return (
                    <Link to={tweeturl} target="_blank">
                        <WrapItem maxWidth="280px" key={idx} bg={bg} p="10" rounded="lg" shadow="base">
                            <Avatar mr="34px" size="md" src={avatarurl} name={name} loading="lazy" />
                            <Box fontSize="sm">
                                <p>
                                    {name}{" "}
                                    <Box as="span" opacity={0.7}>
                                        {`@${handle}`}
                                    </Box>
                                </p>
                                <Box
                                    as="p"
                                    mt="2"
                                    dangerouslySetInnerHTML={{
                                        __html: content.replace(/--/g, "<br /><br />"),
                                    }}
                                />
                            </Box>
                        </WrapItem>
                    </Link>
                )
            })}
            </Wrap>
        </div>
    )

}

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
                                <Link to="/docs/">
                                    <Button as="span" colorScheme="blue" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`20`}
                                            rightIcon={<FaArrowRight fontSize="0.8em"/>}>
                                        Read the Docs
                                    </Button>
                                </Link>
                                <Link to="https://wordpress.org/plugins/wp-graphql">
                                    <Button as="span" colorScheme="orange" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`20`}
                                            rightIcon={<FaWordpress fontSize="0.8em"/>}>
                                        Download the Plugin
                                    </Button>
                                </Link>
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
                            <Wrap
                                maxW="800px"
                                mx="auto"
                                justify="center"
                                align="center"
                                spacing="24px"
                                mt="20"
                            >
                                <WrapItem key="dfuzr" bg="#ee0d00" p="1" rounded="md">

                                    <Link to={"https://www.dfuzr.com/"} target="_blank">
                                        <Tooltip label="Dfuzr Industries: Digital Experience Agency"
                                                 aria-label="Dfuzr Industries Logo" placement="top">
                                            <Image alt="Dfuzr Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoDfuzr}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="funkhaus" bg="white" p="1" rounded="md">

                                    <Link to={"https://funkhaus.us/"} target="_blank">
                                        <Tooltip label="Funkhaus: Digital Creative Agency"
                                                 aria-label="Funkhaus Logo" placement="top">
                                            <Image alt="Funkhaus Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoFunkhaus}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Valu" bg="#df2e30" p="1" rounded="md">

                                    <Link to={"https://www.valu.fi/en"} target="_blank">
                                        <Tooltip label="Valu Digital" aria-label="Valu Digital Logo"
                                                 placement="top">
                                            <Image alt="Dfuzr Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoValu}
                                                   loading="lazy"
                                            />

                                        </Tooltip>
                                    </Link>
                                </WrapItem>
                                <WrapItem key="Harness" bg="white" p="1" rounded="md">
                                    <Link to={"http://www.harnessup.com/"} target="_blank">
                                        <Tooltip label="Harness Software"
                                                 aria-label="Harness Software Logo" placement="top">
                                            <Image alt="Harness Software Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoHarness}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>
                                </WrapItem>
                                <WrapItem key="Denver Post" bg="white" p="3" rounded="md">
                                    <Link to={"https://www.denverpost.com/"} target="_blank">
                                        <Tooltip label="Denver Post" aria-label="Denver Post Logo"
                                                 placement="top">

                                            <Image alt="Denver Post Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoDenverpost}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Twin Cities" bg="white" p="3" rounded="md">

                                    <Link to={"https://www.twincities.com/"} target="_blank">
                                        <Tooltip label="Twin Cities" aria-label="Twin Cities Logo"
                                                 placement="top">
                                            <Image alt="Twin Cities Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoTwinCities}
                                                   loading="lazy"
                                            />

                                        </Tooltip>
                                    </Link>
                                </WrapItem>
                                <WrapItem key="Quartz" bg="#111111" p="3" rounded="md">

                                    <Link to={"https://qz.com/"} target="_blank">
                                        <Tooltip label="Quartz" aria-label="Quartz Logo"
                                                 placement="top">
                                            <Image alt="Quartz Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoQuartz}
                                                   loading="lazy"
                                            />

                                        </Tooltip>
                                    </Link>
                                </WrapItem>
                                <WrapItem key="Hope Lab" bg="white" p="3" rounded="md">
                                    <Link to={"https://hopelab.org/"} target="_blank">
                                        <Tooltip label="Hope Lab" aria-label="Hope Lab Logo"
                                                 placement="top">

                                            <Image alt="Hope Lab Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoHope}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="WebDev Studios" bg="white" p="1" rounded="md">
                                    <Link to={"https://webdevstudios.com/"} target="_blank">
                                        <Tooltip label="WebDev Studios"
                                                 aria-label="WebDev Studios Logo"
                                                 placement="top">

                                            <Image alt="WebDev Studios Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoWebDevStudios}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Apollo GraphQL" bg="white" p="1" rounded="md">
                                    <Link to={"https://www.apollographql.com/"} target="_blank">
                                        <Tooltip label="Apollo GraphQL"
                                                 aria-label="Apollo GraphQL Logo"
                                                 placement="top">

                                            <Image alt="Apollo GraphQL Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoApollo}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Credit Karma" bg="white" p="1" rounded="md">
                                    <Link to={"https://blog.creditkarma.com/"} target="_blank">
                                        <Tooltip label="Credit Karma" aria-label="Credit Karma Logo"
                                                 placement="top">

                                            <Image alt="Credit Karma Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoCreditKarma}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Gatsby" bg="white" p="1" rounded="md">
                                    <Link to={"https://gatsbyjs.com/"} target="_blank">
                                        <Tooltip label="Gatsby" aria-label="Gatsby Logo"
                                                 placement="top">

                                            <Image alt="Gatsby Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoGatsby}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="The Players Tribune" bg="white" p="2" rounded="md">
                                    <Link to={"https://www.theplayerstribune.com/"} target="_blank">
                                        <Tooltip label="The Players Tribune"
                                                 aria-label="The Players Tribune"
                                                 placement="top">

                                            <Image alt="The Players Tribune Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoPlayersTribune}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>

                                </WrapItem>
                                <WrapItem key="Zillow" bg="white" p="1" rounded="md">
                                    <Link to={"https://www.zillow.com/"} target="_blank">
                                        <Tooltip label="Zillow" aria-label="Zillow"
                                                 placement="top">
                                            <Image alt="Zillow Logo"
                                                   h="60px"
                                                   w="auto"
                                                   src={logoZillow}
                                                   loading="lazy"
                                            />
                                        </Tooltip>
                                    </Link>
                                </WrapItem>
                            </Wrap>
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
                                <Link to="/docs/">
                                    <Button as="span" colorScheme="blue" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`5`}
                                            rightIcon={<FaArrowRight fontSize="0.8em"/>}>
                                        Read the Docs
                                    </Button>
                                </Link>
                                <Link to="https://wordpress.org/plugins/wp-graphql">
                                    <Button as="span" colorScheme="orange" variant="solid"
                                            maxW={`300px`} m={`3`} mb={`5`}
                                            rightIcon={<FaWordpress fontSize="0.8em"/>}>
                                        Download the Plugin
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Layout>
    );
}

export default Home;
