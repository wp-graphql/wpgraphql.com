import Header, { NavMenuFragment } from "./SiteHeader"
import Footer from "./SiteFooter"

export default function SiteLayout({ children, data }) {
  return (
    <>
      <Header data={data} />
      {children}
      <Footer />
    </>
  )
}

export { NavMenuFragment }
