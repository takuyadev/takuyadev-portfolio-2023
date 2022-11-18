// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;

  & > * {
    display:inline-flex;
  }
`

// Component
const Inline = forwardRef(({ children }, ref) => (
  <Container ref={ref}>
    {children}
  </Container>
))

// Settings & Exports
Inline.displayName = "Inline"

export default Inline