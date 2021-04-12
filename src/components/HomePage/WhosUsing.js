import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import LogoStack from "../../components/landingpage/LogoStack"

const WhosUsing = () => {
  const data = useStaticQuery(graphql`
    fragment WhosUsingLogoFile on File {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP]
          layout: FIXED
          quality: 90
          height: 60
          placeholder: TRACED_SVG
        )
      }
    }

    query WhosUsingLogoStack {
      logoDfuzr: file(relativePath: { eq: "logo-dfuzr.png" }) {
        ...WhosUsingLogoFile
      }
      logoValu: file(relativePath: { eq: "logo-valu-digital.png" }) {
        ...WhosUsingLogoFile
      }
      logoFunkhaus: file(relativePath: { eq: "logo-funkhaus.png" }) {
        ...WhosUsingLogoFile
      }
      logoHarness: file(relativePath: { eq: "logo-harness.png" }) {
        ...WhosUsingLogoFile
      }
      logoTwinCities: file(relativePath: { eq: "logo-twincities.png" }) {
        ...WhosUsingLogoFile
      }
      logoDenverpost: file(relativePath: { eq: "logo-denverpost.svg" }) {
        publicURL
        ext
      }
      logoQuartz: file(relativePath: { eq: "logo-quartz.jpg" }) {
        ...WhosUsingLogoFile
      }
      logoHope: file(relativePath: { eq: "logo-hope-lab.png" }) {
        ...WhosUsingLogoFile
      }
      logoWebDevStudios: file(relativePath: { eq: "logo-webdev-studios.png" }) {
        ...WhosUsingLogoFile
      }
      logoApollo: file(relativePath: { eq: "logo-apollo.png" }) {
        ...WhosUsingLogoFile
      }
      logoCreditKarma: file(relativePath: { eq: "logo-credit-karma.png" }) {
        ...WhosUsingLogoFile
      }
      logoPlayersTribune: file(
        relativePath: { eq: "logo-players-tribune.png" }
      ) {
        ...WhosUsingLogoFile
      }
      logoZillow: file(relativePath: { eq: "logo-zillow.png" }) {
        ...WhosUsingLogoFile
      }
      logoGatsby: file(relativePath: { eq: "logo-gatsby.png" }) {
        ...WhosUsingLogoFile
      }
      logoZeek: file(relativePath: { eq: "logo-zeek.svg" }) {
        ...WhosUsingLogoFile
        publicURL
        ext
      }
    }
  `)

  const logos = [
    {
      link: "https://www.dfuzr.com/",
      label: "Dfuzr Industries: Digital Experience Agency",
      alt: "Dfuzr Logo",
      image: data.logoDfuzr,
      bg: "#ee0d00",
    },
    {
      link: "https://funkhaus.us/",
      label: "Funkhaus: Digital Creative Agency",
      alt: "Funkhaus Logo",
      image: data.logoFunkhaus,
    },
    {
      link: "https://www.valu.fi/en",
      label: "Valu Digital",
      alt: "Valu Digital Logo",
      image: data.logoValu,
      bg: "#df2e30",
    },
    {
      link: "http://www.harnessup.com/",
      label: "Harness Software",
      alt: "Harness Software Logo",
      image: data.logoHarness,
    },
    {
      link: "https://www.denverpost.com/",
      label: "Denver Post",
      alt: "Denver Post Logo",
      image: data.logoDenverpost,
    },
    {
      link: "https://www.twincities.com/",
      label: "Twin Cities",
      alt: "Twin Cities Logo",
      image: data.logoTwinCities,
    },
    {
      link: "https://qz.com/",
      label: "Quartz",
      alt: "Quartz Logo",
      image: data.logoQuartz,
      bg: "#111111",
    },
    {
      link: "https://hopelab.org/",
      label: "Hope Lab",
      alt: "Hope Lab Logo",
      image: data.logoHope,
    },
    {
      link: "https://webdevstudios.com/",
      label: "WebDev Studios Lab",
      alt: "WebDev Studios Logo",
      image: data.logoWebDevStudios,
    },
    {
      link: "https://www.apollographql.com/",
      label: "Apollo GraphQL",
      alt: "Apollo GraphQL Logo",
      image: data.logoApollo,
    },
    {
      link: "https://blog.creditkarma.com/",
      label: "Credit Karma",
      alt: "Credit Karma Logo",
      image: data.logoCreditKarma,
    },
    {
      link: "https://gatsbyjs.com/",
      label: "Gatsby",
      alt: "Gatsby Logo",
      image: data.logoGatsby,
    },
    {
      link: "https://www.theplayerstribune.com/",
      label: "The Players Tribune",
      alt: "The Players Tribune Logo",
      image: data.logoPlayersTribune,
    },
    {
      link: "https://www.zillow.com/",
      label: "Zillow",
      alt: "Zillow Logo",
      image: data.logoZillow,
    },
    {
      link: "https://zeek.com/",
      label: "Zeek Interactive",
      alt: "Zeek Interactive",
      image: data.logoZeek,
    },
  ]

  return <LogoStack logos={logos} />
}

export default WhosUsing
