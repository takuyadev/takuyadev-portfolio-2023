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
   padding: 0 2em;
   @media (max-width: 1024px) {
      grid-template-columns: 1fr;
  }
`

// Component
const LargeGallery = forwardRef(({ children }, ref) => (
   <Container ref={ref}>
      {children}
   </Container>
))

// Settings & Exports
LargeGallery.displayName = "Gallery"

export default LargeGallery