import Head from "next/head"
import theme from "@/config/theme.config"
import "@/styles/globals.css"
import { ThemeProvider } from "styled-components"
import { motion } from "framer-motion"
import Page from "components/page/Page"
import { fade } from "@/config/animation/fade"
import { AnimatePresence } from "framer-motion"

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
