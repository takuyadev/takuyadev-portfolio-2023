// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

// Components
import NoSelectImage from "@/atoms/other/NoSelectImage"

// Styled Components
const slideLeft = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "10%",
    transition: { duration: 1.5, ease: [0.215, 0.61, 0.355, 1.0] },
  },
}

const Container = styled(NoSelectImage)`
  position: fixed;
  width: 80vw;
  height: 100vh;
  @media (max-width: 1024px) {
    width: 150vw;
    opacity: 0.75;
  }
`

// Motion Components
const MotionContainer = motion(Container)

const Hero = forwardRef(({ className }, ref) => (
  <MotionContainer
    ref={ref}
    className={className}
    variants={slideLeft}
    initial="hidden"
    animate="show"
  >
    <Image
      layout="fill"
      src="/img/home/vector.webp"
      alt="Hero, ft. Takuya Toyokawa"
      objectFit="contain"
    />
  </MotionContainer>
))

// Settings & Exports
Hero.displayName = "Hero"

export default Hero
