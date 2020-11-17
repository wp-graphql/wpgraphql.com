import React from "react"
import { Wrap, WrapItem, Tooltip, Image } from "@chakra-ui/core"

const LogoStack = ({ logos, ...props }) => {
  return (
    <Wrap
      maxW="900px"
      mx="auto"
      justify="center"
      align="center"
      spacing="24px"
      mt={20}
      {...props}
    >
      {logos.map((logo) => (
        <WrapItem
          key={logo.label}
          bg={logo.bg ? logo.bg : "white"}
          p="1"
          rounded="md"
          {...logo.props}
        >
          {logo.link && (
            <a href={logo.link} target="_blank" rel="noreferrer">
              <Tooltip label={logo.label} aria-label={logo.alt} placement="top">
                <Image
                  alt={logo.alt}
                  h="60px"
                  w="auto"
                  src={logo.image}
                  loading="lazy"
                  {...logo.imageprops}
                />
              </Tooltip>
            </a>
          )}
          {!logo.link && (
            <Tooltip label={logo.label} aria-label={logo.alt} placement="top">
              <Image
                alt={logo.alt}
                h="60px"
                w="auto"
                src={logo.image}
                loading="lazy"
                {...logo.imageprops}
              />
            </Tooltip>
          )}
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default LogoStack
