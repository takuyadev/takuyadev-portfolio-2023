// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Component
import Label from "@/atoms/text/Label"
import Input from "@/atoms/input/Input"

// Styled Component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

// Components
const InputWithLabel = forwardRef(({ type, label, value, placeholder, name }, ref) => (
   <Container ref={ref}>
      <Label label={label} />
      <Input type={type} value={value} name={name} placeholder={placeholder} />
   </Container>
))

// Settings & Exports
InputWithLabel.displayName = "Input"

export default InputWithLabel