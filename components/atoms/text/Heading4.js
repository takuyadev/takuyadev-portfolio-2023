// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { fontSize } from "@/modules/config/theme.config";

// Styled Components
const StyledHeading = styled.h4`
   margin: 0;
   font-size: ${fontSize["s"]};
   font-weight: normal;
   letter-spacing: 0.04em;
   line-height: 1.5em;
   ${({ shadow }) => shadow && "text-shadow: 4px 4px 0px rgba(17, 58, 93, 1)"};

`

const Heading4 = forwardRef(({ children, className, shadow }, ref) => (
   <StyledHeading
      ref={ref}
      className={className}
      shadow={shadow}
   >
      {children}
   </StyledHeading>
))

// Export settings
Heading4.displayName = "Heading4"

export default Heading4