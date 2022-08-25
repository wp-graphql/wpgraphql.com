import DocsNav from 'components/DocsNav/DocsNav'
import SiteLayout from 'components/SiteLayout/SiteLayout'
import SiteFooter from 'components/SiteFooter/SiteFooter'

const DocsLayout = ({ children }) => {
  return (
    <SiteLayout>
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
            <DocsNav />
          </div>
          <div className="lg:pl-[19.5rem]">
            <div className="max-w-3xl mx-autho pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 ">
              {children}
              <SiteFooter />
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}

export default DocsLayout
