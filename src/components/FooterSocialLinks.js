import React from "react"
import {
    Flex,
    HStack,
    Button,
    chakra
} from "@chakra-ui/core"
import { FaGithub, FaWordpress, FaYoutube, FaSlack } from 'react-icons/fa'

const FooterSocialLinks = () => (
    <Flex border="0" maxW="720px" align="center" color="gray.400">

        <HStack spacing="5">
            <Button as="a" href="https://github.org/wp-graphql/wp-graphql" aria-label="Link to WPGraphQL on Github">
                <FaGithub/>
                <chakra.span sx={{display: 'none'}}>Link to WPGraphQL on Github</chakra.span>
            </Button>
            <Button as="a" href="https://wordpress.org/plugins/wp-graphql" aria-label="Link to WPGraphQL on WordPress.org">
                <FaWordpress/>
                <chakra.span sx={{display: 'none'}}>Link to WPGraphQL on WordPress.org</chakra.span>
            </Button>
            <Button as="a" href="https://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw" aria-label="Link to WPGraphQL on YouTube">
                <FaYoutube/>
                <chakra.span sx={{display: 'none'}}>Link to WPGraphQL on YouTube</chakra.span>
            </Button>
            <Button as="a" href="https://join.slack.com/t/wp-graphql/shared_invite/zt-3vloo60z-PpJV2PFIwEathWDOxCTTLA" aria-label="Join WPGraphQL on Slack">
                 <FaSlack/>
                <chakra.span sx={{display: 'none'}}>Join WPGraphQL on Slack</chakra.span>
            </Button>
        </HStack>
    </Flex>
)

export default FooterSocialLinks;
