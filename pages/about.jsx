// Packages
import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

// Components
import PageHeader from "@/organisms/general/PageHeader"
import Main from "@/atoms/containers/Main"
import HeadingUlr from "@/molecules/text/HeadingUlr"
import Paragraph from "@/atoms/text/Paragraph"
import SocialButtons from "@/molecules/navigation/SocialBtns"

// Animations
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Styled Components
const Section = styled(motion.section)`
  display: grid;
  position: relative;
  gap: 4em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1366px) {
    grid-template-columns: 1fr;
  }
`

const Article = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 1;
`

const ImageContainer = styled(motion.div)`
  object-fit: contain;
  @media (max-width: 1366px) {
    opacity: 0.25;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 500px;
    width: 400px;
    z-index: 0;
  }
`

function About({ isClosed, setIsClosed }) {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Get to know more about me and my personal life!"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <Main>
        <Section variants={stgerFadeDownAnim} initial="hidden" animate="show">
          <Article variants={stgerFadeDownItem}>
            <HeadingUlr>Pleased to meet you!</HeadingUlr>
            <Paragraph shadow={true}>
              My name is Takuya Toyokawa, and {"I'm"} a BCIT, Digital Design &
              Development graduate educated in Frontend / Fullstack development
              with experience in UX/UI designing. My love for Web Development
              started back in High School, where we were to develop websites
              using tools such as Adobe Fireworks, Adobe Photoshop, and Adobe
              Muse. During my time at BCIT, I learned modern Web Development
              technologies with React and Wordpress and grew my love for
              creating and designing websites. Currently {"I'm"} continuing to
              learn more web frameworks, and systems to maintain a clean
              documentation and code environment!
            </Paragraph>
            <Paragraph shadow={true}>
              Outside of web development, I always loved learning new hobbies or
              skills during my own time. Some hobbies and skills {"I've"}{" "}
              acquired over the years go from Digital Art (Photoshop,
              Illustrator), Video Production (Premiere Pro, Adobe After
              Effects), Drawing, 3D Modelling to Piano. Currently {"I'm"}{" "}
              interested in learning some Korean in my offtime.
            </Paragraph>
            <Paragraph shadow={true}>
              What {"I've"} realized with experiences in multiple creative
              mediums, I realized that websites can be more than an
              informational brochure. Websites can provide meaningful
              experiences and possible solutions to both users and even the
              developers, and {"I've"} found joy in this problem-solving in how
              we can both develop a unique experience to the user while
              maintaining the accessibility so that our users find it
              comfortable to navigate. I hope to be part of your projects with
              passionates alike!
            </Paragraph>
            <SocialButtons></SocialButtons>
          </Article>
          <ImageContainer>
            <Image
              width={480}
              height={600}
              quality={50}
              layout="responsive"
              src="/img/about.png"
              alt="Takuya Toyokawa's casual selfie"
            ></Image>
          </ImageContainer>
        </Section>
      </Main>
    </>
  )
}

export default About
