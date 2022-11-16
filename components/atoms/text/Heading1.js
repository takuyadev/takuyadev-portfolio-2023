// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { fontSize } from "@/modules/config/theme.config";

// Styled Components
const StyledHeading = styled.h1`
   margin: 0;
   font-size: ${fontSize["2xl"]};
   letter-spacing: -0.02em;
   ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Heading1 = forwardRef(({ children, shadow }, ref) => (
   <StyledHeading ref={ref} shadow={shadow}>
      {children}
   </StyledHeading>
))

// Export settings
Heading1.displayName = "Heading"

export default Heading1