// Packages
import styled, { keyframes } from "styled-components"
import Image from "next/image"

// Styled Components
const rotate = keyframes`
   0% {
      opacity: 0;
      transform: translateX(100%);
   }
   100% {
      opacity: 1;
      transform: translateX(40%);
   }
`

const Container = styled.div`
   grid-area: "hero";
   align-self: flex;
   justify-self: self-start;
   align-content: center;
   grid-column: span 2;
   z-index: 0;
   
   & img {
      object-fit: cover;
      transform: translateX(40%);
      pointer-events: none;
      animation: ${rotate} 1.5s ;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
   }
`


function Hero() {
   return (
      <Container>
         <Image
            layout="fill"
            src="/img/headshot.png"
            alt="Hero, with Takuya Toyokawa"
            quality={50}
         />
      </Container >
   )
}

export default Hero