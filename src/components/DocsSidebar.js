import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { flatListToHierarchical, navMenuListFromYaml } from "../utils"
import Sidebar from "./sidebar/Sidebar"

const DocsSidebar = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      navMenu: allDocsNavMenuYaml {
        nodes {
          id
          section {
            name
            items {
              uri
              label
            }
          }
        }
      }
      markdownDocs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//v1/docs//" } }
      ) {
        nodes {
          frontmatter {
            uri
            title
          }
        }
      }
      wpDocs: allWpDocument {
        nodes {
          uri
          title
        }
      }
    }
  `)

  // Make a list of document titles from the document sources if label/title is not found in the yaml.
  let otherTitles = data.markdownDocs.nodes
    .map(function (elem) {
      return elem.frontmatter
    })
    .concat(data.wpDocs.nodes)

  const navRoutes = navMenuListFromYaml(data.navMenu.nodes, otherTitles)

  const routes = flatListToHierarchical(navRoutes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

  return <Sidebar routes={routes} title={title} />
}

export default DocsSidebar
