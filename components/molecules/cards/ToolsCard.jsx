// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Components
import SectionBorder from "@/atoms/containers/SectionBorder"

// Styled Components
const StyledCard = styled(SectionBorder)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  flex-direction: row;
  gap: 3em;
  padding: 2em;
`

const ToolsCard = forwardRef(({ children, className }, ref) => (
  <StyledCard ref={ref} className={className}>
    {children}
  </StyledCard>
))

// Settings & Exports
ToolsCard.displayName = "ToolsCard"

export default ToolsCard
