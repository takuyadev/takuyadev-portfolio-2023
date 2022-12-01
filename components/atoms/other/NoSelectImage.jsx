// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  & img {
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`

// Component
const NoSelectImage = forwardRef(({ children, className }, ref) => (
  <Container ref={ref} className={className}>
    {children}
  </Container>
))

// Settings & Exports
NoSelectImage.displayName = "NoSelectImage"

export default NoSelectImage
