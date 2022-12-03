// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;

  & > * {
    display: inline-flex;
  }
`

// Component
const Inline = forwardRef(({ children, className }, ref) => (
  <Container ref={ref} className={className}>
    {children}
  </Container>
))

// Settings & Exports
Inline.displayName = "Inline"

export default Inline
