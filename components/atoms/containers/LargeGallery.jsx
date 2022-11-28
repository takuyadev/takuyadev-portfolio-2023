// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: fit-content;
  gap: 1em;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

// Component
const LargeGallery = forwardRef(({ children, className }, ref) => (
  <Container ref={ref} className={className}>
    {children}
  </Container>
))

// Settings & Exports
LargeGallery.displayName = "Gallery"

export default LargeGallery
