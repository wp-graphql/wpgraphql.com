import Header, { NavMenuFragment } from "./SiteHeader"
import Footer from "./SiteFooter"

export default function SiteLayout({ children, data }) {
  return (
    <div>
      <div>
        <Header data={data} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export { NavMenuFragment }
