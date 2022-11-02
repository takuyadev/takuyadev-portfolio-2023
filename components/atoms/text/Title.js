// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledTitle = styled.h1`
   margin: 0;
   font-size: ${props => props.theme.fontSize && props.theme.fontSize["xl"]};
   letter-spacing: 0.02em;
  ${props => props.shadow && "text-shadow: 3px 3px 0px rgba(17, 58, 93, 1)"};

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