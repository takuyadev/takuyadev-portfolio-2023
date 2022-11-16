// Packages
import axios from "axios"
import { motion } from "framer-motion"
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import ArticleCards from "@/organisms/experience/ArticleGallery"

// Animation
import {
  stgerFadeRightAnim,
  stgerFadeRightItem,
} from "@/modules/config/animation/stgerFadeRight"

// Motion Components
const MotionGallery = motion(ArticleCards)

function Experience({ experience, work }) {
  return (
    <>
      <PageHeader
        title="Experience"
        subtitle="My experience and achievements in both educational and work environments"
      />
      <Main variants={stgerFadeRightAnim} initial="hidden" animate="show">
        <MotionGallery
          variants={stgerFadeRightItem}
          title="Education"
          icon={<AcademicCapIcon />}
          data={experience}
        />
        <MotionGallery
          variants={stgerFadeRightItem}
          title="Work"
          data={work}
          icon={<BriefcaseIcon />}
        />
      </Main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/experience`)

  return {
    props: {
      experience: data.experience,
      work: data.work,
    },
  }
}

export default Experience
