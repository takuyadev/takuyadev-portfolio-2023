// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledTitle = styled.h1`
   margin: 0;
   font-size: ${fontSize["xl"]};
   letter-spacing: 0.02em;
  ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};

`

// Component
const Title = forwardRef(({ children, shadow }, ref) => (
   <StyledTitle shadow={shadow} ref={ref}>
      {children}
   </StyledTitle>
))

// Exports & Settings
Title.displayName = "Title"

export default Title