import React from "react"
import { Box } from "@chakra-ui/core"

const Container = ({children, ...rest}) => (
    <Box
        as="main"
        minH="40vh"
        mx="auto"
        maxW="1200px"
        pt={8}
        px={5}
        mt="4rem"
        {...rest}
    >
        {children}
    </Box>
)

export default Container;
