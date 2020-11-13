import React from "react";
import { Box, Flex, Image, useColorModeValue, Heading } from "@chakra-ui/core"
import Video from "./Video"

const Hero = (
  {
    title,
    image,
    alt,
    imagePosition = "left",
    bgColor = "#00e4bc",
    fontColor = "white",
    video = false,
    children,
    ...props
  }
) => {

  return (
    <Box
      width={`100%`}
      pl={0}
      pr={0}
      background={useColorModeValue(bgColor, bgColor)}
      borderBottomWidth="1px"
      color={fontColor}
      textAlign="center"
      {...props}
    >
      <Box
          backgroundColor={bgColor}
          pt={100}
          pb={100}
          maxW="1300px"
          ml="auto"
          mr="auto"
      >
        <Heading as="h1" size="2xl">{title}</Heading>
        <Flex justifyContent="center">
            <Box
              textAlign="right"
              p={50}
              pr={0}
              pt={110}
              width={[ '80%', '80%', '45%' ]}
            >
              {children}
            </Box>
            <Box
              textAlign="right"
              p={50}
              pr={0}
              width={[ '80%', '80%', '45%' ]}
            >
              {video &&
                <Video videoSrcURL={video} videoTitle={title} />
              }
              {!video &&
                <Image alt={alt}
                  src={image}
                  loading="lazy"
                />
              }
            </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero