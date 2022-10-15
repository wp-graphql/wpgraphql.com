import category from "./category"
import author from "./author"
import archive from "./archive"
import index from "./main"
import singleCodeSnippet from "./single-code-snippet"
import singular from "./singular"
import ArchivePost from "./archive-post"

const templates = {
  category,
  author,
  archive,
  "archive-post": ArchivePost,
  "single-code-snippets": singleCodeSnippet,
  singular,
  index,
}

export default templates
