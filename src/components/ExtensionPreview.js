import React from "react";
import {Box, Heading, Stack, Button} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "gatsby";
import { ParseHtml } from "./parse-html"

const ExtensionPreview = ({title, path, content}) => (
  <Box p={5} shadow="md" borderWidth="1px" key={path} position="relative">
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
    <div>{ParseHtml(content)[0]}</div>
    <Link to={path}>
      <Button mt={3} size="sm" colorScheme="blue" variant="outline" rightIcon={<FaArrowRight fontSize="0.8em"/>}>View Extension</Button>
    </Link>
  </Box>
);

export default ExtensionPreview;
