import Header, { NavMenuFragment } from "./SiteHeader"
import Footer from "./SiteFooter"

export default function SiteLayout({ children, data }) {
  return (
    <div>
      <Header data={data} />
      {children}
      <Footer />
    </div>
  )
}

export { NavMenuFragment }
