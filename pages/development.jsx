// Packages
import styled from "styled-components"
import axios from "axios"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import Heading2 from "@/atoms/text/Heading2"
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
import { minorProjectData } from "@/modules/dummy/projects"

// Styled Components
const StyledMain = styled(Main)``

const HiddenHeading = styled(Heading2)`
  display: none;
`

function Development({ isClosed, setIsClosed, highlights, projects }) {
  return (
    <>
      <HiddenHeading>Projects</HiddenHeading>
      <PageHeader
        title="Development"
        subtitle="All completed Web Development projects"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionCarousel data={highlights} variants={stgerFadeDownItem} />
        <MotionGallery variants={stgerFadeDownItem} data={minorProjectData} />
      </StyledMain>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/development`)

  return {
    props: {
      highlights: data.highlights,
      projects: data.projects,
    },
  }
}

export default Development
