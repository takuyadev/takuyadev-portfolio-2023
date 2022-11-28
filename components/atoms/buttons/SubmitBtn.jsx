// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Import Styling
import { DefaultBtn } from "./DefaultBtn"

// Styled Components
const StyledBtn = styled.input`
  ${DefaultBtn}
  background: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.dark.main};

  &:focus {
    color: ${({ theme }) => theme.light.main};
    background: ${({ theme }) => theme.primary.dark};
  }

  &:hover {
    color: ${({ theme }) => theme.light.main};
    background: ${({ theme }) => theme.primary.darker};
  }

  &:disabled {
    color: ${({ theme }) => theme.primary.main};
    background: ${({ theme }) => theme.primary.dark};
  }
`
// Components
const SubmitBtn = forwardRef(({ value, className, ...otherProps }, ref) => (
  <StyledBtn ref={ref} type="submit" value={value} {...otherProps} />
))

// Setings & Exports
SubmitBtn.displayName = "SubmitBtn"

export default SubmitBtn
