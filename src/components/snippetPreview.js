import React from "react";
import {Box, Heading, Tag, Stack, Button} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "gatsby";
import { ParseHtml } from "../components/parse-html"

const SnippetPreview = ({key, title, path, content, tags}) => (
  <Box p={5} shadow="md" borderWidth="1px" key={key} position="relative">
    <Stack spacing={4}
      isInline
      position="absolute"
      top={0}
      zIndex="1"
      right="1.25em"
    >
      {tags.map(tag => (
        <Link to={tag.uri}>
          <Tag size="sm" key={tag.id} color="#fff" backgroundColor={tag.snippetTagFields.color}>
            {tag.name}
          </Tag>
        </Link>
      ))}
    </Stack>
    <Link to={path}>
      <Heading fontSize="xl">{title}</Heading>
    </Link>
    <div>{ParseHtml(content)[0]}</div>
    <Link to={path}>
      <Button mt={3} size="sm" colorScheme="blue" variant="outline" rightIcon={<FaArrowRight fontSize="0.8em"/>}>View Snippet</Button>
    </Link>
  </Box>
);

export default SnippetPreview;