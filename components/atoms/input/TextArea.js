// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Component
const StyledInput = styled.textarea`
  padding: 0.5em;
  background: #0c284099;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.primary.main};
  border-radius: 4px;
  height: 100%;
  resize:none;
  &::placeholder {
    color: ${({ theme }) => theme.light.main}99;
  }
`

// Components
const TextArea = forwardRef(({ value, placeholder, name }, ref) => (
  <StyledInput as="textarea" ref={ref} value={value} name={name} placeholder={placeholder} />
))

// Settings & Exports
TextArea.displayName = "TextArea"

export default TextArea