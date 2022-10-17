import "../../faust.config"
import { useRouter } from "next/router"
import { FaustProvider } from "@faustwp/core"

import "../styles/globals.css"
import "../styles/docs.css"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  )
}
