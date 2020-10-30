import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { flatListToHierarchical } from '../utils'
import Sidebar from "./sidebar/sidebar";

const DocsSidebar = () => {

    const data = useStaticQuery(graphql`
    {
      allWpMenuItem( sort:{fields:order order:ASC} filter: {menu: {node: {name: {eq: "Docs Nav"}}}}) {
        nodes {
          id
          title: label
          path
          target
          parentId
        }
      }
    }
    `);

    const routes = flatListToHierarchical(data.allWpMenuItem.nodes, {
        idKey: 'id',
        childrenKey: 'routes'
    });

    return <Sidebar routes={routes} />
}

export default DocsSidebar;
