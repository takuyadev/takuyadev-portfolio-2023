// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import { DefaultBtn } from "./DefaultBtn";

// Styled Components
const StyledBtn = styled.input`
    ${DefaultBtn}
    background: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.dark.main};
    &:focus{
        color: ${({ theme }) => theme.light.main};
        background: ${({ theme }) => theme.primary.dark};
    }

    &:hover{
        color: ${({ theme }) => theme.light.main};
        background: ${({ theme }) => theme.primary.darker};
    }
`

// Components
const SubmitBtn = forwardRef(({ ...otherProps }, ref) => (
   <StyledBtn type="submit" ref={ref}{...otherProps} />
))

// Setings & Exports
SubmitBtn.displayName = "SubmitBtn"

export default SubmitBtn