import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { SimpleGrid, Text, Link, useColorModeValue } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

export const PaginationLink = (props) => {
  const { label, href, children, ...rest } = props
  const linkColor = useColorModeValue("blue.600", "#0cf")
  return (
    <Link
      href={href}
      as={GatsbyLink}
      _hover={{
        textDecor: "none",
      }}
      flex="1"
      borderRadius="md"
      {...rest}
    >
      <Text fontSize="sm" px="2">
        {label}
      </Text>
      <Text mt="1" fontSize="lg" fontWeight="bold" color={linkColor}>
        {children}
      </Text>
    </Link>
  )
}

const Pagination = ({ previous, next, ...rest }) => {
  return (
    <SimpleGrid
      as="nav"
      aria-label="pagination"
      spacing="40px"
      my="64px"
      columns={2}
      {...rest}
    >
      {previous ? (
        <PaginationLink
          textAlign="left"
          label="Previous"
          href={previous.uri}
          rel="prev"
          className="pagination-link"
        >
          <ChevronLeftIcon mr="1" fontSize="1.2em" />
          {previous.title}
        </PaginationLink>
      ) : (
        <div />
      )}
      {next ? (
        <PaginationLink
          textAlign="right"
          label="Next"
          href={next.uri}
          rel="next"
          className="pagination-link"
        >
          {next.title}
          <ChevronRightIcon ml="1" fontSize="1.2em" />
        </PaginationLink>
      ) : (
        <div />
      )}
    </SimpleGrid>
  )
}

export default Pagination
