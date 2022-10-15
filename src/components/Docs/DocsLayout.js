import DocsNav from "./DocsNav"
import SiteLayout from "components/Site/SiteLayout"
import TableOfContents from "components/Docs/TableOfContents"

const DocsLayout = ({ children, data, toc }) => {
  return (
    <SiteLayout data={data}>
      <div
        className="grid gap-6 max-w-8xl grid-rows-1 items-start p-6 border border-solid"
        style={{ gridTemplateColumns: "max-content auto max-content" }}
      >

        <aside
          id="docs-nav"
          className="sticky overflow-y-scroll top-[7rem] h-[80vh] z-20 "
        >
          <DocsNav />
        </aside>

        <article
          id="doc-content"
          className="max-w-3xl xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 "
        >
          {children}
        </article>
        <aside id="doc-table-of-contents" className="sticky top-[7rem]">
          <div className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100 ">
            {toc && <TableOfContents toc={toc} />}
          </div>
        </aside>
      </div>
    </SiteLayout>
  )
}

export default DocsLayout
