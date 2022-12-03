// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: fit-content;
  width: 100%;
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
