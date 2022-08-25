/**
 * This script is used to fetch the possible types for use in Apollo
 */
 const fetch = require('cross-fetch');
 const fs = require('fs');
 
 fetch(process.env.WPGRAPHQL_ENDPOINT ?? 'https://content.wpgraphql.com/graphql', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
         variables: {},
         query: `
         {
             __schema {
                 types {
                     kind
                     name
                     possibleTypes {
                        name
                     }
                 }
             }
         }
         `,
     }),
 }).then(result => result.json())
 .then(result => {
     const possibleTypes = {};
 
     result.data.__schema.types.forEach(supertype => {
     if (supertype.possibleTypes) {
         possibleTypes[supertype.name] =
         supertype.possibleTypes.map(subtype => subtype.name);
     }
     });
 
     fs.writeFile('./possibleTypes.json', JSON.stringify(possibleTypes), err => {
     if (err) {
         console.error('Error writing possibleTypes.json', err);
     } else {
         console.log('Fragment types successfully extracted!');
     }
     });
 });