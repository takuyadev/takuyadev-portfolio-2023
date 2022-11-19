// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Figure = styled.figure`
   position: relative;
   margin: 0;
   width: ${props => props.width ? props.width : "auto"};
   height: ${props => props.height ? props.height : "200px"};
   background: ${props => props.img ? `url(${props.img})` : "grey"};
   border-radius: 8px;
   background-position: center;
   background-size: cover;
`

// Component
const ImageCard = forwardRef(({ children, className, img, width, height }, ref) => (
   <Figure
      ref={ref}
      className={className}
      img={img}
      width={width}
      height={height}
   >
      {children}
   </Figure>
))

// Settings & Exports
ImageCard.displayName = "ImageCard"

export default ImageCard