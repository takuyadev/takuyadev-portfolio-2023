// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  border-radius: 8px;
  min-height: 39px;
`

// Component
const Form = forwardRef(({ children, className, onSubmit }, ref) => (
  <StyledForm ref={ref} className={className} onSubmit={onSubmit}>
    {children}
  </StyledForm>
))

// Settings & Exports
Form.displayName = "Form"

export default Form
