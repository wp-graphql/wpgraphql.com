import { chakra, useColorModeValue } from "@chakra-ui/core"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import React, { useRef } from "react"

const StyledLink = (props) => {
  const { isActive, ...rest } = props
  const ref = useRef()
  return (
    <chakra.span
      aria-current={isActive ? "page" : undefined}
      width="100%"
      px="3"
      py="1"
      ml="3"
      rounded="md"
      ref={ref}
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      transition="all 0.2s"
      display="inline-block"
      _hover={{
        color: useColorModeValue("gray.900", "whiteAlpha.900"),
        transform: isActive ? undefined : "translateX(2px)",
      }}
      _activeLink={{
        bg: useColorModeValue("gray.200", "blue.900"),
        color: useColorModeValue("gray.900", "white"),
        fontWeight: "semibold",
      }}
      {...rest}
    />
  )
}

const SidebarLink = (props) => {
  const { href, icon, children, ...rest } = props

  const { pathname } = useLocation()
  const isActive = pathname === href

  return (
    <chakra.div
      userSelect="none"
      display="flex"
      alignItems="center"
      lineHeight="1.5rem"
      {...rest}
    >
      <Link to={href}>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </chakra.div>
  )
}

export default SidebarLink
