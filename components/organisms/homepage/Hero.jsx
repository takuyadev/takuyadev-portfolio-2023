// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

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

const Container = styled(motion.div)`
  position: fixed;
  width: 80vw;
  height: 100vh;
  @media (max-width: 1024px) {
    width: 150vw;
    opacity: 0.75;
  }
`

const Hero = forwardRef(({ className }, ref) => (
  <Container
    ref={ref}
    className={className}
    variants={slideLeft}
    initial="hidden"
    animate="show"
  >
    <Image
      layout="fill"
      src="/img/headshot.png"
      alt="Hero, ft. Takuya Toyokawa"
      objectFit="contain"
      quality={25}
    />
  </Container>
))

// Settings & Exports
Hero.displayName = "Hero"

export default Hero
