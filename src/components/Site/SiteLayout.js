import { gql } from "@apollo/client"

import SiteHeader, { NavMenuFragment } from "./SiteHeader"

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
      {/* <SiteFooter /> */}
    </>
  )
}

export { NavMenuFragment }

export default SiteLayout
