// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Components
const StyledHeading = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["l"]};
  letter-spacing: -0.02em;
  ${props => props.shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Heading = forwardRef(({ children, className, shadow }, ref) => (
   <StyledHeading
      ref={ref}
      className={className}
      shadow={shadow}
   >
      {children}
   </StyledHeading>
))

// Export settings
Heading.displayName = "Heading"

export default Heading