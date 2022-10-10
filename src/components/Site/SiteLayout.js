import SiteHeader, { NAV_QUERY } from "./SiteHeader"

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}

export { NAV_QUERY }

export default SiteLayout
