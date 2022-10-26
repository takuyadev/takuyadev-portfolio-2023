// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Figure = styled.figure`
   margin: 0;
   width: ${props => props.width ? props.width : "auto"};
   height: ${props => props.height ? props.height : "200px"};
   background: ${props => props.img ? `url(${props.img})` : "grey"};
   border-radius: 8px;
`

const ImageCard = forwardRef(({ children, img, width, height }, ref) => (
   <Figure
      ref={ref}
      img={img}
      width={width}
      height={height}
   >
      {children}
   </Figure>
))

ImageCard.displayName = "ImageCard"

export default ImageCard