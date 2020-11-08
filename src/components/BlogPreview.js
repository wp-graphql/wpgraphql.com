import React from "react";
import {Box, Heading, Stack, Button, Text, useColorModeValue} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "gatsby";
import { ParseHtml } from "./parse-html"

const BlogPreview = ({title, path, content, author, authorPath, date}) => (
  <Box p={5} rounded="12px"
       shadow="base"
       bg={useColorModeValue("white", "gray.700")} key={path} position="relative">
    <Stack spacing={4}
      isInline
      position="absolute"
      top={0}
      zIndex="1"
      right="1.25em"
    >
    </Stack>
    <Link to={path}>
      <Heading fontSize="xl">{title}</Heading>
    </Link>
    <Box>
      <Text fontSize="sm">By <Link to={authorPath}>{author}</Link> on {date}</Text>
    </Box>
    <div>{ParseHtml(content)}</div>
    <Link to={path}>
      <Button mt={3} size="sm" colorScheme="blue" variant="outline" rightIcon={<FaArrowRight fontSize="0.8em"/>}>Read More</Button>
    </Link>
  </Box>
);

export default BlogPreview;
