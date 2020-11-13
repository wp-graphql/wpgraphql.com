import React from "react";
import { Box } from "@chakra-ui/core"
import LogoStack from "./LogoStack"
import logoReact from '../../img/logo-react.png'
import logoVue from '../../img/logo-vue.png'
import logoGatsby from '../../img/logo-gatsby.png'
import logoEmber from '../../img/logo-ember.png'
import logoAngular from '../../img/logo-angular.png'
import logoNext from '../../img/logo-nextjs.png'

const WorksWithJS = ( { children, imageBG = "white" }) => {
  const imageprops = {
    h: "110px",
  }

  const logos = [
    {
      link: "https://reactjs.org/",
      label: "React",
      alt: "React Logo",
      image: logoReact,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://vuejs.org/",
      label: "Vue",
      alt: "Vue Logo",
      image: logoVue,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://gatsbyjs.com/",
      label: "Gatsby",
      alt: "Gatsby Logo",
      image: logoGatsby,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://emberjs.com/",
      label: "Ember",
      alt: "Ember Logo",
      image: logoEmber,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://angular.io/",
      label: "Angular",
      alt: "Angular Logo",
      image: logoAngular,
      imageprops: imageprops,
      bg: imageBG,
    },
    {
      link: "https://nextjs.org/",
      label: "Next.js",
      alt: "Next.js Logo",
      image: logoNext,
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
};

export default WorksWithJS