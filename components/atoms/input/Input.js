// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Component
const StyledInput = styled.input`
  padding: 0.5em;
  background: #0c284099;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.primary.main};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.light.main}99;
  }
`

// Components
const Input = forwardRef(({ type, value, placeholder, name }, ref) => (
  <StyledInput ref={ref} type={type} value={value} name={name} placeholder={placeholder} />
))

// Settings & Exports
Input.displayName = "Input"

export default Input