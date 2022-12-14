// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledHeading = styled.h3`
  margin: 0;
  font-size: ${fontSize["m"]};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.light.main};
  ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Subtitle = forwardRef(({ shadow, children, className }, ref) => (
  <StyledHeading ref={ref} className={className} shadow={shadow}>
    {children}
  </StyledHeading>
))

// Export settings
Subtitle.displayName = "Subtitle"

export default Subtitle
