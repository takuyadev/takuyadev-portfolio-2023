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
const TextArea = forwardRef(({ required, value, placeholder, name, ...otherProps }, ref) => (
  <StyledInput as="textarea" required={required} ref={ref} value={value} name={name} placeholder={placeholder} {...otherProps} />
))

// Settings & Exports
TextArea.displayName = "TextArea"

export default TextArea