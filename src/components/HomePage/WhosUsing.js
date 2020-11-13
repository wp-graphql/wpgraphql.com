import React from "react";
import logoDfuzr from '../../img/logo-dfuzr.png'
import logoValu from '../../img/logo-valu-digital.png'
import logoFunkhaus from '../../img/logo-funkhaus.png'
import logoHarness from '../../img/logo-harness.png'
import logoTwinCities from '../../img/logo-twincities.png'
import logoDenverpost from '../../img/logo-denverpost.svg'
import logoQuartz from '../../img/logo-quartz.jpg'
import logoHope from '../../img/logo-hope-lab.png'
import logoWebDevStudios from '../../img/logo-webdev-studios.png'
import logoApollo from '../../img/logo-apollo.png'
import logoCreditKarma from '../../img/logo-credit-karma.png'
import logoPlayersTribune from '../../img/logo-players-tribune.png'
import logoZillow from '../../img/logo-zillow.png'
import logoGatsby from '../../img/logo-gatsby.png'
import LogoStack from '../../components/landingpage/LogoStack'

const WhosUsing = () => {
  const logos = [
    {
      link: "https://www.dfuzr.com/",
      label: "Dfuzr Industries: Digital Experience Agency",
      alt: "Dfuzr Logo",
      image: logoDfuzr,
      bg: "#ee0d00",
    },
    {
      link: "https://funkhaus.us/",
      label: "Funkhaus: Digital Creative Agency",
      alt: "Funkhaus Logo",
      image: logoFunkhaus,
    },
    {
      link: "https://www.valu.fi/en",
      label: "Valu Digital",
      alt: "Valu Digital Logo",
      image: logoValu,
      bg: "#df2e30",
    },
    {
      link: "http://www.harnessup.com/",
      label: "Harness Software",
      alt: "Harness Software Logo",
      image: logoHarness,
    },
    {
      link: "https://www.denverpost.com/",
      label: "Denver Post",
      alt: "Denver Post Logo",
      image: logoDenverpost,
    },
    {
      link: "https://www.twincities.com/",
      label: "Twin Cities",
      alt: "Twin Cities Logo",
      image: logoTwinCities,
    },
    {
      link: "https://qz.com/",
      label: "Quartz",
      alt: "Quartz Logo",
      image: logoQuartz,
      bg: "#111111",
    },
    {
      link: "https://hopelab.org/",
      label: "Hope Lab",
      alt: "Hope Lab Logo",
      image: logoHope,
    },
    {
      link: "https://webdevstudios.com/",
      label: "WebDev Studios Lab",
      alt: "WebDev Studios Logo",
      image: logoWebDevStudios,
    },
    {
      link: "https://www.apollographql.com/",
      label: "Apollo GraphQL",
      alt: "Apollo GraphQL Logo",
      image: logoApollo,
    },
    {
      link: "https://blog.creditkarma.com/",
      label: "Credit Karma",
      alt: "Credit Karma Logo",
      image: logoCreditKarma,
    },
    {
      link: "https://gatsbyjs.com/",
      label: "Gatsby",
      alt: "Gatsby Logo",
      image: logoGatsby,
    },
    {
      link: "https://www.theplayerstribune.com/",
      label: "The Players Tribune",
      alt: "The Players Tribune Logo",
      image: logoPlayersTribune,
    },
    {
      link: "https://www.zillow.com/",
      label: "Zillow",
      alt: "Zillow Logo",
      image: logoZillow,
    },
  ]

  return(
    <LogoStack logos={logos} />
  )

}

export default WhosUsing;
