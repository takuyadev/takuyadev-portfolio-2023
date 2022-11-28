// Packages
import styled from "styled-components"
import axios from "axios"
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

// Styled Components
const StyledMain = styled(Main)`
  align-items: center;
`

// Framer Motion
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

function Design({ isClosed, setIsClosed, highlights, projects }) {
  return (
    <>
      <PageHeader
        title="Designs"
        subtitle="All completed UX/UI or other Adobe Creative Suite projects"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel data={highlights} variants={stgerFadeDownItem} />
        <MotionGallery data={projects} variants={stgerFadeDownItem} />
      </StyledMain>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/design`)

  return {
    props: {
      highlights: data.highlights,
      projects: data.projects,
    },
  }
}

export default Design
