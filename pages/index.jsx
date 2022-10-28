// Packages
import styled from "styled-components"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Animations
import { staggerAnimation, staggerItem } from "@/config/animation/staggerFade"

// Components
import Heading from "@/atoms/text/Heading"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Hero from "@/organisms/homepage/Hero"

// Styled Components
const TextCont = styled(motion.article)`
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
      <TextCont variants={staggerAnimation} initial="hidden" animate="show">
        <MotionHeading shadow={true} variants={staggerItem}>
          Hi, I’m Takuya 👋 <br /> Front-end Developer <br /> & UX/UI Designer
        </MotionHeading>
        <MotionParagraph shadow={true} variants={staggerItem}>
          I’m a React.js Front-end Developer with expertise in UX/UI Designing,
          as well as Node.js Full Stack Development. Currently looking for
          opportunites in development!
        </MotionParagraph>
        <Link href="/about">
          <Anchor>
            <MotionButton
              variants={staggerItem}
              icon={<UserCircleIcon />}
              text="About Me"
            />
          </Anchor>
        </Link>
      </TextCont>
    </>
  )
}

// Settings & Exports
export default Home
