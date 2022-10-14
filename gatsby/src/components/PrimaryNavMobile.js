import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import flatListToHierarchical from "../utils"
import { SidebarNav } from "./sidebar/Sidebar"

const DocsSidebar = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: { menu: { node: { name: { eq: "Primary Nav" } } } }
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

  return <SidebarNav routes={routes} dispay={["none", "block"]} />
}

export default DocsSidebar
