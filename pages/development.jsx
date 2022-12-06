// Packages
import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import Heading2 from "@/atoms/text/Heading2"
import ProjectHighlights from "@/organisms/projects/ProjectHighlights"
import ProjectCards from "@/organisms/projects/ProjectGallery"
import PageHeader from "@/organisms/general/PageHeader"

// Modules
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"
import { propsErrorHandler } from "@/utils/propsErrorHandler"

// Styled Components
const StyledMain = styled(Main)``

const HiddenHeading = styled(Heading2)`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
`

// Framer Motion
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

function Development({ isClosed, setIsClosed, data }) {
  return (
    <>
      <Head>
        <title>Development</title>
        <meta property="og:title" content="Development" key="title" />
        <meta
          name="description"
          content="All skills and completed web development projects relating to Frontend and Fullstack Development"
        />
        <link rel="canonical" href="https://takuyaktoyokawa.ca/development" />
      </Head>
      <PageHeader
        title="Development"
        subtitle="All completed Web Development projects"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <HiddenHeading>Projects</HiddenHeading>
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        {data && (
          <>
            <MotionCarousel
              data={data.highlights}
              variants={stgerFadeDownItem}
            />
            <MotionGallery data={data.projects} variants={stgerFadeDownItem} />
          </>
        )}
      </StyledMain>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  return await propsErrorHandler(`${process.env.WEBSITE_URL}/api/development`)
}

export default Development
