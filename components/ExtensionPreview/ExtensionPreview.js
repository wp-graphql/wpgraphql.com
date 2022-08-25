import { gql } from "@apollo/client";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export const ExtensionFragment = gql`
fragment ExtensionPreview on ExtensionPlugin {
    id
    title
    uri
    content
    extensionFields {
        pluginHost
        pluginLink
        pluginReadmeLink
    }
}
`

const ExtensionPreview = ({ extension }) => {
    return(
        <div className="mb-10 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{extension.title}</h2>
            <div className="py-5">
                <div className="prose dark:prose-dark" dangerouslySetInnerHTML={{ __html: extension?.content }} />
            </div>
            <div className="text-base font-medium leading-6">
                <a href={extension.extensionFields.pluginLink} target="_blank" className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-5 py-2 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
                    <span className="pr-2">View Extension</span><ExternalLinkIcon className="h-4 w-4" />
                </a>
            </div>
        </div>
    )
};

export default ExtensionPreview;