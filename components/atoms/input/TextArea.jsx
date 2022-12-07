// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Component
const StyledInput = styled.textarea`
  padding: 0.5em;
  background: ${({ theme }) => theme.dark.dark}99;
  color: ${({ theme }) => theme.light.main};
  border: none;

  border-bottom: 3px solid ${({ theme }) => theme.primary.main};
  border-radius: 4px;
  height: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.light.main}99;
  }
`

// Components
const TextArea = forwardRef(({ className, ...otherProps }, ref) => (
  <StyledInput ref={ref} className={className} {...otherProps} />
))

// Settings & Exports
TextArea.displayName = "TextArea"

export default TextArea
