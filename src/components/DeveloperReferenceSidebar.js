import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Sidebar from "./sidebar/Sidebar";

const DeveloperReferenceSidebar = ({ title }) => {

    const data = useStaticQuery(graphql`
    {
      allWpFilter(sort: {fields: title, order: ASC}) {
        nodes {
          id
          title
          path: uri
        }
      }
      allWpAction(sort: {fields: title, order: ASC}) {
        nodes {
          id
          title
          path: uri
        }
      }
      allWpFunction(sort: {fields: title, order: ASC}) {
        nodes {
          id
          title
          path: uri
        }
      }
    }
    `);

    const routes = [
        {
            heading: false,
            id: 'heading',
            routes: [
                {
                    title: 'Developer Reference',
                    routes: [
                        {
                            title: 'Actions',
                            routes: [],
                            id: 'actions',
                            path: '/actions'
                        },
                        {
                            title: 'Filters',
                            routes: [],
                            id: 'filters',
                            path: '/filters'
                        },
                        {
                            title: 'Functions',
                            routes: [],
                            id: 'functions',
                            path: '/functions'
                        },
                        {
                            title: 'Recipes',
                            routes: [],
                            id: 'recipes',
                            path: '/recipes'
                        },
                    ],
                    id: 'developer-reference',
                    path: '/developer-reference'
                },
            ]
        },

    ];

    return <Sidebar routes={routes} title={title} />
}

export default DeveloperReferenceSidebar;
