const fs = require('fs');

exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
    {
      allWpContentNode {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `)

    if (result.errors) {
        reporter.error("There was an error fetching docs.", result.errors)
    }

    const {nodes} = result.data.allWpContentNode
    if (nodes.length) {
        nodes.forEach((doc) => {

            // Set the default template to use if a specific one doesn't exist
            let template = require.resolve(`./src/templates/WpContentNode.js`);

            // Try to find the template path for the specific Post Type
            let templatePath = `./src/templates/${doc.__typename}.js`;
            try {
                if (fs.existsSync(templatePath)) {
                    template = require.resolve(templatePath)
                }
            } catch (err) {
                console.error(err)
            }

            if (doc.uri.length) {
                actions.createPage({
                    path: doc.uri,
                    component: template,
                    context: {
                        id: doc.id,
                        uri: doc.uri,
                    },
                })
            }
        })
    }

}
