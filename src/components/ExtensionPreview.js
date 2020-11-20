import React from "react"
import {
  Box,
  Heading,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"
import { ParseHtml } from "./parse-html"

const ExtensionPreview = ({ title, path, content }) => (
  <Box
    p={5}
    rounded="12px"
    shadow="base"
    bg={useColorModeValue("white", "gray.700")}
    key={path}
    position="relative"
  >
    <Stack
      spacing={4}
      isInline
      position="absolute"
      top={0}
      zIndex="1"
      right="1.25em"
    ></Stack>
    <Link to={path}>
      <Heading wordBreak="break-word" fontSize="xl">
        {title}
      </Heading>
    </Link>
    <div>{ParseHtml(content)[0]}</div>
    <Link to={path}>
      <Button
        mt={3}
        size="sm"
        colorScheme="blue"
        variant="outline"
        rightIcon={<FaArrowRight fontSize="0.8em" />}
      >
        View Extension
      </Button>
    </Link>
  </Box>
)

export default ExtensionPreview
