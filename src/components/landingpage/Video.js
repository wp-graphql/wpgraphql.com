import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/core"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Box pb="56.25%" height={0} overflow="hidden" maxW="100%" position="relative" {...props} >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
    />
  </Box>
)

export default Video