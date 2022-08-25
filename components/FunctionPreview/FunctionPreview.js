import { gql } from "@apollo/client"
import Link from "next/link"

export const FunctionPreviewFragment = gql`
    fragment FunctionPreview on Function {
        id
        title
        content
        uri
    }
`

const FunctionPreview = ({ node }) => {

    const paragraphs = node?.content ? node.content.split('</p>') : null
    const excerpt = paragraphs ? paragraphs[0] + '</p>' : null

    return (
        <div className="mb-10 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{node.title}</h2>
            <div className="py-5">
                <div className="prose dark:prose-dark" dangerouslySetInnerHTML={{__html:excerpt}} />
            </div>
            
            <div className="text-base font-medium leading-6">
                <Link href={node.uri}>
                    <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
                        <span className="pr-2">View Function →</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default FunctionPreview