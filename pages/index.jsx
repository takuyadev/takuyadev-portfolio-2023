// Packages
import styled from "styled-components"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

// Animations
import { staggerAnimation, staggerItem } from "@/config/animation/staggerFade"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Hero from "@/organisms/homepage/Hero"

const MotionButton = motion(PrimaryBtn)

const TextCont = styled(motion.div)`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  grid-area: text;
  grid-column: span 3;
  justify-content: center;
  gap: 16px;
  margin-left: 32px;
  z-index: 25;
`

const Heading = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  letter-spacing: -0.02em;
  text-shadow: 4px 4px 0px rgba(17, 58, 93, 1);
`

const Paragraph = styled.p`
  max-width: 425px;
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["s"]};
  line-height: 175%;
  letter-spacing: 0.015em;
  color: ${(props) => props.theme.colors.light}D9;
  text-shadow: 2px 2px 0px rgba(17, 58, 93, 1);
`

export default function Home() {
  return (
    <>
      <Hero />
      <TextCont variants={staggerAnimation} initial="hidden" animate="show">
        <motion.div variants={staggerItem}>
          <Heading>
            Hi, I’m Takuya 👋 <br /> Front-end Developer <br /> & UX/UI Designer
          </Heading>
        </motion.div>
        <motion.div variants={staggerItem}>
          <Paragraph>
            I’m a React.js Front-end Developer with expertise in UX/UI
            Designing, as well as Node.js Full Stack Development. Currently
            looking for opportunites in development!
          </Paragraph>
        </motion.div>
        <MotionButton
          variants={staggerItem}
          icon={<UserCircleIcon />}
          text="About Me"
        />
      </TextCont>
    </>
  )
}
