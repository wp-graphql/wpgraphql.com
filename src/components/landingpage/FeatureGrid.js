import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react"
import Feature from "./Feature"

const FeatureGrid = ({ title = false, features, cols = 2, align = "center", ...props }) => {

  return(
    <Box {...props}>
      {title &&
        <Heading as="h2" pb={8}>{title}</Heading>
      }
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: `repeat(${cols}, 1fr)` }}
        gap={10}
        px={{ md: 0 }}>
        {features.map(feature => (
          <Feature
            title={feature.title}
            icon={feature.icon}
            link={feature.link}
            align={align}
          >
            {feature.content}
          </Feature>
        ))}
      </Grid>
    </Box>
  )
}

export default FeatureGrid;