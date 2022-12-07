// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Component
const StyledInput = styled.input`
  padding: 0.5em;
  background: ${({ theme }) => theme.dark.dark}99;
  border: none;
  color: ${({ theme }) => theme.light.main};
  border-bottom: 3px solid ${({ theme }) => theme.primary.main};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.light.main}99;
  }
`

// Components
const Input = forwardRef(({ className, ...otherProps }, ref) => (
  <StyledInput ref={ref} className={className} {...otherProps} />
))

// Settings & Exports
Input.displayName = "Input"

export default Input
