// Packages
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
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

// Styled Components
const StyledMain = styled(Main)`
  align-items: center;
`

function Designs({ isClosed, setIsClosed }) {
  return (
    <>
      <PageHeader
        title="Designs"
        subtitle="All completed UX/UI or other Adobe Creative Suite projects"
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

export default Designs
