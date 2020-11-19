import React from "react"
import { Box, SimpleGrid } from "@chakra-ui/core"

const FeatureList = ({ fields, ...props }) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="20px" {...props}>
      {fields.map((field) => (
        <Box>{field}</Box>
      ))}
    </SimpleGrid>
  )
}

export default FeatureList
