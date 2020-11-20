import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "@chakra-ui/core"

import LogoStack from "./LogoStack"

const WorksWithJS = ({ children, imageBG = "white" }) => {
  const data = useStaticQuery(graphql`
    fragment TechLogoFile on File {
      publicURL
      ext
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          quality: 90
          height: 110
          placeholder: NONE
        )
      }
    }

    query TechLogosQuery {
      logoReact: file(relativePath: { eq: "logo-react.png" }) {
        ...TechLogoFile
      }
      logoVue: file(relativePath: { eq: "logo-vue.png" }) {
        ...TechLogoFile
      }
      logoGatsby: file(relativePath: { eq: "logo-gatsby.png" }) {
        ...TechLogoFile
      }
      logoEmber: file(relativePath: { eq: "logo-ember.png" }) {
        ...TechLogoFile
      }
      logoAngular: file(relativePath: { eq: "logo-angular.png" }) {
        ...TechLogoFile
      }
      logoNext: file(relativePath: { eq: "logo-nextjs.png" }) {
        ...TechLogoFile
      }
    }
  `)

  const imageprops = {
    h: "110px",
  }

  const logos = [
    {
      link: "https://reactjs.org/",
      label: "React",
      alt: "React Logo",
      image: data.logoReact,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://vuejs.org/",
      label: "Vue",
      alt: "Vue Logo",
      image: data.logoVue,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://gatsbyjs.com/",
      label: "Gatsby",
      alt: "Gatsby Logo",
      image: data.logoGatsby,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://emberjs.com/",
      label: "Ember",
      alt: "Ember Logo",
      image: data.logoEmber,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://angular.io/",
      label: "Angular",
      alt: "Angular Logo",
      image: data.logoAngular,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://nextjs.org/",
      label: "Next.js",
      alt: "Next.js Logo",
      image: data.logoNext,
      imageprops: imageprops,
      bg: imageBG,
    },
  ]

  return (
    <Box mb={70}>
      {children}
      <LogoStack logos={logos} mt={10} />
    </Box>
  )
}

export default WorksWithJS
