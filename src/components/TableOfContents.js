import React, { useState } from "react"
import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react"
import ReactHtmlParser from "react-html-parser"
import slugger from "slugger"
import { Link as ScrollLink } from "react-scroll"

const TableOfContents = ({ content, reduceHeadings = false }) => {
  const [activeLink, setActiveLink] = useState(0)
  const linkColor = useColorModeValue("black", "white")
  const activeLinkColor = useColorModeValue("blue.600", "brandOrange")
  const activeBgColor = useColorModeValue("transparent", "transparent")
  const bgColor = useColorModeValue("transparent", "transparent")

  const transform = (node, i = 0) => {
    if (node.type !== "tag") {
      return null
    }

    let headingProps = {}

    if (reduceHeadings && node.name.startsWith("h") && node.name.length === 2) {
      node.name = `h${parseInt(node.name[1]) + 1}`
    }

    switch (node.name) {
      case "h1":
        headingProps = {
          as: "h1",
          fontSize: "2rem",
          fontWeight: "sm",
        }
        break
      case "h2":
        headingProps = {
          as: "h2",
          fontSize: "lg",
          lineHeight: "lg",
          fontWeight: "sm",
          my: 3,
        }
        break
      case "h3":
        headingProps = {
          as: "h3",
          fontSize: "sm",
          fontWeight: "sm",
          lineHeight: "sm",
          display: "inline-block",
          pl: 3,
          my: 2,
        }
        break
      case "h4":
        headingProps = {
          as: "h4",
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "sm",
          display: "inline-block",
          pl: 5,
          my: 2,
        }
        break
      case "h5":
        headingProps = {
          as: "h5",
          fontSize: "lg",
        }
        break
      case "h6":
        headingProps = {
          as: "h6",
          fontSize: "lg",
        }
        break
      default:
        headingProps = {}
        break
    }

    if (Object.keys(headingProps).length !== 0) {
      const title = node.children[0].data
      const slug = slugger(title)
      return (
        <Heading {...headingProps} width="100%" key={i}>
          <Link
            as={ScrollLink}
            to={slug}
            spy={true}
            smooth={true}
            duration={300}
            offset={75}
            activeClass="active"
            display="inline-block"
            px="2"
            py="0"
            width="100%"
            onSetActive={() => {
              setActiveLink(slug)
            }}
            rounded="md"
            backgroundColor={slug === activeLink ? activeBgColor : bgColor}
            color={slug === activeLink ? activeLinkColor : linkColor}
            _hover={{
              color: activeLinkColor,
              transform: slug === activeLink ? undefined : "translateX(2px)",
              backgroundColor: slug === activeLink ? activeBgColor : bgColor,
            }}
          >
            {title}
          </Link>
        </Heading>
      )
    } else {
      return null
    }
  }

  const headings = ReactHtmlParser(content, { transform })
  let cleanHeadings = headings.filter((x) => x !== null)

  return (
    <Box
      as="aside"
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
      display={["none", "none", "block"]}
    >
      {cleanHeadings}
    </Box>
  )
}

export default TableOfContents
