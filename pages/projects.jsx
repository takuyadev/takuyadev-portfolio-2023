// Packages
import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import ProjectCarousel from "@/organisms/projects/ProjectCarousel"
import ProjectGallery from "@/organisms/projects/ProjectGallery"
import PageHeader from "@/organisms/general/PageHeader"
const MotionCarousel = motion(ProjectCarousel)
const MotionGallery = motion(ProjectGallery)

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

function About() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="All finished projects hosted and ready for viewing."
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

export default About
