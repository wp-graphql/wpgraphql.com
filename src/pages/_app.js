import "../../faust.config"
import { useRouter } from "next/router"
import { FaustProvider } from "@faustwp/core"
import { TemplateDataProvider } from "hooks/useTemplateData"

import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <FaustProvider pageProps={pageProps}>
      <TemplateDataProvider>
        <Component {...pageProps} key={router.asPath} />
      </TemplateDataProvider>
    </FaustProvider>
  )
}
