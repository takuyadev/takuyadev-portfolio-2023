// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.section`
   display: grid;
   width: 100%;
   height: fit-content;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-column: span 4;
   padding: 0 2em;
   gap: 1em;
`

// Component
const Gallery = forwardRef(({ children }, ref) => (
   <Container ref={ref}>
      {children}
   </Container>
))

// Settings & Exports
Gallery.displayName = "Gallery"

export default Gallery