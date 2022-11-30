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
const InputWithLabel = forwardRef(
  ({ label, className, ...otherProps }, ref) => (
    <Container ref={ref} className={className}>
      <Label label={label} />
      <Input {...otherProps} />
    </Container>
  )
)

// Settings & Exports
InputWithLabel.displayName = "InputWithLabel"

export default InputWithLabel
