// Packages
import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
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
const ProjectCont = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`

function About() {
  return (
    <>
      <PageHeader
        title="Development"
        subtitle="Development projects, both for Front-end and Full Stack Development"
      />
      <ProjectCont variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel variants={stgerFadeDownItem} data={projectData} />
        <motion.div variants={stgerFadeDownItem}>
          <Image
            width={150}
            height={10}
            src="/img/squiggly.png"
            alt="Vector of squiggly lines"
          />
        </motion.div>
        <MotionGallery variants={stgerFadeDownItem} data={minorProjectData} />
      </ProjectCont>
    </>
  )
}

export default About
