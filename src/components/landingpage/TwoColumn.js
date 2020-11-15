import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react"

const TwoColumn = ({ image, alt, imagePosition="left", children, ...props }) => {
  const boxProps = {
    p: 50,
    pr: 0,
    width: [ '100%', '100%', '100%', '50%' ],
  }

  return (
    <Flex justifyContent="center" flexWrap="wrap" flexDirection={ imagePosition === 'right' ? 'row-reverse' : 'row' } {...props}>
      <Box
        textAlign={imagePosition === 'right' ? 'left' : 'right'}
        {...boxProps}
      >
        <Image alt={alt}
          src={image}
          loading="lazy"
        />
      </Box>
      <Box
        textAlign={imagePosition}
        {...boxProps}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default TwoColumn