import React from "react";
import {Box, Heading, Text, Tag, Stack, Button} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "gatsby";
import { ParseHtml } from "../components/parse-html"

const SnippetPreview = ({key, title, path, content}) => (
  <Box p={5} shadow="md" borderWidth="1px" key={key} position="relative">
    <Stack spacing={4}
      isInline
      position="absolute"
      top={0}
      zIndex="1"
      right="1.25em"
    >
      {["Tag 1", "Tag 2", "Tag 3"].map(tag => (
        <Tag size="sm" key={tag} variantColor="gray">
          {tag}
        </Tag>
      ))}
    </Stack>
    <Link to={path}>
      <Heading fontSize="xl">{title}</Heading>
    </Link>
    <div>{ParseHtml(content)[0]}</div>
    <Link to={path}>
      <Button size="sm" colorScheme="blue" variant="outline" rightIcon={<FaArrowRight fontSize="0.8em"/>}>View Snippet</Button>
    </Link>
  </Box>
);

export default SnippetPreview;