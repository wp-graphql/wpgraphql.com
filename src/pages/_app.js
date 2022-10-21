import "../../faust.config"
import { useRouter } from "next/router"
import { FaustProvider } from "@faustwp/core"
import Script from "next/script"

import "../styles/globals.css"
import "../styles/docs.css"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <FaustProvider pageProps={pageProps}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-111783024-1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-111783024-1', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  )
}
