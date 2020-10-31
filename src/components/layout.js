import React from "react";
import {
    chakra,
    Box,
    Button,
    Flex,
    HStack,
    useColorMode,
    useColorModeValue,
    Text
} from "@chakra-ui/core";
import {FaMoon, FaSun, FaGithub, FaWordpress, FaYoutube, FaSlack} from "react-icons/fa"
import {Link} from 'gatsby'
import Logo from "./logo";
import NavLink from "./header-nav-link"
import Container from "./container";

function Layout(props) {
    const {toggleColorMode} = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    const bg = useColorModeValue("white", "gray.800")
    return (
        <Box>
            <chakra.header
                top="0"
                position="fixed"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                borderBottomWidth="1px"
                width="full"
                {...props}
            >
                <Container pt={0} px={0} mt="0" height="auto" mx="auto" minHeight="0" >
                    <Flex
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-between"
                    >
                        <Flex align="center">
                            <Link to="/">
                                <Logo/>
                            </Link>
                            <HStack
                                as="nav"
                                spacing="4"
                                ml="24px"
                                display={{base: "none", md: "flex"}}
                            >
                                <NavLink href="/docs/quick-start/">Docs</NavLink>
                                <NavLink href="/community">Community</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                                <NavLink href="/extensions">Extensions</NavLink>
                            </HStack>
                        </Flex>
                        <Flex maxW="720px" align="center" color="gray.400">
                            <HStack spacing="5">

                                <a href="https://github.org/wp-graphql/wp-graphql">
                                    <Button>
                                        <FaGithub/>
                                    </Button>
                                </a>


                                <a href="https://wordpress.org/plugins/wp-graphql">
                                    <Button>
                                        <FaWordpress/>
                                    </Button>
                                </a>

                                <Button onClick={toggleColorMode}>
                                    <SwitchIcon/>
                                </Button>
                            </HStack>
                        </Flex>
                    </Flex>
                </Container>
            </chakra.header>
            <Box as="main" mt={"70"}>
                {props.children}
            </Box>
            <chakra.footer
                bottom="0"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                border="0"
                width="full"
                {...props}
            >
                <chakra.div border="0" height="6rem" mx="auto" maxW="1200px">
                    <Flex
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-around"
                        border="0"
                    >
                        <Text>Development sponsored by <a href={`https://gatsbyjs.com/`}
                                                          target={`_blank`} rel="noreferrer"><Text
                            as={`span`}
                            border="0"
                            color={`blue.400`}>Gatsby</Text></a></Text>
                    </Flex>
                    <Flex
                        border="0"
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-around"
                    >
                        <Flex border="0" maxW="720px" align="center" color="gray.400">

                            <HStack spacing="5">
                                <Button>
                                    <a href="https://github.org/wp-graphql/wp-graphql">
                                        <FaGithub/>
                                    </a>
                                </Button>
                                <Button>
                                    <a href="https://wordpress.org/plugins/wp-graphql">
                                        <FaWordpress/>
                                    </a>
                                </Button>
                                <Button>
                                    <a
                                        href="https://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw">
                                        <FaYoutube/>
                                    </a>
                                </Button>
                                <Button>
                                    <a
                                        href="https://join.slack.com/t/wp-graphql/shared_invite/zt-3vloo60z-PpJV2PFIwEathWDOxCTTLA">
                                        <FaSlack/>
                                    </a>
                                </Button>
                            </HStack>
                        </Flex>
                    </Flex>
                </chakra.div>
            </chakra.footer>
        </Box>
    );
}

export default Layout;

