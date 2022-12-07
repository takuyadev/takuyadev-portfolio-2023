// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Components
import Paragraph from "@/atoms/text/Paragraph"

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background: ${({ theme }) => theme.dark.darker};
  color: ${({ theme }) => theme.light.main}99;
  text-align: center;
  & > p {
    color: ${({ theme }) => theme.light.main}99;
    white-space: nowrap;
    width: fit-content;
  }
`

// Component
const IconContainer = forwardRef(({ children, caption, className }, ref) => (
  <Container ref={ref} className={className}>
    {children}
    <Paragraph as="caption">{caption}</Paragraph>
  </Container>
))

// Settings & Exports
IconContainer.displayName = "IconContainer"

export default IconContainer
