import React from 'react';
import { chakra, Box, useColorModeValue } from '@chakra-ui/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { flatListToHierarchical } from '../utils'

const SnippetsSidebar = () => {

    const data = useStaticQuery(graphql`
    {
      allWpCodeSnippetTag(filter: {count: {gt: 0}}, sort: {fields: taxonomy___node___name, order: ASC}) {
        nodes {
          id
          uri
          name
          count
        }
      }
    }
    `);

    const ref = React.useRef(null)
    const hoverColor = useColorModeValue("gray.900", "whiteAlpha.900")
    const activeColor = useColorModeValue("gray.800", "teal.200")
    const color = useColorModeValue("gray.700", "whiteAlpha.900")

    return(
        <Box
            ref={ref}
            as="aside"
            pos="sticky"
            top="6.5rem"
            w="280px"
            pr="8"
            pb="8"
            pl="3"
            overflowY="auto"
            className="sidebar-content"
            flexShrink={0}
            h="calc(((100vh - 1.5rem) - 64px) - 42px);"
            display={{base: "none", md: "block"}}
        >

            <chakra.h2 fontSize="xl" fontWeight="semibold" my="1.25rem">Code Snippet Tags</chakra.h2>
            {data.allWpCodeSnippetTag.nodes.map(tag => {
                return (
                  <div>
                    <Link to={tag.uri} isExternal={false} >
                        <chakra.a
                            ref={ref}
                            color={color}
                            transition="all 0.2s"
                            _hover={{
                                color: hoverColor,
                            }}
                            _activeLink={{
                                color: activeColor,
                                fontWeight: "semibold",
                            }}
                        >
                            {tag.name} ({tag.count})
                        </chakra.a>
                    </Link>
                  </div>
                )
            })}
        </Box>
    );
};

export default SnippetsSidebar;
