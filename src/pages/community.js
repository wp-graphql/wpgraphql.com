import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { FaGithub, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import FeatureGrid from "../components/landingpage/FeatureGrid"

const Community = () => {
  const crumbs = [
    {
      title: `Community`,
      path: `/community/`,
      isCurrentPage: true,
    },
  ]

  const features = [
    {
      icon: FaGithub,
      title: "Github",
      link: "https://github.com/wp-graphql/wp-graphql",
      content:
        "Github is where the development of the WPGraphQL plugin happens. If you’ve found a bug or have a feature request, open an issue for discussion. If you want to contribute code, feel free to open a pull request.",
    },
    {
      icon: FaSlack,
      title: "Slack",
      link: "https://join.slack.com/t/wp-graphql/shared_invite/zt-3vloo60z-PpJV2PFIwEathWDOxCTTLA",
      content:
        "The WPGraphQL Slack is a great place to communicate in real-time. Ask questions, discuss features, get to know other folks using WPGraphQL.",
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://twitter.com/wpgraphql",
      content:
        "Follow WPGraphQL on Twitter to keep up with the latest news about the plugin and the WordPress and GraphQL ecosystems. Only occasional trolling.",
    },
    {
      icon: FaYoutube,
      title: "Youtube",
      link: "http://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw",
      content:
        "Follow WPGraphQL on Youtube to see helpful videos, demos, and case-studies on how WPGraphQL can be used.",
    },
  ]

  return (
    <Layout>
      <Container>
        <Flex>
          <Box style={{ flex: 1 }}>
            <Box pt={3} pl={10} pr={0} mt="0" mx="auto" minH="80vh">
              <PageTransition>
                <Flex>
                  <Box
                    pt={3}
                    mt="0"
                    mx="auto"
                    maxWidth={[`20rem`, "30rem", "100%"]}
                    minH="80vh"
                  >
                    <Breadcrumb crumbs={crumbs} />
                    <Heading
                      wordBreak="break-word"
                      as={`h1`}
                      m="0"
                      mb="3"
                      fontSize={["3xl", "4xl"]}
                    >
                      WPGraphQL Community
                    </Heading>
                    <Text fontSize="2xl" mt="2">
                      On this page, we’ve listed some WPGraphQL-related
                      communities that you can be a part of, and tools and
                      resources in the community that may benefit you as you use
                      WPGraphQL.
                    </Text>
                    <Box as="section">
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
  )
}

export default Community
