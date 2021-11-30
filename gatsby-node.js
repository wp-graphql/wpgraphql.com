const fs = require("fs")
const showdown = require("showdown")
const axios = require(`axios`)
const { ensureTrailingSlash } = require("./src/utils")

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

  // If this is an extension node, check if the README field exists.
  if (node.internal.type != `WpExtensionPlugin`) {
    return
  }

  if (!node.extensionFields.pluginReadmeLink) {
    return
  }

  // Make an http call to pull in the README contents.
  const url = node?.extensionFields?.pluginReadmeLink ?? null;
  const uri = url ? url + `?` + new Date().getTime() : null

  if (!uri) {
    return
  }

  try {
    
    const data = await axios.get( uri )
    
    if (data.status == "200" && data.data) {
      converter = new showdown.Converter()
      converter.setFlavor("github")
      // Save the README contents to the readmeContent field.
      node.readmeContent = converter.makeHtml(data.data)
    } else {
      node.readmeContent = '';
    }
  } catch (e) {
    node.readmeContent = '';
    return
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type WpExtensionPlugin {
      readmeContent: String
    }
  `)
}
