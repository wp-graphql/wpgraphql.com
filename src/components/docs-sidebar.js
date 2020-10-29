import React from 'react';
import { chakra, Box, useColorModeValue } from '@chakra-ui/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { flatListToHierarchical } from '../utils'

const DocsSidebar = () => {

    const data = useStaticQuery(graphql`
    {
      allWpMenuItem( sort:{fields:order order:ASC} filter: {menu: {node: {name: {eq: "Docs Nav"}}}}) {
        nodes {
          id
          value: label
          url: path
          target
          parentId
        }
      }
    }
    `);

    const items = flatListToHierarchical(data.allWpMenuItem.nodes, {
        idKey: 'id',
        childrenKey: 'items'
    });

    console.log( items );

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
            {items.map(({ value, url, type, items: _items }, key) => {

                return(
                    <>
                    <chakra.h2 fontSize="xl" fontWeight="semibold" my="1.25rem">{value}</chakra.h2>
                    {_items.map(({ value, url, type, items: children }, key) => {
                        return (
                            <>
                            <chakra.h3 key={key} fontSize="lg" fontWeight="semibold" my="1.25rem">{value}</chakra.h3>
                            {
                                children.map((props, key) => {
                                    const {value, url, type, items: children} = props;

                                    return(
                                        <Link to={url} isExternal={false} >
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
                                                {...props}
                                            >
                                                {value}
                                            </chakra.a>
                                        </Link>
                                    )
                                })
                            }
                            </>
                        )
                    })}
                    </>
                )
            })}
        </Box>
    );
};

export default DocsSidebar;
