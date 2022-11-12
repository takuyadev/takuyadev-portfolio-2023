// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Styled Components
const StyledMain = styled(motion.main)`
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;  
  height: 85%;
  overflow-y: auto;
`

// Component
const Main = forwardRef(({ children, ...otherProps }, ref) => (
   <StyledMain {...otherProps} ref={ref}>
      {children}
   </StyledMain>
))

// Settings & Exports
Main.displayName = "Main"

export default Main