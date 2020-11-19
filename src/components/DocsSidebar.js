import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { flatListToHierarchical } from "../utils"
import Sidebar from "./sidebar/Sidebar"

const DocsSidebar = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: { menu: { node: { name: { eq: "Docs Nav" } } } }
      ) {
        nodes {
          id
          title: label
          path
          target
          parent: parentId
        }
      }
    }
  `)

  const routes = flatListToHierarchical(data.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

  return <Sidebar routes={routes} title={title} />
}

export default DocsSidebar
