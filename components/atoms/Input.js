// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const StyledInput = styled.input`
  padding: 0.5em;
  background: #0c284099;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary["500"]};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme.colors.light}99;
  }
`

const Label = styled.label`
   letter-spacing: 0.015em;
  font-weight: bold;
`

// Components
const Input = forwardRef(({ type, label, value, placeholder, name }, ref) => (
   <Container ref={ref}>
      <Label>{label}</Label>
      <StyledInput type={type} value={value} name={name} placeholder={placeholder} />
   </Container>
))

// Settings & Exports
Input.displayName = "Input"

export default Input