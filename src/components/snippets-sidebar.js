import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Sidebar from "./sidebar/sidebar";

const SnippetsSidebar = () => {

    const data = useStaticQuery(graphql`
    {
      allWpCodeSnippet {
        totalCount
      }
      allWpCodeSnippetTag(filter: {count: {gt: 0}}, sort: {fields: taxonomy___node___name, order: ASC}) {
        nodes {
          id
          uri
          name
          count
        }
      }
    }
    `);

    let taglist = [
      {
        title: `View All (${data.allWpCodeSnippet.totalCount})`,
        path: `/code-snippets`,
      }
    ]
    data.allWpCodeSnippetTag.nodes.map(tag => {
      taglist.push({
        title: `${tag.name} (${tag.count})`,
        path: tag.uri,
      })
    })

    const routes = [
      {
        heading: false,
        routes: [
          {
            title: `Code Snippet Tags`,
            open: true,
            path: `/code-snippets`,
            routes: taglist
          }
        ]
      }
    ]

    return <Sidebar routes={routes} />


};

export default SnippetsSidebar;
