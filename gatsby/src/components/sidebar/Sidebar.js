import {
  Box,
  Button,
  chakra,
  Stack,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react"
import { useLocation } from "@reach/router"
import * as React from "react"
import SidebarCategory from "./SidebarCategory"
import SidebarLink from "./SidebarLink"
import { FaTimes, FaStream } from "react-icons/fa"
import { Link } from "gatsby"

export const SidebarNav = (props) => {
  const { routes } = props
  const { pathname } = useLocation()
  const ref = React.useRef(null)
  const headingColor = useColorModeValue("gray.700", "inherit")
  return (
    <>
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.title && c1.path !== "#" ? (
              <chakra.h4
                as={Link}
                fontSize="sm"
                fontWeight="bold"
                my="1.25rem"
                textTransform="uppercase"
                letterSpacing="wider"
                color={headingColor}
                to={c1.path}
                display="block"
              >
                {c1.title}
              </chakra.h4>
            ) : (
              <chakra.h4
                fontSize="sm"
                fontWeight="bold"
                my="1.25rem"
                textTransform="uppercase"
                letterSpacing="wider"
                color={headingColor}
              >
                {c1.title}
              </chakra.h4>
            )}

            {c1.routes &&
              c1.routes.map((c2) => {
                if (!c2.routes || !c2.routes.length) {
                  return (
                    <SidebarLink ml="-3" mt="2" key={c2.path} href={c2.path}>
                      {c2.title}
                    </SidebarLink>
                  )
                }

                const selected = pathname.startsWith(c2.path)
                const opened = selected || true

                return (
                  <SidebarCategory
                    contentRef={ref}
                    key={c2.path}
                    {...c2}
                    selected={selected}
                    opened={opened}
                  >
                    <Stack>
                      {c2.routes.map((c3) => (
                        <SidebarLink key={c3.path} href={c3.path}>
                          {c3.title}
                        </SidebarLink>
                      ))}
                    </Stack>
                  </SidebarCategory>
                )
              })}
          </React.Fragment>
        )
      })}
    </>
  )
}

export const SidebarDrawer = (props) => {
  const { routes, title, display } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button
        display={display}
        ref={btnRef}
        colorScheme="blue"
        position="fixed"
        bottom="1.5rem"
        right="1.5rem"
        onClick={isOpen ? onClose : onOpen}
        rounded="25px"
        zIndex={75}
        aria-label="Open Mobile Nav"
      >
        {isOpen ? <FaTimes /> : <FaStream />}
        <chakra.span sx={{ display: "none" }}>Open Mobile Nav</chakra.span>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            {title ? <DrawerHeader>{title}</DrawerHeader> : null}
            <DrawerBody>
              <SidebarNav routes={routes} display={display} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

const Sidebar = ({ routes, title }) => {
  return (
    <>
      <Box
        as="aside"
        pos="sticky"
        top="6.5rem"
        w="280px"
        pr="8"
        pb="8"
        pl="3"
        overflowY="auto"
        className="sidebar-content"
        flexShrink={0}
        h="calc(((100vh - 1.5rem) - 64px) - 42px);"
        display={{ base: "none", md: "block" }}
      >
        <SidebarNav routes={routes} dispay={["none", "block"]} />
      </Box>
      <SidebarDrawer
        routes={routes}
        title={title}
        display={["block", "block", "none"]}
      />
    </>
  )
}

export default Sidebar
