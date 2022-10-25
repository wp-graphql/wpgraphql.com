import {createPersistedQueryLink} from '@apollo/client/link/persisted-queries';
import {HttpLink} from "@apollo/client";
import {sha256} from 'crypto-hash';

const linkChain = createPersistedQueryLink({ sha256 }).concat(
  new HttpLink({ uri: process.env.WPGRAPHQL_URL }),
);

class PersistedQueriesPlugin {
  apply({ addFilter }) {
    addFilter('apolloClientOptions', 'faust', (apolloClientOptions) => {
      const existingLink = apolloClientOptions?.link;

      return {
        ...apolloClientOptions,
        link: existingLink ? linkChain.concat(existingLink) : linkChain
      }
    });
  }
}

export default PersistedQueriesPlugin;
