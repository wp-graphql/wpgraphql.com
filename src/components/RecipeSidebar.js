import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Sidebar from "./sidebar/Sidebar";
import { routes as SidebarRoutes } from './DeveloperReferenceSidebar'

const RecipeSidebar = () => {

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
            path: `/recipes`,
        }
    ];

    data.allWpCodeSnippetTag.nodes.map(tag => {
        taglist.push({
            title: `${tag.name} (${tag.count})`,
            path: tag.uri,
        })
        return tag;
    })

    const routes = [
        {
            heading: false,
            routes: [
                {
                    title: `Recipe Tags`,
                    open: true,
                    path: `/recipes`,
                    routes: taglist
                }
            ]
        }
    ];



    return <Sidebar routes={SidebarRoutes.concat(routes)}/>


};

export default RecipeSidebar;
