// Packages
import styled from "styled-components"
import { useContext } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import Heading2 from "@/atoms/text/Heading2"
import HeadingUlr from "@/molecules/text/HeadingUlr"
import ProjectHighlights from "@/organisms/projects/ProjectHighlights"
import ProjectCards from "@/organisms/projects/ProjectGallery"
import PageHeader from "@/organisms/general/PageHeader"
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

// Modules
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"
import { projectData, minorProjectData } from "@/modules/dummy/projects"

// Menu Context
import { IsClosedContext } from "@/modules/context/IsClosedContext"

// Styled Components
const StyledMain = styled(Main)``

const ImageCont = styled(motion.div)`
  display: flex;
`

const HiddenHeading = styled(Heading2)`
  display: none;
`

function About({ isClosed, setIsClosed }) {
  return (
    <>
      <HiddenHeading>Projects</HiddenHeading>
      <PageHeader
        title="Development"
        subtitle="Webdev projects"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel variants={stgerFadeDownItem} data={projectData} />
        <MotionGallery variants={stgerFadeDownItem} data={minorProjectData} />
      </StyledMain>
    </>
  )
}

export default About
