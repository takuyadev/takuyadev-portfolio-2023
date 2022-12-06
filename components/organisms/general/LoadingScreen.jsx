// Packages
import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import styled from "styled-components"

// Animation
import { fade } from "@/modules/animation/fade"
import { wordAnimation, letterAnimation } from "@/modules/animation/stgerWord"

// Components
import Paragraph from "@/atoms/text/Paragraph"

// Styled Components
const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  background: ${({ theme }) => theme.dark.main};
  height: 100vh;
  width: 100vw;
  z-index: 1000;
`

const Circle = styled.div`
  background: ${({ theme }) => theme.primary.main};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`

const TextCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const StyledParagraph = styled(Paragraph)`
  display: flex;
  font-weight: bold;
  letter-spacing: 0.5em;
  transform: translateX(5px);
  color: ${({ theme }) => theme.light.main};
`

const MotionParagraph = motion(StyledParagraph)

// Components
const LoadingScreen = forwardRef(({ className, ...otherProps }, ref) => {
  const title = "takuyadev"
  return (
    <Container
      ref={ref}
      className={className}
      variants={fade}
      initial="initial"
      animate="animate"
      exit="exit"
      {...otherProps}
    >
      <Image
        priority
        layout="fixed"
        width={80}
        height={80}
        src="/img/other/logo.svg"
        alt="Logo of Takuya Toyokawa"
      />
      <TextCont>
        <Circle />
        <MotionParagraph
          as="div"
          variants={wordAnimation}
          initial={"initial"}
          animate={"animate"}
        >
          {[...title].map((letter, i) => (
            <motion.div key={i} variants={letterAnimation}>
              {letter}
            </motion.div>
          ))}
        </MotionParagraph>
        <Circle />
      </TextCont>
    </Container>
  )
})

// Settings & Exports
LoadingScreen.displayName = "Loading"

export default LoadingScreen
