import Header, { NavMenuFragment } from "./SiteHeader"
import Footer from "./SiteFooter"

export default function SiteLayout({ children }) {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { NavMenuFragment }
