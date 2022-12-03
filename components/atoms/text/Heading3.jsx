// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledHeading = styled.h3`
  margin: 0;
  font-size: ${fontSize["m"]};
  letter-spacing: 0.03em;
  line-height: 1.4em;
  ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Heading3 = forwardRef(({ children, className, shadow }, ref) => (
  <StyledHeading ref={ref} className={className} shadow={shadow}>
    {children}
  </StyledHeading>
))

// Export settings
Heading3.displayName = "Heading3"

export default Heading3
