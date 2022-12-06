// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledLabel = styled.label`
  font-size: ${fontSize["s"]};
  font-weight: bold;
  color: ${({ theme }) => theme.light.main};
  letter-spacing: 0.015em;
`

// Components
const Label = forwardRef(({ label, className }, ref) => (
  <StyledLabel ref={ref} className={className}>
    {label}
  </StyledLabel>
))

// Settings & Exports
Label.displayName = "Label"

export default Label
