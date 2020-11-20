import React from "react"
import {
  Box,
  Button,
  Flex,
  Text,
  Icon,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const Feature = ({ title, icon, children, link = false, ...props }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded="12px"
      shadow="base"
      p="40px"
      {...props}
    >
      <Flex
        rounded="full"
        w="12"
        h="12"
        bg="blue.500"
        align="center"
        justify="center"
      >
        <Icon fontSize="24px" color="white" as={icon} />
      </Flex>
      <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text fontSize="lg" opacity={0.7}>
        {children}
      </Text>
      {link && (
        <Button mt={5} as={GatsbyLink} to={link} colorScheme="blue">
          View {title}
        </Button>
      )}
    </Box>
  )
}

export default Feature
