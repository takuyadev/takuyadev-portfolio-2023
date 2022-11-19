// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Component
import Label from "@/atoms/text/Label"
import TextArea from "@/atoms/input/TextArea"

// Styled Component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: 100%;
`

const StyledTextArea = styled(TextArea)`
   height: 100%;
   resize: none;
`

// Components
const TextAreaWithLabel = forwardRef(({ required, pattern, label, value, placeholder, name, ...otherProps }, ref) => (
   <Container ref={ref}>
      <Label label={label} />
      <StyledTextArea required={required} pattern={pattern} value={value} name={name} placeholder={placeholder} {...otherProps} />
   </Container>
))

// Settings & Exports
TextAreaWithLabel.displayName = "Input"

export default TextAreaWithLabel