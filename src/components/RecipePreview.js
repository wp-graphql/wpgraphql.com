import React from "react";
import {Box, Heading, Tag, Stack, Button, useColorModeValue} from '@chakra-ui/core'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from "gatsby";
import {ParseHtml} from "../components/parse-html"

const RecipePreview = ({title, path, content, tags}) => (
    <Box p={5} rounded="12px"
         shadow="base"
         bg={useColorModeValue("white", "gray.700")} key={path} position="relative">
        <Link to={path}>
            <Heading wordBreak="break-word" fontSize="xl">{title}</Heading>
        </Link>
        <div>{ParseHtml(content)[0]}</div>
        <Link to={path}>
            <Button zIndex="1" mt={3} size="sm" colorScheme="blue"
                    rightIcon={<FaArrowRight fontSize="0.8em"/>}>View Snippet</Button>
        </Link>
        <Stack spacing={4}
               isInline
               position="absolute"
               bottom={0}
               zIndex="0"
               right="1.25em"
        >
            {tags && tags.map(tag => (
                <Tag
                    size="sm"
                    key={tag.id}
                    mb="5"
                    colorScheme="purple"
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

export default RecipePreview;
