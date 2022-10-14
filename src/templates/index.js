import category from "./category"
import author from "./author"
import archive from "./archive"
import index from "./main"
import singleCodeSnippet from "./single-code-snippet"
import singular from "./singular"

const templates = {
  category,
  author,
  archive,
  "single-code-snippets": singleCodeSnippet,
  singular,
  index,
}

export default templates
