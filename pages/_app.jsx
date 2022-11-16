import Head from "next/head"
import { theme } from "@/modules/config/theme.config"
import "@/styles/globals.css"
import { ThemeProvider } from "styled-components"
import Page from "components/page/Page"

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Takuya Toyokawa</title>
      </Head>
      <Page router={router}>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}

export default MyApp
