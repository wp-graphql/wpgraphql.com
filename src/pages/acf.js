import React from 'react'
import Container from "../components/Container";
import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Button
} from "@chakra-ui/core";
import { AiFillThunderbolt } from "react-icons/ai"
import { FaCloudDownloadAlt } from "react-icons/fa"
import acfFieldsImage from '../img/acf-fields.jpg'
import queryGraphQLImage from '../img/query-with-graphql.png'
import Layout from "../components/Layout";
import FeatureGrid from "../components/landingpage/FeatureGrid"
import Accordion from "../components/landingpage/Accordion"
import TwoColumn from "../components/landingpage/TwoColumn"
import Hero from "../components/landingpage/Hero"
import FeatureList from "../components/landingpage/FeatureList"
import WorksWithJS from "../components/landingpage/WorksWithJS"

const AcfHero = () => (
  <Hero
    title="WPGraphQL for Advanced Custom Fields"
    image={acfFieldsImage}
    video="https://www.youtube.com/embed/rIg4MHc8elg"
    alt="WPGraphQL for ACF Video"
  >
    <Text fontSize="3xl" pb={5}>Interact with your Advanced Custom Field data using GraphQL Queries</Text>
    <Button colorScheme="blue" size="lg" rightIcon={<FaCloudDownloadAlt />}>Download the Plugin</Button>
  </Hero>
);

const HowItWorks = () => (
    <Box mb={0} p={50} pt={5} >
      <Heading as="h2" pb={5}>How It Works</Heading>
      <Text pb={5} fontSize="3xl">WPGraphQL for Advanced Custom Fields automatically exposes your ACF fields to the WPGraphQL Schema</Text>
      <TwoColumn image={acfFieldsImage} alt="Creating ACF Fields in WordPress">
        <Heading as="h3" pb={5}>Create your ACF Fields</Heading>
        <Text fontSize="lg">
          Create your ACF Field Groups and Fields, the same way you
          normally would, using the ACF User Interface, registering your fields with
          PHP or using ACF local-json. Each field group and the fields within it can
          be configured to "Show in GraphQL".
        </Text>
      </TwoColumn>
      <TwoColumn imagePosition="right" image={queryGraphQLImage} alt="Query with GraphQL Explorer">
        <Heading as="h3" pb={5}>Query with GraphQL</Heading>
        <Text fontSize="lg">
          Once your field groups and fields have been configured to
          "Show in GraphQL", they will be available in the GraphQL Schema and ready for querying!
        </Text>
      </TwoColumn>
    </Box>
);

const SupportedFields = () => {
  const fields = [
    "Text",
    "Text Area",
    "Number",
    "Range",
    "Email",
    "URL",
    "Password",
    "Image",
    "File",
    "WYSIWYG",
    "oEmbed",
    "Select",
    "Checkbox",
    "Radio Button",
    "Button Group",
    "True False",
    "Link",
    "Post Object",
    "Page Link",
    "Relationship",
    "Taxonomy",
    "User",
    "Google Map",
    "Date Picker",
    "Date/Time Picker",
    "Time Picker",
    "Color Picker",
    "Group",
    "Repeater",
    "Flex Field",
    "Gallery"
  ]

  return (
    <Box mb={70} pl={20} pr={20} >
        <Heading as="h2" mb={10}>Supported ACF Fields</Heading>
        <FeatureList fields={fields} mb={10} />
        <Text display="flex" ml="auto" mr="auto" fontSize="xs" maxWidth={[ '100%', '90%', '80%', '70%' ]}>
          WPGraphQL for Advanced Custom Fields supports nearly all of the ACF (free & pro) fields.
          Some of the fields, such as Accordion and Tab, which are not data fields are not supported.
          The Clone field needs some more assessment to determine if it can properly be supported.
          Fields from 3rd party extensions are not supported out of the box, but we are interested
          in supporting the popular ones.
        </Text>
    </Box>
  )
};



const Why = () => {
  const features = [
    {
      title: "Time",
      content: "WPGraphQL is highly extendable, but it can be time consuming to expose fields to the Schema. This plugin can save you heaps of time.",
      icon: AiFillThunderbolt,
    },
    {
      title: "Performance",
      content: "WPGraphQL is one of the fastest ways to query data in WordPress, and now we bring that performance to ACF data too.",
      icon: AiFillThunderbolt,
    },
    {
      title: "Support",
      content: "On top of the great WPGraphQL community support already available, we offer plugin support through email, forums, and code sharing.",
      icon: AiFillThunderbolt,
    },
  ]

  return (
    <FeatureGrid
      title="Why WPGraphQL for ACF?"
      features={features}
      mb={70}
      cols={3}
    />
  )
};

const Pricing = () => (
    <Box mb={70}>
        <Heading as="h2" pb={4}>Pricing & Support</Heading>
        <Text display="flex" ml="auto" mr="auto" fontSize="xl" maxWidth={[ '100%', '90%', '80%', '70%' ]}>
          WPGraphQL for Advanced Custom Fields is a FREE open-source WordPress plugin.
          The code is available on Github. Support and feature requests are handled through
          Github issues. For general questions about the plugin, visit the WPGraphQL Slack</Text>
    </Box>
);

const FAQ = () => {
  const items = [
    {
      title: "What is included in Support?",
      content: <>
        <Text pb={4}>Support is limited to usage of the WPGraphQL for Advanced Custom Fields.</Text>

        <Text>If you need support for things such as learning best practices of implementing
        GraphQL at your organization, expert advice/consulting on a specific project(s),
        learning how to use WPGraphQL with caching clients, such as Apollo, or other
        needs not directly related to this plugin, contact us and we can pair you with an expert.</Text>
      </>
    },
    {
      title: "Where can I get Support?",
      content: <>
        Support and feature requests are handled through Github issues.
        For general questions about the plugin, visit the WPGraphQL Slack.
      </>
    },
    {
      title: "What are the supported ACF Field Locations?",
      content: <>
        <Text pb={4}>Some ACF Field locations are very difficult to map to a GraphQL Schema.
        While we are working on supporting additional location rules, some highly
        contextual rules (such as assigning a Field Group to a particular page
        based on it’s parent) are difficult to support. This is because the
        GraphQL Schema is independant of content in the WordPress site, but is
        representative of possible Types in the WordPress site.</Text>

        <Text pb={4}>Support is provided for ACF Field Groups assigned to entire Post Types or
        Taxonomies, Users, Comments and Menu Items.</Text>

        <Text>Additional location support is being added regularly based on demand.</Text>
      </>
    },
    {
      title: "Can I do GraphQL Mutations?",
      content: <>
        WPGraphQL for Advanced Custom Fields does not currently support mutations of ACF Fields.
        Mutation support will be added to future versions of this product if there is a
        strong enough community for it.
      </>
    },
    {
      title: "Are There any Dependencies?",
      content: <>
        WPGraphQL for Advanced Custom Fields requires Advanced Custom Fields (free or pro) and WPGraphQL v0.3.2 or newer.
      </>
    },
  ]

  return (
    <Accordion
      title="FAQ"
      items={items}
    />
  )
}

const Acf = () => {
    return (
      <Layout>
        <AcfHero/>
        <Container mt="0" pt="0">
          <Box
              as="div"
              backgroundColor={useColorModeValue("white", "gray.800")}
              mt="-100"
              boxShadow="lg"
              p={50}
              textAlign="center"
          >

            <HowItWorks/>
            <SupportedFields/>
            <Why/>
            <WorksWithJS>
              <Heading as="h2">Works Great with Popular JavaScript Libraries</Heading>
            </WorksWithJS>
            <Pricing/>
            <FAQ/>
          </Box>
        </Container>
      </Layout>
    );
}

export default Acf;
