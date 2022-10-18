import { getAllDocSlugs  } from "./mdx/parse-docs";

export async function getAllRoutesSitemapData() {
  const docs = await getAllDocSlugs()

  return [...docs]
}

