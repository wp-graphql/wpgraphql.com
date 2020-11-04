import React from "react";
import {
    Wrap,
    WrapItem,
    Tooltip,
    Image,
} from "@chakra-ui/core"
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

const WhosUsing = () => {

    return(
        <Wrap
            maxW="800px"
            mx="auto"
            justify="center"
            align="center"
            spacing="24px"
            mt="20"
        >
            <WrapItem key="dfuzr" bg="#ee0d00" p="1" rounded="md">

                <a href={"https://www.dfuzr.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Dfuzr Industries: Digital Experience Agency"
                             aria-label="Dfuzr Industries Logo" placement="top">
                        <Image alt="Dfuzr Logo"
                               h="60px"
                               w="auto"
                               src={logoDfuzr}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="funkhaus" bg="white" p="1" rounded="md">

                <a href={"https://funkhaus.us/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Funkhaus: Digital Creative Agency"
                             aria-label="Funkhaus Logo" placement="top">
                        <Image alt="Funkhaus Logo"
                               h="60px"
                               w="auto"
                               src={logoFunkhaus}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Valu" bg="#df2e30" p="1" rounded="md">

                <a href={"https://www.valu.fi/en"} target="_blank" rel="noreferrer">
                    <Tooltip label="Valu Digital" aria-label="Valu Digital Logo"
                             placement="top">
                        <Image alt="Dfuzr Logo"
                               h="60px"
                               w="auto"
                               src={logoValu}
                               loading="lazy"
                        />

                    </Tooltip>
                </a>
            </WrapItem>
            <WrapItem key="Harness" bg="white" p="1" rounded="md">
                <a href={"http://www.harnessup.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Harness Software"
                             aria-label="Harness Software Logo" placement="top">
                        <Image alt="Harness Software Logo"
                               h="60px"
                               w="auto"
                               src={logoHarness}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>
            </WrapItem>
            <WrapItem key="Denver Post" bg="white" p="3" rounded="md">
                <a href={"https://www.denverpost.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Denver Post" aria-label="Denver Post Logo"
                             placement="top">

                        <Image alt="Denver Post Logo"
                               h="60px"
                               w="auto"
                               src={logoDenverpost}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Twin Cities" bg="white" p="3" rounded="md">

                <a href={"https://www.twincities.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Twin Cities" aria-label="Twin Cities Logo"
                             placement="top">
                        <Image alt="Twin Cities Logo"
                               h="60px"
                               w="auto"
                               src={logoTwinCities}
                               loading="lazy"
                        />

                    </Tooltip>
                </a>
            </WrapItem>
            <WrapItem key="Quartz" bg="#111111" p="3" rounded="md">

                <a href={"https://qz.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Quartz" aria-label="Quartz Logo"
                             placement="top">
                        <Image alt="Quartz Logo"
                               h="60px"
                               w="auto"
                               src={logoQuartz}
                               loading="lazy"
                        />

                    </Tooltip>
                </a>
            </WrapItem>
            <WrapItem key="Hope Lab" bg="white" p="3" rounded="md">
                <a href={"https://hopelab.org/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Hope Lab" aria-label="Hope Lab Logo"
                             placement="top">

                        <Image alt="Hope Lab Logo"
                               h="60px"
                               w="auto"
                               src={logoHope}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="WebDev Studios" bg="white" p="1" rounded="md">
                <a href={"https://webdevstudios.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="WebDev Studios"
                             aria-label="WebDev Studios Logo"
                             placement="top">

                        <Image alt="WebDev Studios Logo"
                               h="60px"
                               w="auto"
                               src={logoWebDevStudios}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Apollo GraphQL" bg="white" p="1" rounded="md">
                <a href={"https://www.apollographql.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Apollo GraphQL"
                             aria-label="Apollo GraphQL Logo"
                             placement="top">

                        <Image alt="Apollo GraphQL Logo"
                               h="60px"
                               w="auto"
                               src={logoApollo}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Credit Karma" bg="white" p="1" rounded="md">
                <a href={"https://blog.creditkarma.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Credit Karma" aria-label="Credit Karma Logo"
                             placement="top">

                        <Image alt="Credit Karma Logo"
                               h="60px"
                               w="auto"
                               src={logoCreditKarma}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Gatsby" bg="white" p="1" rounded="md">
                <a href={"https://gatsbyjs.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Gatsby" aria-label="Gatsby Logo"
                             placement="top">

                        <Image alt="Gatsby Logo"
                               h="60px"
                               w="auto"
                               src={logoGatsby}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="The Players Tribune" bg="white" p="2" rounded="md">
                <a href={"https://www.theplayerstribune.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="The Players Tribune"
                             aria-label="The Players Tribune"
                             placement="top">

                        <Image alt="The Players Tribune Logo"
                               h="60px"
                               w="auto"
                               src={logoPlayersTribune}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>

            </WrapItem>
            <WrapItem key="Zillow" bg="white" p="1" rounded="md">
                <a href={"https://www.zillow.com/"} target="_blank" rel="noreferrer">
                    <Tooltip label="Zillow" aria-label="Zillow"
                             placement="top">
                        <Image alt="Zillow Logo"
                               h="60px"
                               w="auto"
                               src={logoZillow}
                               loading="lazy"
                        />
                    </Tooltip>
                </a>
            </WrapItem>
        </Wrap>
    )

}

export default WhosUsing;
