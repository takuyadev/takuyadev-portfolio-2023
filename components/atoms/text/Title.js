// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledTitle = styled.h1`
   margin: 0;
   font-size: ${props => props.theme.fontSize && props.theme.fontSize["xl"]};
   letter-spacing: 0.02em;
`

// Component
const Title = forwardRef(({ children }, ref) => (
   <StyledTitle ref={ref}>
      {children}
   </StyledTitle>
))

// Exports & Settings
Title.displayName = "Title"

export default Title