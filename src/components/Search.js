/* global docsearch */
import React, { useEffect } from "react"
import {
  Box,
  InputGroup,
  Input,
  InputLeftAddon,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

const Search = () => {
  useEffect(() => {
    if (typeof docsearch !== "undefined") {
      docsearch({
        apiKey: "fb8b4503ba2093d228a6c9b72facff9b",
        indexName: "wpgraphql",
        inputSelector: "#search",
        // debug: true, // keeps the results list open
        algoliaOptions: {
          hitsPerPage: 10,
        },
        debug: true,
      })
    } else {
      console.warn("Search has failed to load...")
    }
  })

  const searchBg = useColorModeValue("white", "gray.800")
  const searchOutline = useColorModeValue("gray.100", "gray.700")
  const headerColor = useColorModeValue("gray.800", "white")

  return (
    <>
      <Box
        sx={{
          ".algolia-autocomplete .ds-dropdown-menu": {
            width: [
              `100%!important`,
              `400px!important`,
              `400px!important`,
              `500px !important`,
            ],
            maxWidth: [
              `100%!important`,
              `100%!important`,
              `400px!important`,
              `500px !important`,
            ],
            minWidth: "0 !important",
            background: "gray.800",
            boxShadow: "md",
          },
          ".algolia-autocomplete .algolia-docsearch-suggestion--category-header": {
            color: headerColor,
          },
          ".algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column": {
            color: headerColor,
          },
          ".algolia-autocomplete .algolia-docsearch-suggestion--title": {
            color: headerColor,
          },
          ".algolia-autocomplete .algolia-docsearch-suggestion--text": {
            color: headerColor,
          },
          ".algolia-autocomplete .algolia-docsearch-suggestion": {
            bg: searchBg,
            color: headerColor,
            borderColor: searchBg,
          },
          ".algolia-docsearch-suggestion--highlight": {
            bg: "teal.50",
            color: headerColor,
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--category-header": {
            bg: searchBg,
            color: headerColor,
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--subcategory-column": {
            color: "gray.800",
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--title": {
            color: "gray.800",
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--text": {
            color: "gray.800",
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--wrapper": {
            bg: "gray.100",
            color: "gray.800",
          },
          ".algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--content": {
            bg: "transparent!important",
            color: "gray.800",
          },
          ".ds-dropdown-menu": {
            "&:before": {
              display: "none",
            },
          },
          ".algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu:before": {
            bg: searchOutline,
            borderColor: searchOutline,
          },
          ".algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-]": {
            bg: searchOutline,
            borderColor: searchOutline,
            borderRadius: 0,
          },
          ".ds-cursor .algolia-docsearch-suggestion--wrapper": {
            bg: "gray.100",
            boxShadow: "none",
          },
        }}
      >
        <InputGroup
          sx={{
            width: "100%",
          }}
        >
          <InputLeftAddon children={<FaSearch color="gray.300" />} />
          <Input
            id="search"
            placeholder={`Search...`}
            aria-label="Search WPGraphQL docs"
          />
        </InputGroup>
      </Box>
    </>
  )
}

export default Search
