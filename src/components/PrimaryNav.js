import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {flatListToHierarchical} from "../utils";
import {  Button, HStack, Menu, MenuItem, MenuList, MenuButton, useColorModeValue } from "@chakra-ui/core"
import { FaChevronDown } from 'react-icons/fa'
import { useLocation } from '@reach/router'
import HeaderNavLink from './HeaderNavLink'


const PrimaryNav = () => {
    const data = useStaticQuery(graphql`
    {
      allWpMenuItem( sort:{fields:order order:ASC} filter: {menu: {node: {name: {eq: "Primary Nav"}}}}) {
        nodes {
          id
          title: label
          path
          target
          parent: parentId
        }
      }
    }
    `);

    const location = useLocation();

    const menuItems = flatListToHierarchical(data.allWpMenuItem.nodes, {
        idKey: 'id',
        childrenKey: 'routes',
        parentKey: 'parent'
    });

    const linkColor = useColorModeValue("gray.600", "whiteAlpha.800");
    const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");

    return (
    <HStack
        as="nav"
        spacing="4"
        ml="24px"
        display={["none", "none", "flex"]}
        sx={{
            '&>div': {
                marginLeft: "0!important;"
            }
        }}
    >
        {menuItems && menuItems.map( menuItem => {
            const { path, title, id, routes } = menuItem;
            const group = path.split("/")[1]
            const isActive = location.pathname.includes(group)

            if ( routes && routes.length) {

                return (
                        <Menu key={id}>
                            <MenuButton
                                aria-current={isActive ? "page" : undefined}
                                as={Button}
                                href={path}
                                rightIcon={routes.length ? <FaChevronDown/> : null }
                                color={linkColor}
                                py="1"
                                px="3"
                                background="white"
                                borderRadius="4px"
                                transition="all 0.2s"
                                fontWeight="normal"
                                _hover={{ bg: hoverBg }}
                                _activeLink={{
                                    fontWeight: "semibold",
                                    color: "blue.500",
                                }}
                                sx={{
                                    '& > div': {
                                        marginLeft: 0
                                    }
                                }}
                            >
                                {title}
                            </MenuButton>
                            <MenuList ml="0">
                                {routes.map(route => {
                                    const { path, title, id } = route;
                                    return(
                                        <MenuItem id={id} as="a" href={path} >{title}</MenuItem>
                                    )
                                })}
                            </MenuList>
                        </Menu>
                    )
            } else {
                return (<HeaderNavLink href={path}>{title}</HeaderNavLink>)
            }
        })}
    </HStack>
    );
}

export default PrimaryNav
