import { setConfig } from "@faustwp/core"
import templates from "./src/wp-templates"
import possibleTypes from "./possibleTypes.json"
// import PersistedQueriesPlugin from "./src/plugins/PersistedQueriesPlugin"

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [],
  usePersistedQueries: true,
  possibleTypes,
  experimentalToolbar: false,
})
