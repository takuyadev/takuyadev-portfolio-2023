// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  background: ${({ theme }) => theme.dark.dark};
  border-left: 5px solid ${({ theme }) => theme.primary.main};
`

// Component
const SectionBorder = forwardRef(({ children, className }, ref) => (
  <Section ref={ref} className={className}>
    {children}
  </Section>
))

// Settings & Exports
SectionBorder.displayName = "SectionBorder"

export default SectionBorder
