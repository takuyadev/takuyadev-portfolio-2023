// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Components
const StyledHeading = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  letter-spacing: -0.02em;
  ${props => props.shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Heading = forwardRef(({ children, size, shadow }, ref) => (
   <StyledHeading ref={ref} size={size} shadow={shadow}>
      {children}
   </StyledHeading>
))

// Export settings
Heading.displayName = "Heading"

Heading.defaultProps = {
   size: "s"
}

export default Heading