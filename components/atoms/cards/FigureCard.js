// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Components
const Figure = styled.figure`
   margin: 0;
   border-radius: 8px;
`

// Component
const FigureCard = forwardRef(({ children, className }, ref) => (
   <Figure className={className} ref={ref}>
      {children}
   </Figure>
))

// Settings & Exports
FigureCard.displayName = "FigureCard"

export default FigureCard
