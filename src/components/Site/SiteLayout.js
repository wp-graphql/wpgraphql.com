import Header, { NavMenuFragment } from "./SiteHeader"
import Footer from "./SiteFooter"

export default function SiteLayout({ children, data }) {
  return (
    <div>
      <header>
        <Header data={data} />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { NavMenuFragment }
