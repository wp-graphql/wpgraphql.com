import React from "react";
import {Box, Heading, Tag, Stack, Button} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from "gatsby";
import {ParseHtml} from "../components/parse-html"

const SnippetPreview = ({title, path, content, tags}) => (
    <Box p={5} shadow="md" borderWidth="1px" key={path} position="relative">
        <Link to={path}>
            <Heading fontSize="xl">{title}</Heading>
        </Link>
        <div>{ParseHtml(content)[0]}</div>
        <Link to={path}>
            <Button mt={3} size="sm" colorScheme="blue"
                    rightIcon={<FaArrowRight fontSize="0.8em"/>}>View Snippet</Button>
        </Link>
        <Stack spacing={4}
               isInline
               position="absolute"
               bottom={0}
               zIndex="1"
               right="1.25em"
        >
            {tags.map(tag => (
                <Tag
                    size="sm"
                    key={tag.id}
                    mb="5"
                    colorScheme="gray"
                    _hover={{
                        transform: "scale(1.1, 1.1)",
                    }}
                >
                    <Link to={tag.uri}>{tag.name}</Link>
                </Tag>
            ))}
        </Stack>
    </Box>
);

export default SnippetPreview;
