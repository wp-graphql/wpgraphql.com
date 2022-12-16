import { getWordPressProps, WordPressTemplate } from "@faustwp/core"

export default function Page(props) {
  return <WordPressTemplate {...props} />
}

export async function getStaticProps(ctx) {
  return { ...(await getWordPressProps({ ctx })), revalidate: 1 }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
