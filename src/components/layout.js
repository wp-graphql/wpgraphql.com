import React from "react";
import {chakra, Box, Button, Flex, HStack, useColorMode, useColorModeValue, Text } from "@chakra-ui/core";
import {FaMoon, FaSun, FaGithub, FaWordpress, FaYoutube, FaSlack} from "react-icons/fa"
import {Link} from 'gatsby'
import Logo from "./logo";
import NavLink from "./header-nav-link"

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
                <chakra.div height="4.5rem" mx="auto" maxW="1200px">
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
                                <Button>
                                    <Link to="https://github.org/wp-graphql/wp-graphql">
                                        <FaGithub/>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link to="https://wordpress.org/plugins/wp-graphql">
                                        <FaWordpress/>
                                    </Link>
                                </Button>
                                <Button onClick={toggleColorMode}>
                                    <SwitchIcon/>
                                </Button>
                            </HStack>
                        </Flex>
                    </Flex>
                </chakra.div>
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
                        <Text >Development sponsored by <Link  to={`https://gatsbyjs.com/`} target={`_blank`}><Text as={`span`} border="0" color={`blue.400`}>Gatsby</Text></Link></Text>
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
                                    <Link to="https://github.org/wp-graphql/wp-graphql">
                                        <FaGithub/>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link to="https://wordpress.org/plugins/wp-graphql">
                                        <FaWordpress/>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link
                                        to="https://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw">
                                        <FaYoutube/>
                                    </Link>
                                </Button>
                                <Button>
                                    <Link
                                        to="https://join.slack.com/t/wp-graphql/shared_invite/zt-3vloo60z-PpJV2PFIwEathWDOxCTTLA">
                                        <FaSlack/>
                                    </Link>
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

