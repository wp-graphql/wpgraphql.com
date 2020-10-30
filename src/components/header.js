import React from 'react'
import {
    chakra,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
} from "@chakra-ui/core"

const GithubIcon = (props) => (
    <svg viewBox="0 0 20 20" {...props}>
        <path
            fill="currentColor"
            d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
        />
    </svg>
)

const HeaderContent = () => {

    return (
        <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
            <Flex maxW="720px" align="center" color="gray.400">
                <HStack spacing="5">
                    <a aria-label="GitHub" href={`https://github.com/wp-graphql/wp-graphql`}>
                        <Icon
                            as={GithubIcon}
                            transition="color 0.2s"
                            w="5"
                            h="5"
                            _hover={{ color: "gray.600" }}
                        />
                    </a>
                </HStack>
                <IconButton
                    size="md"
                    fontSize="lg"
                    aria-label={`Switch to ${text} mode`}
                    variant="ghost"
                    color="current"
                    ml="3"
                    onClick={() => { console.log( `toggle` )}}
                    icon={<SwitchIcon />}
                />
            </Flex>
        </Flex>
    )
}

const Header = (props) => {
    return (
        <chakra.header
            pos="fixed"
            top="0"
            zIndex="1"
            bg={`white`}
            left="0"
            right="0"
            borderBottomWidth="1px"
            width="full"
            {...props}
        >
            <chakra.div height="4.5rem" mx="auto" maxW="1200px">
                <HeaderContent />
            </chakra.div>
        </chakra.header>
    )
}

export default Header
