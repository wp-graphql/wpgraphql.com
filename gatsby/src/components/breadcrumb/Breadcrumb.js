import React from "react"
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

const Breadcrumb = ({ crumbs }) => {
  return (
    <ChakraBreadcrumb spacing="8px" mb={5} fontSize="sm">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      {crumbs.map((crumb) => {
        return (
          <BreadcrumbItem isCurrentPage={crumb.isCurrentPage || false}>
            <BreadcrumbLink href={crumb.path}>{crumb.title}</BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </ChakraBreadcrumb>
  )
}

export default Breadcrumb
