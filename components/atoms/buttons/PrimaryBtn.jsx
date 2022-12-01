// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Import Styling
import { DefaultBtn } from "./DefaultBtn"

// Styled Components
const StyledBtn = styled.button`
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
    color: ${({ theme }) => theme.primary.dark};
    background: ${({ theme }) => theme.primary.darker};
  }
`

// Components
const PrimaryBtn = forwardRef(
  ({ icon, text, className, ...otherProps }, ref) => (
    <StyledBtn ref={ref} className={className} {...otherProps}>
      {icon && icon}
      {text && text}
    </StyledBtn>
  )
)

// Setings & Exports
PrimaryBtn.displayName = "PrimaryBtn"

export default PrimaryBtn
