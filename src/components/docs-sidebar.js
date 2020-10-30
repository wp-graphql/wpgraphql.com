import React, { Fragment } from 'react';
import { chakra, Box, useColorModeValue } from '@chakra-ui/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { flatListToHierarchical } from '../utils'
import { useLocation } from '@reach/router'


const DocSubNav = ({ items, observe, onClick, ...props }) => {

    const { pathname } = useLocation();
    const hoverColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const linkBg = useColorModeValue("gray.100", "blue.800");
    const color = useColorModeValue("gray.700", "whiteAlpha.900");

    return items && items.map(({ value, url, type, items: _items }, key) => {

        const isActiveParent = false
        const isActiveItem = url === pathname

        return (
            <Fragment key={key}>
                <chakra.span
                    userSelect="none"
                    display="flex"
                    alignItems="center"
                    lineHeight="1.5rem"
                    mt={'2'}
                    transition="all 0.2s"
                    {...props}
                >
                    <Link to={url}>
                        <chakra.span
                            aria-current={isActiveItem ? "page" : undefined}
                            width="100%"
                            px="3"
                            py="1"
                            rounded="md"
                            fontSize="xl"
                            fontWeight="medium"
                            pl="0"
                            mt={7}
                            color={color}
                            display="inline-block"
                            _hover={{
                                transform: isActiveItem ? undefined : "translateX(1px)",
                            }}
                            {...props}
                        >
                            {value}
                        </chakra.span>
                    </Link>
                </chakra.span>
                {_items && (<DocSubNav
                    observe={isActiveParent}
                    items={_items}
                    sx={{
                        a: {
                            span: {
                                fontWeight: "normal",
                                fontSize: "md",
                                mt: 0,
                                pl: 3,
                                _hover: {
                                    color: hoverColor,
                                    background: linkBg,
                                },
                                _activeLink: {
                                    bg: linkBg,
                                    color: hoverColor,
                                    background: linkBg
                                }
                            }
                        },
                    }}
                />)}
            </Fragment>
        )
    })

}

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

    const ref = React.useRef(null)

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

                return (
                    <Fragment key={key}>
                        {type === "link" && (
                            <Link to={url}>
                                <chakra.h2
                                    key={key}
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    mt="1.25rem"
                                    pt={key !== 0 && 4}
                                >
                                    {value}
                                </chakra.h2>
                            </Link>
                        )}
                        {_items ? <DocSubNav items={_items} /> : null}
                    </Fragment>
                );
            })}
        </Box>
    );
};

export default DocsSidebar;
