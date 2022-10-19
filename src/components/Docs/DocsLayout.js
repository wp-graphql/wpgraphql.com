import DocsNav from "./DocsNav"
import SiteLayout from "components/Site/SiteLayout"
import TableOfContents from "components/Docs/TableOfContents"

export default function DocsLayout({
  children,
  siteLayoutData,
  toc,
  docsNavData,
}) {
  return (
    <SiteLayout data={siteLayoutData}>
      <div className="flex justify-center">
        <div
          className="grid gap-6 grid-rows-1 items-start p-6"
          style={{
            gridTemplateColumns:
              "max-content minmax(min-content, max-content) max-content",
          }}
        >
          <aside
            id="docs-nav"
            className="sticky overflow-y-scroll top-[7rem] h-[80vh] z-20 "
          >
            <DocsNav docsNavData={docsNavData} />
          </aside>

          <article id="doc-content" className="max-w-[80ch]">
            {children}
          </article>
          <aside id="doc-table-of-contents" className="sticky top-[7rem]">
            <div className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100 ">
              {toc && <TableOfContents toc={toc} />}
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  )
}
