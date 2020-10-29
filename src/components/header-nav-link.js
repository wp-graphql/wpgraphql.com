import { chakra, useColorModeValue } from "@chakra-ui/core"
import { Link } from "gatsby"
import React from "react"
import { useLocation } from "@reach/router"

const NavLink = (props) => {
    const { href, ...rest } = props
    const location = useLocation();

    const group = href.split("/")[1]
    const isActive = location.pathname.includes(group)

    return (
        <Link to={href} {...rest}>
            <chakra.span
                aria-current={isActive ? "page" : undefined}
                display="block"
                py="1"
                px="3"
                borderRadius="4px"
                transition="all 0.2s"
                color={useColorModeValue("gray.600", "whiteAlpha.800")}
                fontWeight="normal"
                _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.100") }}
                _activeLink={{
                    fontWeight: "semibold",
                    color: "blue.500",
                }}
                {...rest}
            />
        </Link>
    )
}

export default NavLink
