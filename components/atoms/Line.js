// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Component
const StyledLine = styled.hr`
   margin: 0; 
   align-self: center;
   width: 100%;
   height: 4px;
   border-radius: 8px;
   background: ${props => props.theme.colors.primary["500"]};
   border: none;
`

// Component
const Line = forwardRef(({ className }, ref) => (
   <StyledLine
      className={className}
      ref={ref}
   />
))

// Settings & Exports
Line.displayName = "Line"

export default Line