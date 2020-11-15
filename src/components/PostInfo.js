import React from "react";
import {Box, Flex, Text} from '@chakra-ui/react'
import {FaUser, FaCalendar} from 'react-icons/fa'
import { Link } from "gatsby";

const PostInfo = ({author, path, date}) => (
  <Box mt={5} p={3} rounded="lg" borderWidth="1px" key={path} position="relative">
    <Flex>
      <Text fontSize="md" ml={3}><Box as={FaUser} mt={-1} mr={1} size="16px" display="inline-block" color="gray.500" /> By <Link to={path}>{author}</Link></Text>
      <Text fontSize="md" ml={5}><Box as={FaCalendar} mt={-1} mr={1} size="16px" display="inline-block" color="gray.500" /> {date}</Text>
    </Flex>
  </Box>
);

export default PostInfo;
