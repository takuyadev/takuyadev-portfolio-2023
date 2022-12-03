// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledParagraph = styled.p`
  margin: 0;
  font-size: ${fontSize["s"]};
  ${({ isBold }) => isBold && "font-weight: bold;"}
  line-height: 175%;
  letter-spacing: 0.015em;
  ${({ shadow }) => shadow && "text-shadow: 1px 1px 0px rgba(17, 58, 93, 1)"};
`

// Component
const Paragraph = forwardRef(({ isBold, shadow, children, className }, ref) => (
  <StyledParagraph
    ref={ref}
    isBold={isBold}
    className={className}
    shadow={shadow}
  >
    {children}
  </StyledParagraph>
))

// Export settings
Paragraph.displayName = "Paragraph"

export default Paragraph
