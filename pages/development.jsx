// Packages
import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import ProjectHighlights from "@/organisms/projects/ProjectHighlights"
import ProjectCards from "@/organisms/projects/ProjectCards"
import PageHeader from "@/organisms/general/PageHeader"
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

// Modules
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/config/animation/stgerFadeDown"
import { projectData, minorProjectData } from "@/modules/dummy/projects"

// Styled Components
const StyledMain = styled(Main)`
  align-items: center;
`

const ImageCont = styled(motion.div)`
  display: flex;
  justify-content: center;
`

function About() {
  return (
    <>
      <PageHeader
        title="Development"
        subtitle="Development projects, both for Front-end and Full Stack Development"
      />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel variants={stgerFadeDownItem} data={projectData} />
        <ImageCont variants={stgerFadeDownItem}>
          <Image
            width={150}
            height={10}
            src="/img/squiggly.png"
            alt="Vector of squiggly lines"
          />
        </ImageCont>
        <MotionGallery variants={stgerFadeDownItem} data={minorProjectData} />
      </StyledMain>
    </>
  )
}

export default About
