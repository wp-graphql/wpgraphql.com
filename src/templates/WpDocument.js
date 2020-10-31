import React, { useState } from "react";
import {Box, Flex, Heading, Link, useColorModeValue } from '@chakra-ui/core'
import Layout from "../components/layout";
import Container from "../components/container";
import {graphql } from 'gatsby'
import PageTransition from "../components/page-transition";
import DocsSidebar from "../components/docs-sidebar"
import {ParseHtml} from "../components/parse-html"
import ReactHtmlParser from "react-html-parser"
import slugger from "slugger";
import { Link as ScrollLink } from "react-scroll";

const TableOfContents = ({ content }) => {

    const [activeLink, setActiveLink] = useState(0);
    const linkColor = useColorModeValue("black", "white");
    const activeLinkColor = useColorModeValue("gray.500", "brandOrange");
    const activeBgColor = useColorModeValue("transparent", "transparent");
    const bgColor = useColorModeValue("transparent", "transparent");

    const transform = (node, i = 0) => {
        if ( node.type !== "tag" ) {
            return null;
        }

        let headingProps = {};

        switch ( node.name ) {
            case 'h1':
                headingProps = {
                    as: 'h1',
                    fontSize: '2rem',
                    fontWeight: 'sm',
                };
                break;
            case 'h2':
                headingProps = {
                    as: 'h2',
                    fontSize: 'lg',
                    lineHeight: 'lg',
                    fontWeight: 'sm',
                    my: 3
                };
                break;
            case 'h3':
                headingProps = {
                    as: 'h3',
                    fontSize: 'sm',
                    fontWeight: 'sm',
                    lineHeight: 'sm',
                    display: 'inline-block',
                    pl: 3,
                    my: 2,
                };
                break;
            case 'h4':
                headingProps = {
                    as: 'h3',
                    fontSize: 'xs',
                    lineHeight: 'sm',
                    fontWeight: 'sm',
                    display: 'inline-block',
                    pl: 5,
                    my: 2,
                };
                break;
            case 'h5':
                headingProps = {
                    as: 'h5',
                    fontSize: 'lg'
                };
                break;
            case 'h6':
                headingProps = {
                    as: 'h6',
                    fontSize: 'lg'
                };
                break;
            default:
                headingProps = {};
                break;
        }


        if ( Object.keys(headingProps).length !== 0 ) {

            const title = node.children[0].data;
            const slug = slugger(title);
            return (

                    <Heading { ...headingProps } width="100%">
                        <Link
                            as={ScrollLink}
                            to={slug}
                            spy={true}
                            smooth={true}
                            duration={300}
                            activeClass="active"
                            display="inline-block"
                            px="2"
                            py="0"
                            width="100%"
                            onSetActive={() => {
                                setActiveLink(slug)
                            }}
                            rounded="md"
                            backgroundColor={ slug === activeLink ? activeBgColor : bgColor }
                            color={ slug === activeLink ? activeLinkColor : linkColor }
                            _hover={{
                                color: activeLinkColor,
                                transform: slug === activeLink ? undefined : "translateX(2px)",
                                backgroundColor: slug === activeLink ? activeBgColor : bgColor,
                            }}

                        >
                            {title}
                        </Link>
                    </Heading>
            );
        } else {
            return null;
        }
    };

    const headings = ReactHtmlParser(content, { transform });
    let cleanHeadings = headings.filter(x => x !== null);

    return(
        <Box as="aside"
             pos="sticky"
             top="6.5rem"
             w="220px"
             pr="0"
             pb="8"
             pl="0"
             ml="8"
             overflowY="auto"
             className="table-of-contents"
             flexShrink={0}
             h="calc(((100vh - 1.5rem) - 64px) - 42px);"
             display={{ base: "none", md: "block" }}
        >
            {cleanHeadings}
        </Box>
    );
}

const WpContentNode = ({data}) => {

    const {wpContentNode: {title, content}} = data;

    return (

        <Layout>
            <Container>
                <Flex>
                    <DocsSidebar/>
                    <Box style={{flex: 1}}>
                        <Box pt={3} pl={10} pr={0} mt="0" mx="auto" minH="80vh">
                            <PageTransition>
                                <Flex>
                                    <Box pt={3} mt="0" mx="auto" maxW="48rem" minH="80vh">
                                        <Heading as="h1" fontSize={`4xl`}>{title}.</Heading>
                                        {ParseHtml(content)}
                                    </Box>
                                    <TableOfContents content={content} contentRef={ParseHtml(content)}/>
                                </Flex>
                            </PageTransition>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Layout>
    );
}

export const query = graphql`
query($id: String) {
  wpContentNode(id: { eq: $id }) {
    __typename
    id
    uri
    ...on WpNodeWithTitle {
      title
    }
    ...on WpNodeWithContentEditor {
      content
    }
  }
}
`;

export default WpContentNode
