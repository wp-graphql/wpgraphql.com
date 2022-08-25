import { Button, useColorModeValue } from "@chakra-ui/react"
import { Link } from "gatsby"
import React from "react"
import { useLocation } from "@reach/router"

const NavLink = (props) => {
  const { href, ...rest } = props
  const location = useLocation()

  const group = href.split("/")[1]
  const isActive = location.pathname.includes(group)
  const linkColor = useColorModeValue("gray.800", "primary")
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100")
  const activeColor = useColorModeValue("blue.600", "#0cf")
  return (
    <Button
      aria-current={isActive ? "page" : undefined}
      as={Link}
      to={href}
      display="block"
      p="3"
      borderRadius="4px"
      transition="all 0.2s"
      color={linkColor}
      fontWeight="normal"
      height="2.5rem"
      background={"transparent"}
      _hover={{ bg: hoverBg }}
      _activeLink={{
        fontWeight: "semibold",
        color: activeColor,
      }}
      {...rest}
    />
  )
}

export default NavLink
