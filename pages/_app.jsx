import Head from "next/head"
import { theme } from "@/modules/config/theme.config"
import "@/styles/globals.css"
import { ThemeProvider } from "styled-components"
import { IsClosedContextProvider } from "@/modules/context/IsClosedContext"
import Page from "components/template/Page"

function MyApp({ Component, pageProps, router }) {
  return (
    <IsClosedContextProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Takuya Toyokawa</title>
          <meta property="og:title" content="Takuya Toyokawa" key="title" />
          <meta
            name="description"
            content="Takuya Toyokawa is a recent graduate and web developer from BCIT Digital Design and Development, and is a hybrid Frontend / Fullstack Developer and UX/UI designer specializing in both building and ideating accessible, interactive websites."
          />
          <meta
            name="keywords"
            content="Takuya, Kevin, Toyokawa, html, css, javascript, js, react, framework, frontend, front-end, fullstack, full-stack, web development, portfolio, frontend portfolio, front-end porfolio, ux/ui designer "
          />
          <link rel="canonical" href="https://takuyaktoyokawa.ca" />
          <meta name="author" content="Takuya Toyokawa" />
        </Head>
        <Page router={router}>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </IsClosedContextProvider>
  )
}

export default MyApp
