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
