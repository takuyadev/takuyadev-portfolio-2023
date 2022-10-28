// Packages
import styled from "styled-components";
import { forwardRef } from "react";

// Styled Components
const Container = styled.section`
   grid-column: span 4;
   width: 100%;
   height: fit-content;
   min-height: 400px;
   overflow-x: scroll;
   overflow-y: hidden;
`

const InnerCont = styled.div`
   display:inline-flex;
   align-items: center;
   gap: 1em;
`

// Component
const Carousel = forwardRef(({ children }, ref) => (
   <Container ref={ref}>
      <InnerCont>
         {children}
      </InnerCont>
   </Container>
))

// Settings & Exports
Carousel.displayName = "Carousel"

export default Carousel