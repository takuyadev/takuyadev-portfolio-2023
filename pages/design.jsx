// Packages
import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
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
const StyledMain = styled(Main)`
  align-items: center;
`

// Framer Motion
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

function Design({ isClosed, setIsClosed, data }) {
  return (
    <>
      <Head>
        <title>Design</title>
        <meta property="og:title" content="Design" key="title" />
        <meta
          name="description"
          content="All skills and completed projects related to UX/UI design and Graphic Designing"
        />
      </Head>
      <PageHeader
        title="Designs"
        subtitle="All completed UX/UI or other Adobe Creative Suite projects"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
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
  return await propsErrorHandler(`${process.env.WEBSITE_URL}/api/design`)
}

export default Design
