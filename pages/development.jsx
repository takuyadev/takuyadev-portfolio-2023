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

// Modules
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Styled Components
const StyledMain = styled(Main)``

const HiddenHeading = styled(Heading2)`
  display: none;
`

// Framer Motion
const MotionCarousel = motion(ProjectHighlights)
const MotionGallery = motion(ProjectCards)

function Development({ isClosed, setIsClosed, data }) {
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
  try {
    const { data } = await axios.get(
      `${process.env.WEBSITE_URL}/api/development`
    )
    return {
      props: {
        data: data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: null,
      },
    }
  }
}

export default Development
