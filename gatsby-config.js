require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "WPGraphQL",
    description: "Extendable GraphQL API for WordPress",
    siteUrl: process.env.SITE_URL,
    author: `@wpgraphql`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-111783024-1"],
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "4731712",
        respectDNT: true,
        productionOnly: true,
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
        ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        schema: {
          perPage: 100,
        },
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
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
