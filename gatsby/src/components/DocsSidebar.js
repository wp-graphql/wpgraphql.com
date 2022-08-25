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
              title: label
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

  const navRoutes = navMenuListFromYaml(
    data.navMenu.nodes,
    data.markdownDocs.nodes.concat(data.wpDocs.nodes)
  )

  const routes = flatListToHierarchical(navRoutes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

  return <Sidebar routes={routes} title={title} />
}

export default DocsSidebar
