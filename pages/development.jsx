// Packages
import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import Heading2 from "@/atoms/text/Heading2"
import HeadingUlr from "@/molecules/text/HeadingUlr"
import ProjectHighlights from "@/organisms/projects/ProjectHighlights"
import ProjectCards from "@/organisms/projects/ProjectCards"
import PageHeader from "@/organisms/general/PageHeader"
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

// Modules
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"
import { projectData, minorProjectData } from "@/modules/dummy/projects"

// Styled Components
const StyledMain = styled(Main)``

const ImageCont = styled(motion.div)`
  display: flex;
`

const HiddenHeading = styled(Heading2)`
  display: none;
`

function About() {
  return (
    <>
      <HiddenHeading>Projects</HiddenHeading>
      <PageHeader
        title="Development"
        subtitle="Development projects, both for Front-end and Full Stack Development"
      />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel variants={stgerFadeDownItem} data={projectData} />
        <MotionGallery variants={stgerFadeDownItem} data={minorProjectData} />
        <HeadingUlr>Skills</HeadingUlr>
      </StyledMain>
    </>
  )
}

export default About
