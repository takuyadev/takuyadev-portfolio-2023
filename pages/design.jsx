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

function Design({ isClosed, setIsClosed, data }) {
  return (
    <>
      <PageHeader
        title="Designs"
        subtitle="All completed UX/UI or other Adobe Creative Suite projects"
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
    const { data } = await axios.get(`${process.env.WEBSITE_URL}/api/design`)
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

export default Design
