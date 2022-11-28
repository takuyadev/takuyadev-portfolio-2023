// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Figure = styled.figure`
  position: relative;
  margin: 0;
  background: ${(props) => (props.img ? `url(${props.img})` : "grey")};
  border-radius: 8px;
  background-position: center;
  background-size: cover;
`

// Component
const ImageCard = forwardRef(({ children, className, img }, ref) => (
  <Figure ref={ref} className={className} img={img}>
    {children}
  </Figure>
))

// Settings & Exports
ImageCard.displayName = "ImageCard"

export default ImageCard
