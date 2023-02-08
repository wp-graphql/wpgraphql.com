import "../../faust.config"
import { useRouter } from "next/router"
import { FaustProvider } from "@faustwp/core"
import Script from "next/script"

import "../styles/globals.css"
import "../styles/docs.css"
import { SearchProvider } from "../components/Site/SearchButton";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <SearchProvider>
      <FaustProvider pageProps={pageProps}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-K34TZSKN01"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K34TZSKN01', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} key={router.asPath} />
      </FaustProvider>
    </SearchProvider>
  )
}
