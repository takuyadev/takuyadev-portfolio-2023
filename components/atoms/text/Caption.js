// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Components
const StyledCaption = styled.figcaption`
   display:flex;
   flex-direction: column;
   height: 100px;
   gap: 0.5em;
   transform: translateY(-18px);
`

// Component
const Caption = forwardRef(({ children }, ref) => (
   <StyledCaption>
      {children}
   </StyledCaption>
))

// Settings & Exports
Caption.displayName = "Caption"

export default Caption