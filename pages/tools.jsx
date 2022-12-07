// Packages
import styled from "styled-components"
import { motion } from "framer-motion"
import Head from "next/head"

// Animations
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import DevelopmentGallery from "@/organisms/tools/DevelopmentGallery"
import DesignGallery from "@/organisms/tools/DesignGallery"
import OtherGallery from "@/organisms/tools/OtherGallery"

// Styled Components
const StyledMain = styled(Main)`
  padding-bottom: 5em;
`

// Motion Components
const MotionDevelopment = motion(DevelopmentGallery)
const MotionDesign = motion(DesignGallery)
const MotionOther = motion(OtherGallery)

// Component
function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://takuyaktoyokawa.ca/tools" />
      </Head>
      <PageHeader title="Tools" subtitle="All tools used for web development" />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionDevelopment variants={stgerFadeDownItem} />
        <MotionDesign variants={stgerFadeDownItem} />
        <MotionOther variants={stgerFadeDownItem} />
      </StyledMain>
    </>
  )
}

// Settings & Exports
export default Home
