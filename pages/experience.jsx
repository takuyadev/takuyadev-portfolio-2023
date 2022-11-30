// Packages
import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import CertificateGallery from "@/organisms/experience/CertificateGallery"
import ArticleGallery from "@/organisms/experience/ExperienceGallery"

// Animation
import {
  stgerFadeRightAnim,
  stgerFadeRightItem,
} from "@/modules/animation/stgerFadeRight"
import Heading4 from "@/atoms/text/Heading4"

// Modules
import { propsErrorHandler } from "@/utils/propsErrorHandler"

// Motion Components
const MotionGallery = motion(ArticleGallery)
const MotionCertGallery = motion(CertificateGallery)

// Styled Components
const HiddenHeading4 = styled(Heading4)`
  display: none;
`

function Experience({ data, isClosed, setIsClosed }) {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta property="og:title" content="Experience" key="title" />
        <meta
          name="description"
          content="Takuya Toyokawa's experiences and achievements in both educational and work environments"
        />
      </Head>
      <PageHeader
        title="Experience"
        subtitle="My experience and achievements in both educational and work environments"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <Main variants={stgerFadeRightAnim} initial="hidden" animate="show">
        {data && (
          <>
            <MotionGallery
              variants={stgerFadeRightItem}
              title="Education"
              icon={<AcademicCapIcon />}
              data={data.experience}
            />
            <HiddenHeading4>Certificates</HiddenHeading4>
            <MotionCertGallery
              variants={stgerFadeRightItem}
              data={data.certificate}
            />
            <MotionGallery
              variants={stgerFadeRightItem}
              title="Work"
              data={data.work}
              icon={<BriefcaseIcon />}
            />
          </>
        )}
      </Main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  return await propsErrorHandler(`${process.env.WEBSITE_URL}/api/experience`)
}

export default Experience
