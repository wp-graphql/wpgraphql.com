require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-sitemap",
    options: {
      resolveSiteUrl: () => {
        return "https://www.wpgraphql.com"
      },
    },
  },
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
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/img/`,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-image`,
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
    resolve: "@chakra-ui/gatsby-plugin",
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
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/, // See below to configure properly
      },
    },
  },
  {
    resolve: "gatsby-plugin-git-clone",
    options: {
      repository: "https://github.com/markkelnar/wp-graphql.git",
      path: `${__dirname}/documentation/wp-graphql/v1`,
      branch: "docs/add-faqs",
    },
  },
  "gatsby-transformer-yaml",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/documentation/wp-graphql/v1/docs`,
      name: "documentation-v1",
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            ignoreFileExtensions: [],
          },
        },
      ],
    },
  },
]

if (
  process.env.NODE_ENV === `production` &&
  !process.env.ENABLE_GATSBY_REFRESH_ENDPOINT
) {
  plugins.push(`gatsby-plugin-offline`)
}

module.exports = {
  siteMetadata: {
    title: "WPGraphQL",
    description: "Extendable GraphQL API for WordPress",
    siteUrl: process.env.SITE_URL,
    author: `@wpgraphql`,
  },
  plugins,
}
