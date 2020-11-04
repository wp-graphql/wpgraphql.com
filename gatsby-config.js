require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: "WPGraphQL",
        description: "Documentation for WPGraphQL",
        siteUrl: process.env.SITE_URL,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-111783024-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: [],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "wpgraphql.com",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `WPGraphQL`,
                short_name: `WPGraphQL`,
                start_url: `/`,
                background_color: `#1b202c`,
                theme_color: `#f7901f`,
                display: `standalone`,
                icon: `src/img/icons/icon.png`,
                icons: [
                    {
                        src: `src/img/icons/192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `src/img/icons/512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ]
            },
        },
        {
            resolve: "gatsby-plugin-chakra-ui",
            options: {
                /**
                 * @property {boolean} [isResettingCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                isResettingCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-wordpress-experimental`,
            options: {
                url: process.env.WPGRAPHQL_URL,
                verbose: true,
                debug: {
                    graphql: {
                        writeQueriesToDisk: true,
                        showQueryVarsOnError: true,
                        panicOnError: false,
                        onlyReportCriticalErrors: true,
                    },
                },
                develop: {
                    hardCacheMediaFiles: true,
                    hardCacheData: false,
                }
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/, // See below to configure properly
                },
            },
        }
    ],
}
