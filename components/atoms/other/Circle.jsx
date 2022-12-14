// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ color }) => (color ? color : "#333")};
`

// Component
const Circle = forwardRef(({ className, color }, ref) => (
  <Container ref={ref} className={className} color={color} />
))

// Settings & Exports
Circle.displayName = "Circle"

export default Circle
