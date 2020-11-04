import React from "react"
import {
    Flex,
    HStack,
    Button
} from "@chakra-ui/core"
import { FaGithub, FaWordpress, FaYoutube, FaSlack } from 'react-icons/fa'

const FooterSocialLinks = () => (
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
)

export default FooterSocialLinks;
