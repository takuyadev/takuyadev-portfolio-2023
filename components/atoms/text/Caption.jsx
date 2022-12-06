// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  transform: translateY(-18px);
  color: ${({ theme }) => theme.light.main};
`

// Component
const Caption = forwardRef(({ children, className }, ref) => (
  <StyledCaption ref={ref} className={className}>
    {children}
  </StyledCaption>
))

// Settings & Exports
Caption.displayName = "Caption"

export default Caption
