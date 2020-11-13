import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core"

const TwoColumn = ({ image, alt, imagePosition="left", children, ...props }) => {
  const boxProps = {
    p: 50,
    pr: 0,
    width: [ '100%', '100%', '100%', '50%' ],
  }

  if (imagePosition === "left") {
    return (
      <Flex justifyContent="center" flexWrap="wrap" {...props}>
        <Box
          textAlign="right"
          {...boxProps}
        >
          <Image alt={alt}
            src={image}
            loading="lazy"
          />
        </Box>
        <Box
          textAlign="left"
          {...boxProps}
        >
          {children}
        </Box>
      </Flex>
    )
  }
  else {
    return (
      <Flex justifyContent="center" flexWrap="wrap" {...props}>
        <Box
          textAlign="right"
          {...boxProps}
        >
          {children}
        </Box>
        <Box
          textAlign="left"
          {...boxProps}
        >
          <Image alt={alt}
            src={image}
            loading="lazy"
          />
        </Box>
      </Flex>
    )
  }
}

export default TwoColumn