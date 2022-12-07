// Packages
import { useState, useEffect } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { AnimatePresence } from "framer-motion"

// Modules
import "@/styles/globals.css"
import { theme } from "@/modules/config/theme.config"
import { IsClosedContextProvider } from "@/modules/context/IsClosedContext"

// Components
import Page from "components/template/Page"
import LoadingScreen from "@/organisms/general/LoadingScreen"

function MyApp({ Component, pageProps, router }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    const updateFirstLoad = () => {
      setTimeout(() => {
        setIsFirstLoad(false)
      }, 1500)
    }
    updateFirstLoad()
    return updateFirstLoad()
  }, [])

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
            content="Takuya, Kevin, Toyokawa, takuyaktoyokawa, html, css, javascript, js, react, framework, frontend, front-end, fullstack, full-stack, web development, portfolio, frontend portfolio, front-end porfolio, ux/ui designer "
          />
          <meta name="author" content="Takuya Toyokawa" />
        </Head>
        <AnimatePresence mode="wait">
          {isFirstLoad ? (
            <LoadingScreen key="loader" />
          ) : (
            <Page key="page" router={router}>
              <Component {...pageProps} />
            </Page>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </IsClosedContextProvider>
  )
}

export default MyApp
