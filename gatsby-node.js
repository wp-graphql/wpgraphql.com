const fs = require("fs")
const showdown = require("showdown")
const axios = require(`axios`)
const { ensureTrailingSlash } = require("./src/utils")
const { reporter } = require("gatsby-cli/lib/reporter/reporter")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContent: allWpContentNode {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
      snippetTags: allWpCodeSnippetTag {
        nodes {
          id
          uri
        }
      }
      blogAuthors: allWpUser {
        nodes {
          uri
          id
          posts {
            nodes {
              id
            }
          }
        }
      }
      markdownDocs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//v1/docs//" } }
      ) {
        nodes {
          __typename
          id
          frontmatter {
            uri
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching docs.", result.errors)
  }

  const { allContent, snippetTags, blogAuthors, markdownDocs } = result.data

  if (allContent.nodes.length) {
    allContent.nodes.map((doc) => {
      // Set the default template to use if a specific one doesn't exist
      let template = require.resolve(`./src/templates/WpContentNode.js`)

      // Try to find the template path for the specific Post Type
      let templatePath = `./src/templates/${doc.__typename}.js`
      try {
        if (fs.existsSync(templatePath)) {
          template = require.resolve(templatePath)
        }
      } catch (err) {
        console.error(err)
      }

      if (doc.uri.length) {
        actions.createPage({
          path: ensureTrailingSlash(doc.uri),
          component: template,
          context: {
            id: doc.id,
            uri: doc.uri,
            typename: doc.__typename,
            databaseId: doc.databaseId,
          },
        })
      }
    })
  }

  if (snippetTags.nodes.length) {
    snippetTags.nodes.map((snippetTag) =>
      actions.createPage({
        path: ensureTrailingSlash(snippetTag.uri),
        component: require.resolve(`./src/templates/SnippetTag.js`),
        context: {
          id: snippetTag.id,
          uri: snippetTag.uri,
        },
      })
    )
  }

  if (blogAuthors.nodes.length) {
    blogAuthors.nodes.map((blogAuthor) => {
      if (blogAuthor.posts.nodes.length) {
        actions.createPage({
          path: ensureTrailingSlash(blogAuthor.uri),
          component: require.resolve(`./src/templates/BlogAuthor.js`),
          context: {
            id: blogAuthor.id,
            uri: blogAuthor.uri,
          },
        })
      }
    })
  }

  if (markdownDocs.nodes.length) {
    markdownDocs.nodes.map((markDown) =>
      actions.createPage({
        path: ensureTrailingSlash(markDown.frontmatter.uri),
        component: require.resolve(`./src/templates/MarkDownDoc.js`),
        context: {
          id: markDown.id,
          uri: markDown.frontmatter.uri,
        },
      })
    )
  }
}

exports.onCreateNode = async ({ node, actions }) => {

  const { createNodeField } = actions

  // If this is an extension node, check if the README field exists.
  if (node?.internal?.type !== `WpExtensionPlugin`) {
    return;
  }

  if (!node?.extensionFields?.pluginReadmeLink) {
    return;
  }

  // Make an http call to pull in the README contents.
  const uri = node?.extensionFields?.pluginReadmeLink ?? null;

  if (!uri) {
    return;
  }

  let readmeContent = '';

  try {
    
    const data = await axios.get( uri )
    
    if (data.status === 200 && data?.data) {
      converter = new showdown.Converter()
      converter.setFlavor('github')
      // Save the README contents to the readmeContent field.
      reporter.info(`Fetched README for ${node?.extensionFields?.pluginReadmeLink}`)
      node.readmeContent = converter.makeHtml(data.data)
      return node;
    } else {
      reporter.error(`Something funky while Fetching README for ${node?.extensionFields?.pluginReadmeLink}`)
      reporter.error({
        status: data?.status,
        data: data?.data
      })
      node.readmeContent = '';
      return node;
    }

  } catch (e) {
    reporter.error(`Failed to fetch README for ${node?.extensionFields?.pluginReadmeLink}`)
    reporter.error(e)
    node.readmeContent = '';
    return node;
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type WpExtensionPlugin {
      readmeContent: String
    }
  `)
}
