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
const TextAreaWithLabel = forwardRef(({ label, className, ...otherProps }, ref) => (
   <Container ref={ref} className={className}>
      <Label label={label} />
      <StyledTextArea {...otherProps} />
   </Container>
))

// Settings & Exports
TextAreaWithLabel.displayName = "TextAreaWithLabel"

export default TextAreaWithLabel