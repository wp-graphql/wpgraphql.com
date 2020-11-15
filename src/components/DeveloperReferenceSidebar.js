import React from 'react';
import Sidebar from "./sidebar/Sidebar";

export const routes = [
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
                        path: '/actions/'
                    },
                    {
                        title: 'Filters',
                        routes: [],
                        id: 'filters',
                        path: '/filters/'
                    },
                    {
                        title: 'Functions',
                        routes: [],
                        id: 'functions',
                        path: '/functions/'
                    },
                    {
                        title: 'Recipes',
                        routes: [],
                        id: 'recipes',
                        path: '/recipes/'
                    },
                ],
                id: 'developer-reference',
                path: '/developer-reference/'
            },
        ]
    },

];

const DeveloperReferenceSidebar = ({ title }) => {

    return <Sidebar routes={routes} title={title} />
}

export default DeveloperReferenceSidebar;
