// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Styled Components
const StyledLabel = styled.label`
   font-size: ${fontSize["s"]};
   font-weight: bold;   
   letter-spacing: 0.015em;
`

// Components
const Label = forwardRef(({ label }, ref) => (
   <StyledLabel ref={ref}>
      {label}
   </StyledLabel>
))

// Settings & Exports
Label.displayName = "Label"

export default Label