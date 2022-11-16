// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { fontSize } from "@/modules/config/theme.config";


// Styled Components
const StyledHeading = styled.h2`
   margin: 0;
   font-size: ${fontSize["l"]};
   letter-spacing: 0.015em;
   ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};
`

const Heading2 = forwardRef(({ children, className, shadow }, ref) => (
   <StyledHeading
      ref={ref}
      className={className}
      shadow={shadow}
   >
      {children}
   </StyledHeading>
))

// Export settings
Heading2.displayName = "Heading"

export default Heading2