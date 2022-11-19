// Packages
import axios from "axios"
import styled from "styled-components"
import { motion } from "framer-motion"
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import ArticleCards from "@/organisms/experience/ArticleGallery"
import CertificateGallery from "@/organisms/experience/CertificateGallery"

// Animation
import {
  stgerFadeRightAnim,
  stgerFadeRightItem,
} from "@/modules/animation/stgerFadeRight"
import Heading4 from "@/atoms/text/Heading4"

// Motion Components
const MotionGallery = motion(ArticleCards)
const MotionCertGallery = motion(CertificateGallery)

const HiddenHeading4 = styled(Heading4)`
  display: none;
`

function Experience({ experience, work, certificate }) {
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
        <HiddenHeading4>Certificates</HiddenHeading4>
        <MotionCertGallery variants={stgerFadeRightItem} data={certificate} />
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
      certificate: data.certificate,
    },
  }
}

export default Experience
