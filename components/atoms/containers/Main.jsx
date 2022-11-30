// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styled Components
const StyledMain = styled(motion.main)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  height: 88%;
  overflow: auto;
`

// Component
const Main = forwardRef(({ children, className, ...otherProps }, ref) => (
  <StyledMain ref={ref} className={className} {...otherProps}>
    {children}
  </StyledMain>
))

// Settings & Exports
Main.displayName = "Main"

export default Main
