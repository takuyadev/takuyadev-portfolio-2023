// Packages
import styled from "styled-components"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

// Animations
import { staggerAnimation, staggerItem } from "@/config/animation/staggerFade"

// Components
import Heading from "@/atoms/text/Heading"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Hero from "@/organisms/homepage/Hero"

// Styled Components
const TextCont = styled(motion.section)`
  grid-area: text;
  grid-column: span 3;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 475px;
  height: 100%;
  margin-left: 2em;
  gap: 1em;
  z-index: 25;
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
      <TextCont variants={staggerAnimation} initial="hidden" animate="show">
        <MotionHeading shadow={true} variants={staggerItem}>
          Hi, I’m Takuya 👋 <br /> Front-end Developer <br /> & UX/UI Designer
        </MotionHeading>
        <MotionParagraph shadow={true} variants={staggerItem}>
          I’m a React.js Front-end Developer with expertise in UX/UI Designing,
          as well as Node.js Full Stack Development. Currently looking for
          opportunites in development!
        </MotionParagraph>
        <MotionButton
          variants={staggerItem}
          icon={<UserCircleIcon />}
          text="About Me"
        />
      </TextCont>
    </>
  )
}

// Settings & Exports
export default Home
