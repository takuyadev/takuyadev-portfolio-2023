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
import { staggerAnimation, staggerItem } from "@/config/animation/staggerFade"
import { projectData, minorProjectData } from "@/modules/dummy/projects"

// Styled Components
const ProjectCont = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`

function Designs() {
  return (
    <>
      <PageHeader
        title="Designs"
        subtitle="UX/UI or other Adobe Creative Suite projects that I've worked on"
      />
      <ProjectCont variants={staggerAnimation} initial="hidden" animate="show">
        <MotionCarousel variants={staggerItem} data={projectData} />
        <motion.div variants={staggerItem}>
          <Image
            width={150}
            height={10}
            src="/img/squiggly.png"
            alt="Vector of squiggly lines"
          />
        </motion.div>
        <MotionGallery variants={staggerItem} data={minorProjectData} />
      </ProjectCont>
    </>
  )
}

export default Designs
