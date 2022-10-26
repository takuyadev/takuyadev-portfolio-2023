// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledParagraph = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["s"]};
  line-height: 175%;
  letter-spacing: 0.015em;
  ${props => props.shadow && "text-shadow: 2px 2px 0px rgba(17, 58, 93, 1)"};
`

// Component
const Paragraph = forwardRef(({ children, shadow }, ref) => (
   <StyledParagraph ref={ref} shadow={shadow}>
      {children}
   </StyledParagraph>
))

// Export settings
Paragraph.displayName = "Paragraph"

export default Paragraph