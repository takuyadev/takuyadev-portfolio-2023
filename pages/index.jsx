// Packages
import styled from "styled-components"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Animations
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Components
import Main from "@/atoms/containers/Main"
import Heading from "@/atoms/text/Heading1"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Hero from "@/organisms/homepage/Hero"

// Styled Components
const StyledMain = styled(Main)`
  grid-area: text;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 475px;
  height: 100%;
  margin-left: 2em;
  gap: 1em;
`

const Swirl = styled.div`
  position: fixed;
  z-index: 0;
  left: 12.5%;
`

const Anchor = styled.a`
  text-decoration: none;
`

// Convert to motion
const MotionParagraph = motion(Paragraph)
const MotionHeading = motion(Heading)
const MotionButton = motion(PrimaryBtn)

// Component
function Home() {
  return (
    <>
      <Hero />
      <Swirl>
        <Image
          width={630}
          height={490}
          src="/img/swirl.png"
          alt="Vector of swirl"
        />
      </Swirl>
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionHeading shadow={true} variants={stgerFadeDownItem}>
          Hi, I’m Takuya 👋 <br /> Front-end Developer <br /> & UX/UI Designer
        </MotionHeading>
        <MotionParagraph shadow={true} variants={stgerFadeDownItem}>
          I’m a React.js Front-end Developer with expertise in UX/UI Designing,
          as well as Node.js Full Stack Development. Currently looking for
          opportunites in development!
        </MotionParagraph>
        <Link href="/about">
          <MotionButton
            as="a"
            tabIndex="0"
            variants={stgerFadeDownItem}
            icon={<UserCircleIcon />}
            text="About Me"
          />
        </Link>
      </StyledMain>
    </>
  )
}

// Settings & Exports
export default Home
